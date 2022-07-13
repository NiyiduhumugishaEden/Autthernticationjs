const express=require('express');
const router=express.Router();


const {getUser,createUser,deleteUser,updateUser,getUserBYId}=require('../controllers/userController');

router.post('/',createUser());
// router.get('/',getUser);
router.get('/:id',getUserBYId);
router.patch('/:id',updateUser);

module.exports=router;