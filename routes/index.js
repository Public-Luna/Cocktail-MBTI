const express = require('express');
const fs = require('fs')
const ejs = require('ejs');
const router = express.Router();
const mysql      = require('mysql');
// const db_config  = require('../config/db-config.json');
const { query } = require('express');

// var connection = mysql.createConnection({
//   host     : db_config.host,
//   user     : db_config.user,
//   password : db_config.password,
//   database : db_config.database
// });
/* GET home page. */

router.get('/', function (req, res, next) {
  fs.readFile('./views/index.html', 'utf8', function (err, data) {
    res.send(data)
  })
})
router.get('/form', function (req, res, next) {
  fs.readFile('./views/form.html', 'utf8', function (err, data) {
    res.send(data)
  })
})
router.post('/', function (req, res, next) {
  const body = req.body
  connection.query('insert into MusicList (q1, q2, genre) values (?, ?, ?);', [
    body.name,
    body.artist,
    body.genre
  ], function() {
    console.log("222222")
    res.redirect('/report/1')
  })
  fs.readFile('./views/index.html', 'utf8', function (err, data) {
    res.send(data)
  })
})
router.get('/report:id', function (req, res, next) {
 //select q1,q2 from table where sum(table.q1+table.q2+table.q3)>=2 0 1 1 i:0 E:1  
   fs.readFile('./views/report.html', 'utf8', function (err, data) {
    res.send(data)
  })
  redirect('/report/2')
})
router.get('/list', function(req, res, next) {
  fs.readFile('./views/list.ejs', 'utf8', function (err, data) {
    connection.query('select * from MusicList', function (err, results) {
      if (err) {
        res.send(err)
      } else {
        res.send(ejs.render(data, {
          data: results
        
        }))
        console.log(results)

      }
    })
  })
})
router.get('/dbTest', function(req, res, next) { 
    connection.query('select sum(q1+q2+q3),sum(q4+q5+q6),sum(q7+q8+q9),sum(q10+q11+q12) from result where id=1', function (err, results) {
      if (err) {
        res.send(err)
      } else {
        //console.log(results);
        console.log(results[0]['sum(q1+q2+q3)'])
        console.log(results[0]['sum(q4+q5+q6)'])
        console.log(results[0]['sum(q7+q8+q9)'])
        console.log(results[0]['sum(q10+q11+q12)'])
      
   
      }
    })

})


module.exports = router;
