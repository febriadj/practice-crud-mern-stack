const listAnime = require('../models/animelists')

exports.getList = (req, res, next) => {
  res.json({ body: 'hello, world' })
}