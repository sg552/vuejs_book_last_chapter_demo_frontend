import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART
} from '../mutation_types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    state.all = products
  },

  [ADD_TO_CART] (state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}

export default {
  state,
  mutations
}
