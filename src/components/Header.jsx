
import Logo from '../img/logo.svg'
import { BsCart3} from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import {FiMenu} from 'react-icons/fi'
import { useSidebar } from '../context/SidebarContext';
import proFile from '../img/image-avatar.png'
import { useCart } from '../context/CartContext';

const Header = () => {
    const [open,setOpen] = useSidebar()
    const  {isOpen,setIsOpen,amount}   = useCart()
    
  return (
    <header className='container flex items-center justify-between p-4 mx-auto bg-white lg:border-b lg:max-w-screen-md xl:max-w-[1200px]'>
      <div className='flex items-center justify-between w-44'>

        <div onClick={()=> setOpen(!open)} className='cursor-pointer lg:hidden'> <FiMenu className='text-xl'/> </div>

        <div>
            <img src={Logo} alt="Sneaker Company" className='cursor-pointer' />
        </div>
      </div>

      <div className={ `${open? 'left-0': '-left-full'} absolute top-0 z-40 w-1/2 h-full p-6 lg:h-16 lg:w-[500px]  lg:relative lg:bg-transparent lg:shadow-none lg:-left-[5%] xl:-left-[15%] lg:-top-1 bg-white rounded-md shadow-xl transition-all duration-300`}>
        <div onClick={()=> setOpen(!open)} className='mb-8 cursor-pointer lg:hidden'> <IoMdClose className='text-2xl text-varkBlue'/> </div>
        <ul className='flex flex-col justify-around h-56 text-xl font-bold text-varkBlue lg:flex-row lg:font-normal '>
            <li className='lg:h-[3.8rem] lg:hover:border-b-8 border-primary transition-all duration-150 cursor-pointer'>Collections</li>
            <li className='lg:h-[3.8rem] lg:hover:border-b-8 border-primary transition-all duration-150 cursor-pointer'>Men</li>
            <li className='lg:h-[3.8rem] lg:hover:border-b-8 border-primary transition-all duration-150 cursor-pointer'>Women</li>
            <li className='lg:h-[3.8rem] lg:hover:border-b-8 border-primary transition-all duration-150 cursor-pointer'>About</li>
            <li className='lg:h-[3.8rem] lg:hover:border-b-8 border-primary transition-all duration-150 cursor-pointer'>Contact</li>
        </ul>
      </div>

      <div className='flex items-center justify-between w-24 '>
        <div onClick={()=>setIsOpen(!isOpen)} className='relative cursor-pointer'>
          <BsCart3 className='text-2xl'/>
          <div className={`${amount === 0 ? 'hidden':'absolute'} w-6 text-sm text-center text-white rounded-lg -right-3 -top-2 transition-all duration-300 bg-primary`}>{amount}</div>
        </div>
        
        <div className='box-border object-cover w-12 transition-all duration-150 ease-linear rounded-full cursor-pointer hover:border-4 hover:border-primary'><img src={proFile} alt="avatar" className='w-full' /></div>
      </div>
      
    </header>
  )
}

export default Header;
