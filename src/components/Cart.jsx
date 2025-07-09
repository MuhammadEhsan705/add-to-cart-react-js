import React from 'react';
import {useCart} from "../context/CartProvider";
import CartItem from "./CartItem"


function Cart() {
  const{ cart }= useCart();
  let totalAmount=0;
  for( let item of cart){
    totalAmount+=item.price*item.quantity  
  }
  if(cart.length ===0) return <h1>Item not found!!</h1>;
  return (
    <div className='p-4'>
      <h1 className='font-semibold mb-10'>Shoping Cart</h1>
    <div>
     {cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)}
    </div>
    <h1 className='font-bold'>TotalAmount: &#8360; {totalAmount}</h1>
    </div>
  );
}

export default Cart;
