
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Header from'./Header'
import {useParams} from 'react-router-dom'

function Usersearchflights() {

    const [flight, setflight] = useState([]);
    const [flightv, setflightv] = useState([]);
    const [flightq, setflightq] = useState([]);
    var res = [];
    const id=useParams();
    
    const params = { "params": id };

    const HandleSubmit = (e) => {
        
        const qu=flightq;
        for (const item in qu) {
           if(qu[item]===""){
              delete qu[item];
           }
          }
          console.log(qu)
          console.log("henaaaaaaaaaaaaaaa")
          
        axios.get("http://localhost:8000/flights/get")
        .then((result) => {
            for (var key in qu) {
                if (key === "from" || key === "to" || key === "airport") {
                    for(var i in result.data ){
                        for (var key2 in result.data[i]) {
                            if (key2 === key && qu[key] === result.data[i][key2] ) {
                                res.push(result.data[i]);
                            }
                        }
                    }
                }
                else if (key === "departureDate" || key === "arrivalDate") {
                    for(var i in result.data ){
                        for (var key2 in result.data[i]) {
                            if (key2 === key && qu[key] === (""+result.data[i][key2]).substring(0,10) ) {
                                res.push(result.data[i]);
                            }
                        }
                    }
                }
                else if (key === "firstSeatsAvailable" || key === "economySeatsAvailable" || key === "businessSeatsAvailable" || key === "firstSeatsPrice" || key === "economySeatsPrice" || key === "businessSeatsPrice") {
                    for(var i in result.data ){
                        for (var key2 in result.data[i]) {
                            if (key2 === key && qu[key] <= result.data[i][key2] ) {
                                res.push(result.data[i]);
                            }
                        }
                    }
                }
                result.data = res;
                res = [];
            }

          const data = result.data;
          setflightv(data);
        })
        .catch((err)=>{console.log(err)});
       
        
        e.preventDefault();

       
    }
        useEffect(() => {
            // console.log(flight);
            
            // console.log(flightq);
            
            // console.log(flightv);
        },[flightq]);
      
        
            


    return (
        <div>
           <Header />
        <div>
        <form onSubmit={(e) => {
                    HandleSubmit(e)
                }}>

 
               
                <label> Departure Date:</label><br />
                <input type="date" id="DepDt" name="DepDt" value={flightq.departureDate} onChange={(e) => { setflightq({ ...flightq, departureDate: e.target.value }) }} ></input><br /><br />

                <label> Arrival Date: </label><br />
                <input type="date" id="ArvDt" name="ArvDt" value={flightq.arrivalDate} onChange={(e) => { setflightq({ ...flightq, arrivalDate: e.target.value }) }} ></input><br /><br />
               
                <label>First class seats available: </label><br />
                <input type="number" min = "0" id="firstSeatsAvailable" name="firstSeatsAvailable" value={flightq.firstSeatsAvailable} onChange={(e) => { setflightq({ ...flightq, firstSeatsAvailable: e.target.value }) }} ></input><br /><br />

                <label>First class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="firstSeatsLuggage" name="firstSeatsLuggage" value={flightq.firstSeatsLuggage} onChange={(e) => { setflightq({ ...flightq, firstSeatsLuggage: e.target.value }) }} ></input><br /><br />

                <label>First class price: </label><br />
                <input type="number" min = "0" id="firstSeatsPrice" name="firstSeatsPrice" value={flightq.firstSeatsPrice} onChange={(e) => { setflightq({ ...flightq, firstSeatsPrice: e.target.value }) }} ></input><br /><br />

                <label> Economy class seats available: </label><br />
                <input type="number" min = "0" id="economySeatsAvailable" name="economySeatsAvailable" value={flightq.economySeatsAvailable} onChange={(e) => { setflightq({ ...flightq, economySeatsAvailable: e.target.value }) }} ></input><br /><br></br>

                <label> Economy class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="economySeatsLuggage" name="economySeatsLuggage" value={flightq.economySeatsLuggage} onChange={(e) => { setflightq({ ...flightq, economySeatsLuggage: e.target.value }) }} ></input><br /><br></br>

                <label> Economy class price: </label><br />
                <input type="number" min = "0" id="economySeatsPrice" name="economySeatsPrice" value={flightq.economySeatsPrice} onChange={(e) => { setflightq({ ...flightq, economySeatsPrice: e.target.value }) }} ></input><br /><br></br>

                <label> Business class seats available: </label><br />
                <input type="number" min = "0" id="businessSeatsAvailable" name="businessSeatsAvailable" value={flightq.businessSeatsAvailable} onChange={(e) => { setflightq({ ...flightq, businessSeatsAvailable: e.target.value }) }} ></input><br /><br></br>

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
        </div>

        <br></br>
            
            <br></br>

          <div>
          <table className="table">
                        <tr>
                            
                            <th>Flight Number</th> <th /> 
                            <th>From</th> <th />
                            <th>To</th> <th />
                            <th>Airport</th> <th />
                            <th>Terminal</th> <th />
                            <th>Departure Time</th> <th /> 
                            <th>Arrival Time</th> <th /> 
                            <th>Departure Date</th> <th /> 
                            <th>Arrival Date</th> <th /> 
                            <th>First class seats available</th> <th /> 
                            <th>First class luggage allowance</th> <th /> 
                            <th>First class price</th> <th /> 
                            <th>Buisness class seats available</th> <th /> 
                            <th>Buisness class luggage allowance</th> <th /> 
                            <th>Buisness class price</th> <th /> 
                            <th>Economy class seats available</th> <th /> 
                            <th>Economy class luggage allowance</th> <th /> 
                            <th>Economy class price</th> <th /> 
                        </tr>
                   
          <tbody>
          {flightv.map((data) =>
         
              <tr>
              <td>{data.flightNumber} </td> <td/>
              <td>{data.from}</td> <td/>
              <td>{data.to}</td> <td/> 
              <td>{data.airport}</td> <td/>
              <td>{data.terminal}</td> <td/>
              <td>{data.departureTime}</td> <td/>
              <td>{data.arrivalTime}</td> <td/>
              <td>{data.departureDate.substring(0,10)}</td> <td/>
              <td>{data.arrivalDate.substring(0,10)}</td> <td/>
              <td>{data.firstSeatsAvailable}</td> <td/>
              <td>{data.firstSeatsLuggage}</td> <td/>
              <td>{data.firstSeatsPrice}</td> <td/>
              <td>{data.businessSeatsAvailable}</td> <td/>
              <td>{data.businessSeatsLuggage}</td> <td/>
              <td>{data.businessSeatsPrice}</td> <td/>
              <td>{data.economySeatsAvailable}</td> <td/>
              <td>{data.economySeatsLuggage}</td> <td/>
              <td>{data.economySeatsPrice}</td> <td/>
              <td>
                <Link to={`/showDetails/${data._id}`+"/"+params.params.user_id} >Show details</Link> {/*| <Link to={`/reserve/${data._id}`} >Reserve</Link>*/}

                
              </td> <td/>
              <td/>
                
       </tr>
       
  
       )
          }     </tbody>
        </table>

  
       </div> 
        </div>
    )
}

export default Usersearchflights
