const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const toDoRoutes = require('./routes/toDoRoutes');
require('dotenv').config();
app.use(cors());
app.use(express.json());




app.use('/api',authRoutes);
app.use('/api/todo',toDoRoutes);
mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("DB Connected Successfully!");
}).catch(err=>{
    console.log(err);
})
const PORT = process.env.PORT || 5004;
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})


