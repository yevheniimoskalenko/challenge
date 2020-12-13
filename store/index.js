import { findLastIndex } from 'lodash'
export const state = () => ({
  Tasks: [],
  Works: []
})
export const mutations = {
  addTask(state, payload) {
    state.Tasks.unshift(payload) // добавлення завдання в початок завдань
  },
  deleteTask(state, payload) {
    console.log(state.Works.findIndex((e) => e.id_task === payload))

    state.Works.splice(
      state.Works.findIndex((e) => e.id_task === payload),
      findLastIndex(state.Works, ['id_task', payload])
    )

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
      result.push({ value: i.action })
    }
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
