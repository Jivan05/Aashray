import React ,{Component} from 'react';

export class Donations extends Component{
    render(){
        return(
            // <div className="mt-5 d-flex justify-content-left">
        <div className="container my-3 ">
            <h1>You can donate here</h1>
            <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Donator`s Name
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
              Donation Time
            </label>
            <input
              type="time"
              className="form-control"
              id="time"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Registration No" className="form-label">
              What do you want to Donate(e.g.:Money/Food/Items)
            </label>
            <input
              type="text"
              className="form-control"
              id="Donate"
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="Registration No" className="form-label">
              Amount of Donation
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Donator`s Address
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
                {/* <h3>Welcome to the page</h3> */}
                {/* <center> */}
                {/* <h3>If you want, then you can donate here</h3>
                Name:<input type="text"  placeholder= "enter your name"/><br></br>
                Donation time:<input type="time"  /><br></br>
                Address:<input type="My text"  placeholder="enter your address"/><br></br>
                <input type="submit" value="Submit"/> */}
                {/* </center> */}
            </div>
        )
    }
}