const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const siteRouter = require('./routes/siteRoutes');


const app = express();

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/sites',siteRouter);

// const port = "3000";
// app.listen(port, () => {
//     console.log("Application is running .....");
// });
module.exports = app;




