import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from'./Header'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import MainScreen from './mainScreen'

function ShowDetails() {
    const id=useParams();
    const options = [];
    const params = { "params": id };
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: "", firstSeatsAvailablePositions: [], economySeatsAvailablePositions: [], businessSeatsAvailablePositions: []});
    const [Class, setClass] = useState({ key: ""})
    var [children, setchild] = useState(0)
    var [adults, setadults] = useState(0)

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
    if(flight.firstSeatsAvailable > 0)
        options.push("First class");
    if(flight.economySeatsAvailable > 0)
        options.push("Economy class");
    if(flight.businessSeatsAvailable > 0)
        options.push("Business class");

    const HandleSubmit = (e) => {
        var tnop=Number(adults)+Number(children);
        if(Class.key === ""){
            e.preventDefault();
            alert("Select a class.");
        }
        else if(tnop==0){
            e.preventDefault();
            alert("number of seats needed can not be 0");
        }
        
        else{
            
            e.preventDefault();
            if(Class.key === "First class"){
                if(tnop>flight.firstSeatsAvailable){
                    alert("number of seats needed can not be bigger than number of available seats");
                }
                else{
           
                    window.location.href = "http://localhost:3000/chooseSeats/"+params.params._id+"/"+Class.key+"/"+adults+"/"+children+"/"+tnop+"/"+params.params.user_id;
                }
                
              }
               else if(Class.key === "Economy class"){
                if(tnop>flight.economySeatsAvailable){
                    alert("number of seats needed can not be bigger than number of available seats");
                }
                else{
           
                    window.location.href = "http://localhost:3000/chooseSeats/"+params.params._id+"/"+Class.key+"/"+adults+"/"+children+"/"+tnop+"/"+params.params.user_id;
                }
            
               }   
               else if(Class.key === "Business class"){
                if(tnop>flight.businessSeatsAvailable){
                    alert("number of seats needed can not be bigger than number of available seats");
                }
                else{
                    localStorage.setItem("depFlight", JSON.stringify(flight));
                    window.location.href = "http://localhost:3000/chooseSeats/"+params.params._id+"/"+Class.key+"/"+adults+"/"+children+"/"+tnop+"/"+params.params.user_id;
                }
            }
            }
    }

    useEffect(() => {
        console.log(params);
        axios.get('http://localhost:8000/flights/flight', params).then(resp => { setflight(resp.data) }).catch((err) => { console.log(err) });
        // alert(flight.firstSeatsAvailablePositions.length)
    },[]);

    return (
        <div>
             <Header /> <br/>
             <MainScreen  title = "Flight Details" style = {{display : 'flex'}}>
            <form onSubmit={(e) => {
                HandleSubmit(e);

            }}>

                <label >Flight Number: </label>
                <label > {flight.flightNumber}</label><br/><br/>                

                <label >Departure Time:  </label>
                <label > {flight.departureTime}</label><br/><br/>   
               
                <label> Arrival Time: </label>
                <label > {flight.arrivalTime}</label><br/><br/>   
                
                <label> Departure Date: </label>
                <label> {(flight.departureDate).substring(0,10)}</label><br/><br/>   
                
                <label> Arrival Date: </label>
                <label>{(flight.arrivalDate).substring(0,10)}</label><br/><br/>    
                
                <label> Trip duration: </label>
                <label>{duration}</label><br/><br/>
                
                <label> Terminal: </label>
                <label> {flight.terminal}</label><br/><br/> 

                <label><b>First Class:</b></label><br/>

                <label> Seats available: </label>
                <label> {flight.firstSeatsAvailable}</label><br/>

                <label> Baggage allowance: </label>
                <label> {flight.firstSeatsLuggage} Kgs</label><br/>

                <label> Price: </label>
                <label> {flight.firstSeatsPrice} Euros</label><br/><br/>
                
                <label><b>Economy Class:</b></label><br/>

                <label> Seats available: </label>
                <label> {flight.economySeatsAvailable}</label><br/>

                <label> Baggage allowance: </label>
                <label> {flight.economySeatsLuggage} Kgs</label><br/>

                <label> Price: </label>
                <label> {flight.economySeatsPrice}</label><br/><br/>
                
                <label><b>Business Class:</b></label><br/>

                <label> Seats available: </label>
                <label> {flight.businessSeatsAvailable}</label><br/>

                <label> Baggage allowance: </label>
                <label> {flight.businessSeatsLuggage} Kgs</label><br/>

                <label> Price: </label>
                <label> {flight.businessSeatsPrice} Euros</label><br/><br/>
                
                <label> Airport: </label>
                <label> {flight.airport}</label><br/><br/> 
               
                <label> From: </label>
                <label> {flight.from}</label><br/><br/> 
                
                <label> To: </label>
                <label> {flight.to}</label><br/><br/> 

                <label> Adults: </label><br />
                <input type="number" min = "0" id="AdultsNumber" name="AdultsNumber" value={adults} onChange={(e) => { setadults(e.target.value) }} ></input><br /><br></br>

                <label> Children: </label><br />
                <input type="number" min = "0" id="ChildrenNumber" name="ChildrenNumber" value={children} onChange={(e) => { setchild(e.target.value) }} ></input><br /><br></br>

                
                <Dropdown options={options} placeholder="Select a class" onChange={(e) => { setClass({key: e.value }); }}></Dropdown><br/> 

                <input type="submit" value="Proceed to reservation"></input>

            </form>
            </MainScreen>
        </div>
    )
}

export default ShowDetails;