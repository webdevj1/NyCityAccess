import React from 'react';
import logo from './logo.svg';
import parks from './parksApi'
class AllCourts extends React.Component {
  constructor() {
    super();
    this.displayBoroughs = ['', 'Brooklyn', "Bronx", "Manhattan", "Queens", "Staten Island"]
    this.state = {
      boroughs: "",
      tempArr: ['']
    };
  }

  handleBoroughSelect = e => {
    const tg = e.target.value 
    let stuff 
    if (tg==='Queens'){
      stuff = parks.queensParks()
    }
    if (tg==='Brooklyn'){
      stuff = parks.brooklynParks()
    }
    if (tg==='Bronx'){
      stuff = parks.bronxParks()
    }
    if (tg==='Manhattan'){
      stuff = parks.manhattanParks()
    }
    if (tg==='Staten Island'){
      stuff = parks.statenIslandParks()
    }
    this.setState({
      boroughs: e.target.value,
      tempArr : [...stuff]
    })
  };

  render() {
    const { boroughs, tempArr } = this.state;
    console.log(boroughs)
    return (
      <div>
        Choose your Borough: {" "}
        <select
          value={boroughs}
          onChange={this.handleBoroughSelect}
        >
          {this.displayBoroughs.map((item, index) =>
            <option key={index} value={item}> {item} </option>)}
        </select>

        Return for hoops
          <ul>
          {tempArr.map(park => (
            <div>
              <li>
                <div>
                  {console.log(park)}
                  {park.Name}<br/>
                  {park.Location}<br/>
                  {park.Num_of_Courts}<br/>
                  done
                </div>
                <br/>
                <br/>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}



export default AllCourts;