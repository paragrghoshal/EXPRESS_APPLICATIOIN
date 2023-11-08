//const fs = require('fs');
const SiteCollection = require('./../models/siteModel');

//const allsites = JSON.parse(fs.readFileSync(`${__dirname}/../dev_data/site_list.json`));

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

exports.getAllSites = async (req, res) => {
    try {
        const allsites = await SiteCollection.find();
        res.status(200).json({
            status: 'success',
            results: allsites.length,
            data: {
                allsites
            }
        });
    } catch (err) {

        res.status(404).json({
            status: 'fail',
            message: err
        });

    }

}

exports.getSite = async (req, res) => {

    try {
        const singleSite = await SiteCollection.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                singleSite
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updateSite = async (req, res) => {
    try {
        const singleSite = await SiteCollection.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                site: singleSite
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });

    }
    // const id = req.params.id * 1;
    // const singleSite = allsites.find(el => el.id === id);
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         site: 'Updated.....'
    //     }
    // });
}

exports.deleteSite = async (req, res) => {
    try {

        await SiteCollection.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });

    }
}

exports.createSite = async (req, res) => {
    try {
        const newSite = await SiteCollection.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                sites: newSite
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }


    //const newId = allsites[allsites.length - 1].id + 1;
    //const newSite = Object.assign({ id: newId }, req.body);
    //allsites.push(newSite);
    //fs.writeFile(`${__dirname}/dev_data/site_list.json`, JSON.stringify(allsites), err => {

    //});
}