import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  let Navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;

    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        Navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <br />
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <br />
        <input
          value={input.email}
          onChange={handleInput}
          type={"text"}
          name="email"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          value={input.password}
          onChange={handleInput}
          type={"password"}
          name="password"
        />
        <br />
        <br />

        <input type={"submit"} />
      </form>
    </>
  );
};

export default Login;
