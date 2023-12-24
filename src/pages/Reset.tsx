import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from 'react-router-dom';

const Reset: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post("reset", {
        token,
        password,
        password_confirm: passwordConfirm,
      });
      setRedirect(true);
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <form className="form-signin w-100 m-auto" onSubmit={submit}>
      <h1 className="h3 mb-3 text-center">Reset Your Password</h1>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingInput">Password</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          required
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <label htmlFor="floatingInput">Confirm Password</label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="submit">
        Reset Password
      </button>
    </form>
  );
};

export default Reset;
