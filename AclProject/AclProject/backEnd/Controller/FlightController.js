const Flight = require('../model/Flight');
const User = require('../model/Flight');

const home = (req, res) => {
    res.send('Hello world');
    res.end();
};

const addFlight = (req, res) => {
    console.log('request came');
    console.log(req.body);
    const flight = new Flight(
        {
            flightNumber: req.body.flightNumber,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            departureDate: req.body.departureDate,
            arrivalDate: req.body.arrivalDate,
            terminal: req.body.terminal,
            firstSeatsAvailable: req.body.firstSeatsAvailable,
            economySeatsAvailable: req.body.economySeatsAvailable,
            businessSeatsAvailable: req.body.businessSeatsAvailable,
            airport: req.body.airport,
            from: req.body.from,
            to: req.body.to

        }
    );
    flight.save().then((result) => {
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify(result, null, 4));
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Address is needed");
    });
};

const getAllFlights = (req, res) => {
    Flight.find().then((result) => {
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
};

const findFlight = (req, res) => {
    const id2q = req.query
   // console.log(id2q);
    Flight.findOne(id2q).then((result) => {
       // console.log(result)
        res.json(result); 
    }).catch((err) => { console.log(err) });
}


const updateFlight=(req,res)=>{
//console.log(req);body
const qu={ _id: req.body._id }
Flight.findOneAndUpdate(qu).then((result) => {
     console.log(result)
}).catch((err) => { console.log(err) });


}

const updateFlight2 = (req, res) => {
    var id = req.body._id;
    //console.log(req.params);
    User.findOne({ _id: id }).then((result) => {
        result.flightNumber = req.body.flightNumber;
        result.departureTime = req.body.departureTime;
        result.arrivalTime = req.body.arrivalTime;
        result.departureDate = req.body.departureDate;
        result.arrivalDate = req.body.arrivalDate;
        result.terminal=req.body.terminal;
        result.firstSeatsAvailable = req.body.firstSeatsAvailable;
        result.economySeatsAvailable = req.body.economySeatsAvailable;
        result.businessSeatsAvailable = req.body.businessSeatsAvailable;
        result.airport = req.body.airport;
        result.from = req.body.from;
        result.to = req.body.to;
        result.save().then((result) => {
            res.send("update is done");
        }).catch((err) => {
            console.log(err);
        })
    });
};






const findFlight2 = (req, res) => {

    const id2 = req.query._id
    const id2q = req.query
    //console.log(id2q)
    //console.log(id2)

    Flight.findOne(id2q).then((result) => {
        console.log(result)
        res.flightNumber = result.flightNumber;
        res.departureTime = result.departureTime;
        res.arrivalTime = result.arrivalTime;
        res.departureDate = result.departureDate;
        res.arrivalDate = result.arrivalDate;
        res.terminal=result.terminal;
        res.firstSeatsAvailable = result.firstSeatsAvailable;
        res.EconomySeatsAvailable = result.EconomySeatsAvailable;
        res.BusinessSeatsAvailable = result.BusinessSeatsAvailable;
        res.airport = result.airport;
        res.from = result.from;
        res.to = result.to;
        // console.log(res)
    }).catch((err) => { console.log(err) });
}


const deleteFlight=(req,res)=>{
    console.log("I'm in")
   
    const qu={ _id: req.body._id };

    console.log(qu);

    
        

    Flight.findOne(qu).then((result) => {
        console.log(result)
        Flight.deleteOne(qu, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
        })
         }).catch((err) => { console.log(err) });
   
   
   }



const getsearchFlight=(req,res)=>
{
   
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    const qu =req.query
    console.log(qu);
    //console.log(qu.flight);
    Flight.find(qu).then((result) => {
        console.log(result+'hnaaaaaaa');
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify(result, null, 4));
    })
   
    

    .catch((err)=>{console.log(err)});
   
};




module.exports =
{
    home,
    addFlight,
    getAllFlights,
    findFlight,
    updateFlight,
    updateFlight2,
    findFlight2,
    getsearchFlight,
    deleteFlight
    // getAllStudents,
    // getAllSuperheroes
}