import shop from '../../api/shop'
import * as types from '../mutation_types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { id, title, quantity, price, image }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity,
        title,
        price,
        image
      })
    } else {
      record.quantity += quantity
    }
  },

  [types.DELETE_ITEM] (state, { id } ) {
     console.info(id)
     const record = state.added.find(p => p.id === id)
     state.added.forEach((value, index) => {
       console.info(value)
       console.info(index)
       console.info(record)
       if (value.id === record.id) {
         state.added.splice(index, 1)
         return
       }
     })
  },

  [types.CHANGE_ONE_QUANTITY] (state, { id, type }) {
     console.info(id)
     const record = state.added.find(p => p.id === id)
     if (type == 'add') {
      record.quantity ++
     } else {
       if ( record.quantity > 0 ) {
         record.quantity --
       }
     }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
