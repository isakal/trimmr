const express = require('express')
const mongoose = require('mongoose')

const Url = require('./models/url')

const app = express()
const options = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(express.json())

// try connectinng to mongo database
mongoose.connect(process.env.DB_URI, options).then(() => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log(err)
})

app.get('/all-urls', async (req, res) => {
  // query all urls and send them
  const urls = await Url.find({})
  res.json({
    urls: urls
  })
})

app.post('/add-url', async (req, res) => {
  // create url with req.body.full, save it and return shortened url back to client
  const urlAlreadyExists = await Url.findOne({ full: req.body.full })
  if (urlAlreadyExists) {
    return res.json({
      url: urlAlreadyExists.short
    })
  }
  // create new url if it doesn't already exists
  const url = new Url({ full: req.body.full })
  await url.save()

  res.json({
    url: url.short
  })
})

app.get('/:shortUrl', async (req, res) => {
  // fetch url with corresponding shortUrl
  const url = await Url.findOne({ short: req.params.shortUrl })
  // if url doesn't exists, send a 404
  if (url === null) {
    res.status(404).json({
      error: 'No site found.'
    })
  }
  // raise clicks by one and redirect the user to the full url
  // FIXME: implement transactions
  url.clicks++
  await url.save()

  res.redirect(url.full)
})

app.listen(5000, () => console.log('Trimmr listening on port 5000!'))
