import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from'./Header'
import 'react-dropdown/style.css';
import MainScreen from './mainScreen'

function DepSumm() {
    const id=useParams();
  
    const params = { "params": id };
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: ""});
    const [tp, settp] = useState(0);
    const [ba, setba] = useState("");
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
    
    const  HandleSubmit = (e) => {
        e.preventDefault();
        var adultsd=params.params.adnod;
        var childrend=params.params.chnod;
        var tnopd=params.params.tnopd;
        window.location.href = "http://localhost:3000/ReturnFlight/"+params.params._id+"/"+params.params.class+"/"+params.params.seats+"/"+params.params.totalseats+"/"+adultsd+"/"+childrend+"/"+tnopd+"/"+params.params.user_id;
      
    }

    useEffect(() => {
        console.log(params);
   
       // console.log(flight.firstSeatsPrice*(params.params.totalseats));
        axios.get('http://localhost:8000/flights/flight', params).then(resp => { setflight(resp.data) }).catch((err) => { console.log(err) });
       
    },[]);
  useEffect(()=>{
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

  },[flight]);

    return (
        <div>
             <Header /> <br/>
             <MainScreen  title = "Departure Flight Details" style = {{display : 'flex'}}>
            <form onSubmit={(e) => {
                HandleSubmit(e);

            }}>

                <label >Flight Number: </label>
                <label > {flight.flightNumber}</label><br/><br/>  

                 <label> Departure Date: </label>
                <label> {(flight.departureDate).substring(0,10)}</label><br/><br/> 

                <label >Departure Time:  </label>
                <label > {flight.departureTime}</label><br/><br/>    
                
                <label> Arrival Date: </label>
                <label>{(flight.arrivalDate).substring(0,10)}</label><br/><br/>    
                
               
                <label> Arrival Time: </label>
                <label > {flight.arrivalTime}</label><br/><br/>   
                
               
                <label> Trip duration: </label>
                <label>{duration}</label><br/><br/>

                <label> From: </label>
                <label> {flight.from}</label><br/><br/> 
                
                <label> To: </label>
                <label> {flight.to}</label><br/><br/> 

                <label> Airport: </label>
                <label> {flight.airport}</label><br/><br/> 
                
                <label> Terminal: </label>
                <label> {flight.terminal}</label><br/><br/> 

                <label><b>{params.params.class}</b></label><br/>


                <label> Baggage allowance: </label>
                <label> {ba} Kgs</label><br/>

    

                <label> Choosen Seats: </label>
                <label> {params.params.seats}</label><br/><br/> 

                <label> Total Price: </label>
                <label> {tp} Euros</label><br/><br/> 
                <input type="submit" value="Reserve return flight"></input> 
            </form>
         
    </MainScreen>
        </div>
    )
}
export default DepSumm
