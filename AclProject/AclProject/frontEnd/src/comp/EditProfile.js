import React, { useState ,useEffect } from 'react';
import { Form , Col ,Row ,Button} from 'react-bootstrap';
import MainScreen from './mainScreen';
import axios from 'axios';
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Header from './Header';



const EditProfile = () => {
    
    const user = JSON.parse(localStorage.getItem('userInfo'));

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [homeAddress , setHomeAddress] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [passportNumber , setPassportNumber] = useState("");
    const [message , setMessage] = useState(null);
    const [error , setError] = useState(false);
    const [loading , setLoading] = useState(false);
    
    useEffect(() => {
       setFirstName(user.firstName);
       setLastName(user.lastName);
       setEmail(user.email);
       setHomeAddress(user.homeAddress);
       setPhoneNumber(user.phoneNumber);
       setPassportNumber(user.passportNumber);
    },[]);

    const submitHandler = async(e) => {
        e.preventDefault();
        
        try
        {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            setLoading(true);
            const id = user._id;
            const username = user.username;
            const password = user.password;
            const reservedFlights = user.reservedFlights;
            const { data } = await axios.post(
                "http://localhost:8000/users/updateUser",
                {_id : id,
                username : username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                homeAddress: homeAddress,
                phoneNumber: phoneNumber,
                passportNumber: passportNumber,
                password: password,
                reservedFlights : reservedFlights,},
                config 
                );
                setLoading(false);
                setMessage("Profile is updated successfully")
                if(data == null)
                    setError("email already exits ")
                    
                const updatedUser = {_id : id,
                    username : username,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    homeAddress: homeAddress,
                    phoneNumber: phoneNumber,
                    passportNumber: passportNumber,
                    password: password,
                    reservedFlights : reservedFlights, Token: user.Token}

                localStorage.setItem("userInfo", JSON.stringify(updatedUser));
        }
        catch(error)
        {
            setLoading(false);
            setError(error.message);
        }



    }


    return (
        <div>
             <Header />
        <MainScreen title = "EDIT PROFILE">
            <div className = "loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="info">{message}</ErrorMessage>}
            {loading && <Loading />}    
                <Form onSubmit = {submitHandler}>
                    
                    <Form.Label>First Name:</Form.Label>
                     <Form.Control
                         type ="fname"
                         value = {firstName}
                         placeHolder = "Enter First Name"
                         onChange= {(e) => {setFirstName(e.target.value);setMessage(null)}}  />
                         <Form.Label>Last Name:</Form.Label>
                     <Form.Control
                         type ="lname"
                         value = {lastName}
                         placeHolder = "Enter Last Name"
                         onChange ={(e) => {setLastName(e.target.value); setMessage(null)}}/>
                      <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value = {email}
                      placeholder="Enter email"
                      onChange = {(e) => {setEmail(e.target.value); setMessage(null)}}/>
                       </Form.Group>
                    <Form.Label>Home Address:</Form.Label>
                     <Form.Control
                         type ="homeAddress"
                         value = {homeAddress}
                         placeHolder = "Enter Home Address"
                         onChange = {(e) => {setHomeAddress(e.target.value); setMessage(null)}}/>
                    <Form.Label>Phone Number:</Form.Label>
                     <Form.Control
                         type ="phoneNumber"
                         value = {phoneNumber}
                         placeHolder = "01xxxxxxxxx"
                         maxLength = {11}
                         minLength = {11}
                         onChange = {(e) => {setPhoneNumber(e.target.value);setMessage(null)}}/>
                    <Form.Label>Passport Number:</Form.Label>
                     <Form.Control
                         type ="paasportNumber"
                         value = {passportNumber}
                         placeHolder = "Enter Passport Number"
                         onChange = {(e) => {setPassportNumber(e.target.value);setMessage(null)}}/> 
          <Button variant="primary" type="submit">
            Submiit
          </Button>
        </Form> 
            </div>
        </MainScreen>
</div>
    )
}

export default EditProfile
