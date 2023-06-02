import React, { createContext, useContext, useReducer } from "react";

import { useNavigate } from "react-router-dom";

import { API } from "../consts/const";
import axios from "axios";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  const getProducts = async () => {
    const { data } = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;

    navigate(url);
  };

  const values = {
    fetchByParams,
    getProductDetails,
    productDetails: state.productDetails,
    addProduct,
    getProducts,
    products: state.products,
    fetchByParams,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default AdminContextProvider;
