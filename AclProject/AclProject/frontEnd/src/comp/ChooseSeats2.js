import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from'./Header'
import MainScreen from './mainScreen'

function ChooseSeats2() {
    const id=useParams();
    const params = { "params": id };
    const [flight, setflight] = useState({ flightNumber: "", departureTime: "", arrivalTime: "", departureDate: "", arrivalDate: "",terminal:"", firstSeatsAvailable: "", firstSeatsLuggage: "", firstSeatsPrice: "", economySeatsAvailable: "", economySeatsLuggage: "", economySeatsPrice: "", businessSeatsAvailable: "", businessSeatsLuggage: "", businessSeatsPrice: "", airport: "", from: "", to: "", firstSeatsAvailablePositions: [], economySeatsAvailablePositions: [], businessSeatsAvailablePositions: []});
    const [sn, setsn] = useState(0);
    const [sa, setsa] = useState([]);
    const [numberOfGreenSeats, setNumberOfGreenSeats] = useState(0);
    const [greenSeats, setGreenSeats] = useState([]);
    const iddd = {"params":{"_id":params.params._id}}; 
    const [color, setmo7sen] = useState([]);
    const colors = [];

    var dividedBy4 = [];
    for(let i=0; i<Math.floor(sa.length/4); i++){
        dividedBy4.push(i);
    }

    var remaining1 = [];
    if(sa.length == dividedBy4.length*4 + 1){
        remaining1.push(true);
    }
    var remaining2 = [];
    if(sa.length == dividedBy4.length*4 + 2){
        remaining2.push(true);
    }
    var remaining3 = [];
    if(sa.length == dividedBy4.length*4 + 3){
        remaining3.push(true);
    }


    const HandleSubmit = (e) => {
        e.preventDefault();
        setGreenSeats(greenSeats);
        setNumberOfGreenSeats(greenSeats.length);
        var adultsd=params.params.adnod;
        var childrend=params.params.chnod;
        var tnopd=params.params.tnopd;
        var adultsr=params.params.adnor;
        var childrenr=params.params.chnor;
        var tnopr=params.params.tnopr;
        // alert(greenSeats2);
    
        /////
        if(tnopr==greenSeats.length){
           // window.location.href = "http://localhost:3000/DepSumm/"+params.params._id+"/"+params.params.class+"/"+greenSeats+"/"+greenSeats.length+"/"+adultsd+"/"+childrend+"/"+tnopd+"/"+params.params.user_id;
           localStorage.setItem("reFlight", JSON.stringify(flight)); 
           window.location.href = "http://localhost:3000/FinalSumm/"+params.params._idd+"/"+params.params.classd+"/"+params.params.seats+"/"+params.params.totalseats+"/"+adultsd+"/"+childrend+"/"+tnopd+"/"+params.params._id+"/"+params.params.class+"/"+greenSeats+"/"+greenSeats.length+"/"+adultsr+"/"+childrenr+"/"+tnopr+"/"+params.params.user_id;
       
        }
        else{
            alert("Number of seats chosen must be equal to selected");
        }

        /////
        //window.location.href = "http://localhost:3000/FinalSumm/"+params.params._idd+"/"+params.params.classd+"/"+params.params.seats+"/"+params.params.totalseats+"/"+params.params._id+"/"+params.params.class+"/"+greenSeats+"/"+greenSeats.length+"/"+params.params.user_id;
    }

    useEffect(() => {
        //console.log(params.params._idr);
        axios.get('http://localhost:8000/flights/flight', iddd).then(resp => { setflight(resp.data) }).catch((err) => { console.log(err) });
      
    },[]);

    useEffect(() => {
      
      
    if(params.params.class === "First class"){
        setsn(flight.firstSeatsAvailable);
        setsa(flight.firstSeatsAvailablePositions);
      }
       else if(params.params.class === "Economy class"){
        setsn(flight.economySeatsAvailable);
        setsa(flight.economySeatsAvailablePositions);
       }   
       else if(params.params.class === "Business class"){
        setsn(flight.businessSeatsAvailable);
        setsa(flight.businessSeatsAvailablePositions);
    }
    // setsa([true, true, false, true, false, false, true, true, true, true, false, true, false, false, true, true, true, true, false, true, false, false, true, true, true, true, false, true, false, false, true, true, true, true, false, true, false, false, true, true, true, true, false, true, false, false, true, true, false, false,false])
    console.log(params.params._id);
    console.log(flight);
    
    },[flight]);

useEffect(()=>{
    for(let i=0; i<sa.length; i++){
        if(sa[i]){
            colors.push('#FFFFFF') ;
        }
        else{
            colors.push('#FF0000') ;
        }
    }
    setmo7sen(colors);
//alert("ay7aga")
},[sa])
    
    return (
        <div>
            <MainScreen  title = 'Choose Your Seats' style = {{display : 'flex'}}>
            <Header />
            <br/><br/>
            <form onSubmit={(e) => {
                HandleSubmit(e); 

            }}>


                <table className="table" style={{marginLeft:"435px"}}>
                        <tr>
                            
                            <th>c1</th> 
                            <th>c2</th> 
                            <th></th> 
                            <th>c3</th> 
                            <th>c4</th> 
                           
                        </tr>
                   
          <tbody>
          {dividedBy4.map((number) => 
                   
              <tr>
              <td 
              id={""+(number*4+1)}
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[number*4] }}
              onClick={() => {
                    if(document.getElementById(""+(number*4+1)).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(number*4+1) > -1) {
                            greenSeats.splice(greenSeats.indexOf(number*4+1), 1);
                          }
                        document.getElementById(""+(number*4+1)).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+(number*4+1)).style.backgroundColor ==='rgb(255, 255, 255)'){
                        greenSeats.push(number*4+1);
                        console.log(greenSeats);
                        console.log(number*4+1);
                        document.getElementById(""+(number*4+1)).style.backgroundColor ='#00FF00';}}
                     }
              >{number*4+1} </td> 
              <td
              id={""+(number*4+2)}
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[number*4+1] }} 
              onClick={() => {
                    if(document.getElementById(""+(number*4+2)).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(number*4+2) > -1) {
                            greenSeats.splice(greenSeats.indexOf(number*4+2), 1);
                          }
                        document.getElementById(""+(number*4+2)).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+(number*4+2)).style.backgroundColor ==='rgb(255, 255, 255)'){
                        greenSeats.push(number*4+2);
                        console.log(greenSeats);
                        console.log(number*4+2);
                        document.getElementById(""+(number*4+2)).style.backgroundColor ='#00FF00' ;   }} }
              >{number*4+2} </td>
              <td 
              style={{ height:"50px", width:"50px", border:"0px solid black" }}
              ></td>
              <td 
              id={""+(number*4+3)} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[number*4+2] }} 
              onClick={() => {
                    if(document.getElementById(""+(number*4+3)).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(number*4+3) > -1) {
                            greenSeats.splice(greenSeats.indexOf(number*4+3), 1);
                          }
                        document.getElementById(""+(number*4+3)).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+(number*4+3)).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(number*4+3);
                        console.log(greenSeats);
                        console.log(number*4+3);
                        document.getElementById(""+(number*4+3)).style.backgroundColor ='#00FF00' ;   }} }
              >{number*4+3} </td>
              <td 
              id={""+(number*4+4)} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[number*4+3] }} 
              onClick={() => {
                    if(document.getElementById(""+(number*4+4)).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(number*4+4) > -1) {
                            greenSeats.splice(greenSeats.indexOf(number*4+4), 1);
                          }
                        document.getElementById(""+(number*4+4)).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+(number*4+4)).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(number*4+4);
                        console.log(greenSeats);
                        console.log(number*4+4);
                        document.getElementById(""+(number*4+4)).style.backgroundColor ='#00FF00' ;   }} }
              >{number*4+4} </td>
              
              
             
               <td/>
                
       </tr>
       
  
       )
          } 
          
          {remaining1.map((number) => 
         
         <tr>
              <td 
              id={""+sa.length} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[sa.length-1] }} 
              onClick={() => {
                    if(document.getElementById(""+sa.length).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(sa.length) > -1) {
                            greenSeats.splice(greenSeats.indexOf(sa.length), 1);
                          }
                        document.getElementById(""+sa.length).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+sa.length).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(sa.length);
                        console.log(greenSeats);
                        console.log(sa.length);
                        document.getElementById(""+sa.length).style.backgroundColor ='#00FF00' ;   }} }
              >{sa.length} </td>
         
         
        
           
  </tr>
  

  )
     } 
     {remaining2.map((number) => 
    
    <tr>
              <td 
              id={""+sa.length-1} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[sa.length-2] }} 
              onClick={() => {
                    if(document.getElementById(""+sa.length-1).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(sa.length-1) > -1) {
                            greenSeats.splice(greenSeats.indexOf(sa.length-1), 1);
                          }
                        document.getElementById(""+sa.length-1).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+sa.length-1).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(sa.length-1);
                        console.log(greenSeats);
                        console.log(sa.length-1);
                        document.getElementById(""+sa.length-1).style.backgroundColor ='#00FF00' ;   }} }
              >{sa.length-1} </td> <td/> <td/> <td/>
              <td 
              id={""+sa.length} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[sa.length-1] }} 
              onClick={() => {
                    if(document.getElementById(""+sa.length).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(sa.length) > -1) {
                            greenSeats.splice(greenSeats.indexOf(sa.length), 1);
                          }
                        document.getElementById(""+sa.length).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+sa.length).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(sa.length);
                        console.log(greenSeats);
                        console.log(sa.length);
                        document.getElementById(""+sa.length).style.backgroundColor ='#00FF00' ;   }} }
              >{sa.length} </td>
    
    
      
