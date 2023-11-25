const monthArray = [
    { value: 'Jan', id: 0 },
    { value: 'Feb', id: 1 },
    { value: 'Mar', id: 2 },
    { value: 'Apr', id: 3 },
    { value: 'May', id: 4 },
    { value: 'Jun', id: 5 },
    { value: 'Jul', id: 6 },
    { value: 'Aug', id: 7 },
    { value: 'Sep', id: 8 },
    { value: 'Oct', id: 9 },
    { value: 'Nov', id: 10 },
    { value: 'Dec', id: 11 }
]

const monthfind = (id) => {
    let value = 0
    let ext = monthArray.find(itm => itm.id === id)
    if (ext) value = ext.value
    return value
}

const date = (p) => {
    let d = new Date(p)
    return `${d.getDate()} ${monthfind(d.getMonth())} ${d.getFullYear()}`
}

const time = (p) => {
    if (!p) return ''
    let v = p.split('T')
    if (v.length === 2) {
        return new Date(p).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    } else {
        return new Date(`2020-07-19 ${p}`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
}

const datetime = (p) => {
    return `${date(p)}, ${time(p)}`
}

const datepipeModel = {
    date,
    time,
    datetime
}

export default datepipeModel;
