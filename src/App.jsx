import React from "react"
import {Component} from "react"
import Map from "./Map.jsx"


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lat:null,
      long:null,
      accuracy:null,
      isOpen:false, 
    }

  }

  getLocation=()=> {
    if (navigator.geolocation) {
       
      navigator.geolocation.getCurrentPosition((position)=>{
     
          const{isOpen}=this.state
        this.setState({
            lat:position.coords.latitude,
            long:position.coords.longitude,
            accuracy:position.coords.accuracy,
            isOpen:!isOpen
        })
      });
     
    } else {
      alert("Geolocation is not supported  this browser.");
    }
  }

  render(){
   const{long,lat,isOpen,accuracy}=this.state
    return <div className="app" > 
     <h1>CLICK ME</h1>
     <ul >
      <li><i onClick={this.getLocation} class="fa fa-map-marker"></i></li>
        </ul>
     {isOpen? <ul>
        <li><marc>LATITUDE</marc>: {lat}°</li>
        <li><marc>LONGITUDE</marc>: {long}°</li>
        <li><marc>ACCURACY</marc>: {accuracy}</li>
        <Map class="map" lat={lat} long={long}/>
      </ul>:""}
    </div>
  }
}


export default App