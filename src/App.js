import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCourts from './AllCourts';
import Home from './Home';

const App = () => (
  <Router>
    <div>
 
          <Link to="/">Home</Link> { " | " }

          <Link to="/allcourts">All Courts</Link>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/allcourts" component={AllCourts} />
   
    </div>
  </Router>
);


export default App;