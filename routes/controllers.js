const animeLists = require('../models/animelists')

exports.getList = (req, res, next) => {
  animeLists.find().sort({ created: - 1 })
    .then(result => res.json({ body: result }))
    .catch(err => console.log(err))
}

exports.addList = (req, res, next) => {
  const { title, author, rating, synopsis } = req.body
  
  if ( !title || !author || !rating || !synopsis ) return console.log('there is a form that has not been filled in')
  
  // create url from title
  const urlConfig = [...title]
  for ( const i in urlConfig ) if ( urlConfig[i] === ' ' ) urlConfig[i] = '-'
  const url = urlConfig.join("").toLowerCase()

  const animelist = new animeLists({
    title: title,
    author: author,
    rating: rating,
    synopsis: synopsis,
    url: url
  })

  animelist.save()
    .then(result => console.log('successfully added data'))
    .catch(err => console.log(err))
}

exports.updateList = (req, res, next) => {
  const query = req.query.upd
  const { title, author, rating, synopsis } = req.body

  if ( query == undefined ) return console.log('failed update list')
  
  const newAnimeList = {
    title: title,
    author: author,
    rating: rating,
    synopsis: synopsis,
  }

  animelists.findOneAndUpdate({ title: query }, newAnimeList)
    .then(result => {
      if ( result ) return console.log('successfully update list')
      
      console.log('list not found')
      res.sendStatus(403)
    })
}

exports.deleteList = (req, res, next) => {
  const query = req.query.del

  if ( query == undefined ) return console.log('failed delete list')

  animeLists.findOneAndDelete({ title: query })
    .then(result => {
      if ( result ) return console.log('successfully delete data')
      
      console.log('list not found')
      res.sendStatus(403)
    })
    .catch(err => console.log(err))
}