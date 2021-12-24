# GUCAirlines
* It is an airline reservation system which allow users to reserve tickets to fly globally or domestically.



## Framework used
* MERN Stack



## Start File
* app.js
* To start the database connections run the command: node app.js (run it in the terminal)



## Port to use for database establishment 
 8000
 
 ## Routes
 
 ### 1-Admin Functionalities
  * #### The Admin should be able to create a flight:
     *  Functionality : creating a fligth
     *  Route : /create
     *  Request type : POST
     *  Request body: {
        "flightNumber":"137",
        "departureTime":"14:00",
        "arrivalTime":"17:00",
        "departureDate":"27/01/2022",
        "arrivalDate":"14/02/2022",
        "terminal":"3",
        "firstSeatsAvailable":"50",
        "firstSeatsLuggage":"2",
        "firstSeatsPrice":"1500",
        "economySeatsAvailable":"60",
        "economySeatsLuggage":"3",
        "economySeatsPrice":"500",
        "businessSeatsAvailable":"20",
        "businessSeatsLuggage":"1",
        "businessSeatsPrice":"1000",
        "airport":"CAI",
        "from":"Cairo",
        "to":"Finland"}

     *  Response :  


  * #### The Admin should be able to search for flight/s:
      *  Functionality : searching for fligth/s
      *  Route : /search
      *  Request type : GET
      *  Response : All Flights with all details Example: {
        "_id": "61aa72ee141edfedf9ad6322",
        "flightNumber": "123",
        "departureTime": "01:30",
        "arrivalTime": "03:30",
        "departureDate": "2021-12-05T00:00:00.000Z",
        "arrivalDate": "2021-12-05T00:00:00.000Z",
        "terminal": 1,
        "firstSeatsAvailable": 15,
        "firstSeatsLuggage": 51,
        "firstSeatsPrice": 3002,
        "economySeatsAvailable": 118,
        "economySeatsLuggage": 26,
        "economySeatsPrice": 1751,
        "businessSeatsAvailable": 61,
        "businessSeatsLuggage": 36,
        "businessSeatsPrice": 2498,
        "airport": "airport",
        "from": "Cairo",
        "to": "Alex",
        "firstSeatsAvailablePositions": [true,false,false,false,true,true,false,false,true,true,true,true,true,false,true,true,true,true,true,true,true],
        "economySeatsAvailablePositions": [false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true
        ],
        "businessSeatsAvailablePositions":[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true, true,true,true,true,true,true,true,true, true,true,true,true,true]}



  * #### The Admin should be able to view all flights without search criteria:
      *  Functionality : viewing fligths
      *  Route : /get
      *  Request type : GET
      *  Response : Flight object Example :  "_id": "61aa72ee141edfedf9ad6322",
        "flightNumber": "123",
        "departureTime": "01:30",
        "arrivalTime": "03:30",
        "departureDate": "2021-12-05T00:00:00.000Z",
        "arrivalDate": "2021-12-05T00:00:00.000Z",
        "terminal": 1,
        "firstSeatsAvailable": 15,
        "firstSeatsLuggage": 51,
        "firstSeatsPrice": 3002,
        "economySeatsAvailable": 118,
        "economySeatsLuggage": 26,
        "economySeatsPrice": 1751,
        "businessSeatsAvailable": 61,
        "businessSeatsLuggage": 36,
        "businessSeatsPrice": 2498,
        "airport": "airport",
        "from": "Cairo",
        "to": "Alex",
        "firstSeatsAvailablePositions": [true,false,false,false,true,true,false,false,true,true,true,true,true,false,true,true,true,true,true,true,true],
        "economySeatsAvailablePositions": [false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true
        ],
        "businessSeatsAvailablePositions":[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true, true,true,true,true,true,true,true,true, true,true,true,true,true]}

 * #### The Admin should be able to update a flight:
      *  Functionality : update flight
      *  Route : /update
      *  Request type :POST
      *  Request body:  {
        "flightNumber":"246",
        "departureTime":"14:00",
        "arrivalTime":"17:00",
        "departureDate":"27/01/2022",
        "arrivalDate":"14/02/2022",
        "terminal":"3",
        "firstSeatsAvailable":"50",
        "firstSeatsLuggage":"2",
        "firstSeatsPrice":"1500",
        "economySeatsAvailable":"60",
        "economySeatsLuggage":"3",
        "economySeatsPrice":"500",
        "businessSeatsAvailable":"20",
        "businessSeatsLuggage":"1",
        "businessSeatsPrice":"1000",
        "airport":"CAI",
        "from":"Cairo",
        "to":"Croatia"}

      *  Response : A message informing that updating is done successfully

* #### The Admin should be able to delete any flight:
      *  Functionality : delte flight
      *  Route : /delete
      *  Request type :POST
      *  Request body: { "_id": "61aa72ee141edfedf9ad6322",
        "flightNumber": "123",
        "departureTime": "01:30",
        "arrivalTime": "03:30",
        "departureDate": "2021-12-05T00:00:00.000Z",
        "arrivalDate": "2021-12-05T00:00:00.000Z",
        "terminal": 1,
        "firstSeatsAvailable": 15,
        "firstSeatsLuggage": 51,
        "firstSeatsPrice": 3002,
        "economySeatsAvailable": 118,
        "economySeatsLuggage": 26,
        "economySeatsPrice": 1751,
        "businessSeatsAvailable": 61,
        "businessSeatsLuggage": 36,
        "businessSeatsPrice": 2498,
        "airport": "airport",
        "from": "Cairo",
        "to": "Alex",}
      *Response: A message that the flight is deleted
        
   

           	
       
   



 ## Installations
 * npm install react-express-mongodb-dotenv
 * npm install stripe
 * npm install @mui/material
 * npm install react-bootstrap
 * npm install nodemon
 * npm install axios


 ## Team Members:
* Somia Hossam 
* George Naguib
* Maged
* Mostafa Shaalan
* Mariam Ayman

