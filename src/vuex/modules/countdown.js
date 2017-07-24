import {
  START_COUNTDOWN
} from '../mutation_types'

const count_number = 30

const state = {
  number: 0,
  button_title: '获取验证码'
}

const mutations = {
  [START_COUNTDOWN] (state, data) {
    try {
      if (!data) {
        state.number -= 1
        state.button_title = '剩余' + state.number + '秒'
        if (state.number == 0) {
          state.button_title = '获取验证码'
        }
      } else {
        state.number = data
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const getters = {
  get_button_disabled: state => {
    if (state.number === 0) {
      return false
    } else {
      return true
    }
  }
}

const actions = {
  [START_COUNTDOWN] ({ commit, state }) {
    if (state.number === 0 ) {
      commit(START_COUNTDOWN, count_number)
      let timer
      timer = setInterval(function () {
        if (state.number === 0) {
          clearInterval(timer)
          console.info('timer停止了')
        } else {
          commit(START_COUNTDOWN)
          console.info('timer正在进行' + state.number)
        }
      }, 1000)
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
