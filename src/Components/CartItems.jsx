import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

function CartItems() {
    const {allProducts, cartItem, removeFromCart, addToCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cart-item-wrapper'>
        <div className="cart-table">
            <div className="table-wrapper">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Product Details</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>                  
                    </thead>
                    <tbody>
                        {
                            allProducts?.map((item, i) => {
                                if(cartItem[item.id]>0){
                                    return (<tr key={i}>
                                        <td>
                                            <div className="cart-info">
                                                <Link className='img-wrapper product-link' to={`/product/${item.id}`}>
                                                    <img className='cart-img img-fluid' src={item.image} alt={item.name} />
                                                </Link>
                                                <div className="desc">
                                                    <h6>{item.name}</h6>
                                                    <button onClick={()=> addToCart(item.id)} className='btn btn-small shadow-none text-danger'>
                                                    Add</button>
                                                    <button onClick={()=> removeFromCart(item.id)} className='btn btn-small shadow-none text-danger'>
                                                    Remove</button>                                        
                                                </div>
                                                </div>
                                            </td>
                                        <td><p className='text-dark'>{cartItem[item.id]}</p></td>
                                        <td><p className="text-dark"><strong>
                                        ₹ {item.new_price * cartItem[item.id]}
                                        </strong></p></td>
                                    </tr>)
                                }
                                else{
                                    return null;
                                }
                            })

                        }
                    </tbody>
                </table>            
            </div>
            <div className="total-price">
                <table className='table'>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>₹{getTotalCartAmount}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>0</td>
                        {/*<td>₹{((18/ 100) * getTotalCartAmount).toFixed(2)}</td>*/}
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>0</td>
                          {/*<td>₹{getTotalCartAmount + ((18/ 100) * getTotalCartAmount).toFixed(2)}</td>*/}
                    </tr>                
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default CartItems