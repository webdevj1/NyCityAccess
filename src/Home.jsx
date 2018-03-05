import React from 'react';
import logo from './logo.svg';
import {Link, Switch, Route} from 'react-router-dom';
import  AllCourts  from './AllCourts';
import Button from './Button';

const Home = () =>{
    return (
        <div className="home"> 
 
          <h1 className="App-title">NY CITY HOOPS</h1>
      
          <Button />
        
        <Switch>
            <Route exact path="/allcourts" component={AllCourts} />
        </Switch>
        
        </div>
    )
}

export default Home;