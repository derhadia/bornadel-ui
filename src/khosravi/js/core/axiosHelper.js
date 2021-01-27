
import axios from 'axios';
import toastr from 'toastr';
import url from '../constants/urlSetting';

let token = "", header = {};

/*<-----------AddHeder------->*/
export function AddHeader(key, value) {
    header[key] = value;
};
/*<-----------POST------->*/
export function Post(customUrl, data, then, isAuth = true, responseType = 'json') {
    if (isAuth) {
        ApiRequestAuthorized(customUrl, 'Post', data, null, responseType, then);
    }
    else {
        ApiRequestUnauthorized(customUrl, 'Post', data, null, responseType, then)
    }
};
/*<-----------GET------->*/
export function Get(customUrl, params, then, isAuth = true, responseType = 'json') {

    if (isAuth) { 
        ApiRequestAuthorized(customUrl, 'GET', null, params, responseType, then);
    }
    else {
        ApiRequestUnauthorized(customUrl, 'GET', null, params, responseType, then)
    }
};
/*<-----------DELETE------->*/
export function Delete(customUrl, params, then, isAuth = true, responseType = 'json') {

    if (isAuth) {
        ApiRequestAuthorized(customUrl, 'Delete', null, params, responseType, then);

    }
    else {
        ApiRequestUnauthorized(customUrl, 'Delete', null, params, responseType, then)
    }
};
/*<-----------Put------->*/
export function Put(customUrl, data, then, isAuth = true, responseType = 'json') {

    if (isAuth) {
        ApiRequestAuthorized(customUrl, 'PUT', null, data, responseType, then);

    }
    else {
        ApiRequestUnauthorized(customUrl, 'PUT', null, data, responseType, then)
    }
};


/*------Unauthorized Request------*/
function ApiRequestUnauthorized(customUrl, method, data, params, responseType, then) {
    var options = {
        method: method,
        url: url.baseUrl + customUrl,
        responseType: responseType,
        data: data,
        params: params
    };
    axios(options).then(responseFunction).then(then).catch(errorUnauthorized);
};
/*------errorUnauthorized------*/
function errorUnauthorized(error) {
    toastr.error("خطا در برقراری ارتباط با سرور");
};


/*------Authorized Request------*/
function ApiRequestAuthorized(customUrl, method, data, params, responseType, then) {
    if ((!token || token === '')) {
        window.location.href = '/login'
    }
    var options = {
        method: method,
        url: url.baseUrl + customUrl,
        headers: header,
        responseType: responseType,
        data: data,
        params: params
    };
    axios(options).then(responseFunction).then(then).catch(errorAuthorized);
};

function responseFunction(response) {
    return new Promise((resolve, reject) => {
        if (response.status === 200) {
            var res = response.data;
            res.success = true;
            resolve(response.data);
        }
    })
};

/*------errorAuthorized------*/
function errorAuthorized(error) {
    if (error.response && error.response.status === 401) {
        toastr.error("عدم دسترسی به سرور");
        localStorage.removeItem("token");
        window.location.href = '/login'
    }

};

/*<-----------SetToken------->*/
export function SetToken(tokenParam) {
    return new Promise((resolve, reject) => {
        if ((!tokenParam || tokenParam === '')) {
            window.location.href = '/login'
        }
        token = tokenParam;
        AddHeader('Authorization', "Bearer " + tokenParam);
        resolve(true);
    });
}














