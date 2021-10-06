import actionTypes from "../constants/actionTypes";

const initState = {
  isLoading: false,
  products: []
}

export const productReducer = (state = initState, action) => {
  switch(action.type){
    case actionTypes.setProducts:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.setLoading:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export const selectedProductReducer = (state = {}, action) => {
  switch(action.type){
    case actionTypes.selectedProduct:
      return {
        ...state,
        ...action.payload
      }
    default :
      return state
  }
}

// export default productReducer;