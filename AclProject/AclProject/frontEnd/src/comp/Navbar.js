import React , { Component } from "react";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'

function Navbar() {
   
    const id=useParams();
    
    const params = { "params": id };
    return (
        <div>
           <nav className="navbar navbar-expand-md  fixed-top" >
           <header style={{color:'black', font:30}}>
               GUC Airlines
               </header> 
               
               <div className="collpase navbar-collapse">
               <Link to={'/home'+"/"+params.params.user_id} >Flights</Link>   
               <Link to={'/create' +"/"+params.params.user_id} >Create New Flight</Link>   
               <Link to={'/search'+"/"+params.params.user_id}  >Search</Link>  
               </div>
               </nav> 
        </div>

    )
}

export default Navbar
