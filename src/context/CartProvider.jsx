import { Children, createContext, useContext, useReducer } from 'react';
const CartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case"ADD_ITEM":{
      return [...cart, action.payload];
    }
    case"INCREASE_QTY":{
      return cart.map(item=>{
        if(item.id===action.payload.id){
          return{...item,quantity: item.quantity+1}
        }else{
          return item;
        }
      });
    }
    case"DECREASE_QTY":{
      return cart.map(item=>{
        if(item.id===action.payload.id){
          return{...item ,quantity: item.quantity-1}
        }else{
          return item;
        }
      });
    }
    case"REMOVE_ITEM":{
      return cart.filter(item=>item.id !== action.payload.id);
    }
    
  }
  
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (NewCartItem) => {
    dispatch({ type:"ADD_ITEM", payload: NewCartItem});
  }
  const incraseQty= (id)=>{
    dispatch({ type:"INCREASE_QTY", payload: {id: id} });
  }
  const decraseQty= (id)=>{
    dispatch({ type:"DECREASE_QTY", payload: {id: id} });
  }
  const removeitem= (id)=>{
    dispatch({ type:"REMOVE_ITEM", payload: {id: id} });
  }
  return <CartContext.Provider value={{ cart, addItemToCart ,incraseQty , decraseQty ,removeitem}}>{children}</CartContext.Provider>;

}
export function useCart() {
  return useContext(CartContext);

}

export default CartProvider;
