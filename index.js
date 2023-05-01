const express = require('express');
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User");

// application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true}));

const config = require('./config/key');

// application/json 
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    //useNewUrlParser : true, useUnifiedTopology : true,useCreateIndex:true, useFindAndModify:false -> mongoose 6 이상부터 지원하지않음.
}).then(() => console.log('MongDB Connected')).catch(err => console.log(err))

//

app.get('/', (req, res) => {
  res.send('Hello World! nodemon!')
})

app.post('/register', (req, res)=>{
  
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면 DB에 넣어줌
  
  //const user = new User(req.body)
  // user.save((err, userInfo)=>{
  //   if(err) return res.json({ success : false, err})
  //   return res.status(200).json({
  //     success: true
  //   })
  // })
  try {
    const user = new User(req.body);
    user.save()
      .then(() => {
        res.status(200).json({success: true})
      })
      .catch((err) => {
        return res.json({success:false, err})
      })
  } catch (err) {
    console.log(err);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

