import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 0,
  list: [{
    name: 'seba',
    id: 1,
    filter: true
  },
  {
    name: 'seba',
    id: 2,
    filter: true
  },
  {
    name: 'seba',
    id: 3,
    filter: true
  },
  {
    name: 'seba',
    id: 4,
    filter: false
  }]
}

const mutations = {
  increment (state) {
    state.count++
  }
}

const getters = {
  fiterList: state => {
    return state.list.filter(item => item.filter)
  },
  all: state => state.list,
  count: state => state.count
}

const actions = {
  increment ({ commit }) {
    commit('increment')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
