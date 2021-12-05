import './App.css';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import AllFlights from './comp/AllFlights';
import Create from './comp/Create';
import Update from './comp/Update';
import Search from './comp/Search';
import Login from './comp/Login';
import Delete from './comp/Delete';
import Register from './comp/Register';
import HomePageUser from './comp/HomePageUser';
import EditProfile from './comp/EditProfile';
import Usersearchflights from './comp/Usersearchflights';
import ShowDetails from './comp/ShowDetails';
import Showdetret from './comp/Showdetret';
import Reserve from './comp/Reserve';
import ChooseSeats from './comp/ChooseSeats';
import FinalSumm from './comp/FinalSumm';
import DepSumm from './comp/DepSumm';
import ReturnFlight from './comp/ReturnFlight';
import ChooseSeats2 from './comp/ChooseSeats2';
import AllFlightsUser from './comp/AllFlightsUser';
import './comp/img/background.css';


function App() {


  return (
    <Router>
    <div className="App">
      <div className="content" style={{margintop: 0}}>
       <Routes>
       <Route  path="/" element={<Login />}/>
        <Route  path="/Home/:user_id" element ={ <AllFlights />}/>
        <Route  path="/AllFlightsUser/:user_id/" element ={ <AllFlightsUser />}/>
        <Route  path="/create/:user_id" element={<Create />}/>
        <Route  path="/delete/:_id/:user_id" element={<Delete />}/>
        <Route  path="/update/:_id/:user_id" element={<Update />}/>
        <Route  path="/search/:user_id" element={<Search />}/>
        <Route  path="/homePageUser/:user_id" element={<HomePageUser />}/>
        <Route path ="/Register" element ={<Register />}/>
        <Route  path="/editProfile" element={<EditProfile />}/>
        <Route  path="/Usersearchflights/:user_id" element={<Usersearchflights />}/>
        <Route  path="/showDetails/:_id/:user_id" element={<ShowDetails />}/>
        <Route  path="/reserve/:_id/:user_id" element={<Reserve />}/>
        <Route  path="/chooseSeats/:_id/:class/:adno/:chno/:tnop/:user_id" element={<ChooseSeats />}/>
        <Route  path="/DepSumm/:_id/:class/:seats/:totalseats/:adnod/:chnod/:tnopd/:user_id" element={<DepSumm />}/>
        <Route  path="/ReturnFlight/:_id/:class/:seats/:totalseats/:adnod/:chnod/:tnopd/:user_id" element={<ReturnFlight />}/>
        <Route  path="/Showdetret/:_idr/:_idd/:class/:seats/:totalseats/:adnod/:chnod/:tnopd/:user_id" element={<Showdetret />}/>
        <Route  path="/chooseSeats2/:_id/:class/:adnor/:chnor/:tnopr/:_idd/:classd/:seats/:totalseats/:adnod/:chnod/:tnopd/:user_id" element={<ChooseSeats2 />}/>
        <Route  path="/FinalSumm/:_id/:class/:seats/:totalseats/:adnod/:chnod/:tnopd/:_idr/:classr/:seatsr/:totalseatsr/:adnor/:chnor/:tnopr/:user_id" element={<FinalSumm />}/>
      </Routes>
      </div>
      </div> 
           
      </Router>
  );
}

export default App;
