const Task = require('../model/task.model')
const Add = require('../model/addValue.model')
module.exports.task = async (req, res) => {
  const { action, measurement } = req.body
  const createTask = new Task({ action, typeAction: measurement })
  await createTask.save()
  return res.json(createTask)
}
module.exports.deleteTask = async (req, res) => {
  const { id } = req.params
  await Task.deleteOne({ _id: id })
  await Add.deleteMany({ id_task: id })
  return res.json(id)
  // await Add.deleteMany({ id_task: id })
}
module.exports.allTasks = async (req, res) => {
  const allTasks = await Task.find()
  const allWork = await Add.find()
  return res.json({ allTasks, allWork })
}
module.exports.addWork = async (req, res) => {
  const { amount, time, id } = req.body
  const work = new Add({ amount: +amount, time, id_task: id })
  await work.save()
  return res.json(work)
}
