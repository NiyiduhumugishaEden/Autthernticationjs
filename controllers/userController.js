const userModel=require('../Model/userSchema');


// Creating a new user

const createUser = ()=>{
    return async(req, res)=>{

if(!req.body.firstName,!req.body.lastName,!req.body.email,!req.body.username,!req.body.password){
    res.status(400).send({message:'please fill all fields'});
}

        const user= new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });
    await user.save().then(()=>{
        res.send('user created successfully')
    }).catch(err=>{
        res.send(err)

    }) }
}



// Getting all users from the database
const getUser=async(req,res)=>{
    try {
        const user=await userModel.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:'user not found'})
    }
res.send({message:'getting all users'});
}


// getting a user by id
const getUserBYId=async(req,res)=>{
    try {
        const user= userModel.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:'user is not in the database'})
    }
}

// Deleting a user from the database

const deleteUser=async(req,res)=>{
   await userModel.findByIdAndDelete(req.params.id)
   .then(data=>{
    if(!data){
        res.status(404).json({
            message:'user is not found'
        })
    }else{
        res.status(200).json({
            message:'user deleted successfully'
        })
    }
   }).catch(err=>{
    res.status(500).json({
        message:'error deleting user',
    })
   })
    res.send({message:'deleting user'});
}


//updating a user by id

const updateUser=async(req,res)=>{
    if(!req.body){
        res.status(400).json({
            message:'please a user can not be updated with empty records'
        })
    }
    const id=req.params.id;

    await userModel.findByIdAndUpdate(id,req.body,{ useFindAndModify: false })
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:'user is not accessesible'
            })
        }else{
            res.status(200).send({
                message:'user updated successfully',
            })
        }
    }).catch(err=>{
        res.status(500).json({
            message:'error updating user',
            describe:err
        })
    })

res.send({message:'updating user'});
}

module.exports={
    createUser,
    getUser,
    getUserBYId,
    deleteUser,
    updateUser
}