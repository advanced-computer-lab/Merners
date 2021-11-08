import React from 'react'
import Navbar from'./Navbar'

function About() {
    return (
        <div>
             <Navbar />
            <header>By</header>
            <ul style={{align:'center'}}>
            <li style ={{font:18,backgroundColor:'darkgreen',align:'center'}}>Mostafa Shaalan</li>
            <li style ={{font:18,backgroundColor:'darkgreen',align:'center'}}>Maged George</li>
            <li style ={{font:18,backgroundColor:'darkgreen',align:'center'}}>George naguib</li>
            </ul>
        </div>
    )
}

export default About
