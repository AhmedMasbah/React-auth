import axios from "axios";
import React, { SyntheticEvent, useState } from "react";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post("forget", { email });
      setNotify({
        show: true,
        error: false,
        message: "Email was sent",
      });
    } catch (e) {
      setNotify({
        show: true,
        error: true,
        message: "Failed to send email. Please check your email and try again.",
      });
    }
  };

  let info;
  if (notify.show) {
    info = (
      <div className={notify.error ? "alert alert-danger" : "alert alert-success"} role="alert">
        {notify.message}
      </div>
    );
  }

  return (
    <form className="form-signin w-100 m-auto" onSubmit={submit}>
      <h1 className="h3 mb-3 text-center">Reset Your Password</h1>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="submit">
        Send Email
      </button>

      {info}

    </form>
  );
};

export default Forget;
