import {
  TOAST_SHOW_STATUS
} from '../mutation_types'

// 是否存在tabbar
const state = {
  show_success: false
}

const mutations = {
  [TOAST_SHOW_STATUS] (state, status) {
    try {
      state.show_success = status
    } catch (err) {
      console.log(err)
    }
  }
}

const actions = {
  [TOAST_SHOW_STATUS] ({ commit, state }, status) {
    commit(TOAST_SHOW_STATUS, status)
    setTimeout(function(){
      commit(TOAST_SHOW_STATUS, false)
    }, 2000)
  }
}

export default {
  state,
  mutations,
  actions
}
