import React ,{Component} from 'react';

export class Shelter extends Component{
    render(){
        return(
           
            // <div className="mt-5 d-flex justify-content-left">
        <div className="container my-3 ">
            {/* <h1>You can donate here</h1> */}
            <h2>Objectives:</h2>
            <ul>
                <p>The objectives of the Shelter for Urban Homeless (SUH) component of NULM scheme are </p>
                <li>
                Ensure availability and access of the urban homeless population to permanent shelters 
                including the basic infrastructure facilities like water supply, sanitation, safety and security; 
                </li>
                <li>
                Cater to the needs of especially vulnerable segments of the urban homeless like the dependent 
                hildren, aged, disabled, mentally ill and recovering gravely ill, by creating special sections 
                within homeless shelters and provisioning special service linkages for them
                </li>
                <li>
                Formulate structures and framework of engagement for development, management and 
                monitoring of shelters and ensuring basic services to homeless persons, by state and civil 
                society organisations including homeless collectives
                </li>
            </ul>
            <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your Name
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
              Address of the shelter
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="Registration No" className="form-label">
              Amount of Donation
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Donator`s address
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
                
            </div>
        )
    }
}