const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Url = require('./models/url')

const app = express()

app.use(bodyParser.json())

const options = { useNewUrlParser: true, useUnifiedTopology: true }
// console.log(process.env.DB_URI)

mongoose.connect(process.env.DB_URI, options).then(() => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log(err)
})

app.get('/allUrls', async (req, res) => {
  // query all urls and send them
  const urls = await Url.find({})
  res.send(urls)
})

app.post('/addUrl', async (req, res) => {
  res.send(req.body)
})

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`))
