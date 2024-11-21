const express = require('express');
const app = express();
const seatsRouter = require('./Routes/Seats');
const gpaRouter = require('./Routes/cgpa');

const port = process.env.PORT || 3333;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('stylesheets'));
app.use('/seats',seatsRouter);
app.use('/cgpa',gpaRouter);

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`Server Running`);
})