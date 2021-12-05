import React, { useEffect ,useState } from 'react'
import Header from './Header'
import MainScreen from './mainScreen'
import { Accordion, Badge, Button, Card ,AccordionButton} from "react-bootstrap";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import axios from 'axios';
import Services from './Services';



const HomePageUser = () => {

    const [reservations , setReservations] = useState([]); 
    const [message , setMessage] = useState(null);
    const [loading , setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const titlex = "Welcome Back "+ user.firstName + " "+ user.lastName

    const  deleteHandler = async(reservation) =>{
    if(window.confirm("Are you sure you want to cancel this flight?")){
        setLoading(true)
        console.log(reservation)
        await axios.post('http://localhost:8000/flights/greenSeats', reservation);
        axios.post('http://localhost:8000/reservations/cancel',{_id:reservation._id});
        setLoading(false);
        window.location = '/homePageUser/'+ user._id;
        setMessage("Flight is cancelled!")  
        
        const mailContent = "Your Flight To " + reservation.to + " Has Been Cancelled!"

        const mailReq = { mailContent : mailContent ,email: user.email , subject: "Cancelling you flight"}

        // axios.post("http://localhost:8000/sendMail", mailReq);
        
       
    }
    
    
    }

    const fetchFlights = async() => {
        const id = {user:user._id};
        console.log(id);
        const {data} = await axios.post('http://localhost:8000/reservations/getReservation',id);
        var res = [] ;
        var c = "";
        var luggage = 0 ;
        var price = 0 ;
        console.log(data);
        for(var i in data)
        {
            c = data[i].classChoosen ;
            
            var fid = data[i].flight;
            var flight = await axios.post('http://localhost:8000/flights/flightById',{flight : data[i].flight}) ; 
            data[i].to = flight.data.to ;
            data[i].from = flight.data.from ;
            data[i].flightNumber = flight.data.flightNumber;
            data[i].departureTime = flight.data.departureTime;
            data[i].arrivalTime = flight.data.arrivalTime;
            data[i].departureDate = flight.data.departureDate;
            data[i].arrivalDate = flight.data.arrivalDate;
            data[i].terminal = flight.data.terminal;
            data[i].arrivalDate = flight.data.arrivalDate;
            data[i].terminal = flight.data.terminal;
            data[i].airport = flight.data.airport;
            if(c === "First class")
            { 
                price = flight.data.firstSeatsPrice;
                luggage = flight.data.firstSeatsLuggage;
            }
            else if(c ===  "Economy class")  
            {    
                price = flight.data.economySeatsPrice;
                luggage = flight.data.economySeatsLuggage;
            }
            else
            {
                price = flight.data.businessSeatsPrice;
                luggage = flight.data.businessSeatsLuggage;
            }
            data[i].price = price ;
            data[i].luggage = luggage;
        }
        setReservations(data);
    }


    useEffect(() =>{
        fetchFlights();
    },[])

    return (
        <div>
            <Header />
            {message && <ErrorMessage variant="info">{message}</ErrorMessage>}
            {loading && <Loading />}   
            <MainScreen  title = {titlex} style = {{display : 'flex'}}>
                {
                    reservations.map((reservation) => (
                        <Accordion defaultActiveKey="0">
                        <Card style = {{ margin: 10}}>
                        <Card.Header style ={{display: "flex" ,  justifyContent:'center'}}>
                            <span style={{ color: "black", textDecoration: "none",
                                            flex: 1, cursor: "pointer",
                                            alignSelf: "center", fontSize: 18,
                                          }}>
                                              <Accordion.Header as ={Card.Text} variant = 'link' eventKey="0">
                                          Your Flight To {reservation.to}
                                              </Accordion.Header>
                                              </span>
                            <div>
                                <Button variant = "danger" className = "mx-2" onClick={() => deleteHandler(reservation )}> Cancel</Button>
                            </div>
                            </Card.Header>
                            <Accordion.Body eventKey= "0"> 
                            <Card.Body>
                            <h4>
                                    <Badge variant= 'sucess'>
                                         Flight Number: {reservation.flightNumber}
                                    </Badge>
                                </h4>
                                <blockquote className = "blockquite mb-0">
                                    <p>
                                        From: {reservation.from}
                                        Departure Time: {reservation.departureTime}
                                        <br/>
                                        Arrival Time: {reservation.arrivalTime}
                                        <br/>
                                        Departure Date: {reservation.departureDate.substring(0,10)}
                                        <br/>
                                        Arrival Date: {reservation.arrivalDate.substring(0,10)}
                                        <br/>
                                        Terminal: {reservation.terminal}
                                        <br/>
                                        Airport: {reservation.airport}
                                        <br/>
                                         {reservation.classChoosen}
                                        <br/>
                                        Baggage Allowance: {reservation.luggage}
                                        <br/>
                                        Number Of Passengers: {reservation.seatsChoosen[0].split(",").length}
                                        <br/>
                                        Chosen Seats: {reservation.seatsChoosen}
                                        <br/>
                                    </p>
                                    <footer className = "blockquote-footer" style={{fontWeight: 'bold' , fontSize: 16}}>
                                    <cite title = "Source Title">Price: {reservation.seatsChoosen[0].split(",").length * reservation.price}</cite>
                                    <br/>
                                        Have a safe and comfortable flight  
                                    </footer>
                                </blockquote>
                            </Card.Body>
                            </Accordion.Body>
                        </Card>
                        </Accordion>
                    ))
                }
  </MainScreen>
  <Services/>
        </div>
    )
}

export default HomePageUser
