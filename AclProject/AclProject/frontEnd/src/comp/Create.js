import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from'./Navbar'

function Create() {
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "",terminal:"", economySeatsAvailable: "", businessSeatsAvailable: "", airport: "", from: "", to: "" });
    const HandleSubmit = () => {
        alert("lollllll");
        Axios.post('http://localhost:8000/flights/create', flight).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
    }

    return (
        <div>
             <Navbar />
            <form onSubmit={() => {
                    HandleSubmit()
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
                <input type="number" id="terminal" name="terminal" value={flight.terminal} onChange={(e) => { setflight({ ...flight, terminal: e.target.value }) }} required></input><br /><br />

                <label> First class Seats Available : </label><br />
                <input type="number" id="firstSeatsAvailable" name="firstSeatsAvailable" value={flight.firstSeatsAvailable} onChange={(e) => { setflight({ ...flight, firstSeatsAvailable: e.target.value }) }} required></input><br /><br />

                <label> Economy class seats available: </label><br />
                <input type="number" id="EcoSeats" name="EcoSeats" value={flight.EconomySeatsAvailable} onChange={(e) => { setflight({ ...flight, economySeatsAvailable: e.target.value }) }} required></input><br /><br></br>

                <label> Business seats available: </label><br />
                <input type="number" id="BussSeats" name="BussSeats" value={flight.BusinessSeatsAvailable} onChange={(e) => { setflight({ ...flight, businessSeatsAvailable: e.target.value }) }} required></input><br /><br></br>

                <label> Airport: </label><br />
                <input type="text" id="airport" name="airport" value={flight.airport} onChange={(e) => { setflight({ ...flight, airport: e.target.value }) }} required></input><br /><br></br>

                <label> From :</label><br />
                <input type="text" id="from" name="from" value={flight.from} onChange={(e) => { setflight({ ...flight, from: e.target.value }) }} required></input><br /><br></br>

                <label> To : </label><br />
                <input type="text" id="to" name="to" value={flight.to} onChange={(e) => { setflight({ ...flight, to: e.target.value }) }} requiredAZ></input><br /><br></br>


                <input type="submit" value="submit"></input>

            </form>

        </div>
    )
}

export default Create