import React, { useEffect, useState } from 'react'
import img from '../img/image-product-1-thumbnail.jpg'
import { BsTrash } from 'react-icons/bs'
import { useOverlay } from '../context/OverlayContext';
import { useCart } from '../context/CartContext';
const CartItem = ({item}) => {
  const {title,price} =item;
  const {setIsActive} = useOverlay();
  const {clearCart,amount} = useCart()
  const [totla,setTotla] = useState(price )
  
  useEffect(()=>{
    setTotla(price * amount)
  },[amount,price])
  return (
    <div className='flex items-center justify-between mb-6'>

      <div onClick={()=>setIsActive(true)}>
        <img src={img} alt="item-img" className='w-16 rounded-xl' />
      </div>

      <div>
        <div className='text-sm tracking-wide lg:text-base font-primary text-darkblue'>{title}</div>
        <div ><span className='text-lg font-semibold lg:text-xl text-grayishBule'>${price} x{amount}</span> <span className='text-lg font-semibold lg:text-xl text-varkBlue'>${totla}</span></div>
      </div>
      <div onClick={()=>clearCart()}>
        <BsTrash className='text-xl text-darkblue'/>
      </div>
    </div>
  )
}

export default CartItem
