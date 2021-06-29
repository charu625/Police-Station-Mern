import React, { useState } from "react";
const Signin = () => {
  const [admin, signAdmin] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    signAdmin({ ...admin, [name]: value });
  };
  const loginAdmin = async (event) => {
    event.preventDefault();
    const { email, password } = admin;
    const res = await fetch("/admin/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      window.alert("Invalid Login");
    } else {
      window.alert("Login Successfull!!");
      console.log("Login Successful!!");
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <form method="POST">
          <h2 className="form-title mt-10">Login</h2>
          <div className="form-group">
            <label htmlFor="email">
              <i class="zmdi zmdi-account"></i>
            </label>
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <i class="zmdi zmdi-lock"></i>
              </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={admin.password}
              onChange={handleChange}
              placeholder="Password"
            ></input>
            <button
              className="btn btn-info btn-block mt-5 "
              value="login"
              onClick={loginAdmin}
              type="submit"
              name="login"
              id="login"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </React.Fragment>
  );
};

export default Signin;
