import React from 'react';
import { useCart } from '../context/CartProvider';
import Cart from './Cart';
import { toast } from 'react-toastify';

function Product({ id, title, price, img}) {
  const {addItemToCart, cart}= useCart();
  function handleAdd(){
    for(let item of cart){
      
      if(item.id === id){
        toast.error("Item all ready to cart");
        return;
      }
    }
    const NewCartItem={
      id: id,
      price: price,
      title: title,
      img: img,
      quantity:1,
    };
    addItemToCart(NewCartItem);
    toast.info("Item Added");
  }
 
  return (
    < div className='bg-[#efefef] rounded-3xl p-2  shadow-[0px_10px_10px_-3px_rgba(0,0,0,0.1)] hover:scale-[1.01] transition-transform duration-300' >
    
     <img src={img} alt={title} className='max-w-[100%] h-[300px]  	object-contain aspect-[4/3] mix-blend-darken'/>
     <p className='mt-4 mb-4 text-[1rem] font-medium leading-normal'>{title}</p>
     <p className='mt-4 mb-4 text-[1rem] font-bold leading-normal'>{price}</p>
     <button className='text-[#ecf0f1] px-4 py-2 border-none font-medium  rounded cursor-pointer bg-[#2980b9] hover:bg-[#1a74b1]' onClick={handleAdd}>Add to Cart</button>
    </ div>
  );
}

export default Product;
