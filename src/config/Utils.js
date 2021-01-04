import toastr from 'toastr';

let headers = {
    "Content-Type": "application/json-patch+json"
};
async function fetchPost(url, body = {}, isAuth) {
    if (isAuth) {
        headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status, success: true })

            })
            .catch(() => {
                console.log("error shod");
                toastr.error("خطای ارتباط با سرور")
                res({ responseJSON: [], status: 500, success: false })
            })
    })
}
export { fetchPost }

async function fetchPostSendFile(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: body
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status, success: true })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500, success: false })
            })
    })
}
export { fetchPostSendFile }

async function fetchPutSendFile(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: body
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status, success: true })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500, success: false })
            })
    })
}
export { fetchPutSendFile }

async function fetchPut(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status, success: true })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500, success: false })
            })
    })
}
export { fetchPut }

async function fetchDelete(url) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status, success: true })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500, success: false })
            })
    })
}
export { fetchDelete }

async function fetchGet(url) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status, success: true })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500, success: false })
            })
    })
}
export { fetchGet }

