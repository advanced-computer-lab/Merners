
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import Navbar from'./Navbar'
import Searched1 from './Searched1'
import Searched2 from './Searched2'




function Search() {

    const [flight, setflight] = useState([]);
    const [flightv, setflightv] = useState([]);
    const [flightq, setflightq] = useState([]);

    const HandleSubmit = (e) => {
        
        alert("lollllll");
        console.log(flightq);
        const qu=flightq;
        for (const item in qu) {
           console.log( qu[item]);
           if(qu[item]===""){
              delete qu[item];
           }
          }
          console.log(qu)
          console.log("henaaaaaaaaaaaaaaa")
          
        axios.get("http://localhost:8000/flights/search", { params: qu })
        .then((result) => {
          const data = result.data;
         // setflight(data);
          setflightv(data);
    
        })
        .catch((err)=>{console.log(err)});
       
        console.log(flightv)
        e.preventDefault();

       
    }

    
    //    useEffect(() => {
    //     axios.get("http://localhost:8000/flights/get").then((result) => {
    //       const data = result.data;
    //       setflight(data);
    //       setflightv(data);
    
    //     },[]);});
        useEffect(() => {
            console.log(flight);
            
            console.log(flightq);
            
            console.log(flightv);
        },[flightq]);
      
        
            


    return (
        <div>
           <Navbar />
        <div>
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
                <input type="number" id="terminal" name="terminal" value={flight.terminal} onChange={(e) => { setflight({ ...flight, terminal: e.target.value }) }} ></input><br /><br />

                <label>First class seats available: </label><br />
                <input type="number" id="firstSeatsAvailable" name="firstSeatsAvailable" value={flightq.firstSeatsAvailable} onChange={(e) => { setflightq({ ...flightq, firstSeatsAvailable: e.target.value }) }} ></input><br /><br />

                <label> Economy class seats available: </label><br />
                <input type="number" id="EcoSeats" name="EcoSeats" value={flightq.economySeatsAvailable} onChange={(e) => { setflightq({ ...flightq, economySeatsAvailable: e.target.value }) }} ></input><br /><br></br>

                <label> Business class seats available: </label><br />
                <input type="number" id="BussSeats" name="BussSeats" value={flightq.businessSeatsAvailable} onChange={(e) => { setflightq({ ...flightq, businessSeatsAvailable: e.target.value }) }} ></input><br /><br></br>

                <label> Airport: </label><br />
                <input type="text" id="airport" name="airport" value={flightq.airport} onChange={(e) => { setflightq({ ...flightq, airport: e.target.value }) }} ></input><br /><br></br>

                <label> From :</label><br />
                <input type="text" id="from" name="from" value={flightq.from} onChange={(e) => {  setflightq({ ...flightq, from: e.target.value }) }} ></input><br /><br></br>

                <label> To : </label><br />
                <input type="text" id="to" name="to" value={flightq.to} onChange={(e) => { setflightq({ ...flightq, to: e.target.value }) }} ></input><br /><br></br>


                <input type="submit" value="submit"></input>

            </form>
        </div>

        <br></br>
            
            <br></br>

          <div>
            <Link to='/create'>Create new flights</Link>
            <br></br>
            
            <br></br>
          
  
       
            <ul>
          {flightv.map((data) =>
            <li key={data._id}>
                 <p className="left-txt"> <b>Flight number: </b>{data.flightNumber} </p><br/>
                <p className="left-txt"> <b>Departure time: </b>{data.departureTime}</p><br/>
                <p className="left-txt"> <b>Arrival time: </b>{data.arrivalTime}</p><br/>
                <p className="left-txt"> <b>Departure date: </b>{data.departureDate}</p><br/>
                <p className="left-txt"> <b>Terminal: </b>{data.terminal}</p><br/>
                <p className="left-txt"> <b>Arrival date: </b>{data.arrivalDate}</p><br/>
                <p className="left-txt"> <b>Terminal: </b>{data.terminal}</p><br/>
                <p className="left-txt"> <b>First class seats available: </b>{data.firstSeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Economy class seats available: </b>{data.economySeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Business class seats available: </b>{data.businessSeatsAvailable}</p><br/>
                <p className="left-txt"> <b>Airport: </b>{data.airport}</p><br/>
                <p className="left-txt"> <b>From: </b>{data.from}</p><br/>
                <p className="left-txt"> <b>To: </b>{data.to}</p><br/>
                <Link to={`/update/${data._id}`} style={{ color: 'black', backgroundColor: 'lightgrey', font: 30, padding: 10, textDecoration: 'none' }}>update</Link>
                <Link to={`/delete/${data._id}`} style={{ color: 'black', backgroundColor: 'lightgrey', font: 30, marginLeft:10 ,padding: 10, textDecoration: 'none' }}>Delete</Link>
<br/><br/><br/><br/>
            </li>)
          }</ul>

             

   
      
       </div>  
        </div>
    )
}

export default Search




