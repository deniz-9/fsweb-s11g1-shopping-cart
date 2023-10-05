// import React, { useContext } from "react";
// import { ScCartCheckout } from "./scParts";

// // Components
// import Item from "./ShoppingCartItem";
// import { CartContext } from "../context/CardContext";

// const ShoppingCart = () => {
//   const { cart } = useContext(CartContext);
//   const getCartTotal = () => {
//     return cart
//       .reduce((acc, value) => {
//         return acc + value.price;
//       }, 0)
//       .toFixed(2);
//   };

//   return (
//     <div>
//       {cart.map((item) => (
//         <Item key={item.id} {...item} />
//       ))}

//       <ScCartCheckout>
//         <p>Total: ${getCartTotal()}</p>
//         <button>Checkout</button>
//       </ScCartCheckout>
//     </div>
//   );
// };

// export default ShoppingCart;

import React from "react";
import { ScCartCheckout } from "./scParts";
import { CartContext } from "../contexts";
import { useContext } from "react";
// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;