</tr>


)
} 
     {remaining3.map((number) => 
    
    <tr>
    <td 
    id={""+sa.length-2} 
    style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[sa.length-3] }} 
    onClick={() => {
            if(document.getElementById(""+sa.length-2).style.backgroundColor ==='rgb(0, 255, 0)'){
                if (greenSeats.indexOf(sa.length-2) > -1) {
                    greenSeats.splice(greenSeats.indexOf(sa.length-2), 1);
                }
                document.getElementById(""+sa.length-2).style.backgroundColor ='#FFFFFF';}
            else if(document.getElementById(""+sa.length-2).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                greenSeats.push(sa.length-2);
                console.log(greenSeats);
                console.log(sa.length-2);
                document.getElementById(""+sa.length-2).style.backgroundColor ='#00FF00' ;   }} } 
    >{sa.length-2} </td>
              <td 
              id={""+sa.length-1} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[sa.length-2] }} 
              onClick={() => {
                    if(document.getElementById(""+sa.length-1).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(sa.length-1) > -1) {
                            greenSeats.splice(greenSeats.indexOf(sa.length-1), 1);
                          }
                        document.getElementById(""+sa.length-1).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+sa.length-1).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(sa.length-1);
                        console.log(greenSeats);
                        console.log(sa.length-1);
                        document.getElementById(""+sa.length-1).style.backgroundColor ='#00FF00' ;   }} }
              >{sa.length-1} </td> <td/> <td/>
              <td 
              id={""+sa.length} 
              style={{ height:"50px", width:"50px", border:"1px solid black", backgroundColor:color[sa.length-1] }} 
              onClick={() => {
                    if(document.getElementById(""+sa.length).style.backgroundColor ==='rgb(0, 255, 0)'){
                        if (greenSeats.indexOf(sa.length) > -1) {
                            greenSeats.splice(greenSeats.indexOf(sa.length), 1);
                          }
                        document.getElementById(""+sa.length).style.backgroundColor ='#FFFFFF';}
                    else if(document.getElementById(""+sa.length).style.backgroundColor ==='rgb(255, 255, 255)'){ 
                        greenSeats.push(sa.length);
                        console.log(greenSeats);
                        console.log(sa.length);
                        document.getElementById(""+sa.length).style.backgroundColor ='#00FF00' ;   }} }
              >{sa.length} </td>
    
    
      
</tr>


)
} 



          
              </tbody>
        </table>

                 <input type="submit" value="Choose seats"></input> 

</form>
</MainScreen>
</div>   

    )
}

export default ChooseSeats2;