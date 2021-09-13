import React , { useState } from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch } from 'react-router-dom';
import GoalList from './goals/components/GoalList/GoalList';
import NewGoal from './goals/components/NewGoal/NewGoal';
import Users from './users/pages/Users';
import Ngo from './ngo/pages/Ngo';
import MainNavigation from './shared/components/Navigation/MainNavigation';
// import Report_homeless from './Report_homeless/Report';
import './App.css';

const App = () => {
  const [goal , setCourseGoal] = useState([
    {id: 'cg1', text: 'Help the Homeless'},
    {id: 'cg2', text: 'Provide food and shelter'},
  ])
  // const goal = ;
   const addNewGoalHandler = newGoal =>{ 
    // setCourseGoal(goal.concat(newGoal))
    setCourseGoal(goal => goal.concat(newGoal))
   }
  return (
    <Router>
      <MainNavigation/>
        <main>
          <Switch>
            <Route path="/" exact>
              <div className="course-goals">
                <h2>Aim of the Project</h2>
                <NewGoal onAddGoal={addNewGoalHandler} />
                <GoalList goals={goal} />
              </div>
            </Route>
            <Route path="/users" exact>
            <h1>Users</h1>
              <Users/>       
            </Route>
            <Route path="/Report_homeless" exact>   
              <h1>Report to your nearest Ngo</h1>
              {/* <link to ="./Report_homeless">Get link</link> */}
              <a href=" "></a>
              <p>Click the link to inform Ngo </p>
              <ul>
                <li> 
                   <a href="Report.js">Report us</a> 
                  {/* <script src="Report.js"></script> */}
                </li>
              </ul> 
            </Route>
            <Route path="/ngo" exact>
              <h1>Connect with NGO</h1>
              <Ngo/>
            </Route>
            <Route path="/crime" exact>
              <h1>Crime</h1>
            </Route>
            <Route path="/ways_to_help" exact>
              <h1>Choose how do you want to help</h1> 
              <ol type="1">
                <li>Donations</li>
                <ul>
                  <li>Fill up the below form</li>
                  <a href="Donations.js">Click here</a>
                </ul>
                <li>Shelter</li>
                <ul>
                  <li>Fill up the below form</li>
                  <a href="Shelter.js">Click here</a>
                </ul>
                
                
              </ol>
            </Route>
          <Redirect to="/" />
          </Switch>
        </main>
    </Router>
    
  );
};

export default App;
