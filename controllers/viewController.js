const SiteCollection = require('../models/siteModel');
const catchAsync = require('../utils/catchAsync');
exports.getOverview = catchAsync(async (req, res, next) => {
    const tours = await SiteCollection.find();
    res.status(200).render('overview', {
        tours
    });
});

exports.getTour = catchAsync(async (req, res) => {
    const singleSite = await SiteCollection.findById(req.params.id);
    //const tours = await SiteCollection.find();
//console.log(singleSite.artist_name);
    res.status(200).render('tour', {
        singleSite
    });
});