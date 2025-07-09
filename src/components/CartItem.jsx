import React from 'react';
import { useCart } from '../context/CartProvider';
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function CartItem({ id, price, img, title, quantity }) {
  const { incraseQty, decraseQty, removeitem } = useCart();
  return (





    < div className=' grid-cols-1 justify-items-start   grid md:grid-cols-[1.5fr_1fr] mb-6 pb-4  gap-8 items-center border-b-2 border-gray-900' >
      <div className='left flex items-center gap-8'>
        <div className=''><img className=' rounded-full object-cover object-top  mix-blend-darken w-[100px] h-[100px]' src={img}></img></div>
        <h3 className='font-bold'>{title}</h3>
      </div>
      <div className='right items-center  flex md:justify-between   gap-12'>
        <div className='qtyinput'>
          <button className='text-[1.2rem] '      onClick={
            () => { incraseQty(id) }
          }><AiOutlineMinusSquare /></button>
          <span className='font-bold text-[1.2rem] p-2'>{quantity}</span>
          <button className='text-[1.2rem]' onClick={
            () => {
              if (quantity <= 1) {
                return;
              }

              decraseQty(id)
            }
          }><AiOutlinePlusSquare /></button>

        </div>
        <p className='font-bold'>&#8360;{price * quantity}</p>
        <button  onClick={() => { removeitem(id) }} className=''><ImCross /></button>
      </div>
      {/* ---------------------old----------- */}

    </div>
  );
}

export default CartItem;
