
import ImageSlider from "./ImageSlider"
import { IoMdClose } from "react-icons/io"
import { useOverlay } from "../context/OverlayContext"

const OverLay = () => {
  const {isActive,setIsActive} = useOverlay()
  return (
    <div className={`${isActive? 'top-0 opacity-100':'-top-[120%] opacity-0'} fixed w-full h-full  flex justify-center items-center bg-[#1d2025b3] transition-all duration-300 z-50 `}>
     <div >
        <div  className="flex items-center justify-end pb-5 " >
          <IoMdClose onClick={()=> setIsActive(!isActive)} className="text-4xl font-semibold text-white cursor-pointer"/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ImageSlider/>
        </div>
     </div>
        
      
    </div>
  )
}

export default OverLay
