import React from "react";
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import Contact from  './Contact';
import Services from "./Services";
const Card = () => {
  function handleContact(){
    <Contact/>
    console.log("Jello")
  }
  function handleServices(){
    <Services/>
    console.log("Services");
  }
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm box">
            {/* Card-1*/}
            <div className="card text-center border border-info" style={{ width: "17rem" }}>
              <div className="card-body">
                <img
                  src="http://www.mailssoftware.org/img/contact-us.jpg"
                  className="card-img-top rounded-top"
                ></img>
                <h5 className="card-title">Contact Us</h5>
                <div className="card-body">
                  Feel free to contact us and Suggest on the services provided
                  by us.
                  <br />
                  <p style={{ color: "purple" }}>
                    In case of Emergency Dial:100
                  </p>
                  <button className='btn btn-info'><NavLink to='/contact' style={{color:'white'}}>Contact Us</NavLink></button> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm ">
            {/* Card-2*/}

            <div className="card text-center border border-info" style={{ width: "17rem" }}>
              <div className="card-body">
                <img
                  src="https://www.clearias.com/up/IPS-How-to-become-an-Indian-Police-Service-officer.jpg"
                  className="card-img-top"
                ></img><br></br>
                <h5 className="card-title">Services </h5>
                <div className="card-body">
                  <p>
                    We provide all the services so that we can help our people. The motive of our Department is to help people
                    so that they can sleep peacefully.<br></br>
                  </p>
                  <button className='btn btn-info'><NavLink to='/services' style={{color:'white'}}>Services</NavLink></button> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            {/* Card-3*/}

            <div className="card text-center  border border-info" style={{ width: "19rem" }}>
              <div className="card-body">
                <img
                  src="https://www.claimsjournal.com/app/uploads/2012/03/bigstock_Fraud_Crime_Crossword_12768065.jpg"
                  className="card-img-top"
                ></img>
                <h5 className="card-title">Crime and Fraud Information</h5>
                <div className="card-body">
                  Details of all the types of crimes and measures to be taken by all of us.
                  
                  <br></br><br></br>
                  <button className='btn btn-info'><NavLink to='/readmore' style={{color:'white'}}>Read-More</NavLink></button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4'>
          <Link to='/complain'><button className='btn btn-danger btn-block'>REGISTER A COMPLAIN</button></Link>
          </div>
          <div className='col-sm-4'></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
