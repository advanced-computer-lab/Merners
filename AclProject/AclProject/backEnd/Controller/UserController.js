const User=require('../model/User');

const home=(req,res)=>
{
    res.send('Hello world');
    res.end();
};

const addUser=(req,res)=>
{
    console.log('request came');
    console.log(req.body);
    const user=new User(
        {
            Name : req.body.Name,
            Email: req.body.Email,
            Age : req.body.Age,
            BornIn:req.body.BornIn,
            LivesIn: req.body.LivesIn,
            MartialStatus:req.body.MartialStatus,
            PhoneNumber: req.body.PhoneNumber,
            Job:req.body.Job

        }
    );
    user.save().then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    }).catch((err)=>
    {
        res.status(400).send("Address is needed");
    });
};

const getAllUsers=(req,res)=>
{
    User.find().then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
};
const getAllStudents=(req,res)=>
{
    const neededJob='student';
    User.find({Job:neededJob}).then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
};

const getAllSuperheroes=(req,res)=>
{
    const neededJob='Superhero';
    User.find({Job:neededJob}).then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
};

module.exports=
{
    home,
    addUser,
    getAllUsers,
    getAllStudents,
    getAllSuperheroes
}