import actionTypes from "../constants/actionTypes"

export const setProducts = (products) => ({
    type: actionTypes.setProducts,
    payload: products
  })

export const selectedProduct = (product) => ({
  type: actionTypes.selectedProduct,
  payload: product
})

export const setLoading = (loadingState) => ({
  type: actionTypes.setLoading,
  payload: loadingState
})

// export const removeSelectedProduct = (product) => ({
//   type: actionTypes.removeSelectedProduct,
//   payload: product
// })