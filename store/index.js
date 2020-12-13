export const state = () => ({
  status: null
})
export const mutations = {
  SetStatus(state, payload) {
    state.status = payload
  }
}
export const getters = {
  status: (state) => state.status
}
export const actions = {
  async exchangeValues({ commit }, payload) {
    try {
      return await this.$axios.$post(`/api/exchange/`, payload)
    } catch (e) {
      commit('SetStatus', e)
      throw e
    }
  },
  async payCoin({ commit }, payload) {
    try {
      return await this.$axios.$post(`/api/pay/`, payload)
    } catch (e) {
      commit('SetStatus', e)
    }
  }
}
