import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import Navbar from'./Navbar'
import MainScreenAdmin from './mainScreenAdmin';



function Search() {

    const [flight, setflight] = useState([]);
    const [flightv, setflightv] = useState([]);
    const [flightq, setflightq] = useState([]);

    const id=useParams();

    const params = { "params": id };

    const HandleSubmit = (e) => {
        
        const qu=flightq;
        for (const item in qu) {
           if(qu[item]===""){
              delete qu[item];
           }
          }
          
        axios.get("http://localhost:8000/flights/search", { params: qu })
        .then((result) => {
          const data = result.data;
          setflightv(data);
    
        })
        .catch((err)=>{console.log(err)});
       
        
        e.preventDefault();

       
    }
        useEffect(() => {
        },[flightq]);
      
        
            


    return (
        <div>
           <Navbar />
           <MainScreenAdmin title = "Search">
        <form onSubmit={(e) => {
                    HandleSubmit(e)
                }}>

                <label >Flight Number: </label><br />
                <input type="text" id="flightNum" name="flightNum" value={flightq.flightNumber} onChange={(e) => { setflightq({ ...flightq, flightNumber: e.target.value }) }} ></input><br /><br />

                <label >Departure Time:  </label><br />
                <input type="time" id="DepTime" name="DepTime" value={flightq.departureTime} onChange={(e) => { setflightq({ ...flightq, departureTime: e.target.value }) }} ></input><br /><br />

                <label> Arrival Time:</label><br />
                <input type="time" id="ArvTime" name="ArvTime" value={flightq.arrivalTime} onChange={(e) => { setflightq({ ...flightq, arrivalTime: e.target.value }) }} ></input><br /><br />

                <label> Departure Date:</label><br />
                <input type="date" id="DepDt" name="DepDt" value={flightq.departureDate} onChange={(e) => { setflightq({ ...flightq, departureDate: e.target.value }) }} ></input><br /><br />

                <label> Arrival Date: </label><br />
                <input type="date" id="ArvDt" name="ArvDt" value={flightq.arrivalDate} onChange={(e) => { setflightq({ ...flightq, arrivalDate: e.target.value }) }} ></input><br /><br />
               
                <label> Terminal : </label><br />
                <input type="number" min = "0" id="terminal" name="terminal" value={flight.terminal} onChange={(e) => { setflight({ ...flight, terminal: e.target.value }) }} ></input><br /><br />

                <label>First class seats available: </label><br />
                <input type="number" min = "0" id="firstSeatsAvailable" name="firstSeatsAvailable" value={flightq.firstSeatsAvailable} onChange={(e) => { setflightq({ ...flightq, firstSeatsAvailable: e.target.value }) }} ></input><br /><br />

                <label>First class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="firstSeatsLuggage" name="firstSeatsLuggage" value={flightq.firstSeatsLuggage} onChange={(e) => { setflightq({ ...flightq, firstSeatsLuggage: e.target.value }) }} ></input><br /><br />

                <label>First class price: </label><br />
                <input type="number" min = "0" id="firstSeatsPrice" name="firstSeatsPrice" value={flightq.firstSeatsPrice} onChange={(e) => { setflightq({ ...flightq, firstSeatsPrice: e.target.value }) }} ></input><br /><br />

                <label> Economy class seats available: </label><br />
                <input type="number" min = "0" id="EcoSeats" name="EcoSeats" value={flightq.economySeatsAvailable} onChange={(e) => { setflightq({ ...flightq, economySeatsAvailable: e.target.value }) }} ></input><br /><br></br>

                <label> Economy class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="economySeatsLuggage" name="economySeatsLuggage" value={flightq.economySeatsLuggage} onChange={(e) => { setflightq({ ...flightq, economySeatsLuggage: e.target.value }) }} ></input><br /><br></br>

                <label> Economy class price: </label><br />
                <input type="number" min = "0" id="economySeatsPrice" name="economySeatsPrice" value={flightq.economySeatsPrice} onChange={(e) => { setflightq({ ...flightq, economySeatsPrice: e.target.value }) }} ></input><br /><br></br>

                <label> Business class seats available: </label><br />
                <input type="number" min = "0" id="BussSeats" name="BussSeats" value={flightq.businessSeatsAvailable} onChange={(e) => { setflightq({ ...flightq, businessSeatsAvailable: e.target.value }) }} ></input><br /><br></br>

                <label> Business class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="businessSeatsLuggage" name="businessSeatsLuggage" value={flightq.businessSeatsLuggage} onChange={(e) => { setflightq({ ...flightq, businessSeatsLuggage: e.target.value }) }} ></input><br /><br></br>

                <label> Business class price: </label><br />
                <input type="number" min = "0" id="businessSeatsPrice" name="businessSeatsPrice" value={flightq.businessSeatsPrice} onChange={(e) => { setflightq({ ...flightq, businessSeatsPrice: e.target.value }) }} ></input><br /><br></br>

                <label> Airport: </label><br />
                <input type="text" id="airport" name="airport" value={flightq.airport} onChange={(e) => { setflightq({ ...flightq, airport: e.target.value }) }} ></input><br /><br></br>

                <label> From :</label><br />
                <input type="text" id="from" name="from" value={flightq.from} onChange={(e) => {  setflightq({ ...flightq, from: e.target.value }) }} ></input><br /><br></br>

                <label> To : </label><br />
                <input type="text" id="to" name="to" value={flightq.to} onChange={(e) => { setflightq({ ...flightq, to: e.target.value }) }} ></input><br /><br></br>


                <input type="submit" value="submit"></input>

            </form>

        <br></br>
            
            <br></br>

          <div>
          <table className="table">
          <tr>
                            
                            <th>Flight Number</th> 
                            <th>From</th>
                            <th>To</th>
                            <th>Airport</th>
                            <th>Terminal</th>
                            <th>Departure Time</th> 
                            <th>Arrival Time</th> 
                            <th>Departure Date</th> 
                            <th>Arrival Date</th> 
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
          {flightv.map((data) =>
         
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
                <Link to={`/update/${data._id}`}>Update</Link> <Link to={`/delete/${data._id}`} >Delete</Link>
              </td>
                
       </tr>
       
  
       )
          }     </tbody>
        </table>

  
       </div> 
       </MainScreenAdmin>
        </div>
    )
}

export default Search




