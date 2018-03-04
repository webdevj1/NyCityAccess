
import React from 'react';
import logo from './logo.svg';
import parks from './parksApi'
import { BrowserRouter, Route, Link } from "react-browser-router";
import PropTypes from "prop-types";



let key = 'AIzaSyBx5vvdM7wHlrYSra7jZA2suUNbvl40dkY'
let pg = 'https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=18&size=400x400&key=AIzaSyAufnSVSOPUG_926xUERprcKNQeXm6t56g'
let begin = pg.slice(0,53)
let mid = pg.slice(54,74)
let end = pg.slice(74)

class AllCourts extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
    this.displayBoroughs = ['', 'Brooklyn', "Bronx", "Manhattan", "Queens", "Staten Island"]
    this.state = {
      boroughs: "",
       inputState: "",
      tempArr: []
    };
  }

  componentDidMount(){
    let boroughs = this.context.router.history.location.pathname  
    let stuff
    boroughs = boroughs.slice(11)
    if (boroughs==='Queens'){
      stuff = parks.queensParks()
    }else if (boroughs==='Brooklyn'){
      stuff = parks.brooklynParks()
    } else if (boroughs==='Bronx'){
      stuff = parks.bronxParks()
    } else if (boroughs==='Manhattan'){
      stuff = parks.manhattanParks()
    }else if (boroughs==='Staten Island'){
      stuff = parks.statenIslandParks()
    }else {
      stuff = []
    }

    this.setState({
      tempArr : [...stuff]      
    })
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


    console.log("Router====>",this.context.router)
    this.context.router.history.push(`/allcourts/${tg}`);
    this.setState({
      // boroughs: e.target.value,
      tempArr : [...stuff]
    })
  };

  handleSearch = e =>{
    const {tempArr, inputState } = this.state
    let val = e.target.value
    console.log(val)
       this.setState({
      // tempArr : search,
      inputState: e.target.value ,   
    })
  }

  render() {
    const {  tempArr, inputState } = this.state;
    let search = tempArr.filter(park =>(
      park.Name.includes(inputState)
    ))
    console.log('MY INPUT ===> ',inputState)
    let boroughs = this.context.router.history.location.pathname  
     boroughs = boroughs.slice(11)
    console.log(tempArr)
    console.log('New',boroughs)
    let bk = 'https://www.meetup.com/topics/basketball/us/ny/brooklyn/'
    let bx = 'https://www.meetup.com/topics/basketball/us/ny/bronx/'
    let statenIs = 'https://www.meetup.com/topics/basketball/us/ny/staten_island/'
    let queens = 'https://www.meetup.com/topics/basketball/us/ny/long_island_city/'
    let manhattan = 'https://www.meetup.com/topics/basketball/us/ny/new_york/'

  let tags =  {
    "Brooklyn" : 'https://www.meetup.com/topics/basketball/us/ny/brooklyn/',
    "Bronx" :'https://www.meetup.com/topics/basketball/us/ny/bronx/',
    "Staten Island" : 'https://www.meetup.com/topics/basketball/us/ny/staten_island/',
    "Queens" : 'https://www.meetup.com/topics/basketball/us/ny/long_island_city/',
    "Manhattan" : 'https://www.meetup.com/topics/basketball/us/ny/new_york/'
  }
   let linkTo = tags[boroughs]
  
if(linkTo === undefined){
  linkTo = 'https://www.meetup.com/topics/basketball/us/ny/new_york/'
}

console.log(boroughs)
console.log(linkTo)
    return (

      <div className='courts'>

        {/* {console.log(rr)} */}
        Choose your Borough: {" "}

        <select
          // value={boroughs}
          onChange={this.handleBoroughSelect}
          >
          {this.displayBoroughs.map((item, index) =>
            <option key={index} value={item}> {item} </option>)}
        </select><br/>

           <a href={linkTo}>Are you fan of the game? </a> <br/>
           <h2> {boroughs}</h2>{''}
          
           Find park in Boroughs<br/>
           <input
           name='inputState'
           value={inputState}
           onInput={this.handleSearch}
           >
           </input>
          <ul>
          {search.map(park => (
            <div>
              <li>
                <div>
                  {/* {console.log(park)} */}
                <br/>
                  {park.Name}<br/>
                  {park.Location}<br/>
                  {park.Num_of_Courts}<br/>
                  {/* {console.log(begin+'='+park.lat+','+park.lon+end)} */}
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



// import React from 'react';
// import logo from './logo.svg';
// import parks from './parksApi'
// import { BrowserRouter, Route, Link } from "react-browser-router";
// import PropTypes from "prop-types";



// let key = 'AIzaSyBx5vvdM7wHlrYSra7jZA2suUNbvl40dkY'
// let pg = 'https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=18&size=400x400&key=AIzaSyAufnSVSOPUG_926xUERprcKNQeXm6t56g'
// let begin = pg.slice(0,53)
// let mid = pg.slice(54,74)
// let end = pg.slice(74)

// class AllCourts extends React.Component {
//   static contextTypes = {
//     router: PropTypes.object
//   }
//   constructor(props, context) {
//     super(props, context);
//     this.displayBoroughs = ['', 'Brooklyn', "Bronx", "Manhattan", "Queens", "Staten Island"]
//     this.state = {
//       boroughs: "",
//       tempArr: [],
//       linkTo:'https://www.meetup.com/find/?allMeetups=true&radius=25&userFreeform=10019&gcResults=New+York%2C+NY+10019%2C+USA%3AUS%3ANew+York%3ANew+York+County%3ANew+York%3Anull%3A10019%3A40.7686973%3A-73.99181809999999&change=yes&sort=default',
//     };
//   }

//   componentDidMount(){
//     let boroughs = this.context.router.history.location.pathname  
//     let stuff
//     boroughs = boroughs.slice(11)
//     if (boroughs==='Queens'){
//       stuff = parks.queensParks()
//     }else if (boroughs==='Brooklyn'){
//       stuff = parks.brooklynParks()
//     } else if (boroughs==='Bronx'){
//       stuff = parks.bronxParks()
//     } else if (boroughs==='Manhattan'){
//       stuff = parks.manhattanParks()
//     }else if (boroughs==='Staten Island'){
//       stuff = parks.statenIslandParks()
//     }else {
//       stuff = []
//     }

//     this.setState({
//       tempArr : [...stuff]      
//     })
//   }
//   handleBoroughSelect = e => {
//     const tg = e.target.value 
//     let stuff 
//     let boroughs = this.context.router.history.location.pathname  
//     boroughs = boroughs.slice(11)
//     console.log('IM Right', boroughs)
//     console.log('IM Right', this.context.router)
//     if (boroughs==='Queens'){
//       stuff = 'https://www.meetup.com/cities/us/ny/long_island_city/'
//     }else if (boroughs==='Brooklyn'){
//       stuff = 'https://www.meetup.com/cities/us/ny/brooklyn/'
//     } else if (boroughs==='Bronx'){
//       stuff = 'https://www.meetup.com/cities/us/ny/bronx/'
//     } else if (boroughs==='Manhattan'){
//       stuff = 'https://www.meetup.com/cities/us/ny/new_york/'
//     }else if (boroughs==='Staten Island'){
//       stuff = 'https://www.meetup.com/cities/us/ny/staten_island/'
//     }else {
//       stuff = []
//     }

//     console.log("Router====>",this.context.router)
//     this.context.router.history.push(`/allcourts/${tg}`);
//     this.setState({
//       // boroughs: e.target.value,
//       tempArr : [...stuff],
//       linkTo : stuff ,
//     })
//   };

//   render() {
//     const {  tempArr,linkTo  } = this.state;
//     // console.log(boroughs)
//     let boroughs = this.context.router.history.location.pathname  
//      boroughs = boroughs.slice(11)
//     console.log(tempArr)
//     console.log('New',boroughs)
//     // console.log('New',newChar)
//     console.log(begin)
//     console.log(mid)
//     console.log('PG==>',pg)
//     console.log('End        '     ,end)

  
//     return (
//       <div>
//         {/* {console.log(rr)} */}
//         Choose your Borough: {" "}

//         <select
//           // value={boroughs}
//           onChange={this.handleBoroughSelect}
//           >
//           {this.displayBoroughs.map((item, index) =>
//             <option key={index} value={item}> {item} </option>)}
//         </select><br/>
// mnkn
//            <h2> {boroughs}</h2>{''}
//            <a href={linkTo}>ARE YOU A FAN</a>
        
//           <ul>
//           {tempArr.map(park => (
//             <div>
//               <li>
//                 <div>
//                   {/* {console.log(park)} */}
//                 <br/>
//                   {park.Name}<br/>
//                   {park.Location}<br/>
//                   {park.Num_of_Courts}<br/>
//                   {typeof park.lat}<br/>
//                   {typeof park.lon}<br/>
//                   {/* {console.log(begin+'='+park.lat+','+park.lon+end)} */}
//                   <img className="App-img" src={begin+'='+park.lat+','+park.lon+end}>
//                   </img>
//                   done
//                 </div>
//                 <br/>
//                 <br/>
//               </li>
//             </div>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }


// export default AllCourts;