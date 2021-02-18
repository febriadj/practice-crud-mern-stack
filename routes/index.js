const router = require('express').Router()

// middleware controllers
router.get('/api', require('./controllers').getList)
router.post('/api', require('./controllers').addList)
router.put('/api', require('./controllers').updateList)
router.delete('/api', require('./controllers').deleteList)

router.use((req, res, next) => {
  res.status(404).json({ body: 'Opps 404, Page Not found' })
})

module.exports = router