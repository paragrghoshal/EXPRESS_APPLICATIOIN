const mongoose = require('mongoose');
const siteSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true,'hey this is required'] 
    },
    video_url: String
});

const SiteCollection = mongoose.model('site_list_table',siteSchema);
module.exports = SiteCollection;