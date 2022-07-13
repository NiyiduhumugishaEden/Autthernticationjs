const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const port=8000;
const userRoutes=require('./Routes/userRoutes');


mongoose.connect('mongodb+srv://nodejs:eden@nodejs.fikz1.mongodb.net/Crud?retryWrites=true&w=majority').then((res)=>console.log('Database was connected successfully')).catch((err)=>console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user',userRoutes);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})