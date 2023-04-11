const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://momooy6929:rladbsah1!@mocluster.uhke11p.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser : true, useUnifiedTopology : true,useCreateIndex:true, useFindAndModify:false -> mongoose 6 이상부터 지원하지않음.
}).then(() => console.log('MongDB Connected')).catch(err => console.log(err))

//

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})