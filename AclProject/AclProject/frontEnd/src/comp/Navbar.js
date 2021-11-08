import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
           <nav>
           <header style={{color:'white', backgroundColor:'blue' ,font:30}}>
               GUC Airlines
               </header> 
               <Link to='/' style={{color:'grey', backgroundColor:'red' ,font:25}}>Home</Link>   
               <Link to='/edit' style={{color:'grey', backgroundColor:'yellow' ,font:25}}>Flights</Link>  
               <Link to='/about' style={{color:'grey', backgroundColor:'black' ,font:25}}>about</Link>  
               
               </nav> 
        </div>
    )
}

export default Navbar
