const SiteCollection = require('../models/siteModel');
const catchAsync = require('../utils/catchAsync');
exports.getOverview = catchAsync(async (req,res,next)=>{
    const tours = await SiteCollection.find();
    res.status(200).render('overview',{
        tours
    });
});

exports.getTour = (req,res)=>{
    res.status(200).render('tour',{
        title:'tour the tour'
    });
}