import {
  SET_BASEINFO,
  CLEAR_BASEINFO,
  GET_BASEINFO,
  COMMEN_ROLE,
  GET_BGCOLOR,
  GET_FONTCOLOR,
  GET_BORDERCOLOR,
  GET_ACTIVECOLOR,
  EXCHANGE_ROLE
} from '../mutation_types'

const state = {
  id: undefined, //用户id
  open_id: undefined, // 用户open_id
  role: undefined
}

const mutations = {
  //设置用户个人信息
  [SET_BASEINFO] (state, data) {
    try {
      state.id = data.id
      state.open_id = data.open_id
      state.role = data.role
    } catch (err) {
      console.log(err)
    }
  },
  //注销用户操作
  [CLEAR_BASEINFO] (state) {
    console.info('清理缓存')
    window.localStorage.clear()
  },
  [EXCHANGE_ROLE] (state) {
    console.info('交换角色')
    if (state.role === 'yonghu') {
      state.role = 'lingdui'
    } else {
      state.role = 'yonghu'
    }
  }
}

const getters = {
  [GET_BASEINFO]: state => {
    console.info('进入到了getter中了')
    let localStorage = window.localStorage
    let user_info
    if (localStorage.getItem('SLLG_BASEINFO')) {
      console.info('有数据')
      user_info = JSON.parse(localStorage.getItem('SLLG_BASEINFO'))
    } else {
      console.info('没有数据')
    }
    return user_info
  },
  [COMMEN_ROLE]: state => {
    if (state.role === 'yonghu') {
      return true
    } else {
      return false
    }
  },
  [GET_BGCOLOR]: state => {
    if (state.role === 'yonghu') {
      return {
        background: '#0fbb95'
      }
    } else {
      return {
        background: '#e72c31'
      }
    }
  },
  [GET_FONTCOLOR]: state => {
    if (state.role === 'yonghu') {
      return {
        color: '#0fbb95',
      }
    } else {
      return {
        color: '#e72c31'
      }
    }
  },
  [GET_BORDERCOLOR]: state => {
    if (state.role === 'yonghu') {
      return {
        borderColor: '#0fbb95'
      }
    } else {
      return {
        borderColor: '#e72c31'
      }
    }
  },
  [GET_ACTIVECOLOR]: state => {
    if (state.role === 'yonghu') {
      return '#0fbb95'
    } else {
      return '#e72c31'
    }
  }
}



const actions = {
  [SET_BASEINFO] ({ commit, state }, data) {
    //保存信息
    if (data !== undefined) {
      console.info('data 有内容')
      let localStorage = window.localStorage
      console.info(data)
      localStorage.setItem('BASEINFO', JSON.stringify(data))
      commit(SET_BASEINFO, data)
    } else {
      console.info('data 是空的')
      if (localStorage.getItem('BASEINFO')) {
        console.info('localStorage有数据')
        data = JSON.parse(localStorage.getItem('BASEINFO'))
        commit(SET_BASEINFO, data)
      } else {
        console.info('localStorage没有数据')
      }
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}


