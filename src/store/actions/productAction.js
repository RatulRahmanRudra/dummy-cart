import actionTypes from "../constants/actionTypes"

export const setProducts = (products) => ({
    type: actionTypes.setProducts,
    payload: products
  })

export const selecteddProduct = (product) => ({
  type: actionTypes.selectedProduct,
  payload: product
})

// export const removeSelectedProduct = (product) => ({
//   type: actionTypes.removeSelectedProduct,
//   payload: product
// })