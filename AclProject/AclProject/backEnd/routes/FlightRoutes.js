const express=require('express');
const flightController=require('../Controller/FlightController');
const flightRouter=express.Router();
flightRouter.use(express.json());
flightRouter.use(express.urlencoded({extended: false}));




flightRouter.get('/',flightController.home);

flightRouter.get('/get',flightController.getAllFlights);

// userRouter.get('/getstudents',userController.getAllStudents);

// userRouter.get('/getsuperhero',userController.getAllSuperheroes);

flightRouter.post('/create',flightController.addFlight);
flightRouter.post('/update',flightController.updateFlight2);
flightRouter.get('/flight',flightController.findFlight);
flightRouter.post('/delete',flightController.deleteFlight);
flightRouter.get('/search',flightController.getsearchFlight);





//first way to update data in a collection
// userRouter.put('/update/:id',(req,res)=>
// {
//     var id=req.params.id;
//     console.log(req.params);
//     User.findOne({_id:id}).then((result)=>{
//         if(req.body.name)
//         {
//             result.name=req.body.name;
//         }
//         result.save().then((result)=>
//         {
//             res.send("update is done");
//         }).catch((err)=>
//         {
//             console.log(err);
//         })
//     });
// });

// //secondway to update data in a collection
// userRouter.put('/newupdate/:id',(req,res)=>
// {
//     var id=req.params.id;
//     console.log(req.params);
//     User.findByIdAndUpdate({_id:id},req.body).then((result)=>{
//         res.send("DONE");
//     });
// });

// //deleting document by ID
// userRouter.delete('/delete/:id',(req,res)=>
// {
//     var id=req.params.id;
//     User.findByIdAndRemove({_id:id}).then((result)=>{
//         res.send("DONE");
//     });
// });
module.exports=flightRouter;