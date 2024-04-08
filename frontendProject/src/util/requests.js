export async function getData(url) {
    return await query(url, 'GET');
}

export async function sendData(url, data) {
    return await query(url, 'POST', data);
}

export async function removeData(url, data) {
    return await query(url, 'DELETE', data);
}

export async function updateData(url, data) {
    return await query(url, 'PUT', data);
}

export async function query(url, method, data) {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    };

    const options = { method, headers, body: JSON.stringify(data) };

    return await fetch(url, options);
}
