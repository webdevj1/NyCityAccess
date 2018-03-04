import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCourts from './AllCourts';
import Home from './Home';

const navStyle = {
      backgroundColor: "#77808e",
      color:'white'
    }


const App = () =>   
(
    
  // <Router>
    <div className="main">
      
      <nav style={navStyle}>
      
          <Link to="/">Home</Link> {' | '}
          <Link to="/allcourts">All Courts</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/allcourts" component={AllCourts} />
   
    </div>
  // </Router>
);


export default App;