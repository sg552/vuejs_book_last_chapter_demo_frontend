export const cartProducts = state => {
  return state.shopping_car.added.map(({id, quantity, title, price, image }) => {
    return {
      id,
      title,
      price,
      image,
      quantity
    }
  })
}
