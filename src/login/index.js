import React, { Component } from 'react';
import Navigation from "./navigation";
import Login from "./login";
import "../Styles/login.css";

class Main extends Component {
  state = {
    bool: false,
    bool1: false,
    
  };

  changeState = () => {
    this.setState({ bool: !this.state.bool });
  };
  changeState1 = () => {
    this.setState({ bool1: !this.state.bool });
  };
 
  render() {
    return (
      <div className="header-container">
        <div className="div">
          <div  onClick={this.changeState}>Log In</div>
          <span> / </span>
          <div  onClick={this.changeState}>Sign Up</div>
        </div>
         {/* <Navigation hello="hello" bool={this.state.bool} /> */}
         {/* <Login/>  */}
        
       {this.state.bool ? <div className="div">
<form class="ui form segment">
  <p>Tell Us About Yourself</p>
  <div class="two fields">
    <div class="field">
      <label>Name</label>
      <input placeholder="First Name" name="name" type="text"/>
    </div>
    <div class="field">
      <label>Gender</label>
      <select class="ui dropdown" name="gender">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  </div>
  <div class="two fields">
    <div class="field">
      <label>Username</label>
      <input placeholder="Username" name="username" type="text"/>
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" name="password"/>
    </div>
  </div>
  <div class="field">
    <label>Skills</label>
    <select name="skills" multiple="" class="ui dropdown">
      <option value="">Select Skills</option>
      <option value="css">CSS</option>
      <option value="html">HTML</option>
      <option value="javascript">Javascript</option>
      <option value="design">Graphic Design</option>
      <option value="plumbing">Plumbing</option>
      <option value="mech">Mechanical Engineering</option>
      <option value="repair">Kitchen Repair</option>
    </select>
  </div>
  <div class="inline field">
    <div class="ui checkbox">
      <input type="checkbox" name="terms"/>
      <label>I agree to the terms and conditions</label>
    </div>
  </div>
  <div className="submit"  onClick={this.changeState1}>Register
  {this.state.bool1 === false ?
            alert("Welcome"): null}
  </div>
  <div class="ui error message"></div>
</form></div> : <div className="div">
<form class="ui form segment">
  
 
  <div class="two fields">
    <div class="field">
      <label>Username</label>
      <input placeholder="Username" name="username" type="text"/>
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" name="password"/>
    </div>
  </div>
 
  <div class="inline field">
    <div class="ui checkbox">
      <input type="checkbox" name="terms"/>
      <label>I agree to the terms and conditions</label>
    </div>
  </div>
  <div className="submit"  onClick={this.changeState1}>Log In
  {this.state.bool1 === true ?
            alert("Welcome"): null}
  </div>
  <div class="ui error message"></div>
</form></div>
}
      </div>
    );
  }
} 

export default Main;



