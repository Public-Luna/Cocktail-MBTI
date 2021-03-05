const express = require('express');
const router = express.Router();
const mysql = require('mysql');

 const db_config  = require('../config/db-config.json');
 var connection = mysql.createConnection({
  host     : db_config.host,
  user     : db_config.user,
  password : db_config.password,
  database : db_config.database
 });

const report = {
  1: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  2: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  3: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  4: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  5: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  6: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  7: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  },
  8: {
    title : '어디에나 잘 섞이는',
    cocktail : '깔루아밀크',
    cocktail_img : 'KahluaMilk.png',
    content: [
      '깔루아밀크처럼 부드러운 당신, 어디에서나 잘 적응하는군요.',
      '머릿속으로 계획은 열심히 세우지만 실천은 하지 않아요. 하지만 한 번 시작을 한 일에는 끝을 보는 타입이죠.',
      '강요나 압박으로 통제하려고 하는걸 정말 싫어해요. 자유로운게 최고에요 !',
      '남들은 본인에게 착하다고하지만 정작 본인은 그렇게 생각하지않아요. 사실 착하다고하면 부담스러워요 ㅠㅠ',
      '갈등상황을 싫어하는 타입이라 대부분 상대방의 의견에 따르는 편이에요.',
      '누가 나에게 부탁하는건 잘 들어주지만 남한테 민폐끼치는것을 싫어해 상대방에게 부탁하는 것은 어려워해요.',
      '관심 받는거 싫은데 좋고, 좋은데 싫어요. 조용한 관종이랄까 ?',
    ]
  }
}

// root
router.get('/', function (req, res, next) {
  res.rander('index')
})

// form
router.get('/form', function (req, res, next) {
  res.rander('form')
})
router.post('/form',function(req,res,next){
  const body = req.body
  connection.query('insert into result (q1, q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12)values(?,?,?,?,?,?,?,?,?,?,?,?);', [
    body.q1,
    body.q2,
    body.q3,
    body.q4,
    body.q5,
    body.q6,
    body.q7,
    body.q8,
    body.q9,
    body.q10,
    body.q11,
    body.q12
  ], function() {
    //body.q1 ,body.q2 이걸 여기서 이용하면 될거 같음
    //E:0 I:1 1, 6, 10
    //S:0 N:1 3, 4, 12
    //T:0 F:1 2, 7, 9
    //J:0 P:1 5, 8, 11

    //ISTP(백과사전형), INTP(아이디어뱅크형) /report/1
    //ISFP(성인군자형), INFP(잔다르크형) /report/3
    //ISTJ(세상의 소금형), INTJ(과학자형) /report/5
    //ISFJ(임금 뒷편의 권력형),INFJ(예언자형) /report/7

    //ENTJ(지도자형), ESTJ(사업가형) /report/8
    //ESFJ(친선도모형),ENFJ(언변능숙형) /report/2
    //ENFP(스파크형), ENTP(발명가형) /report/4
    //ESTP(수완좋은 활동가형),ESFP(사교적인유형) /report/6
    
    if(body.q1+body.q6+body.q10>1){//E
      if(body.q3+body.q4+body.q12>1){//S
        if(body.q2+body.q7+body.q9>1){//T
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/8')//ESTJ
            console.log("ESTJ")
          }     
          else{//ESTP
            res.redirect('/report/6')//ESTP
            console.log("ESTP")
          }     
        }
        else{//ESF
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/2')//ESFJ
            console.log("ESFJ")
          }
          else{//ESFP
            res.redirect('/report/6')//ESFP
            console.log("ESFP")
          }
        }

      }
      else{//EN
        if(body.q2+body.q7+body.q9>1){//T
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/8')//ENTJ
            console.log("ENTJ")
          }     
          else{//ENTP
            res.redirect('/report/4')//ENTP
            console.log("ENTP")
          }     
        }
        else{//ENF
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/2')//ENFJ
            console.log("ENFJ")
          }
          else{//ENFP
            res.redirect('/report/4')//ENFP
            console.log("ENFP")
          }
        }
      }
     
    } 
    else{//I
      if(body.q3+body.q4+body.q12>1){//S
        if(body.q2+body.q7+body.q9>1){//T
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/5')//ISTJ
            console.log("ISTJ")
          }     
          else{
            res.redirect('/report/1')//ISTP
            console.log("ISTP")
          }     
        }
        else{
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/7')//ISFJ
            console.log("ISFJ")
          }
          else{//ISFP
            res.redirect('/report/3')//ISFP
            console.log("//ISFP")
          }
        }

      }
      else{//IN
        if(body.q2+body.q7+body.q9>1){//T
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/5')//INTJ
            console.log("//INTJ")
          }     
          else{//INTP
            res.redirect('/report/1')//INTP
            console.log("//INTP")
          }     
        }
        else{//INF
          if(body.q5+body.q8+body.q7>1){//J
            res.redirect('/report/7')//INFJ
            console.log("//INFJ")
          }
          else{//INFP
            res.redirect('/report/3')//INFP
            console.log("//INFP")
          }
        }
      }
    }
  })

})

// report/:id
router.get('/report/:id', function (req, res, next) {
  const id = req.params.id;
  let data = {}

  for (let k in report) {
    if (k == id) {
      data = report[k]
    }
  }
  if (data != {}){
    res.render('report', data);
  }else {
    // 404 해주셈
    res.redirect('/404')
  }
})

module.exports = router;
