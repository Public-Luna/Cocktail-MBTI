const express = require('express');
const router = express.Router();
const report_map = require('../report_map');
const question_map = require('../question_map');

// root
router.get('/', function (req, res, next) {
  res.render('index')
})

// form
router.get('/form', function (req, res, next) {
  res.render('form', { question_map })
})
router.post('/form',function(req,res,next){
  let form = [];

  if ("form" in req.body) {
    form = req.body['form'];
  }else {
    return res.status(400).json({
      error_name: "비정상적 접근",
      error_message: "data undefined"
    })
  }

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
    try {
      if(e===1 || e===0){ 
        c[question_map[i].test[e]] ++
      }
      else if(e>1 || e<0){
        throw new Error('1, 0 아닌 다른 숫자');
      }
      else if(isNaN(e)){
        throw new Error('문자가 들어간 오류');
      }
      else {
        throw new Error('알 수 없는 오류');
      }
    } catch (e) {
      console.log(e.name+" : "+e.message);
      return res.status(400).json({
        error_name: e.name,
        error_message: e.message
      })
    }
  })
  
  let d = '';
  d += c['E'] > c['I'] ? 'E' : 'I';
  d += c['S'] > c['N'] ? 'S' : 'N';
  d += c['T'] > c['F'] ? 'T' : 'F';
  d += c['J'] > c['P'] ? 'J' : 'P';
  return res.json({redirect: r[d]});
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
  if (data != {}){
    res.render('report', data);
  }else {
    res.redirect('/404')
  }
})
//error
router.get('/404', function (req, res, next) {
  res.render('404')
})

module.exports = router;
