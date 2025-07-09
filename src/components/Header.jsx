import React, { useEffect, useState } from 'react';
import Model from './UI/Model';
import Cart from './Cart';
import logo from "../assets/logo.png"


import { FaCartPlus } from "react-icons/fa6";
import { useCart } from '../context/CartProvider';


function Header() {
  const { cart } = useCart();
  const Totalquantity = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
  const [isModalopen, setIsmodalopen] = useState(false);
  function closeModel() {
    setIsmodalopen(false);
  }
  useEffect(() => {
    if (isModalopen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "Scroll";
    }
  }, [isModalopen]);
  return (

    <header className='bg-[#09161f] text-[#ecf0f1]   fixed top-0 right-0 left-0  z-2 '>
      <div className='max-w-[1280px] w-[90%] mx-auto'>
        <nav className='  flex justify-between h-16 items-center '>
          <img className='h-16 w-16' src={logo}></img>
             
          <button className='bg-transparent border-none font-medium text-[#fff] flex gap-3.5' onClick={() => { setIsmodalopen(true); }}> <span className='carticon  relative'>
            <FaCartPlus />

            {Totalquantity > 0 && (
              <span className='border-solid border-[0.5px]  border-white bg-red-600 rounded-full absolute text-xs w-5 h-5 -top-4 -right-2.5'>

                {Totalquantity}
              </span>
            )}
          </span>
            <span>Cart</span>
          </button>
        </nav>
      </div>
      {/* ----------------CART SECTION---------------- */}


      {isModalopen && (
        <Model closeModel={closeModel}>
          <Cart />
        </Model>
      )}



    </header>
  );
}

export default Header;
