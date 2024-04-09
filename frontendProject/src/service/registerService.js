import { sendData } from "../util/requests.js";

async function register(userInfo) {
  const resp = await sendData("http://localhost:5000/auth/register", userInfo);
  console.log(userInfo);
  if (resp.status === 201) {
    return { registered: true };
  } else {
    return { registered: false };
  }
}

export { register };
