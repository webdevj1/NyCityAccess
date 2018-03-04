import React from 'react';
import logo from './logo.svg';
import parks from './parksApi'
let key = 'AIzaSyBx5vvdM7wHlrYSra7jZA2suUNbvl40dkY'
let pg = 'https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=18&size=400x400&key=AIzaSyAufnSVSOPUG_926xUERprcKNQeXm6t56g'
let begin = pg.slice(0,53)
let mid = pg.slice(54,74)
let end = pg.slice(74)

class AllCourts extends React.Component {
  constructor() {
    super();
    this.displayBoroughs = ['', 'Brooklyn', "Bronx", "Manhattan", "Queens", "Staten Island"]
    this.state = {
      boroughs: "",
      tempArr: []
    };
  }

  handleBoroughSelect = e => {
    const tg = e.target.value 
    let stuff 
    if (tg==='Queens'){
      stuff = parks.queensParks()
    }else if (tg==='Brooklyn'){
      stuff = parks.brooklynParks()
    } else if (tg==='Bronx'){
      stuff = parks.bronxParks()
    } else if (tg==='Manhattan'){
      stuff = parks.manhattanParks()
    }else if (tg==='Staten Island'){
      stuff = parks.statenIslandParks()
    }else {
      stuff = []
    }
    this.setState({
      boroughs: e.target.value,
      tempArr : [...stuff]
    })
  };

  render() {
    const { boroughs, tempArr } = this.state;
    // console.log(boroughs)
    console.log(tempArr)
    console.log(begin)
    console.log(mid)
    console.log('PG==>',pg)
    console.log('End        '     ,end)
    return (
      <div>
        {/* {console.log(rr)} */}
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
                <br/>
                  {park.Name}<br/>
                  {park.Location}<br/>
                  {park.Num_of_Courts}<br/>
                  {typeof park.lat}<br/>
                  {typeof park.lon}<br/>
                  {console.log(begin+'='+park.lat+','+park.lon+end)}
                  <img className="App-img" src={begin+'='+park.lat+','+park.lon+end}>
                  </img>
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