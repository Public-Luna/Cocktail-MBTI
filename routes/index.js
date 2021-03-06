const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const report_map = require('../report_map');
const question_map = require('../question_map');

// const db_config  = require('../config/db-config.json');
// var connection = mysql.createConnection({
// host     : db_config.host,
// user     : db_config.user,
// password : db_config.password,
// database : db_config.database
// });

// root
router.get('/', function (req, res, next) {
  res.render('index')
})

// form
router.get('/form', function (req, res, next) {
  res.render('form', { question_map })
})
router.post('/form',function(req,res,next){
  const { form } = req.body
  //ISTP(백과사전형), INTP(아이디어뱅크형) /report/1
  //ESFJ(친선도모형),ENFJ(언변능숙형) /report/2
  //ISFP(성인군자형), INFP(잔다르크형) /report/3
  //ENFP(스파크형), ENTP(발명가형) /report/4
  //ISTJ(세상의 소금형), INTJ(과학자형) /report/5
  //ESTP(수완좋은 활동가형),ESFP(사교적인유형) /report/6
  //ISFJ(임금 뒷편의 권력형),INFJ(예언자형) /report/7
  //ENTJ(지도자형), ESTJ(사업가형) /report/8
  let r = {
    'ISTP': 1, 'INTP': 1,
    'ESFJ': 2, 'ENFJ': 2,
    'ISFP': 3, 'INFP': 3,
    'ENFP': 4, 'ENTP': 4,
    'ISTJ': 5, 'INTJ': 5,
    'ESTP': 6, 'ESFP': 6,
    'ISFJ': 7, 'INFJ': 7,
    'ENTJ': 8, 'ESTJ': 8,
  }
  let c = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  }
  form.forEach(function(e, i) {
    c[question_map[i].test[e]] ++
  })
  let d = '';
  d += c['E'] > c['I'] ? 'E' : 'I';
  d += c['S'] > c['N'] ? 'S' : 'N';
  d += c['T'] > c['F'] ? 'T' : 'F';
  d += c['J'] > c['P'] ? 'J' : 'P';
  res.json({redirect: r[d]});
})

// report/:id
router.get('/report/:id', function (req, res, next) {
  const id = req.params.id;
  let data = {}

  for (let k in report_map) {
    if (k == id) {
      data = report_map[k]
    }
  }
  console.log(data)
  if (data != {}){
    res.render('report', data);
  }else {
    // 404 해주셈
    res.redirect('/404')
  }
})

module.exports = router;
