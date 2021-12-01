import React, {useState } from "react";
import CartContext from "./store";

const CartProvider = (props) => {

    const [currentContextStatus, updatedContextStatus] = useState(false);

    const contextStatusHandler = () => {
        updatedContextStatus( prev => !prev);
    }

    const cartContext = {
        currentStatus: currentContextStatus,
        boolManipulation: contextStatusHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider> 
};

export default CartProvider;