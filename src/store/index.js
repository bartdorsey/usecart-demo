import { createStore, applyMiddleware } from "redux"
import reduxLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const LOCALSTORAGE_KEY = "cart"

const SET_CART = "set_cart"
const ADD_ITEM_TO_CART = 'add_item_from_cart';
const REMOVE_ITEM_FROM_CART = "remove_item_from_cart"

// ACTIONS
export const setCart = (cartItems) => {
  return {
    type: SET_CART,
    payload: cartItems,
  }
}

export const addItemToCart = (cartItem) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: cartItem
  }
}

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
  }
}

// THUNKS

export const fetchCartFromBackend = () => {
  return async (dispatch) => {
    // TODO: make a fetch call to get the cart
    const dummyCart = [
      {
        id: 1,
        name: "Shampoo",
        price: 1.2,
      },
      {
        id: 2,
        name: "Conditioner",
        price: 1.6,
      },
    ]
    dispatch(setCart(dummyCart))
  }
}

export const fetchCartFromLocalStorage = () => {
  return (dispatch) => {
    const cartItemsString = window.localStorage.getItem(LOCALSTORAGE_KEY);
    const cartItems = JSON.parse(cartItemsString) || [];

    dispatch(setCart(cartItems))
  }
}

export const addItemToBackendCart = (product) => {
  return async (dispatch) => {
    // TODO make call to backend
    dispatch(addItemToCart(product))
  }
}

export const addItemToLocalStorageCart = (product) => {
  return async (dispatch) => {
    const cartItems = getCartFromLocalStorage();
    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
    }
    cartItems.push(newCartItem);
    dispatch(addItemToCart(newCartItem));
  }
}

export const removeItemFromBackend = (id) => {
  return async (dispatch) => {
    // TODO make the fetch call to the backend
    dispatch(removeItemFromCart(id))
  }
}

export const removeItemFromLocalStorage = (id) => {
  return (dispatch) => {
    const cartItems = getCartFromLocalStorage();
    const newCartItems = cartItems.filter((item) => item.id !== id)
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newCartItems))
    dispatch(removeItemFromCart(id))
  }
}

// HELPERS

function getCartFromLocalStorage() {
  const cartItemsString = window.localStorage.getItem("cartItems")
  return JSON.parse(cartItemsString) || [];
}

const initialState = {
  cartItems: []
}

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART: {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    case ADD_ITEM_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
    }
    default: {
      return state
    }
  }
}

const middleware = applyMiddleware(reduxLogger, thunkMiddleware)

const store = createStore(reducer, composeWithDevTools(middleware))

export default store
