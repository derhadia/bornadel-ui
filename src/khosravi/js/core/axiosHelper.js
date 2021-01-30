
import axios from 'axios';
import toastr from 'toastr';
import url from '../constants/urlSetting';

let token = "", header = {'Content-type': 'application/json-patch+json'};

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
        ApiRequestAuthorized(customUrl, 'Put', data, null, responseType, then);
    }
    else {
        ApiRequestUnauthorized(customUrl, 'Put', data, null, responseType, then)
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
    axios(options).then(response => responseFunction(response, then)).catch((error) => errorUnauthorized(error, then));
};
/*------errorUnauthorized------*/
function errorUnauthorized(error, then) {
    if (error.response) {
        if (error.response.status === 401) {
            toastr.error("عدم دسترسی به سرور");
            localStorage.removeItem("authentication");
            window.location.href = '/login'
        } else if (error.response.status === 400) {
            toastr.error((error.response.data && error.response.data.message) ? error.response.data.message : "داده ارسالی صحیح نمی باشد");
            then({ suucess: false });
        } else {
            toastr.error("خطای برقراری ارتباط با سرور");
            then({ suucess: false });
        }
    }
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
    axios(options).then(response => responseFunction(response, then)).catch((error) => errorAuthorized(error, then));
};

function responseFunction(response, then) {
        if (response.status === 200) {
            var res = response.data;
            res.success = true;
            then(response.data);
        }
};

/*------errorAuthorized------*/
function errorAuthorized(error, then) {
    if (error.response) {
        if (error.response.status === 401) {
            toastr.error("عدم دسترسی به سرور");
            localStorage.removeItem("authentication");
            window.location.href = '/login'
        } else if (error.response.status === 400) {
            toastr.error((error.response.data && error.response.data.message) ? error.response.data.message : "داده ارسالی صحیح نمی باشد");
            then({ success: false });
        } else {
            toastr.error("خطای برقراری ارتباط با سرور");
            if (then) {
                then({ success: false });
            }
        }
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














