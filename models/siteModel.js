const mongoose = require('mongoose');
const siteSchema = new mongoose.Schema({
    artist_name: { 
        type: String, 
        required: [true,'hey artist_name is required'] 
    },
    video_desc: { 
        type: String, 
        required: [true,'hey video_desc is required'] 
    },
    video_quality: { 
        type: String, 
        required: [true,'hey video_desc is required'] 
    },
    video_url: String
});

const SiteCollection = mongoose.model('site_list_table',siteSchema);
module.exports = SiteCollection;