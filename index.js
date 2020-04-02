const express = require('express')
const mongoose = require('mongoose')
const apiRouter = require('./routes/api')

const app = express()
const options = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(express.json())

// try connectinng to mongo database
mongoose.connect(process.env.DB_URI, options).then(() => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log(err)
})

// use api route
app.use('/api', apiRouter)

app.listen(5000, () => console.log('Trimmr listening on port 5000!'))
