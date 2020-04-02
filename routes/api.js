const router = require('express').Router()

const Url = require('../models/url')

router.get('/all-urls', async (req, res) => {
  // query all urls and send them
  const urls = await Url.find({})
  res.json({
    urls: urls
  })
})

router.post('/add-url', async (req, res) => {
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

router.get('/:shortUrl', async (req, res) => {
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

module.exports = router
