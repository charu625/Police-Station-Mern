import React, { useState } from "react";
import axios from 'axios';
const Contact = () => {
  const [contact, setMessage] = useState({
    email: "",
    name: "",
    message: "",
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setMessage({ ...contact, [name]: value });
  };
  const handleMessage = async (event) => {
    event.preventDefault();
    const { name, email, message } = contact;
    // const res = await fetch("/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     body: JSON.stringify({
    //       name: name,
    //       email: email,
    //       message: message,
    //     }),
    //   },
    // });
    await axios.post('http://localhost:3003/contact').then(
      res=>{
        setMessage({
          name:name,email:email,message:message
        });
      }
    ).catch(err=>{
      console.log("HELLO");
      console.log(err);
    });
    // const data = await res.json();

    // if (res.status === 404 || !data) {
    //   window.alert("Something Wrong");
    // } else {
    //   window.alert("Sent message!");
    //   console.log("Sent message!");
    // }
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <h2 className="form-title">Contact-Us</h2>
        <form  className="register-form">
          <div className="form-group">
            <label htmlFor="name">
              <i class="zmdi zmdi-account"></i>
            </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={contact.name}
              onChange={handleChange}
              placeholder="Your Name"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <i class="zmdi zmdi-email"></i>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={contact.email}
              onChange={handleChange}
              placeholder="Your email"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="Enter your Complain">
              <i class="zmdi zmdi-collection-text"></i>
            </label>
            <input
              type="text"
              name="message"
              autoComplete="off"
              value={contact.description}
              onChange={handleChange}
              placeholder="Enter complete Description of Lost Commodity"
            ></input>
          </div>

          <div className="form-group ">
            <input
              type="submit"
              name="message"
              id="complainRegister"
              className="form-register btn btn-info"
              value=" message"
              onClick={handleMessage}
            ></input>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
