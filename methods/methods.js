import ApiKey from "./ApiKey"

const userImg = (img, model = 'users') => {
    let value = ''
    if (model === 'users') {
        value = '/profile.jpg'
    } else if (model === 'products') {
        value = 'noimage1.jpg'
    } else {
        value = '/profile.jpg'
    }

    if (img) value = ApiKey.api + `images/${model}/` + img
    return value
}


const getPrams = (p) => {
    const params = new URLSearchParams(window.location.search)
    return params.get(p)
}


const isNumber = (e) => {
    let key = e.target;
    let maxlength = key.maxLength ? key.maxLength : 1;

    let max = Number(key.max ? key.max : key.value);
    if (Number(key.value) > max) key.value = max;

    // let min = key.min;
    // if (min && Number(key.value)<Number(min)) key.value = min;

    if (key.value.length > maxlength) key.value = key.value.slice(0, maxlength);
    key.value = key.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    return key.value
}

const isRatio = (e) => {
    let key = e.target;
    let maxlength = key.maxLength ? key.maxLength : 1;

    let max = Number(key.max ? key.max : key.value);
    if (Number(key.value) > max) key.value = max;

    // let min = key.min;
    // if (min && Number(key.value)<Number(min)) key.value = min;

    if (key.value.length > maxlength) key.value = key.value.slice(0, maxlength);
    key.value = key.value.replace(/[^0-9.>]/g, '').replace(/(\..*?)\..*/g, '$1');

    return key.value
}

const find = (arr, value, key = 'key') => {
    let ext = arr.find(itm => itm[key] == value)
    return ext
}


/* ###################### Form Methods #########################  */

// get Single field error
const getError = (key, fvalue, formValidation) => {
    let ext = find(formValidation, key)
    let res = matchError(ext, fvalue)
    return res
}

const emailRequiredFor = (role) => {
    let value = false
    if (role == 'Clinic Admin' || role == 'Counsellor' || role == 'Owner' || role == 'admin') value = true
    return value
}


const validateUsername = (val) => {
    return /^(?=[a-zA-Z0-9._-]{8,20}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/.test(val);
}

const dialMatch = (val) => {
    let value = false
    value = val.match(/^(?=.*[0-9])(?=.*[+])[0-9+]{2,5}$/)
    return value
}
const emailvalidation = (val) => {
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
        return true
    }
    return false


}
// match errors for fields
const matchError = (ext, fValue) => {
    let kValue = fValue[ext.key]
    let value = { minLength: false, maxLength: false, confirmMatch: false }
    if (ext.minLength && kValue) {
        if (kValue.length < ext.minLength) value.minLength = true
    }
    if (ext.maxLength && kValue) {
        if (kValue.length > ext.maxLength) value.maxLength = true
    }
    if (ext.dialCode && kValue) {
        if (dialMatch(kValue)) {
            kValue.indexOf("+");
            if (kValue.indexOf("+") != 0) {
                value.dialCode = true
            }

        } else {
            value.dialCode = true
        }
    }

    if (ext.username && kValue) {
        if (!validateUsername(kValue)) value.username = true
    }

    if (ext.confirmMatch && kValue) {
        if (fValue[ext.confirmMatch[0]] != fValue[ext.confirmMatch[1]]) value.confirmMatch = true
    }

    let invalid = false
    let vArr = Object.keys(value)
    vArr.map(itm => {
        if (value[itm]) invalid = true
    })

    let res = { invalid: invalid, err: value }
    return res
}

// get form error (All Fields)
const getFormError = (formValidation, fvalue) => {
    let invalid = false
    formValidation.map(ext => {
        if (matchError(ext, fvalue).invalid) {
            invalid = true
        }
    })

    return invalid
}

/* ###################### Form Methods end #########################  */

const noImg = (img) => {
    let value = 'noimage1.jpg'
    if (img) value = ApiKey.api + 'images/blogs/' + img
    return value
}


const methodModel = { userImg, isNumber, isRatio, find, getError, getFormError, getPrams, emailRequiredFor, emailvalidation, noImg }
export default methodModel