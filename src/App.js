import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCourts from './AllCourts';
import Home from './Home';

const navStyle = {
      backgroundColor: "#77808e",
      color:'white',
      marginLeft:"10px"
    }


const App = () =>   
(
  
    <div className="main">
      
      <nav >
          <Link to="/">Home</Link> {' | '}
          <Link className="all" to="/allcourts">All Courts</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/allcourts" component={AllCourts} />
    
    </div>

);


export default App;