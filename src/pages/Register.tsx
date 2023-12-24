import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("register", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    });
    setRedirect(true);
  };

  if (redirect) {
    // Use Navigate instead of Redirect
    return <Navigate to="/login" />;
  }

  return (
    <form className="form-signin w-100 m-auto" onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="firstNameInput"
          placeholder=""
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="firstNameInput">First Name</label>
      </div>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="lastNameInput"
          placeholder=""
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="lastNameInput">Last Name</label>
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="emailInput">Email address</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="passwordInput">Password</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="passwordConfirmInput"
          placeholder="Password"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <label htmlFor="passwordConfirmInput">Password Confirm</label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
