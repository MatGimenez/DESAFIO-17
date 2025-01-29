import { createContext, useState } from "react";
import { pizzaCart } from "../assets/pizzas";
const carritoInicial = [pizzaCart[0],pizzaCart[1],pizzaCart[2]]

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(carritoInicial);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;