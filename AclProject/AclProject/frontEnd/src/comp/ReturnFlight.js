import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from'./Header'
import 'react-dropdown/style.css';
import {Link} from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import MainScreenAdmin from './mainScreenAdmin'

function ReturnFlight() {
    const id=useParams();
    
    const[message ,setMessage] = useState(null);
 
    const params = { "params": id };
    
    const idd=params.params._id
    const iddd = {"params":{"_id":params.params._id}}; 
    var adultsd=params.params.adnod;
        var childrend=params.params.chnod;
        var tnopd=params.params.tnopd;
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: ""});
    const [flightv, setflightv] = useState([]);
    const [flightq, setflightq] = useState([]);
    var res = [];
    
    var departureYearr = 0;
    var departureMonr = 0;
    var departureDayr = 0;
    var departureHourr = 0;
    var departureMinr = 0;
    var dr = 0;

    var arrivalYear = Number(flight.arrivalDate.substring(0,4));
    var arrivalMon = Number(flight.arrivalDate.substring(5,7));
    var arrivalDay = Number(flight.arrivalDate.substring(8,10));
    var arrivalHour = Number(flight.arrivalTime.substring(0,2));
    var arrivalMin = Number(flight.arrivalTime.substring(3));
    var d=arrivalYear*10000000000+arrivalMon*100000000+arrivalDay*1000000+arrivalHour*1000+arrivalMin;

    const HandleSubmit = (e) => {
        e.preventDefault();
        
    }
    useEffect(() => {
        axios.get('http://localhost:8000/flights/flight',iddd).then(resp => { setflight(resp.data) }).catch((err) => { console.log(err) });
        console.log(params.params._id)
        console.log(flight)
    },[]);
   useEffect(()=>{
    console.log(flight)
    var qu = {"from": flight.to, "to":  flight.from};
console.log(qu)
    axios.get("http://localhost:8000/flights/get")
    .then((result) => {
        for (var key in qu) {
            if (key === "from" || key === "to") {
                for(var i in result.data ){
                 var   flightx=result.data[i];
                    for (var key2 in flightx) {
                     //   console.log(key2);
                       // console.log(flightx)
                        departureYearr = Number(flightx.departureDate.substring(0,4));
                        departureMonr = Number(flightx.departureDate.substring(5,7));
                        departureDayr = Number(flightx.departureDate.substring(8,10));
                        departureHourr = Number(flightx.departureTime.substring(0,2));
                        departureMinr = Number(flightx.departureTime.substring(3));
                        dr = departureYearr*10000000000+departureMonr*100000000+departureDayr*1000000+departureHourr*1000+departureMinr;
                        arrivalYear = Number(flight.arrivalDate.substring(0,4));
                        arrivalMon = Number(flight.arrivalDate.substring(5,7));
                        arrivalDay = Number(flight.arrivalDate.substring(8,10));
                        arrivalHour = Number(flight.arrivalTime.substring(0,2));
                        arrivalMin = Number(flight.arrivalTime.substring(3));
                        d=arrivalYear*10000000000+arrivalMon*100000000+arrivalDay*1000000+arrivalHour*1000+arrivalMin;
                      
                        if (key2 === key && qu[key] === flightx[key2] && dr > d) {
                            res.push(result.data[i]);
                        }
                    }
                }
            }
            // else if (key === "departureDate" || key === "arrivalDate") {
            //     for(var i in result.data ){
            //         for (var key2 in result.data[i]) {
            //             if (key2 === key && qu[key] === (""+result.data[i][key2]).substring(0,10) ) {
            //                 res.push(result.data[i]);
            //             }
            //         }
            //     }
            // }
            result.data = res;
            res = [];
        }

        console.log(result.data)

        const data = result.data;
        if(data.length === 0)
            setMessage("No Result Were Found")
        else
             setMessage(null)


      
      setflightv(data);
    })
    .catch((err)=>{console.log(err)});
    

   },[flight])
    return (
        <div>
           <Header />
           <MainScreenAdmin  title = 'Return Flights' style = {{display : 'flex'}}>
           {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
           {message && <Link to={"/HomePageUser/" + idd}>Return To Home Page</Link>}
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
                <Link to={`/Showdetret/${data._id}`+"/"+ idd+"/"+params.params.class+"/"+params.params.seats+"/"+params.params.totalseats+"/"+adultsd+"/"+childrend+"/"+tnopd+"/"+params.params.user_id} >Reserve</Link>
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

export default ReturnFlight
