import React from 'react';
import logo from './logo.svg';
  
  class AllCourts extends React.Component {
    constructor() {
      super();
  
      this.displayBoroughs = ['','Brooklyn', "Bronx", "Manhattan","Queens", "Staten Island"]
    
      this.state = {
        boroughs:"lol"
      };
    }
  
    handleBoroughSelect = e => {
      this.setState({
        boroughs: e.target.value
      })
    };
  
    render() {
      const {boroughs} = this.state;
      console.log(boroughs)
  
      return (
        <div> 
            Choose your Borough: {" "}
            <select 
            
            value={boroughs}
            onChange={this.handleBoroughSelect}
            >
            {this.displayBoroughs.map((item,index) =>
              <option key={index} value={item}> {item} </option>)}


        </select>
        </div>
      );
    }
  }
  


export default  AllCourts ;