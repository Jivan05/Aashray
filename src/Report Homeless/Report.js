import React ,{Component} from 'react';

export class Report extends Component{
    render(){
        return(
            // <div className="mt-5 d-flex justify-content-left">
            <div className="container my-3 ">
              <h1>Reporting page</h1>
                <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Details
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
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Evidence(photo(if any))
            </label>
            <input
              type="image"
              className="form-control"
              id="Evidence"
            //   cols="30"
            //   rows="10"
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
                {/* <h3>Welcome to the page</h3> */}
                {/* <center>
                <h3>Reporting will be anonymous</h3>
                Name:<input type="text"  placeholder= "enter your name"/><br></br>
                Location:<input type="text" placeholder="enter the location" /><br></br>
                Evidence(photo(if any)):<input type="image"  /><br></br>
                <input type="submit" value="Submit"/>
                </center> */}
            </div>
        )
    }
}