import { sendData } from "../util/requests.js";

async function authenticate(credentials) {
  const resp = await sendData("http://localhost:5000/auth/login", credentials);

  if (resp.status === 200) {
    const { token } = await resp.json();
    sessionStorage.setItem("token", token);

    return { authenticated: true };
  } else {
    return { authenticated: false };
  }
}

export { authenticate };

async function registerUser(userData) {
  try {
    const response = await sendData(
      "http://localhost:5000/auth/register",
      userData
    );

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: "Registration successful" };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.err };
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: "Internal server error" };
  }
}

export { registerUser };
