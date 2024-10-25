export default async function apiRequest(url, method, body = null) {
  try {
    let options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);

    let data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      type: "error",
      message: "oops!! something went wrong, try again later",
    };
  }
}
