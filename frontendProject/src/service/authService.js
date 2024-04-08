import { sendData } from '../util/requests.js';

async function authenticate(credentials) {
    const resp = await sendData('http://localhost:5000/auth/login', credentials);

    if (resp.status === 200) {
        const { token } = await resp.json();
        sessionStorage.setItem('token', token);

        return { authenticated: true };
    } else {
        return { authenticated: false };
    }
}

export { authenticate };
