import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import About from './components/About';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Lost from "./components/Lost";
import Found from "./components/Found";
import Complain from "./components/Complain";
import Services from "./components/Services";
import Readmore from "./components/Readmore";
import Contact from "./components/Contact";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path='/' component={Card} exact/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}></Route>
        <Route path='/readmore' component={Readmore}></Route>
        <Route path='/contact' component={Contact}/>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path='/lost' component={Lost}></Route>
        <Route path='/found' component={Found}></Route>
        <Route path='/complain' component={Complain}></Route>
      </Switch>
      <Footer/>
    </React.Fragment>

  );
}
export default App;
