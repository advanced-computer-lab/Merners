const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema ;

const userSchema = new Schema ({
    username: {
        type: String ,
        required : true ,
        unique: true ,
        trim: true , //trim spaces out of the end
        minlength: 3
    },
    password: {
        type: String ,
        required : true ,
        trim: true , //trim spaces out of the end
        minlength: 3
    },
  },
  {
      timestamps: true ,
  })

  //encrypt passwords inside mongodb
  userSchema.pre('save' , async function (next){
      if(!this.isModified('password'))
        next();
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password,salt);  
  });


  const User = mongoose.model('User' , userSchema);

  module.exports = User ;