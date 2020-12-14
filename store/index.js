import { remove } from 'lodash'
export const state = () => ({
  Tasks: [],
  Works: []
})
export const mutations = {
  addTask(state, payload) {
    state.Tasks.unshift(payload) // добавлення завдання в початок завдань
  },
  deleteTask(state, payload) {
    remove(state.Works, ['id', payload])
    state.Tasks.splice(
      state.Tasks.findIndex((e) => e.id === payload),
      1
    )
  },
  addWork(state, payload) {
    state.Works.push(payload)
  }
}
export const getters = {
  tasks: (state) => state.Tasks,
  typeTask: (state) => {
    const result = []
    for (const i of state.Tasks) {
      result.push({ value: i.action, id: i.id })
    }
    console.log(result)
    return result
  },
  works: (state) => state.Works
}
export const actions = {
  async createTask({ commit }, payload) {
    try {
      await commit('addTask', payload) // виклик завдання із мутацією
      // return await this.$axios.$post(`/api/exchange/`, payload)
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  async deleteTask({ commit }, payload) {
    try {
      await commit('deleteTask', payload) // виклик завдання із мутацією
    } catch (e) {
      console.log(e)
    }
  },
  async addWork({ commit }, payload) {
    try {
      await commit('addWork', payload)
    } catch (e) {
      console.log(e)
    }
  }
}
