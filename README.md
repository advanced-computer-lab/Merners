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
     *  Response: Message of creation success
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

  ***


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

***

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

***

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

***

  * #### The Admin should be able to delete any flight:
     *  Functionality : deleting a fligth
     *  Route : /delete
     *  Request type : POST
     *  Response: Message of creation success
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
        
   ***
   
   
 ### 2-Guest/ExistingUser Functionalities
  * #### The ExistingUser should be able to search for a departure/return flight:
     *  Functionality : searching for a fligth
     *  Route Backend: http://localhost:8000/flights/usersearch
     *  Rote Frontend:http://localhost:3000/usersearchflights/userid
     *  Request type : GET
     *  Request body:{ "number of passengers": "2", "airport":"CAI" , "terminals":"2", "departure date":"25/12/2021", "arrival date":"1/1/2022","cabin":"first"}
     *  Response: All flights available matching the search criteria

* #### The Guest should be able to search for a departure/return flight:
     *  Functionality : searching for a fligth
     *  Route Backend :  http://localhost:8000/flights/usersearch
     *  Route Frontend: http://localhost:3000/guestsearchflights
     *  Request type : GET
     *  Request body:{ "number of passengers": "2", "airport":"CAI" , "terminals":"2", "departure date":"25/12/2021", "arrival date":"1/1/2022","cabin":"first"}
     *  Response: All flights available matching the search criteria
           	
   ***
   
  * #### The Guest/ExistingUser should be able to see details of any departure/return flight:
    *  Functionality : viewing details of fligth
    *  Route Backend:  http://localhost:8000/flights/flight
    *  Route Frontend: http://localhost:3000/showDetails/:_id/:user_id
    *  Request type : GET
    *  Response: Details of selected flight
      
   ***
            
  * #### The Guest/ExistingUser should be able to see details of to be reserved departure and return flights:
    *  Functionality : summery of reserved flights
    *  Route : /allres
    *  Request type : GET
    *  Response: Details of to be reserved flights

***

  * #### The Guest/ExistingUser should be able to cancel departure and return flights before confirming reservation:
     *  Functionality : summery of reserved flights
     *  Route : /cancel
     *  Request type : POST
     *  Response: confirmation message
***

 * #### The ExistingUser should be able to login:
     *  Functionality : logging in
     *  Route : /login
     *  Request type :POST
     *  Request body:{"username":"Laila","password":123}
     *  Response: message of logging in successfully
    
  ***  
     
  * #### The ExistingUser should be able to update his/her profile:
     *  Functionality : updating profile
     *  Route backend : http://localhost:8000/users/updateUser
     *  
     *  Request type :POST
     *  Request body:{"username":"Laila","first Name":"Laila","Last Name":"Ayman","email":123@gmail.com}
     *  Response: message of update is done successfully

***

 * #### The ExistingUser should be able to change his/her password:
     *  Functionality : changing password
     *  Route backend: http://localhost:8000/users/changePassword
     *  Route frontend:
     *  Request type :POST
     *  Request body:{"oldpassword":"123","newpassword":"137","confirm newpassword":"137"}
     *  Response: message of password has changed successfully
     *  Errors: * old password/new password/comfirm password is null
                * new password and confirm password not equall
                * old password not equal to the one in the database

***

* #### The ExistingUser should be able to reserve flights:
     *  Functionality : reserve flights
     *  Route : /reserve
     *  Request type :POST
     *  Response : message of successful reservation
***


* #### The ExistingUser should be able to view his/her flights:
     *  Functionality : viewing flights
     *  Route : /getUserReserved
     *  Request type :POST
     *  Response: details of reserved flights

***

* #### The ExistingUser should be able to  edit reserved flights:
     *  Functionality : edit reserved flights
     *  Route : /update
     *  Request type :POST
     *  Response : message of successful update


***

* #### The ExistingUser should be able to  delete reserved flights:
     *  Functionality : delete reserved flights
     *  Route : /deleteUserFlight
     *  Request type :POST
     *  Response : message of successful deletion

***


* #### TheGuestUser should be able to register/sign up:
     *  Functionality : register new user/sign up
     *  Route : /register
     *  Request type :POST
     *  Request body:{"username":"lfm","first Name":"Lidia","last Name":"karim","Email":"1234@gmail.com","address":"cairo","phone number":"123456789","password":"123","confirm password":"123","passport number":""135792468}
     *  Response : redirecting to signing in page

 ## API
 
 ## Tests

 ## Installations
 * npm install react
 * npm install express
 * npm install mongodb
 * npm install dotenv
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

