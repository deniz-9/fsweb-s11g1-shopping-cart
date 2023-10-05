

import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductsContext, CartContext } from "./contexts";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const removeItem = (item) => {
    const removedCart = [...cart.filter((x) => x.id !== item.id)];
    setCart(removedCart);
  };

  return (
    <ProductsContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
