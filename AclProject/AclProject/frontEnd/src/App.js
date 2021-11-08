import './App.css';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Navbar from './comp/Navbar';
import AllFlights from './comp/AllFlights';
import Home from './comp/Home';
import About from './comp/About';
import Create from './comp/Create';
import Update from './comp/Update';
import Search from './comp/Search';
import Login from './comp/login';
import Delete from './comp/Delete';


//import { Component, useState, useEffect } from 'react';
import axios from 'axios'

function App() {


  return (
    <Router>
    <div className="App">
      <div className="content" style={{margintop: 0}}>
       <Routes>
       <Route  path="/" element={<Login />}/>
        <Route  path="/edit" element ={ <AllFlights />}/>
        <Route  path="/Home" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/create" element={<Create />}/>
        <Route  path="/delete/:_id" element={<Delete />}/>
        <Route  path="/update/:_id" element={<Update />}/>
        <Route  path="/search" element={<Search />}/>
     
       </Routes>
      </div>
      </div> 
           
      </Router>
  );
}

export default App;












{/* import './App.css';

//import Navbar from './navbar';
//import Home from './home';
//import { Component, useState, useEffect } from 'react';
//import axios from 'axios'

function App() {
  // const [superhero, setsuper] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/users/getsuperhero").then((result) => {
  //     const data = result.data;
  //     setsuper(data);

  //   });//url


  // }, []);

  return (
    <div className="">
    <p>Hello World</p>
      {/* <div className="content">
        <h1>Employee Profile </h1>

        <br />
        <ul>
          {superhero.map((data) =>
            <li key={data._id}>
              <div className="row">
                <p className="left-txt"> <b>Name: </b>{data.Name} </p>
                <p className="left-txt"> <b>Phone Number: </b>{data.PhoneNumber}</p>
                <p className="left-txt"> <b>Job: </b>{data.Job}</p>
              </div>
            </li>)
          }</ul>


           
</div> 
           

);
}

export default App;*/}