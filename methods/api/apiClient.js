/*
 * @file: index.js
 * @description: It Contain rest functions for api call .
 * @author: Poonam
 */

import axios from 'axios';
import querystring from 'querystring';
import { setAuthorizationToken } from '../auth';
import ApiKey from '../ApiKey';


var config = {
    headers: { 'Content-Type': 'application/json' },
};
var configblob = {
    headers: { 'Content-Type': 'application/json' },
    responseType:'blob'
};


var baseUrl = ApiKey.api


const handleError = (err, hideError) => {
    let message = ''
    if (err) {
        if (err && err.error && err.error.code == 401) {
            localStorage.clear()
            window.location.assign("/");
        }
        message = err && err.error && err.error.message
        if (!message) message = err.message
        if (!message) message = 'Server Error'
    }

}

class ApiClient {
    static post(url1, params, base = '') {
        let url = baseUrl + url1
        if (base) url = base + url1

        setAuthorizationToken(axios);
        return new Promise(function (fulfill, reject) {
            axios
                .post(url, JSON.stringify(params), config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {

                    if (error && error.response) {
                        let eres = error.response;
                        fulfill(eres.data);
                    } else {
                        reject(error);
                    }
                });
        });
    }

    static put(url1, params, base = '') {
        let url = baseUrl + url1
        if (base) url = base + url1
        setAuthorizationToken(axios);
        return new Promise(function (fulfill, reject) {
            axios
                .put(url, JSON.stringify(params), config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {

                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data)
                        fulfill(eres.data);
                    } else {
                        reject(error);
                    }
                });
        });
    }

    static get(url1, params = {}, base = '', hidError = '',) {

        let url = baseUrl + url1
        if (base) url = base + url1

        let query = querystring.stringify(params);
        url = query ? `${url}?${query}` : url;
        setAuthorizationToken(axios);
        return new Promise(function (fulfill, reject) {
            axios
                .get(url, config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {

                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, hidError)
                        fulfill(eres.data);
                    } else {
                        reject(error);
                    }
                });
        });
    }

    static getblob(url1, params = {}, base = '', hidError = '',) {

        let url = baseUrl + url1
        if (base) url = base + url1

        let query = querystring.stringify(params);
        url = query ? `${url}?${query}` : url;
        setAuthorizationToken(axios);
        return new Promise(function (fulfill, reject) {
            axios
                .get(url, configblob)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {

                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, hidError)
                        fulfill(eres.data);
                    } else {
                        reject(error);
                    }
                });
        });
    }

    static delete(url1, params = {}, base = '') {
        let url = baseUrl + url1
        if (base) url = base + url1

        let query = querystring.stringify(params);
        url = query ? `${url}?${query}` : url;
        setAuthorizationToken(axios);
        return new Promise(function (fulfill, reject) {
            axios
                .delete(url, config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {

                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data)
                        fulfill(eres.data);
                    } else {
                        reject(error);
                    }
                });
        });
    }

    static allApi(url, params, method = 'get') {
        if (method == 'get') {
            return this.get(url, params)
        } else if (method == 'put') {
            return this.put(url, params)
        } if (method == 'post') {
            return this.post(url, params)
        }
    }

    /*************** Form-Data Method ***********/
    static postFormData(url, params) {
        url = baseUrl + url
        setAuthorizationToken(axios);
        return new Promise(function (fulfill, reject) {
            var body = new FormData();
            let oArr = Object.keys(params)
            oArr.map(itm => {
                body.append(itm, params[itm]);
            })

            axios
                .post(url, body, config)

                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {

                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data)
                        fulfill(eres.data);
                    } else {
                        reject(error);
                    }
                });
        });
    }

}

export default ApiClient;
