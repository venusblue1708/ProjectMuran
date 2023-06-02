import React, { createContext, useContext, useReducer } from "react";
import { getCountProductsInWishList } from "../functions/functions";
export const wishListContext = createContext();

export const useWishList = () => useContext(wishListContext);

const INIT_STATE = {
  wishList: JSON.parse(localStorage.getItem("wishList")),
  wishListLength: getCountProductsInWishList(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_WISH_LIST":
      return { ...state, wishList: action.payload };

    case "GET_WISH_LIST_LENGTH":
      return { ...state, wishListLength: action.payload };

    default:
      return state;
  }
}
const WishListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getWishList = () => {
    let wishList = JSON.parse(localStorage.getItem("wishList"));
    if (!wishList) {
      localStorage.setItem("wishList", JSON.stringify({ products: [] }));
      wishList = { products: [] };
    }

    dispatch({ type: "GET_WISH_LIST", payload: wishList });
  };

  const addProductToWishList = (product) => {
    let wishList = JSON.parse(localStorage.getItem("wishList"));
    if (!wishList) {
      wishList = { products: [] };
    }
    let obj = {
      item: product,
    };

    let productToFind = wishList.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      wishList.products.push(obj);
    } else {
      wishList.products = wishList.products.filter(
        (elem) => elem.item.id != product.id
      );
    }

    localStorage.setItem("wishList", JSON.stringify(wishList));

    dispatch({
      type: "GET_WISH_LIST",
      payload: wishList,
    });
  };
  function checkProductInWishList(id) {
    let wishList = JSON.parse(localStorage.getItem("wishList"));
    if (wishList) {
      let newWishList = wishList.products.filter((elem) => elem.item.id == id);
      return newWishList.length > 0 ? true : false;
    }
  }

  function deleteWishListProduct(id) {
    let wishList = JSON.parse(localStorage.getItem("wishList"));
    wishList.products = wishList.products.filter((elem) => elem.item.id != id);
    localStorage.setItem("cart", JSON.stringify(wishList));
    getWishList();
  }
  const values = {
    getWishList,
    wishList: state.wishList,
    addProductToWishList,
    deleteWishListProduct,
    checkProductInWishList,
  };
  return (
    <wishListContext.Provider value={values}>
      {children}
    </wishListContext.Provider>
  );
};

export default WishListContextProvider;
