import React, { Component } from "react";

export class Ngologin extends Component {
  render() {
    return (
    //   <div className="mt-5 d-flex justify-content-left my-10">
      <div className="container my-3 ">
           <h3>Ngo registration form</h3>
           <form>
        <form action="action_page.js" method="post"/>
     <div className="imgcontainer">
         <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
     </div>

     <div className="container">
         <label htmlFor="uname"><b>Username</b></label>
         <input type="text" placeholder="Enter Username" name="uname" required/>

         <label htmlFor="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" required/>

         <button type="submit">Login</button>
         <label>
         <input type="checkbox" checked="checked" name="remember"/> Remember me
         </label>
     </div>

     <div className="container" style="background-color:#f1f1f1">
         <button type="button" className="cancelbtn">Cancel</button>
         <span className="psw">Forgot <a href="#">password?</a></span>
     </div>
     </form>
      </div>
    );
  }
}

// import React ,{Component} from 'react';

// export class Ngologin extends Component{
//     render(){
//         return(
// <div className="container my-3 ">
//     <h3>Login Page</h3>
//     <form action="action_page.php" method="post"/>
//     <div class="imgcontainer">
//         <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
//     </div>

//     <div class="container">
//         <label for="uname"><b>Username</b></label>
//         <input type="text" placeholder="Enter Username" name="uname" required/>

//         <label for="psw"><b>Password</b></label>
//         <input type="password" placeholder="Enter Password" name="psw" required/>

//         <button type="submit">Login</button>
//         <label>
//         <input type="checkbox" checked="checked" name="remember"/> Remember me
//         </label>
//     </div>

//     <div class="container" style="background-color:#f1f1f1">
//         <button type="button" class="cancelbtn">Cancel</button>
//         <span class="psw">Forgot <a href="#">password?</a></span>
//     </div>
//   </form>
// </div>

// );
// }
// }