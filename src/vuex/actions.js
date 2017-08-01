import * as types from './mutation_types'

export const addToCart = ({ commit }, product) => {
  //if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: parseInt(product.id),
      image: product.image,
      title: product.title,
      quantity: product.quantity,
      price: product.price
    })
  //}
}

export const deleteItem = ({ commit }, id) => {
  commit(types.DELETE_ITEM, {
    id: parseInt(id)
  })
}

export const changeItemNumber = ({ commit }, {id, type}) => {
  console.info(id)
  commit(types.CHANGE_ONE_QUANTITY, {
    id: parseInt(id),
    type
  })
}
