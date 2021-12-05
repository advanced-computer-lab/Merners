import React, { useState } from 'react';
import { Form , Col ,Row ,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MainScreen from './mainScreen';
import axios from 'axios';
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const Register = () => {

    const [username , setUsername] = useState("");
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [homeAddress , setHomeAddress] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [passportNumber , setPassportNumber] = useState("");
    const [password , setPassword] = useState("");
    const [confirmpassword , setConfirmPassword] = useState("");
    const [message , setMessage] = useState(null);
    const [error , setError] = useState(false);
    const [loading , setLoading] = useState(false);
    
    const submitHandler = async(e) => {
        e.preventDefault();
        
        if(password !== confirmpassword)
            setError('Passwords do not match');
            else
            {
                setMessage(null)
                try
                {
                    const config = {
                        headers: {
                            "Content-type": "application/json"
                        }
                    }
                    setLoading(true);
                    console.log(username);
                    const { data } = await axios.post(
                        'http://localhost:8000/users/register',
                        {
                           username: username,
                           firstName: firstName,
                           lastName: lastName,
                           email: email,
                           homeAddress: homeAddress,
                           phoneNumber: phoneNumber,
                           passportNumber: passportNumber,
                           password: password
                        },
                        config 
                        );
                        setLoading(false);
                        if(data == null)
                            setError("Please Check all the fields")
                        console.log(data)
                        window.location = '/'
                }
                catch(error)
                {
                    console.log(error.message)
                    setLoading(false);
                    setError("error occured please check all the fields");
                }

            }


    }

    
    return (
        <MainScreen title = "REGISTER">
            <div className = "loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="info">{message}</ErrorMessage>}
            {loading && <Loading />}    
                <Form onSubmit = {submitHandler}>
                    <Form.Label>Username:</Form.Label>
                     <Form.Control
                         type ="username"
                         value = {username}
                         placeHolder = "Enter username"
                         onChange ={(e) => {setUsername(e.target.value);setError(null);setMessage(null);}}/>
                         <Form.Label>First Name:</Form.Label>
                     <Form.Control
                         type ="fname"
                         value = {firstName}
                         placeHolder = "Enter First Name"
                         onChange= {(e) => {setFirstName(e.target.value);setError(null);setMessage(null);}}/>
                         <Form.Label>Last Name:</Form.Label>
                     <Form.Control
                         type ="lname"
                         value = {lastName}
                         placeHolder = "Enter Last Name"
                         onChange ={(e) => {setLastName(e.target.value);setError(null);setMessage(null);}}/>
                      <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value = {email}
                      placeholder="Enter email"
                      onChange = {(e) => {setEmail(e.target.value);setError(null);setMessage(null);}}/>
                       </Form.Group>
                    <Form.Label>Home Address:</Form.Label>
                     <Form.Control
                         type ="homeAddress"
                         value = {homeAddress}
                         placeHolder = "Enter Home Address"
                         onChange = {(e) => {setHomeAddress(e.target.value);setError(null);setMessage(null);}}/>
                    <Form.Label>Phone Number:</Form.Label>
                     <Form.Control
                         type ="phoneNumber"
                         value = {phoneNumber}
                         placeHolder = "01xxxxxxxxx"
                         onChange = {(e) => {setPhoneNumber(e.target.value);setError(null);setMessage(null);}} minLength = {11} maxLength={11}/>
                    <Form.Label>Passport Number:</Form.Label>
                     <Form.Control
                         type ="paasportNumber"
                         value = {passportNumber}
                         placeHolder = "Enter Passport Number"
                         onChange = {(e) => {setPassportNumber(e.target.value);setError(null);setMessage(null);}}/> 
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value = {password}
              placeholder="Password"
              onChange = {(e) => {setPassword(e.target.value);setError(null);setMessage(null);}} minLength = {3}/>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value = {confirmpassword}
              placeholder="Confirm Password" 
              onChange = {(e) => {setConfirmPassword(e.target.value);setError(null);setMessage(null);}} minLength = {3}/>      
          </Form.Group>   
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/">Login</Link>
          </Col>
        </Row>
                
            </div>
        </MainScreen>
    )
}

export default Register
