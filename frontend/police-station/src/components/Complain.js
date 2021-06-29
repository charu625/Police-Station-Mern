import React, { useState } from 'react';
const Complain = () => {
    const [complain,setComplain]=useState({
        name:"",
        gender:"",
        landmark:"",
        district:"",
        phone:"",
        email:"",
        price:"",
        location:"",
        address:"",
        description:""
    });
    let name,value;
    const handleChange=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setComplain({...complain, [name]:value});
    }
    const postComplain= async (event)=>{
        event.preventDefault();
    const {name,email,gender,landmark,district,phone,price,location,address,description}=complain;
    const res= await fetch('/complain' , {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            body: JSON.stringify({
                name,email,phone,price,location,address,description,gender,landmark,district
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
    }
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
          <h2 className="form-title">Register a Complain</h2>
          <form method='POST' className="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={complain.name}
                onChange={handleChange}
                placeholder="Your Name"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="gender">
                <i class="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                name="gender"
                autoComplete="off"
                value={complain.gender}
                onChange={handleChange}
                placeholder="Enter your Gender"
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
                
                value={complain.email}
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
                value={complain.phone}
                onChange={handleChange}
                placeholder="Your Phone number"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="price">
                <i class="zmdi zmdi-money"></i>
              </label>
              <input
                type="number"
                name="price"
                autoComplete="off"
                
                value={complain.price}
                onChange={handleChange}
                placeholder="Enter the approximate price of commodity"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="location">
                <i class="zmdi zmdi-pin"></i>
              </label>
              <input
                type="text"
                name="location"
                autoComplete="off"
                
                value={complain.location}
                onChange={handleChange}
                placeholder="Enter your Location"
              ></input>
            </div>
            
            <div className="form-group">
              <label htmlFor="Address">
                <i class="zmdi zmdi-home"></i>
              </label>
              <input
                type="text"
                name="address"
                autoComplete="off"
                
                value={complain.address}
                onChange={handleChange}
                placeholder="Enter your Permanent Address"
              ></input>
            </div>

            
            <div className="form-group">
              <label htmlFor="Landmark">
                <i class="zmdi zmdi-pin"></i>
              </label>
              <input
                type="text"
                name="landmark"
                autoComplete="off"
                value={complain.landmark}
                onChange={handleChange}
                placeholder="Enter the Landmark"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="District">
                <i class="zmdi zmdi-pin"></i>
              </label>
              <input
                type="text"
                name="district"
                autoComplete="off"
                value={complain.district}
                onChange={handleChange}
                placeholder="District"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="Enter your Complain">
                <i class="zmdi zmdi-collection-text"></i>
              </label>
              <input
                type="text"
                name="description"
                autoComplete="off"
                
                value={complain.description}
                onChange={handleChange}
                placeholder="Enter complete Description of Lost Commodity"
              ></input>
            </div>

            <div className="form-group ">
              <input
                type="submit"
                name="complainRegister"
                id="complainRegister"
                className="form-register btn btn-info"
                value="complainRegister"
                onClick={postComplain}
              ></input>
            </div>
          </form>
        </div>
      
        </React.Fragment>
      );
}
 
export default Complain;