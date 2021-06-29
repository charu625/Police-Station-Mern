import React, { useState } from 'react';
const Lost = () => {
    const [lost,setLost]=useState({
        name:"",
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

        setLost({...lost, [name]:value});
    }
    const postLost= async (event)=>{
        event.preventDefault();
    const {name,email,phone,price,location,address,description}=lost;
    const res= await fetch('/signup' , {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            body: JSON.stringify({
                name,email,phone,price,location,address,description
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
          <h2 className="form-title">Report a Lost Commodity</h2>
          <form method='POST' className="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={lost.name}
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
                
                value={lost.email}
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
                value={lost.phone}
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
                
                value={lost.price}
                onChange={handleChange}
                placeholder="Enter the price of commodity"
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
                
                value={lost.location}
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
                
                value={lost.address}
                onChange={handleChange}
                placeholder="Enter your Permanent Address"
              ></input>
            </div>

            
            <div className="form-group">
              <label htmlFor="Description of Lost Commodity">
                <i class="zmdi zmdi-collection-text"></i>
              </label>
              <input
                type="text"
                name="description"
                autoComplete="off"
                
                value={lost.description}
                onChange={handleChange}
                placeholder="Enter complete Description of Lost Commodity"
              ></input>
            </div>
            <div className="form-group ">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-register btn btn-info"
                value="register"
                onClick={postLost}
              ></input>
            </div>
          </form>
        </div>
      
        </React.Fragment>
      );
}
 
export default Lost;