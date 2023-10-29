import React, {createContext, useState} from 'react'
import allProducts from '../Assets/all_product';
import CartItems from '../Components/CartItems';
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for (let i=0; i < allProducts.length+1; i++){
    cart[i] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  
  const addToCart = (itemId) =>{
    setCartItem((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    console.log('add to cart fn from context api >>', cartItem);
  }
  const removeFromCart = (itemId) =>{
    setCartItem((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
    console.log('remove from fn from context api >>', cartItem);
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        let itemInfo = allProducts.find((product)=>product.id === Number(item));
        totalAmount += itemInfo.new_price * CartItems[item];
      }
      return totalAmount;
    }
  }
  
  
  const contextValue = {allProducts, cartItem, addToCart, removeFromCart, getTotalCartAmount};
  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider