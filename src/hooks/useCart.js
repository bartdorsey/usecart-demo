import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  removeItemFromBackend,
  addItemToBackendCart,
  addItemToLocalStorageCart,
  removeItemFromLocalStorage,
} from "../store/index.js"
import useAuth from "./useAuth.js"

export default function useCart() {
  const { loggedIn } = useAuth()
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()

  const addItem = useCallback(
    (product) => {
      if (loggedIn) {
        dispatch(addItemToBackendCart(product))
      } else {
        dispatch(addItemToLocalStorageCart(product))
      }
    },
    [dispatch, loggedIn]
  )

  const removeItem = useCallback(
    (id) => {
      if (loggedIn) {
        dispatch(removeItemFromBackend(id));
      } else {
        dispatch(removeItemFromLocalStorage(id));
      }
    },
    [dispatch, loggedIn]
  )

  return {
    cartItems,
    addItem,
    removeItem,
  }
}
