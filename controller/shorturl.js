var ShortUrl = require('../models/shorturl');
var shortUUid = require('short-uuid')();

function createShortUrl(req, res, next){
    var shortUrl = new ShortUrl({
        url     : req.body.url,        
        shorturl :shortUUid.new() 
    })
    shortUrl.save((err, data)=>{
        if(err){
            res.status(400).send( err.message || 'Unable to generate short URL');
        }
        else {
            res.send({
                url      : data.url,
                urlHash  : data.id  ,
                shorturl : data.shorturl ,
            })
        }
    })
}

function getShortUrl(req, res, next){
    
    if(!req.params.urlHash){
        res.status(400).send('Field not found');
    }
    ShortUrl.findById(req.params.urlHash, (err, data)=>{
        if(err){
           res.status(404).send('Unable to find the requested resource'); 
        }    
        else {
            res.redirect(data.url);
        }
    })
}

module.exports ={
    createShortUrl : createShortUrl,
    getShortUrl : getShortUrl
}