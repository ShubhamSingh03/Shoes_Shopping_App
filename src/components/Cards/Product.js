import React, { useState } from "react";
import Cart from "../Cart/Cart";
import BuyNow from "./BuyNow";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [cartItem, setCartItem] = useState([]);

  // add in cart method
  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex((array) => {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      //  checking if product is already in cart
      toast.error("🛒 Product is already in cart !", {
        //toast message error
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    setCartItem([...cartItem, item]);
    toast.info("🛒 Product added to Cart !", {
      // toast message added to cart
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // buy now method {as of now no payment integration so empties cart}
  const buyNow = () => {
    setCartItem([]);
    toast.success("🚀 Purchased Complete !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // removing product from cart
  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
    toast.warn("Product removed from Cart !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    <>
      <BuyNow addInCart={addInCart} />
      <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
    </>
  );
};

export default Product;
