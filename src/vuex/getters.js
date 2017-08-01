export const cartProducts = state => {
  return state.shopping_car.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      image: product.image,
      quantity
    }
  })
}
