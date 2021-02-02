var router   = require('express').Router();
var shortUrl = require('../controller/shorturl')

router.post('/links',  shortUrl.createShortUrl);

router.get('/:urlHash', shortUrl.getShortUrl)

module.exports = router;