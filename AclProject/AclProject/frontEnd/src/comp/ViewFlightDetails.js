import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import MainScreen from './mainScreen';
import Header from './Header';
import {Card , Tabs,Tab} from 'react-bootstrap';

const ViewFlightDetails = () => {
    const id = useParams();

    const user = JSON.parse(localStorage.getItem('userInfo'));
    
    const params = { "params": id };

    const [reser, setReser] = useState({flight:"" ,user:"" , classChoosen: "" , seatsChoosen : []})
    const [reservedFlight, setReservedFlight] = useState({flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"",  firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: ""})
    


    const titlex = "Flight Details";
    const t1 = 'Flight Number: ' + reservedFlight.flightNumber ;
    const t2 = 'Departure Time: '+ reservedFlight.departureTime;
    const t3 = 'Arrival Time: ' + reservedFlight.arrivalTime ;
    const t4 = 'Departure Date: '+ reservedFlight.departureDate.substring(0,10) ;
    const t5 = 'Arrival Date: '+ reservedFlight.arrivalDate.substring(0,10);
    const t6 = 'Terminal: '+ reservedFlight.terminal;
    const t7 = 'Airport: '+ reservedFlight.airport;
    // const classChoosen = reser.classChoosen;
    const classChoosen  ="";
    var t = "";
    var price = 0;
    var luggage = 0;
    if(classChoosen === "First class")
       { 
           t = 'Cabin: First class';
           price = reservedFlight.firstSeatsPrice;
           luggage = reservedFlight.firstSeatsLuggage;
       }
    else if(classChoosen ===  "Economy class")  
    {    
        t = 'Cabin: Economy class';
        price = reservedFlight.economySeatsPrice;
        luggage = reservedFlight.economySeatsLuggage;
    }
    else
    {
        t = 'Cabin: Business class';
        price = reservedFlight.businessSeatsPrice;
        luggage = reservedFlight.businessSeatsLuggage;
    }
    const t8 = t ;
    // var seats = reser.seatsChoosen.toString();
    // const t9 = 'Number of passengers: '+ seats.split(",").length;
    const t9 = ""
    // const t10 = 'Seats chosen: '+ reser.seatsChoosen[0].split(",");
    const t10 = ""
    const t11 = 'Baggage allowance:: '+luggage;
    const a =  reservedFlight.from;
    const b =  reservedFlight.to;
    const c = t9 * price;

    const fetchFlights = async() => {
        
        const {reservation} = await axios.get('http://localhost:8000/reservations/reservation', params);
        setReser(reservation)
        console.log(reservation)

        const {flight} = await axios.get('http://localhost:8000/flights/flight',  {_id: reser._id});
        setReservedFlight(flight);
        console.log(reservedFlight);

       
    }


    useEffect(() => {;
        fetchFlights()    
    },[]);

    return (
        <div>
            <Header />
            <MainScreen  title = {titlex}> 
            <Card border="primary" style = {{ margin: 10 } } >
                        
                        <Card.Header style ={{display: "flex"}}>
                        <span style={{ color: "steelblue ", textDecoration: "none",
                                            flex: 1, cursor: "pointer",
                                            alignSelf: "center", fontSize: 22, fontWeight: 'bold'
                                          }} >{t1}</span>
                            </Card.Header>
                            <Card.Body style ={{fontSize: 18, color: "steelblue" }}>
                                {'From: '} {a}
                                <br/>
                                {'To: '}{b}
                                <br/>
                                {t8}
                                <br/>
                                {t2}
                                <br/>
                                {t3}
                                <br/>
                                {t4}
                                <br/>
                                {t5}
                                <br/>
                                {t6}
                                <br/>
                                {t7}
                                <br/>
                                {t9}
                                <br/>
                                {t10}
                                <br/>
                                {t11}
                                <br/>

                            </Card.Body>
                            <Card.Footer style ={{display: "flex" }}>
                        <span style={{ color: "steelblue ", textDecoration: "none",
                                            flex: 1, cursor: "pointer",
                                            alignSelf: "center", fontSize: 22, fontWeight: 'bold'
                                          }} >{"Total Price: "}{c}</span>
                            </Card.Footer>
                        </Card>
            </MainScreen>
        </div>
    )
}

export default ViewFlightDetails
