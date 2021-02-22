const animeLists = require('../models/animelists')

exports.searchByTitle = (req, res, next) => {
  const query = req.params.title

  if (!query) return console.log('empty query')

  animeLists.findOne({ url: query })
    .then(result => {
      if (result) return res.json({ body: result })
      res.sendStatus(403)
    })
    .catch(err => console.log(err))
}