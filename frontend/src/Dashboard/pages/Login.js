import React, { useState } from "react";
import { login } from "../../services/auth";
import { useDispatch } from "react-redux";
import { alertIsCalled } from "../../features/counter";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnText, setbtnText] = useState("submit");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setbtnText("loading...");
    const result = await login(email, password);
    if (result.success === false) {
      dispatch(
        alertIsCalled({
          called: true,
          type: result.type ? result.type : "warning",
          message: result.message,
        })
      );
      return setbtnText("try again");
    }
    dispatch(
      alertIsCalled({
        called: true,
        type: "success",
        message: result.message,
      })
    );
    navigate("/dashboard");
    return setbtnText("success");
  };

  return (
    <div className="Login">
      <h1 className="col-rare">LOGIN</h1>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)} // update state on change
        />
        <input
          type="password"
          placeholder="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)} // update state on change
        />
        <button type="submit" className="btn">
          {btnText}
        </button>
      </form>
    </div>
  );
}

export default Login;
