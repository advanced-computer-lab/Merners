//using express
const express=require('express');
const app =express();

require('dotenv').config();

const userRouter=require('./routes/UserRoutes');
const User=require('./model/User.js');
const flightRouter=require('./routes/FlightRoutes');
const Flight=require('./model/Flight.js');


const mongoose=require('mongoose');
var cors = require('cors');
//const dbPath = 'mongodb+srv://alaa:1234@cluster0.6ulyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
//const dbPath ='mongodb+srv://tester:tester123@cluster0.jhdef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(dbPath).then((result)=>console.log('connected to DB'))
// .catch((err)=>console.log(err));

const uri = process.env.ATLAS_URI ;
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));


app.use(cors());

app.get('/',(req,res)=>
{
    res.send('Hello world');
    res.end();
});

app.use('/users',userRouter);
app.use('/flights',flightRouter);

const port = process.env.PORT || "8000";

app.listen(port , () => {
    console.log(`server is running on port: ${port}`);
})









