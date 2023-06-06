
import im1  from '../img/image-product-1.jpg'
import im2  from '../img/image-product-2.jpg'
import im3  from '../img/image-product-3.jpg' 
import im4  from '../img/image-product-4.jpg' 

import th1  from '../img/image-product-1-thumbnail.jpg' 
import th2  from '../img/image-product-2-thumbnail.jpg' 
import th3  from '../img/image-product-3-thumbnail.jpg' 
import th4  from '../img/image-product-4-thumbnail.jpg' 
import { useState } from 'react'
import { useOverlay } from '../context/OverlayContext'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const ImageSlider = () => {
    const images = [im1,im2,im3,im4]
    const {isActive,setIsActive} = useOverlay();
    const [currenValue,setCurrentValue] = useState(0)
    const [isDisplay,setDisplay] = useState(currenValue)
    const [currentImage,setCurrentImage] = useState(images[0])

    
    const prev = () =>{
        if (currenValue <= 0) {
            setCurrentValue(images.length-1)
        }else if (currenValue <= images.length-1) {
            setCurrentValue(currenValue-1)
        }
        setCurrentImage(images[currenValue])
    }
    const next = () =>{
        if (currenValue === images.length-1) {
            setCurrentValue(0) 
        }else if (currenValue < images.length-1 ) {
            setCurrentValue(currenValue+1)
        }
        setCurrentImage(images[currenValue])
    }
    const handleClick =  (currenId) =>{ 
        setCurrentValue(currenId)
        setCurrentImage(images[currenValue])
        setDisplay(currenId);
    }

  return (
    <div className='lg:max-h-screen lg:pl-4 lg:pr-12'>
        <div  className='lg:w-[400px] xl:w-[450px] relative  lg:rounded-2xl overflow-hidden cursor-pointer transition-all duration-200' >
            <img onClick={()=>setIsActive(true)} src={currentImage} alt='prodcut' className='lg:max-h-full ' />

            <div className={`${isActive? 'px-0':'lg:hidden px-4'} absolute flex items-center justify-between w-full  top-2/4 `}>
                <div onClick={prev} className='flex items-center justify-center p-2 transition-all duration-150 rounded-full cursor-pointer bg-lightBlue hover:text-primary'>
                    <IoIosArrowBack className='text-4xl'/>
                </div>
                <div onClick={next} className='flex items-center justify-center p-2 transition-all duration-150 rounded-full cursor-pointer bg-lightBlue hover:text-primary'>
                    <IoIosArrowForward className='text-4xl'/>
                </div>
            </div>
        </div>

        {/* thumbnill */} 
        <div className='justify-between hidden w-full mt-8 lg:flex'>
            <div onClick={()=>handleClick(0)} className={`${isDisplay === 0? 'box-border border-2 border-primary ' : ''} w-24 overflow-hidden  cursor-pointer  rounded-2xl transition-all duration-150 group relative`}>
                <img src={th1} alt='thumbnail' className='w-24 ' />
                <div  className={`${isDisplay === 0? 'bg-white' : 'bg-transparent opacity-0'}  absolute top-0 left-0 w-full h-full transition-all duration-150  opacity-50 hover:opacity-70 group-hover:bg-white`} > </div>
            </div>

            <div onClick={()=>handleClick(1)} className={`${isDisplay === 1? 'box-border border-2 border-primary ' : ''} w-24 overflow-hidden  cursor-pointer  rounded-2xl transition-all duration-150 relative group`}>
                <img src={th2} alt='thumbail' className='w-24 '  />
                <div  className={`${isDisplay === 1? 'bg-white' : 'bg-transparent opacity-0'}  absolute top-0 left-0 w-full h-full transition-all duration-150  opacity-50 hover:opacity-70 group-hover:bg-white`} > </div>

            </div>

            <div onClick={()=>handleClick(2)} className={`${isDisplay === 2? 'box-border border-2 border-primary ' : ''} w-24 overflow-hidden  cursor-pointer  rounded-2xl transition-all duration-150 relative group`}>
                <img src={th3} alt='thumbail' className='w-24 '  />
                <div  className={`${isDisplay === 2? 'bg-white' : 'bg-transparent opacity-0'}  absolute top-0 left-0 w-full h-full transition-all duration-150  opacity-50 hover:opacity-70 group-hover:bg-white`} > </div>

            </div>

            <div onClick={()=>handleClick(3)} className={`${isDisplay === 3? 'box-border border-2 border-primary ' : ''} w-24 overflow-hidden  cursor-pointer  rounded-2xl transition-all duration-150 relative group`}>
                <img src={th4} alt='thumbail' className='w-24 '  />
                <div  className={`${isDisplay === 3? 'bg-white opacity-50 ' : 'bg-transparent '}  top-0  absolute left-0 w-full h-full transition-all duration-150   hover:opacity-70 group-hover:bg-white `} > </div>

            </div>
        </div>
    </div>
  )
}

export default ImageSlider
