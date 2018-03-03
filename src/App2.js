import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Switch, Router, Route} from 'react-router-dom';
import Home from './Home';
import Home2 from './Home2';
import AllCourts from './AllCourts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"> Home</Link>
              
        {/* <Switch> 
          <Route exact path="/" render={Home}/>
        </Switch> */}

        {/* <Router> */}
          <Switch>
 
         <Route exact path="/" render={Home}/>
          <Route path="/allcourts" component={Home2}/>
          </Switch>
  
{/* </Router> */}


  
      </div>
    );
  }
}

export default App;
