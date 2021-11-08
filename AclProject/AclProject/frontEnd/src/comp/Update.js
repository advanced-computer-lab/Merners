import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from'./Navbar'

function Update() {
    const id=useParams();
    
    //const flightIdPassed = this.props.location;
    const params = { "params": id };
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", economySeatsAvailable: "", businessSeatsAvailable: "", airport: "", from: "", to: "" })
   // const [flight2, setflight2] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "", firstSeatsAvailable: "", economySeatsAvailable: "", businessSeatsAvailable: "", airport: "", from: "", to: "" })
    // const filt = (flight, flight2) => {
    //     if (flight2.flightNumber === "") {
    //         flight2.flightNumber = flight.flightNumber;
           
    //     }
    
    // }
    const HandleSubmit = (e) => {
        e.preventDefault();
        alert("lollllll");
        axios.post('http://localhost:8000/flights/update', flight).then(() => console.log("posted sucsessfully")).catch((err) => {console.log(err)});
        window.location.href = "http://localhost:3000/edit"
    }



    useEffect(() => {
       // console.log(id)
        axios.get('http://localhost:8000/flights/flight', params).then(resp => { setflight(resp.data) }).catch((err) => { console.log(err) });

    },[]);

    return (
        <div>
             <Navbar />
            <form onSubmit={(e) => {
                HandleSubmit(e)

            }}>

                <label >Flight Number: </label><br />
                <input type="text" id="flightNum" name="flightNum" value={flight.flightNumber} onChange={(e) => { setflight({ ...flight, flightNumber: e.target.value }) }} required></input><br /><br />
                {/* <input type="text" id="flightNum2" name="flightNum2" value={flight2.flightNumber} onChange={(e) => { setflight2({ ...flight2, flightNumber: e.target.value }) }}></input><br /><br /> */}


                <label >Departure Time:  </label><br />
                <input type="time" id="DepTime" name="DepTime" value={flight.departureTime} onChange={(e) => { setflight({ ...flight, departureTime: e.target.value }) }} required></input><br /><br />
                {/* <input type="time" id="DepTime2" name="DepTime2" value={flight2.departureTime} onChange={(e) => { setflight2({ ...flight2, departureTime: e.target.value }) }}></input><br /><br /> */}

                <label> Arrival Time:</label><br />
                <input type="time" id="ArvTime" name="ArvTime" value={flight.arrivalTime} onChange={(e) => { setflight({ ...flight, arrivalTime: e.target.value }) }} required></input><br /><br />
                {/* <input type="time" id="ArvTime2" name="ArvTime2" value={flight2.arrivalTime} onChange={(e) => { setflight2({ ...flight2, arrivalTime: e.target.value }) }}></input><br /><br /> */}

                <label> Departure Date:</label><br />
                <label> Old date:{flight.departureDate}</label><br />
                <input type="date" id="DepDt" name="DepDt" value={flight.departureDate} onChange={(e) => { setflight({ ...flight, departureDate: e.target.value }) }}></input><br /><br />
                {/* <input type="date" id="DepDt2" name="DepDt2" value={flight2.departureDate} onChange={(e) => { setflight2({ ...flight2, departureDate: e.target.value }) }}></input><br /><br /> */}

                <label> Arrival Date: </label><br />
                <label> Old date:{flight.arrivalDate}</label><br />
                <input type="date" id="ArvDt" name="ArvDt" value={flight.arrivalDate} onChange={(e) => { setflight({ ...flight, arrivalDate: e.target.value }) }}></input><br /><br />
                {/* <input type="date" id="ArvDt2" name="ArvDt2" value={flight2.arrivalDate} onChange={(e) => { setflight2({ ...flight2, arrivalDate: e.target.value }) }}></input><br /><br /> */}
               
                <label> Terminal : </label><br />
                <input type="number" id="terminal" name="terminal" value={flight.terminal} onChange={(e) => { setflight({ ...flight, terminal: e.target.value }) }} required></input><br /><br />

                <label> First class seats available: : </label><br />
                <input type="number" id="firstSeatsAvailable" name="firstSeatsAvailable" value={flight.firstSeatsAvailable} onChange={(e) => { setflight({ ...flight, firstSeatsAvailable: e.target.value }) }} required></input><br /><br />
                {/* <input type="number" id="firstSeatsAvailable2" name="firstSeatsAvailable2" value={flight2.firstSeatsAvailable} onChange={(e) => { setflight2({ ...flight2, firstSeatsAvailable: e.target.value }) }}></input><br /><br /> */}

                <label> Economy class seats available: </label><br />
                <input type="number" id="EcoSeats" name="EcoSeats" value={flight.economySeatsAvailable} onChange={(e) => { setflight({ ...flight, economySeatsAvailable: e.target.value }) }} required></input><br /><br></br>
                {/* <input type="number" id="EcoSeats2" name="EcoSeats2" value={flight2.economySeatsAvailable} onChange={(e) => { setflight2({ ...flight2, economySeatsAvailable: e.target.value }) }}></input><br /><br></br> */}

                <label> Business class seats available: </label><br />
                <input type="number" id="BussSeats" name="BussSeats" value={flight.businessSeatsAvailable} onChange={(e) => { setflight({ ...flight, businessSeatsAvailable: e.target.value }) }} required></input><br /><br></br>
                {/* <input type="number" id="BussSeats2" name="BussSeats2" value={flight2.businessSeatsAvailable} onChange={(e) => { setflight2({ ...flight2, businessSeatsAvailable: e.target.value }) }}></input><br /><br></br> */}

                <label> Airport: </label><br />
                <input type="text" id="airport" name="airport" value={flight.airport} onChange={(e) => { setflight({ ...flight, airport: e.target.value }) }} required></input><br /><br></br>
                {/* <input type="text" id="airport2" name="airport2" value={flight2.airport} onChange={(e) => { setflight2({ ...flight2, airport: e.target.value }) }}></input><br /><br></br> */}

                <label> From :</label><br />
                <input type="text" id="from" name="from" value={flight.from} onChange={(e) => { setflight({ ...flight, from: e.target.value }) }} required></input><br /><br></br>
                {/* <input type="text" id="from2" name="from2" value={flight2.from} onChange={(e) => { setflight2({ ...flight2, from: e.target.value }) }}></input><br /><br></br> */}

                <label> To : </label><br />
                <input type="text" id="to" name="to" value={flight.to} onChange={(e) => { setflight({ ...flight, to: e.target.value }) }} required></input><br /><br></br>
                {/* <input type="text" id="to2" name="to2" value={flight2.to} onChange={(e) => { setflight2({ ...flight2, to: e.target.value }) }}></input><br /><br></br> */}


                <input type="submit" value="submit"></input>

            </form>

        </div>
    )
}

export default Update