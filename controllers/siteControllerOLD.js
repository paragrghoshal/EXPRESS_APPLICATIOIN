// const fs = require('fs');
// const SiteCollection = require('./../models/siteModel');

// const allsites = JSON.parse(fs.readFileSync(`${__dirname}/../dev_data/site_list.json`));

// exports.checkID = (req,res,next,val)=>{
//     // console.log(val);
//     if (req.params.id *1 > allsites.length - 1) {
//         // if(!singleSite){
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     next();
// }

// exports.getAllSites = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: allsites.length,
//         data: {
//             allsites
//         }
//     });
// }

// exports.getSite = (req, res) => {
//     const id = req.params.id * 1;
//     const singleSite = allsites.find(el => el.id === id);
//     res.status(200).json({
//         status: 'success',
//         data: {
//             singleSite
//         }
//     });
// }

// exports.updateSite = (req, res) => {
//     const id = req.params.id * 1;
//     const singleSite = allsites.find(el => el.id === id);
//     res.status(200).json({
//         status: 'success',
//         data: {
//             site: 'Updated.....'
//         }
//     });
// }

// exports.deleteSite = (req, res) => {
//     const id = req.params.id * 1;
//     const singleSite = allsites.find(el => el.id === id);
//     res.status(200).json({
//         status: 'success',
//         data: null
//     });
// }

// exports.createSite = (req, res) => {
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