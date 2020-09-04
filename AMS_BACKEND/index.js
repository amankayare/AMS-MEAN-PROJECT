require('dotenv').config()
const express = require('express');
const cors = require("cors");



const app = express();
app.use(cors()); 

const courses = require('./routes/courses');
const students = require('./routes/students');
const faculties = require('./routes/faculty');



//built-in middle-ware function
app.use(express.json()); 

console.log('before middleware function use')

//middle-ware function from other file
app.use('/api/students',students);
app.use('/api/faculties',faculties);


console.log('After middleware function use')

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}....`));
