import { createContext } from "react";


export const    CartContext = createContext([]);

export function CartProvider({ children }){

    return <CartContext.Provider value={[2]}>{children}</CartContext.Provider>;
}
