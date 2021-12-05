import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from'./Header'

function FinalSumm() {
    const id=useParams();
  
    const params = { "params": id };
    const [flightr, setflightr] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: ""});
    const [tpr, settpr] = useState(0);
    const [bar, setbar] = useState("");
    const idddr = {"params":{"_id":params.params._idr}};
    const axiosparams = {"params":{"_id":params.params._id, "class":params.params.class, "seats":params.params.seats}};
    const axiosparamsreturn = {"params":{"_id":params.params._idr, "class":params.params.classr, "seats":params.params.seatsr}};
    const arrivalYearr = Number(flightr.arrivalDate.substring(0,4));
    const departureYearr = Number(flightr.departureDate.substring(0,4));
    const arrivalMonr = Number(flightr.arrivalDate.substring(5,7));
    const departureMonr = Number(flightr.departureDate.substring(5,7));
    const arrivalDayr = Number(flightr.arrivalDate.substring(8,10));
    const departureDayr = Number(flightr.departureDate.substring(8,10));
    const arrivalHourr = Number(flightr.arrivalTime.substring(0,2));
    const departureHourr = Number(flightr.departureTime.substring(0,2));
    const arrivalMinr = Number(flightr.arrivalTime.substring(3));
    const departureMinr = Number(flightr.departureTime.substring(3));
    const dr=((arrivalHourr*60+arrivalMinr)-(departureHourr*60+departureMinr)+((arrivalDayr-departureDayr)*24*60))+((arrivalMonr-departureMonr)*30*24*60)+((arrivalYearr-departureYearr)*12*30*24*60);
    const hoursr = Math.floor(dr / 60);
    const minutesr = dr % 60;
    const durationr= hoursr+" hours and "+minutesr+ " minutes";
    
    const [depRes, setReservationDep] = useState();
    const [retRes, setReservationRet] =useState();


    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: ""});
    const [tp, settp] = useState(0);
    const [ba, setba] = useState("");
    const dFlight = JSON.parse(localStorage.getItem('depFlight'));
    const rFlight = JSON.parse(localStorage.getItem('reFlight'));
    const iddd = {"params":{"_id":params.params._id}}; 
    const arrivalYear = Number(flight.arrivalDate.substring(0,4));
    const departureYear = Number(flight.departureDate.substring(0,4));
    const arrivalMon = Number(flight.arrivalDate.substring(5,7));
    const departureMon = Number(flight.departureDate.substring(5,7));
    const arrivalDay = Number(flight.arrivalDate.substring(8,10));
    const departureDay = Number(flight.departureDate.substring(8,10));
    const arrivalHour = Number(flight.arrivalTime.substring(0,2));
    const departureHour = Number(flight.departureTime.substring(0,2));
    const arrivalMin = Number(flight.arrivalTime.substring(3));
    const departureMin = Number(flight.departureTime.substring(3));
    const d=((arrivalHour*60+arrivalMin)-(departureHour*60+departureMin)+((arrivalDay-departureDay)*24*60))+((arrivalMon-departureMon)*30*24*60)+((arrivalYear-departureYear)*12*30*24*60);
    const hours = Math.floor(d / 60);
    const minutes = d % 60;
    const duration= hours+" hours and "+minutes+ " minutes";

    const  cancel = () => {
        if(window.confirm("Are you sure that you want to cancel your reservation? ")){
            alert("Reservation is canceled :(")
            localStorage.removeItem('depFlight');
            localStorage.removeItem('reFlight');
            window.location.href = "http://localhost:3000/homePageUser/"+params.params.user_id;  
        }  
        
        
      
    }

    const  HandleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/reservations/create', depRes).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
        axios.post('http://localhost:8000/reservations/create', retRes).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
        axios.post('http://localhost:8000/flights/redSeats', axiosparams).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
        axios.post('http://localhost:8000/flights/redSeats', axiosparamsreturn).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
        alert("Reservation made succsessfully, An Email will be sent Shortly");
       
        localStorage.removeItem('depFlight');
        localStorage.removeItem('reFlight');

        const mailContent = "Your Flight To " + depRes.from + " Has Been Reserved!";
        const user = JSON.parse(localStorage.getItem('userInfo'));

        const mailReq = { mailContent : mailContent , email: user.email , subject: "confirming your flight"}
        
        // axios.post("http://localhost:8000/sendMail", mailReq);

        window.location.href = "http://localhost:3000/homePageUser/"+user._id;
      
    }

    useEffect(() => {
        console.log(params);
   
        axios.get('http://localhost:8000/flights/flight', idddr).then(resp => { setflightr(resp.data) }).catch((err) => { console.log(err) });
        axios.get('http://localhost:8000/flights/flight', iddd).then(resp => { setflight(resp.data) }).catch((err) => { console.log(err) });
       
    },[]);
  useEffect(()=>{
    if(params.params.classr === "First class"){
        setbar(flightr.firstSeatsLuggage);
        settpr(flightr.firstSeatsPrice*(params.params.totalseatsr));
       
      }
       else if(params.params.classr === "Economy class"){
        setbar(flightr.economySeatsLuggage);
        settpr(flightr.economySeatsPrice*(params.params.totalseatsr));
       }   
       else if(params.params.classr === "Business class"){
        setbar(flightr.businessSeatsLuggage);
        settpr(flightr.businessSeatsPrice*(params.params.totalseatsr));
    }

    if(params.params.class === "First class"){
        setba(flight.firstSeatsLuggage);
        settp(flight.firstSeatsPrice*(params.params.totalseats));
       
      }
       else if(params.params.class === "Economy class"){
        setba(flight.economySeatsLuggage);
        settp(flight.economySeatsPrice*(params.params.totalseats));
       }   
       else if(params.params.class === "Business class"){
        setba(flight.businessSeatsLuggage);
        settp(flight.businessSeatsPrice*(params.params.totalseats));
    }
    var x = { flight: params.params._idr, user: params.params.user_id, classChoosen: params.params.classr, seatsChoosen:params.params.seatsr}
    var y = { flight: params.params._id, user: params.params.user_id, classChoosen: params.params.class, seatsChoosen:params.params.seats}
    setReservationDep(y)
    setReservationRet(x)


  },[flight]);

    return (
        <div>
             <Header /> <br/>
            <form onSubmit={(e) => {
                HandleSubmit(e);

            }}>
                <table style={{fontSize:"22.5px", marginLeft:"315px"}}>
                    <tr style={{height:"40px"}}>
                        <td style={{borderRight:"1px solid"}}><h2>Return</h2></td>
                        <td><h2>Depart</h2></td></tr>
                    <tr>
                        <td style={{borderRight:"1px solid"}}><label >Flight Number: </label>
                        <label > {flightr.flightNumber}</label></td>

                        <td><label >Flight Number: </label>
                        <label > {flight.flightNumber}</label></td></tr>

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Departure Date: </label>
                        <label> {(flightr.departureDate).substring(0,10)}</label></td>

                        <td><label> Departure Date: </label>
                        <label> {(flight.departureDate).substring(0,10)}</label></td></tr>

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label >Departure Time:  </label>
                        <label > {flightr.departureTime}</label></td>
                        
                        <td><label >Departure Time:  </label>
                        <label > {flight.departureTime}</label></td></tr>   
                
                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Arrival Date: </label>
                        <label>{(flightr.arrivalDate).substring(0,10)}</label></td>
                        
                        <td><label> Arrival Date: </label>
                        <label>{(flight.arrivalDate).substring(0,10)}</label></td></tr>   
                
               
                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Arrival Time: </label>
                        <label > {flightr.arrivalTime}</label></td>
                        
                        <td><label> Arrival Time: </label>
                        <label > {flight.arrivalTime}</label></td></tr>   
                
               
                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Trip duration: </label>
                        <label>{durationr}</label></td>
                        
                        <td><label> Trip duration: </label>
                        <label>{duration}</label></td></tr>

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> From: </label>
                        <label> {flightr.from}</label></td>
                        
                        <td><label> From: </label>
                        <label> {flight.from}</label></td></tr> 
                
                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> To: </label>
                        <label> {flightr.to}</label></td>
                        
                        <td><label> To: </label>
                        <label> {flight.to}</label></td></tr> 

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Airport: </label>
                        <label> {flightr.airport}</label></td>
                        
                        <td><label> Airport: </label>
                        <label> {flight.airport}</label></td></tr> 
                
                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Terminal: </label>
                        <label> {flightr.terminal}</label></td>
                        
                        <td><label> Terminal: </label>
                        <label> {flight.terminal}</label></td></tr> 

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label><b>{params.params.classr}</b></label></td>
                        
                        <td><label><b>{params.params.class}</b></label></td></tr>


                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Baggage allowance: </label>
                        <label> {bar} Kgs</label></td>
                        
                        <td><label> Baggage allowance: </label>
                        <label> {ba} Kgs</label></td></tr>

    

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Choosen Seats: </label>
                        <label> {params.params.seatsr}</label></td>
                        
                        <td><label> Choosen Seats: </label>
                        <label> {params.params.seats}</label></td></tr> 

                    <tr>
                        <td style={{borderRight:"1px solid"}}><label> Total Price: </label>
                        <label> {tpr} Euros</label></td>
                        
                        <td><label> Total Price: </label>
                        <label> {tp} Euros</label></td></tr> 
                </table>
                <input type="submit" value="Reserve"></input>
            </form>
            <br></br>
            <button onClick = {() => {cancel()}} value="Cancel">Cancel</button> 

         

        </div>
    )
}
export default FinalSumm
