import { createContext, useState } from "react";



const CartContext =createContext()

const CartProvider = ({children})=>{

    const [cartItem,setCartItem] = useState([])

    const addToCart = (product)=>{
        const arr = cartItem
        const cartIndex = cartItem.findIndex((item)=>item.id == product.id)

        if(cartIndex == -1){
            arr.push({...product,quantity:1})

        }
        else{
            arr[cartIndex].quantity +=1
        }

        setCartItem([...arr])

    }

    return(
        <CartContext.Provider value={{cartItem,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

export {CartContext}