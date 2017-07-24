import {
  TABBAR_SHOW_STATUS
} from '../mutation_types'

// 是否存在tabbar
const state = {
  status: false
}

const mutations = {
  [TABBAR_SHOW_STATUS] (state, status) {
    try {
      state.status = status
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  state,
  mutations
}
