const { Router } = require('express')
const {
  task,
  deleteTask,
  allTasks,
  addWork
} = require('../controllers/task.controllers')

const router = Router()
router.post('/createTask/', task)
router.delete('/deleteTask/:id', deleteTask)
router.get('/tasks/', allTasks)
router.post('/addWork/', addWork)

module.exports = router
