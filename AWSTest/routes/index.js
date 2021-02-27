var express = require('express');
const fs = require('fs')
const ejs = require('ejs');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  fs.readFile('./views/index.html', 'utf8', function (err, data) {
    res.send(data)
  })
})

module.exports = router;
