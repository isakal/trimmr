const router = require('express').Router()

const Url = require('../models/url')

router.get('/all-urls', async (req, res) => {
  // query all urls and send them
  const urls = await Url.find({})
  return res.json({
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
    return res.status(404).json({
      error: 'No site found.'
    })
  }
  try {
    // start transaction
    const session = await Url.startSession()
    session.startTransaction()

    // raise clicks by one inside the transaction
    url.clicks++

    // end session and transaction
    await url.save()
    session.endSession()
  } catch (error) {
    console.log(error)
  }
  return res.redirect(url.full)
})

module.exports = router
