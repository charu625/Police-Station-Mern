import React,{useReducer, useState} from "react";
import { NavLink , useHistory} from "react-router-dom";
import Signin from "./Signin";
const Signup = () => {
    const history= useHistory();
    const [admin, setAdmin]= useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    });
let name,value;
const handleChange= (event)=>{
    name=event.target.name;// name can be any property like name or email or password
    value=event.target.value;

    setAdmin({...admin, [name]:value});// Dynamic Data storing
}

const postData= async  (event)=>{
    event.preventDefault();
    const {name,email,phone,password,cpassword}=admin;
    const res= await fetch('/signup' , {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            body: JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                password:password,
                cpassword:cpassword
            })
        }
    });
    
    const data= await res.json();

    if(res.status===404 || !data){
        window.alert('Invalid Registration');

    }
    else{
        window.alert('Registration Successfull!!');
        console.log('Registration Successful!!');
        history.push('/signin');
    }
}
  return (
    <React.Fragment>
      
        <div className="container mt-5 ">
          <h2 className="form-title">Signup</h2>
          <form method='POST' className="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={admin.name}
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
                
                value={admin.email}
                onChange={handleChange}
                placeholder="Your email"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <i class="zmdi zmdi-phone-in-talk"></i>
              </label>
              <input
                type="phone"
                name="phone"
                autoComplete="off"
                value={admin.phone}
                onChange={handleChange}
                placeholder="Your Phone number"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                
                value={admin.password}
                onChange={handleChange}
                placeholder="Your Password"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="cpassword">
                <i class="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="cpassword"
                autoComplete="off"
                
                value={admin.cpassword}
                onChange={handleChange}
                placeholder="Confirm your Password"
              ></input>
            </div>

            <div className="form-group ">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-register btn btn-info"
                value="register"
                onClick={postData}
              ></input>
            </div>

             <div>
              <NavLink to="/signin">Already an Existing User</NavLink>
            </div>
          </form>
        </div>
      
    </React.Fragment>
  );
};

export default Signup;
