const router = require('express').Router();
const bcrypt = require('bcryptjs');
let User = require('../model/User.js');



router.route('/').get((req,res) => {  //handles the get http requests for ../users path
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username ;
    const password = req.body.password ;
    
    const oldUser = User.findOne({username});

    if(oldUser == null)
    {
        res.status(400).json('Error: ' + err);
    }
    else
    {
        const newUser = new User({username , password});

        newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error' + err))
    }
});



router.route('/:id').get((req,res) =>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/login').post((req,res)=>{
    const username = req.body.username ;
    const password = req.body.password ; 
    

    User.findOne({ username })
    .then(user => {
        if (!user) return res.status(400).json({ msg: "User wasn't found" })

        bcrypt.compare(password, user.password, (err, data) => {
            //if error than throw error
            if (err) throw err
            
            if (data) {
                if(req.body.username === 'admin')
                   {
                    var redir = { redirect: "/flightList" };
                    return res.json(redir);
                   }
                else     
                {
                    var redir = { redirect: '/create'};
                    return res.json(redir);
                }
            } else {
                return res.status(401).json({ msg: "Invalid credencial" })
            }

        })

    })
})

module.exports = router ;
