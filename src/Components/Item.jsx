import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Item(item) {
    const [like, setLike] = useState(false);
    const {id, name, image, new_price, old_price} = item;
    
  return (
    <div className="item card h-100">
        <div className="card-body">
            <div className="like-icon-div">
                <span className="like-icon" onClick={()=> setLike(!like)}>
                    <i className={like !== true ? 'fa-regular fa-heart' : 'fa-solid fa-heart text-danger'}></i>
                </span>
            </div>
            <Link onClick={window.scrollTo(0,0)} className='link-card d-block' to={`/product/${id}`}>
                <img src={image} className='img-fluid card-img' alt={name} />            
            </Link>
            <Link className='link-card d-block text-dark' to={`/product/${id}`}>
                <h6 className="card-title my-2">{name}</h6>
            </Link>
            <div className="pricing-cart d-flex justify-content-between">
                <div className="pricing d-flex flex-column text-start">
                    <p className="previous-price small text-muted"><del>₹{old_price}</del></p>
                    <p className="current-price fw-bold text-dark fs-4">₹{new_price}</p>
                </div>
                <button className="cart-btn btn">
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Item