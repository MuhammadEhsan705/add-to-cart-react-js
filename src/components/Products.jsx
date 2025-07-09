import React from 'react';
import { products } from '../data/products';
import Product from './Product';

function Products() {

  return (
    <div className='max-w-[1280px] w-[90%] mx-auto mt-20 z-1 '>
      <h1 className='font-bold text-5xl'>Best Games</h1>
      <div className='products   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
      {products.map(product =><Product key={product.id} {...product}/>)}
      </div>
    </div>
  );
}

export default Products;
