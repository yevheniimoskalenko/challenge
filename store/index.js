import { remove } from 'lodash'
export const state = () => ({
  Tasks: [],
  Works: [],
  Diagram: []
})
export const mutations = {
  addTask(state, payload) {
    state.Tasks.unshift(payload) // добавлення завдання в початок завдань
  },
  loadTasks(state, payload) {
    state.Tasks = payload
  },
  loadWorks(state, payload) {
    state.Works = payload
  },
  deleteTask(state, payload) {
    state.Tasks.splice(
      state.Tasks.findIndex((e) => e._id === payload),
      1
    )
    remove(state.Works, ['_id', payload])
  },
  addWork(state, payload) {
    state.Works.push(payload)
  },
  createDiagram(state, payload) {
    state.Diagram = payload
  }
}
export const getters = {
  tasks: (state) => state.Tasks,
  typeTask: (state) => {
    return state.Tasks.reduce((acc, item) => {
      return acc.concat({
        value: item.action + ' ' + item.typeAction,
        id: item._id
      })
    }, [])
  },
  works: (state) => state.Works,
  createDiagram: (state) => state.Diagram
}
export const actions = {
  async createTask({ commit }, payload) {
    try {
      const task = await this.$axios.$post(`/api/createTask/`, payload)
      await commit('addTask', task)
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  async deleteTask({ commit }, payload) {
    try {
      await commit('deleteTask', payload)

      await this.$axios.$delete(`/api/deleteTask/${payload}`)
    } catch (e) {
      console.log(e)
    }
  },
  async addWork({ commit }, payload) {
    try {
      const work = await this.$axios.$post(`/api/addWork`, payload)
      await commit('addWork', work)
    } catch (e) {
      console.log(e)
    }
  },
  async createDiagram({ commit }, payload) {
    try {
      const result = await this.$axios.$get(`/api/findById/${payload}`)
      await commit('createDiagram', result)
    } catch (e) {
      console.log(e)
    }
  },
  async Tasks({ commit }) {
    const tasks = await this.$axios.$get(`/api/tasks`)
    commit('loadTasks', tasks.allTasks)
    commit('loadWorks', tasks.allWork)
  },
  async allLoad({ commit }) {
    try {
      await console.log()
    } catch (e) {}
  }
}
