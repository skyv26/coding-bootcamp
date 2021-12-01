import React from "react";

const CartContext = React.createContext({
    currentStatus: null,
    boolManipulation: () => {}
});

export default CartContext;