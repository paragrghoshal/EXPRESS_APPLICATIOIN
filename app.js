const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const siteRouter = require('./routes/siteRoutes');
const viewRouter = require('./routes/viewRoutes');


const app = express();
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.use(express.json());
// app.get('/',(req,res)=>{
//     res.status(200).render('base',{
//         pageheading:'This is yours Site',
//         user:'Shona'
//     });
// });

// app.get('/overview',(req,res)=>{
//     res.status(200).render('overview',{
//         title:'All Tours'
//     });
// });

// app.get('/tour',(req,res)=>{
//     res.status(200).render('tour',{
//         title:'tour the tour'
//     });
// });
app.use('/',viewRouter);
app.use('/api/v1/sites',siteRouter);

// const port = "3000";
// app.listen(port, () => {
//     console.log("Application is running .....");
// });
module.exports = app;