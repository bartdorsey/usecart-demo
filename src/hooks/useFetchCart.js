import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartFromBackend, fetchCartFromLocalStorage } from "../store/index.js";
import useAuth from "./useAuth.js";

export default function useFetchCart() {
  const { loggedIn } = useAuth();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchCartFromBackend());
    } else {
      dispatch(fetchCartFromLocalStorage());
    }
  }, [dispatch, loggedIn]);

  return;
}