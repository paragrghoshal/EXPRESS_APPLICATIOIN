const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const siteRouter = require('./routes/siteRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const allsites = JSON.parse(fs.readFileSync(`${__dirname}/dev_data/site_list.json`));

// const getAllSites = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: allsites.length,
//         data: {
//             allsites
//         }
//     });
// }

// const getSite = (req, res) => {
//     const id = req.params.id * 1;
//     const singleSite = allsites.find(el => el.id === id);
//     //if(id>allsites.length-1){
//     if (!singleSite) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             singleSite
//         }
//     });
// }

// const updateSite = (req, res) => {
//     const id = req.params.id * 1;
//     const singleSite = allsites.find(el => el.id === id);
//     if (id > allsites.length - 1) {
//         // if(!singleSite){
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             site: 'Updated.....'
//         }
//     });
// }

// const deleteSite = (req, res) => {
//     const id = req.params.id * 1;
//     const singleSite = allsites.find(el => el.id === id);
//     if (id > allsites.length - 1) {
//         // if(!singleSite){
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: null
//     });
// }

// const createSite = (req, res) => {
//     const newId = allsites[allsites.length - 1].id + 1;
//     const newSite = Object.assign({ id: newId }, req.body);
//     allsites.push(newSite);
//     fs.writeFile(`${__dirname}/dev_data/site_list.json`, JSON.stringify(allsites), err => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 sites: newSite
//             }
//         });
//     });
// }

// app.get('/api/v1/sites', getAllSites);
// app.post('/api/v1/sites',createSite );
// app.get('/api/v1/sites/:id', getSite);
// app.patch('/api/v1/sites/:id', updateSite);
// app.delete('/api/v1/sites/:id', deleteSite);
// const siteRouter = express.Router();
// siteRouter
//     .route('/')
//     .get(getAllSites)
//     .post(createSite);
// siteRouter
//     .route('/:id')
//     .get(getSite)
//     .patch(updateSite)
//     .delete(deleteSite);
//mounting router
app.use('/api/v1/sites',siteRouter);



const port = "3000";
app.listen(port, () => {
    console.log("Application is running .....");

});



