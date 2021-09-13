import React, { Component } from "react";

export class Ngoform extends Component {
  render() {
    return (
    //   <div className="mt-5 d-flex justify-content-left my-10">
      <div className="container my-3 ">
        
           <h3>Ngo registration form</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              aria-describedby="emailHelp"
            />
            <div id="nameHelp" className="form-text">
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Registration No" className="form-label">
              Registration No
            </label>
            <input
              type="number"
              className="form-control"
              id="registration No"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Working fields
            </label>
            <input
              type="text"
              className="form-control"
              id="Working fields"
              cols="30"
              rows="10"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button> 
         </form>
         {/* <center> */}
                {/* <h3>Ngo details</h3>
                Name:<input type="text"  placeholder= "enter the name"/><br></br>
                Registration no:<input type="number"  placeholder= "enter the reg no"/><br></br>
                <br></br>
                Working fields:<textarea type="My text"  cols="30" rows="10"></textarea><br></br>
                <input type="submit" className="btn-button-primary" value="Submit"></input> */}
                {/* </center> */}
      </div>
    );
  }
}
