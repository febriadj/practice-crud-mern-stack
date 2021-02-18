const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  app = express()
  
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// middleware route
app.use(require('./routes/index'))

const dbObj = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }
mongoose.connect(process.env.DATABASE_URI, dbObj )
  .then(result => console.log('mongo connected'))
  .catch(err => console.log(err))

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`running on port ${port}`)
})