const { Router } = require('express')
const {
  task,
  deleteTask,
  allTasks,
  addWork,
  findById,
  allLoad
} = require('../controllers/task.controllers')

const router = Router()
router.post('/createTask/', task)
router.delete('/deleteTask/:id', deleteTask)
router.get('/tasks/', allTasks)
router.get('/findById/:id', findById)
router.get('/allLoad/', allLoad)
router.post('/addWork/', addWork)

module.exports = router
