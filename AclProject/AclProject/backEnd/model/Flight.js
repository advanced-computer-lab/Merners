const mongoose = require('mongoose'); 
const { number } = require('prop-types');

const Schema = mongoose.Schema ;

const flightSchema = new Schema ({ //the name of the columns shoukd always start in lower case
    flightNumber: {
        type: String ,
        required : true ,
        trim: true ,
    },
    departureTime: {
        type: String ,
        required : true ,
        trim: true ,
       // length: 3
    },
    arrivalTime: {
        type: String ,
        required : true ,
        trim: true ,
        //length: 3
    },
    departureDate: {
        type: Date ,
        required : true ,
        trim: true , 
    },
    arrivalDate: {
        type: Date ,
        required : true ,
        trim: true , 
    },
    terminal: {
        type: Number ,
        required : true ,
        trim: true 
    },
    firstSeatsAvailable: {
        type: Number ,
        required : true ,
        trim: true 
    },
    economySeatsAvailable: {
        type: Number ,
        required : true ,
        trim: true 
    },
    businessSeatsAvailable: {
        type: Number ,
        required : true ,
        trim: true 
    },
    airport: {
        type: String ,
        required : true ,
        trim: true 
    },
    from: {
        type: String ,
        required : true ,
        trim: true ,
    },
    to: {
        type: String ,
        required : true ,
        trim: true ,
    },
  },
  {
      timestamps: true 
  })

  const Flight = mongoose.model('Flight' , flightSchema);

  module.exports = Flight ;