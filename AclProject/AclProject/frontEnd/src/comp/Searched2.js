import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from'./Navbar'

function Searched2(props) {
   // const _id = "61847a038d0bf591b23b32ee"
   const sflights =props.sflights
    const [flight, setflight] = useState([]);
   const HandleDelete=(e)=>{
    e.preventDefault();
    if(window.confirm("Are you sure you want to delete this doc?")){
        axios.post('http://localhost:8000/flights/delete', flight._id).then(() => console.log("deleted sucsessfully")).catch((err) => {console.log(err)});
        window.location.href = "http://localhost:3000/edit"
    }
   }

  useEffect(() => {
    axios.get("http://localhost:8000/flights/get").then((result) => {
      const data = result.data;
      
      setflight(data);

    },);//url


  });
    return (
        <div>
           <Navbar />
            <Link to='/create'>Create new flights</Link>
            <br></br>
            
            <br></br>
          
  
       
            <ul>
          {flight.map((data) =>
            <li key={data._id}>
                <p className="left-txt"> <b>Flight number: </b>{data.flightNumber} </p><br/>
                <p className="left-txt"> <b>Departure time: </b>{data.departureTime}</p><br/>
                <p className="left-txt"> <b>Arrival time: </b>{data.arrivalTime}</p><br/>
                <p className="left-txt"> <b>Departure date: </b>{data.departureDate}</p><br/>
                <p className="left-txt"> <b>Arrival date: </b>{data.arrivalDate}</p><br/>
                <p className="left-txt"> <b>First class seats available: </b>{data.firstSeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Economy class seats available: </b>{data.economySeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Business class seats available: </b>{data.businessSeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Airport: </b>{data.airport}</p><br/>
                <p className="left-txt"> <b>From: </b>{data.from}</p><br/>
                <p className="left-txt"> <b>To: </b>{data.to}</p><br/>
                <Link to={`/update/${data._id}`} style={{ color: 'black', backgroundColor: 'lightgrey', font: 30, padding: 10, textDecoration: 'none' }}>update</Link>
       <button onClick={(e)=>{HandleDelete(e)}} style={{ color: 'black', backgroundColor: 'lightgrey', font: 35, padding: 12, border: 0, marginLeft: 20 }}>Delete</button><br/><br/><br/><br/>
            </li>)
          }</ul>



   
      
       </div>
  

        
    )
}

export default Searched2
