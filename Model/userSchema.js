const mongoose=require('mongoose');


const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:3,
        max:20,
        require:[true , 'Please enter your firstName'],
    },
    lastName:{
        type:String,
        required:true,
        min:3,
        max:20,
        require:[true , 'Please enter your lastName'],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        require:[true , 'Please enter your email'],
    },
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        require:[true , 'Please enter your username'],
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:10,
        require:[true , 'Please enter your password'],
    }
},
{
    timestamps:true
});

module.exports=  mongoose.model('User',userSchema)