import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import Counter from "./components/Counter";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";



import React from "react";
import { PRODUCTS_DATA } from "./data/products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

 

  const [productList, setProduct] = useState(PRODUCTS_DATA);
  const [cart, setCart] = useState([]);


  const handleDeleteProduct = (id) => {
    setProduct(productList.filter((counter) => counter.id !== id));
    setCart(cart.filter((item) => item.id !== id));
  };
    
  // const handleDelete = (id) => {
  //   setProduct(productList.filter((counter) => counter.id !== id))
  // };

  const handleIncrement = (id) => {
    setProduct(prevProductList =>
      prevProductList.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            value: product.value + 1,
          };
        }
        return product;
      })
    );
  
    const updatedIncreaseCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value: item.value + 1,
        };
      }
      return item;
    });
    setCart(updatedIncreaseCart);
  };
  
  const handleDecrement = (id) => {
    setProduct(prevProductList =>
      prevProductList.map((product) => {
        if (product.id === id && product.value > 0) {
          return {
            ...product,
            value: product.value - 1,
          };
        }
        return product;
      })
    );
  
    const updatedDecCart = cart.map((item) => {
      if (item.id === id && item.value > 0) {
        return {
          ...item,
          value: item.value - 1,
        };
      }
      return item;
    });
    setCart(updatedDecCart);
  };
  

  const getCountersWithValue = () => {
    return productList.filter((counter) => counter.value > 0).length;
  };

  const handleClick = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        value: updatedCart[existingItemIndex].value + 1
      };
    } else {
      updatedCart.push({
        ...item,
        value: 1
      });
    }
  
    setCart(updatedCart);
  };
  const [show, setShow] = useState(true);
  return (
    <div>
      <BrowserRouter>
     
      <Navbar totalCount={getCountersWithValue()} setShow={setShow} />
      <Routes>
        <Route exact path="/" element= { <Counters
              counters={productList}
              onDelete={handleDeleteProduct}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              handleClick={handleClick}
            />}>
           
          </Route>
          <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} onDelete={handleDeleteProduct} />}>
            
          </Route>
     
      
        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;