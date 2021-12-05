import React from 'react'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useNavigate , useParams } from 'react-router-dom';
import {GiCommercialAirplane} from "react-icons/gi";

const Header = () => {
  const user = JSON.parse(localStorage.getItem('userInfo')).firstName;
  const navigate = useNavigate();
  
  const id=useParams();
    
  const params = { "params": id };


  return (
 <Navbar className="navbar navbar-expand-md fixed-top" >
   <GiCommercialAirplane size ={25}/><Navbar.Brand >GUC Airlines</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="m-auto" style={ {fontWeight: '900'} }>
        <Nav.Link href= {'/homePageUser'+"/" + params.params.user_id}  >My Flights</Nav.Link>
        <Nav.Link href={'/Usersearchflights'+"/"+params.params.user_id} >Search Flights</Nav.Link>
        <Nav.Link href={'/AllFlightsUser'+"/"+params.params.user_id} >All Flights</Nav.Link>
        </Nav>
        <Nav>
        <NavDropdown title={user} id="basic-nav-dropdown" style={ {fontWeight: '900' , color : '#000000'} }>
          <NavDropdown.Item href="/editProfile" style={ {fontWeight: '900' , color : '#000000'} }>My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick = {() => {localStorage.removeItem("userInfo");  navigate("/")}} style={ {fontWeight: '900' , color : '#000000'} }>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>
    )
}

export default Header
