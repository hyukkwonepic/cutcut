var express = require('express');
var router = express.Router();
var Url = require('./../models/Url');
var encode = require('./../utils/encode');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/api/shorten', async (req, res) => {
  try {
    let longUrl = req.body.url;
    let shortUrl = '';

    const doc = await Url.findOne({ long_url: longUrl });

    if (doc) {
      shortUrl = process.env.HOST + encode(doc._id);
      res.send({ short_url: shortUrl });
    } else {

      const newUrl = await Url({
        long_url: longUrl
      }).save();

      shortUrl = process.env.HOST + encode(newUrl._id);
      res.send({ short_url: shortUrl });
    }

  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
