const express = require('express');
const siteController = require('./../controllers/siteController');


const router = express.Router();
//router.param('id',siteController.checkID);
router
    .route('/')
    .get(siteController.getAllSites)
    .post(siteController.createSite);
router
    .route('/:id')
    .get(siteController.getSite)
    .patch(siteController.updateSite)
    .delete(siteController.deleteSite);

module.exports = router;