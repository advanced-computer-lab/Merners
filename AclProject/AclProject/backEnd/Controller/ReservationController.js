const Reservation = require('../model/Reservation');
const User = require('../model/User');

const home = (req, res) => {
    res.send('Hello world');
    res.end();
};

const addreservation = (req, res) => {
    //console.log(req);
    console.log('request came');
    console.log(req.body);
   
    const reservation = new Reservation(
        {
            flight: "",
            user: "",
            classChoosen:"" ,
            seatsChoosen: []
           
        }
    );
    reservation.flight=req.body.flight;
    reservation.user=req.body.user;
    reservation.classChoosen=req.body.classChoosen;
    reservation.seatsChoosen=req.body.seatsChoosen;

    reservation.save().then((result) => {
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify(result, null, 4));
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Address is needed");
    });
};

const findReservation = (req, res) => {
   
    var id = req.body._id 

    Reservation.findById(id).then((result) => {
        res.json(result); 
    }).catch((err) => { console.log(err.message) });
}


const deleteReservation=(req,res)=>{
   
    const qu={_id: req.body._id};

    Reservation.deleteOne(qu).then((result) => {
        console.log("Deleted")

        }).catch((err) => { console.log(err.message) });
}


const userReservation=(req,res)=>{
    
    Reservation.find({user: req.body.user}).then((result) => {
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
}

const reservations=(req,res)=>{
    
    Reservation.find().then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
}

module.exports =
{
     home,
     addreservation,
     deleteReservation,
     userReservation,
     reservations,
     findReservation
}