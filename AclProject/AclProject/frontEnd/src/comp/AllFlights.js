import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import NavbarAdmin from'./NavbarAdmin'
import {useParams} from 'react-router-dom';

function AllFlights() { 
    const [flight, setflight] = useState([]);
    const id=useParams();
    
    const params = { "params": id };


  useEffect(() => {
    axios.get("http://localhost:8000/flights/get").then((result) => {
      const data = result.data;
      setflight(data);

    });


  });
    return (
        <div>
           <NavbarAdmin />
           <span style ={{fontWeight: '900' , fontSize: 70 , color: 'white', fontFamily: 'ui-sans-serif'}}>All Flights </span>
           <span id="textSpan">
           <table className="table" style= {{backgroundColor:'rgb(255,255,255 ,0.7)'}}>
                        <tr>
                            <th>Flight number</th>  
                            <th>From</th> 
                            <th>To</th> 
                            <th>Airport</th> 
                            <th>Terminal</th> 
                            <th>Departure time</th>  
                            <th>Arrival time</th>  
                            <th>Departure date</th>  
                            <th>Arrival date</th> 
                            <th>First class seats available</th>  
                            <th>First class luggage allowance</th>  
                            <th>First class price</th> 
                            <th>Buisness class seats available</th>  
                            <th>Buisness class luggage allowance</th>  
                            <th>Buisness class price</th>  
                            <th>Economy class seats available</th> 
                            <th>Economy class luggage allowance</th> 
                            <th>Economy class price</th> 
                        </tr>
                   
          <tbody>
          {flight.map((data) =>
         
              <tr>
              <td>{data.flightNumber} </td>
              <td>{data.from}</td>
              <td>{data.to}</td> 
              <td>{data.airport}</td> 
              <td>{data.terminal}</td> 
              <td>{data.departureTime}</td>
              <td>{data.arrivalTime}</td> 
              <td>{data.departureDate.substring(0,10)}</td> 
              <td>{data.arrivalDate.substring(0,10)}</td> 
              <td>{data.firstSeatsAvailable}</td> 
              <td>{data.firstSeatsLuggage}</td> 
              <td>{data.firstSeatsPrice}</td> 
              <td>{data.businessSeatsAvailable}</td> 
              <td>{data.businessSeatsLuggage}</td> 
              <td>{data.businessSeatsPrice}</td> 
              <td>{data.economySeatsAvailable}</td>
              <td>{data.economySeatsLuggage}</td> 
              <td>{data.economySeatsPrice}</td>
              <td>
                <Link to={`/update/${data._id}`+"/"+params.params.user_id} style= {{color: 'navy' , fontWeight: 700, fontSize: 15}}>Update</Link> <Link style= {{color: 'rgb(200,0,0)' , fontWeight: 700, fontSize: 15}} to={`/delete/${data._id}`+"/"+params.params.user_id} >Delete</Link>
              </td>
                
       </tr>
       
  
       )
          }     </tbody>
        </table>
        
        </span>
       </div>
  

        
    )
}

export default AllFlights
