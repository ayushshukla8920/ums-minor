const express = require('express');
const app = express();
const seatsRouter = require('./Routes/Seats');
const gpaRouter = require('./Routes/cgpa');
const fetchgpa = require('./Routes/fetch_gpa');
const rankRouter = require('./Routes/rank-2023');
const rankRouter2 = require('./Routes/rank-2024');

const port = process.env.PORT || 3333;

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/stylesheets"));
app.use('/seats',seatsRouter);
app.use('/cgpa',gpaRouter);
app.use('/find_cgpa',fetchgpa);
app.use('/rank-2023',rankRouter);
app.use('/rank-2024',rankRouter2);

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`Server Running`);
})
