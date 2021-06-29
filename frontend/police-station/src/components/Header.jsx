import React from "react";
import {NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
function Header() {
  return (
    <React.Fragment>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="row" style={{color:"white" }}>
          <div className="col-sm-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7ImMnBscoyxWAE_MveuDdPBNq-QJjUmCwH3G7iAWL-FyuMr9eIHpv8H93dWV2bz4Uso&usqp=CAU"
              height="80px"
              width="130px"
              style={{ borderRadius: "50%" }}
              alt="Police logo"
            ></img>
          </div>
          <div className="col-sm-2" >
              <h3>POLICE STATION</h3>  
          </div>
          <div className="col-sm-2">
            <NavLink to='/' style={{color:'white'}}>Home</NavLink>
          </div> 
          <div className="col-sm-2">
              <NavLink to="/about"  style={{color:'white'}}>About Us</NavLink>
          </div>
          <div className="col-sm-2">
            <NavLink to='/lost'  style={{color:'white'}}>Lost Complain</NavLink>           
          </div>
          <div className='col-sm-2'>
            <NavLink to='/found' style={{color:'white'}}>Found a commodity</NavLink>
          </div>
        </div>
      </nav>
      <marquee style={{color:"red"}}> For Emergency Dial 100</marquee>
    </React.Fragment>
  );
}
export default Header;
