import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setLogin }: { setLogin: Function }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("login", {
      email,
      password,
    });

    setRedirect(true);
    setLogin();
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form className="form-signin w-100 m-auto" onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="mb-3">
        <Link to="/forget">Forgot Password?</Link>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
