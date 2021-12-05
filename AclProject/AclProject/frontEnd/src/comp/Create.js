import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from'./Navbar'
import {useParams} from 'react-router-dom'
import MainScreen from './mainScreen'

function Create() {
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: ""});
    const id=useParams();

    const params = { "params": id };

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
    const duration=((arrivalHour*60+arrivalMin)-(departureHour*60+departureMin)+((arrivalDay-departureDay)*24*60))+((arrivalMon-departureMon)*30*24*60)+((arrivalYear-departureYear)*12*30*24*60);
    
    const HandleSubmit = (e) => {
        if(duration <= 0) {
            alert("The flight cannot arrive before departing.")
            e.preventDefault();
        }
        else{
            alert("Flight is added successfully");
            
            Axios.post('http://localhost:8000/flights/create', flight).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
        }
    }

    return (
        <div>
            <Navbar />
            <MainScreen  title = {"Create New Flight"}>
            <form onSubmit={(e) => {
                    HandleSubmit(e)
                }}>

                <label >Flight Number: </label><br />
                <input type="text" id="flightNum" name="flightNum" value={flight.flightNumber} onChange={(e) => { setflight({ ...flight, flightNumber: e.target.value }) }} required></input><br /><br />

                <label >Departure Time:  </label><br />
                <input type="time" id="DepTime" name="DepTime" value={flight.departureTime} onChange={(e) => { setflight({ ...flight, departureTime: e.target.value }) }} required></input><br /><br />

                <label> Arrival Time:</label><br />
                <input type="time" id="ArvTime" name="ArvTime" value={flight.arrivalTime} onChange={(e) => { setflight({ ...flight, arrivalTime: e.target.value }) }} required></input><br /><br />

                <label> Departure Date:</label><br />
                <input type="date" id="DepDt" name="DepDt" value={flight.departureDate} onChange={(e) => { setflight({ ...flight, departureDate: e.target.value }) }} required></input><br /><br />

                <label> Arrival Date: </label><br />
                <input type="date" id="ArvDt" name="ArvDt" value={flight.arrivalDate} onChange={(e) => { setflight({ ...flight, arrivalDate: e.target.value }) }} required></input><br /><br />
            
                <label> Terminal : </label><br />
                <input type="number" id="terminal" min = "0" name="terminal" value={flight.terminal} onChange={(e) => { setflight({ ...flight, terminal: e.target.value }) }} required></input><br /><br />

                <label>First class seats available: </label><br />
                <input type="number" min = "0" id="firstSeatsAvailable" name="firstSeatsAvailable" value={flight.firstSeatsAvailable} onChange={(e) => { setflight({ ...flight, firstSeatsAvailable: e.target.value }) }} required></input><br /><br />

                <label>First class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="firstSeatsLuggage" name="firstSeatsLuggage" value={flight.firstSeatsLuggage} onChange={(e) => { setflight({ ...flight, firstSeatsLuggage: e.target.value }) }} required></input><br /><br />

                <label>First class price: </label><br />
                <input type="number" min = "0" id="firstSeatsPrice" name="firstSeatsPrice" value={flight.firstSeatsPrice} onChange={(e) => { setflight({ ...flight, firstSeatsPrice: e.target.value }) }} required></input><br /><br />

                <label> Economy class seats available: </label><br />
                <input type="number" min = "0" id="economySeatsAvailable" name="economySeatsAvailable" value={flight.economySeatsAvailable} onChange={(e) => { setflight({ ...flight, economySeatsAvailable: e.target.value }) }} required></input><br /><br></br>

                <label> Economy class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="economySeatsLuggage" name="economySeatsLuggage" value={flight.economySeatsLuggage} onChange={(e) => { setflight({ ...flight, economySeatsLuggage: e.target.value }) }} required></input><br /><br></br>

                <label> Economy class price: </label><br />
                <input type="number" min = "0" id="economySeatsPrice" name="economySeatsPrice" value={flight.economySeatsPrice} onChange={(e) => { setflight({ ...flight, economySeatsPrice: e.target.value }) }} required></input><br /><br></br>

                <label> Business class seats available: </label><br />
                <input type="number" min = "0" id="businessSeatsAvailable" name="businessSeatsAvailable" value={flight.businessSeatsAvailable} onChange={(e) => { setflight({ ...flight, businessSeatsAvailable: e.target.value }) }} required></input><br /><br></br>

                <label> Business class Luggage Allowance: </label><br />
                <input type="number" min = "0" id="businessSeatsLuggage" name="businessSeatsLuggage" value={flight.businessSeatsLuggage} onChange={(e) => { setflight({ ...flight, businessSeatsLuggage: e.target.value }) }} required></input><br /><br></br>

                <label> Business class price: </label><br />
                <input type="number" min = "0" id="businessSeatsPrice" name="businessSeatsPrice" value={flight.businessSeatsPrice} onChange={(e) => { setflight({ ...flight, businessSeatsPrice: e.target.value }) }} required></input><br /><br></br>

                <label> Airport: </label><br />
                <input type="text" id="airport" name="airport" value={flight.airport} onChange={(e) => { setflight({ ...flight, airport: e.target.value }) }} required></input><br /><br></br>

                <label> From :</label><br />
                <input type="text" id="from" name="from" value={flight.from} onChange={(e) => { setflight({ ...flight, from: e.target.value }) }} required></input><br /><br></br>

                <label> To : </label><br />
                <input type="text" id="to" name="to" value={flight.to} onChange={(e) => { setflight({ ...flight, to: e.target.value }) }} requiredAZ></input><br /><br></br>


                <input type="submit" value="submit"></input>

            </form>
        </MainScreen>
        </div>
    )
}

export default Create