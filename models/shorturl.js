var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
    url      : {
        type : String,
        required : [true, "URL is Mandatory to generate Short URL's"]
    },
    urlHash  : String,
    shorturl : String
})

module.exports  = mongoose.model('ShortUrl', ShortUrlSchema);

