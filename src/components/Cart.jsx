import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
    const {isOpen,cart} = useCart()
    
  return (
    <div className={`${isOpen? 'top-24':'-top-full'} absolute  w-[350px] h-fit   right-[5%] bg-white rounded-2xl shadow-2xl transition-all duration-300 lg:w-[380px] `}>
      <div className="p-5 text-2xl font-bold border-b ">cart</div>
      {cart? <div className="p-5 transition-all duration-300">
      {cart.map(item=>{
        return <CartItem item={item} key={item.id}/>
      })}

      
      <button className="w-full p-4 tracking-wide text-center text-white bg-primary font-primary rounded-xl">Checkout</button>
      

      </div>:
      <div className="flex items-center justify-center w-full h-[190px] text-grayishBule font-primary text-lg font-semibold transition-all duration-300">your cart is empty.</div>}
        
    </div>
  )
}

export default Cart
