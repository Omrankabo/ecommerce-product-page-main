import React from 'react'
import ImageSlider from "../components/ImageSlider";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import {BsCart3} from 'react-icons/bs'
import { useCart } from '../context/CartContext';

const Home = () => {
  const {addToCart,increase,decrease,amount} = useCart()
  return (
    <main >
        <section className='justify-between mx-auto lg:container lg:max-w-screen-md xl:max-w-[1050px] xl:pl-4 lg:flex lg:py-16 xl:pt-[5.5rem]  '>
          <ImageSlider/>

          <div className='px-8 pt-4 lg:pt-12 xl:pt-12 lg:px-0 lg:w-1/2 xl:pl-12 '>

            <div className='lg:max-w-xl'>

              <div className='mb-4 text-sm font-semibold tracking-widest uppercase text-primary font-primary lg:mb-4 xl:mb-6'> Sneaker Company</div>
              <h1 className='mb-4 text-3xl font-bold lg:mb-4  xl:text-5xl lg:max-w-[580px] xl:mb-8 font-primary text-varkBlue'>Fall Limited Edition Sneakers</h1>
              <p className='mb-8 text-base font-primary text-darkblue lg:max-w-[550px] leading-6'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
              durable rubber outer sole, they’ll withstand everything the weather can offer.
              </p>
            </div>

            <div className='flex items-center justify-between w-full mb-8 lg:flex-col lg:items-start ' >
              <div className='flex items-center justify-between lg:mb-2 '>
                <div className='text-3xl font-bold font-primary text-varkBlue'>$125.00</div>
                <div className='px-2 py-1 ml-8 font-bold rounded-md bg-secondary text-primary'>50%</div>
              </div>
              <div className='text-xl font-bold line-through text-grayishBule lg:text-lg'>$250.00</div>
            </div>

            <div className='items-center md:flex' >

                <div className='flex items-center justify-between p-4 mb-8 md:w-1/3 md:mb-0 rounded-xl bg-lightBlue'>
                <div onClick={()=> decrease()} className='flex items-center justify-center w-1/3 text-2xl cursor-pointer text-primary' > <IoMdRemove/>  </div>
                <div className='flex items-center justify-center w-1/3 text-xl font-bold text-varkBlue' >{amount}</div>
                <div onClick={()=> increase()} className='flex items-center justify-center w-1/3 text-2xl cursor-pointer text-primary' >  <IoMdAdd/>  </div>
                </div>

                <div className='flex items-center md:w-2/3 md:ml-4 lg:max-w-[350px]'>
                <button onClick={()=>addToCart()} className='flex items-center justify-center w-full p-4 font-semibold text-white shadow-xl shadow-orange-200 rounded-xl bg-primary hover:bg-orange-400 font-primary'>
                    <BsCart3 className='mr-3 text-xl font-semibold'/>
                    <span>Add to cart </span> 
                </button>
                </div>
            </div>
          </div>

        </section>
      </main>
  )
}

export default Home
