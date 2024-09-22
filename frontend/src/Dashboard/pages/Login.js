import React from "react";

function Login() {
  return (
    <div className="Login">
      <h1 className="col-rare">LOGIN</h1>
      <form action="/api/login" className="LoginForm">
        <input type="email" placeholder="email" required={true} />
        <input type="password" placeholder="password" required={true} />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
