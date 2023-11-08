const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DB_CONNECTION_STRING.replace('<USERNAME>', process.env.DB_USER).replace('<PASSWORD>', process.env.DB_PASSWORD);
//console.log(DB);
mongoose.connect(DB,{}).then(con => {
    console.log('DB connect successfull');
});



// const testSite = new SiteCollection({
//     id:1,
//     name:"guri",
//     video_url:"rani"
// });
// testSite.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log('Error:',err);
// });





const app = require('./app');

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Application is running .....");
});