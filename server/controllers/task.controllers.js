const moment = require('moment')
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
module.exports.findById = async (req, res) => {
  const { id } = req.params
  const label = await Task.findById(id)
  const data = await Add.find({ id_task: id }, { __v: 0 })
  const labels = []
  const datas = []
  for await (const item of data) {
    labels.push(moment(item.time).format('h:mm:ss a'))
    datas.push(item.amount)
  }
  // const s = await data.reduce(function(prev, curr) {
  //   return [...prev, ...curr.amount]
  // }, {})

  // console.log(s)
  // console.log(
  //   moment('2020-12-16T17:01:19.432Z').format('MMMM Do YYYY, h:mm:ss a')
  // )
  return res.json({ labels, datas, label: label.action })
  // const date = []
}
