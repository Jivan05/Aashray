import React ,{Component} from 'react';
// import Ngologin from '../components/Ngologin';
export class NgoMain extends Component{
    render(){
        return(
            <div className="container my-3 ">
                 {/* <h1>Welcome to the Ngo page</h1> */}
                 <label htmlFor="Ngos">Choose a Ngo nearer to you:</label>

                <select name="Ngo" id="cars">
                <option value="Ngo2">Ngo1</option>
                <option value="Ngo3">Ngo2</option>
                <option value="Ngo4">Ngo3</option>
                <option value="Ngo5">Ngo4</option>
                </select>
                 {/* <h5>You can click the below link to log in</h5>
                <a href="Ngologin.js/">Signup  </a> */}
                <ul>
                <li>You can click the below link to log in</li>
                <ul>
                  <a href="Ngologin.js">Signup</a>
                </ul>
                <li>You can click the below link to get the registration form</li>
                <ul>
                  <a href="Ngoform.js">Click here</a>
                </ul>
                </ul>
                {/* <script type="text/javascript" src="NgoFogin.js">Signup</script> */}
                {/* <h5>You can click the below link to get the registration form</h5>
                <a href="Ngoform.js/">Download form  </a> */}
                {/* <Ngologin/> */}
            </div>
            
        )
    }
}