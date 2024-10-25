import apiRequest from "../utils/fetchApi";

// import apiRequest from "../utils/fetchApi";
const protocol = window.location.protocol; // e.g., 'http:' or 'https:'
const host = window.location.hostname; // e.g., 'localhost' or 'example.com'
const port = 80; // e.g., '3000', '80', or '' (empty for default ports)
const baseURL = `${protocol}//${host}:${port}`;

export async function login(email, password) {
  try {
    let headersList = {
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      email: email,
      password: password,
    });
    let response = await fetch(baseURL + "/api/login", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
      mode: "cors",
      credentials: "include",
    });
    response = await response.json();
    return response;
  } catch (error) {
    return {
      success: false,
      type: "error",
      message: "oops!! something went wrong, try again later",
    };
  }
}
export async function logout() {
  try {
    let response = await fetch(baseURL + "/api/logout", {
      method: "POST",
      credentials: "include",
    });

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      type: "error",
      message: "Oops!! Something went wrong, try again later",
    };
  }
}
export async function isLoggedIn() {
  const response = await apiRequest(baseURL + "/api/login");
  return response.success;
}
