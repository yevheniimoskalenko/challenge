export const state = () => ({
  Tasks: []
})
export const mutations = {
  addTask(state, payload) {
    state.Tasks.unshift(payload)
  },
  deleteTask(state, payload) {
    const s = state.Tasks.splice(payload, 1)
    console.log(s)
  }
}
export const getters = {
  tasks: (state) => state.Tasks
}
export const actions = {
  async createTask({ commit }, payload) {
    try {
      await commit('addTask', payload)
      // return await this.$axios.$post(`/api/exchange/`, payload)
    } catch (e) {
      commit('SetStatus', e)
      throw e
    }
  },
  async deleteTask({ commit }, payload) {
    try {
      await commit('deleteTask', payload)
    } catch (e) {
      console.log(e)
    }
  }
}
