import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from'./Navbar'

function AllFlights() {
   // const _id = "61847a038d0bf591b23b32ee"
    const [flight, setflight] = useState([]);
   

  useEffect(() => {
    axios.get("http://localhost:8000/flights/get").then((result) => {
      const data = result.data;
      setflight(data);

    });//url


  });
    return (
        <div>
           <Navbar />

            <Link to='/create'>Create new flights</Link>
            <br></br>
            <Link to='/search'>Search for flights</Link>
            <br></br>
          
  
       
            <ul>
          {flight.map((data) =>
            <li key={data._id}>
                <p className="left-txt"> <b>Flight number: </b>{data.flightNumber} </p><br/>
                <p className="left-txt"> <b>Departure time: </b>{data.departureTime}</p><br/>
                <p className="left-txt"> <b>Arrival time: </b>{data.arrivalTime}</p><br/>
                <p className="left-txt"> <b>Departure date: </b>{data.departureDate}</p><br/>
                <p className="left-txt"> <b>Arrival date: </b>{data.arrivalDate}</p><br/>
                <p className="left-txt"> <b>Terminal: </b>{data.terminal}</p><br/>
                <p className="left-txt"> <b>First class seats available: </b>{data.firstSeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Economy class seats available: </b>{data.economySeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Business class seats available: </b>{data.businessSeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Airport: </b>{data.airport}</p><br/>
                <p className="left-txt"> <b>From: </b>{data.from}</p><br/>
                <p className="left-txt"> <b>To: </b>{data.to}</p><br/>
                <Link to={`/update/${data._id}`} style={{ color: 'black', backgroundColor: 'lightgrey', font: 30, padding: 10, textDecoration: 'none' }}>Update</Link>
                
                <Link to={`/delete/${data._id}`} style={{ color: 'black', backgroundColor: 'lightgrey', font: 30, marginLeft:10 ,padding: 10, textDecoration: 'none' }}>Delete</Link>
                <br></br>
                <br></br>
       </li>
       )
          }</ul>



   
      
       </div>
  

        
    )
}

export default AllFlights
