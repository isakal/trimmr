var express = require('express')
var mongoose = require('mongoose')

var app = express()
const options = { useNewUrlParser: true, useUnifiedTopology: true }
// console.log(process.env.DB_URI)

mongoose.connect(process.env.DB_URI, options).then(() => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log(err)
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`))
