import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart,setCart] = useState(undefined)
  const [isOpen,setIsOpen] = useState(false);
  const [amount,setAmount] = useState(0);
  let item = [{
    id:'1',
    title:'Fall Limited Edition Sneakers',
    price: 125.00,
    amount: amount,
  }]

  const clearCart = () => {
    setCart(undefined)
    setAmount(0)
  }
  const addToCart = ()=>{
    if (amount !== 0) {
      setCart(item) 
    }
    
  }
  const increase = () =>{
    setAmount(amount+1) ;
    if (cart === undefined ) {
      setCart(item) 
    }
  }
  const decrease = () =>{
    if (amount <= 1) {
      clearCart()
    }else{
      setAmount(amount-1) ;
    }
  }
  return (
    <CartContext.Provider value={{isOpen,setIsOpen,cart,addToCart,clearCart,increase,decrease,amount}}>
      {children}
    </CartContext.Provider>

  )
}
export const useCart = () => {return useContext(CartContext)}
export default CartProvider
