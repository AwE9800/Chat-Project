import { sendData } from "../util/requests.js";

async function register(userInfo) {
  const resp = await sendData("http://localhost:5000/auth/register", userInfo);

  if (resp.status === 200) {
    const { token } = await resp.json();
    sessionStorage.setItem("token", token);

    return { registered: true };
  } else {
    return { registered: false };
  }
}

export { register };
