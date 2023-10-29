import React from 'react'
import CartItems from '../Components/CartItems'

function Cart() {
  return (
    <section className="cart-item-sec">
      <div className="container-lg container-fluid">
        <div className="cart-contents">
          <CartItems />
        </div>
      </div>
    </section>
  )
}

export default Cart