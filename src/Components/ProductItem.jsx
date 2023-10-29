import React, { useContext } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import { ShopContext } from '../Context/ShopContext';

function ProductItem(props) {
    const { id, name, image, new_price, old_price } = props.product;

    const {addToCart} = useContext(ShopContext);

return (
    <div className='product-item-wrapper'>
        <div className='single-product'>
            <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
                <ul className="image-list ps-0 mb-0 list-unstyled">
                    <li><img src={image} alt={name} className='img-fluid' /></li>
                    <li><img src={image} alt={name} className='img-fluid' /></li>
                    <li><img src={image} alt={name} className='img-fluid' /></li>
                </ul>
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
                <div className="image-selected">
                <InnerImageZoom src={image} zoomSrc={image} className='img-fluid'/>
                </div>
            </div>
            <div className="col-lg-6 order-3">
                <div className="product-description">
                    <h3 className="product-name">{name}</h3>
                    <div className="product-rating"><span className="badge text-bg-success px-2 rounded-pill d-inline-flex align-items-center justify-content-center gap-1"><i className="fa-solid fa-star"></i>4.5</span> <span className="rating-review">4.5 Ratings &amp; 150+ Reviews</span></div>
                    <div className="product-price"> <span className="new-price">₹ {new_price}</span> <del className="old-price"> ₹ {old_price}</del> </div>
                    <div className='product-price-diff'> <span className="product-saved">You Saved:</span> <span className="price-diff">₹ {old_price - new_price}</span></div>
                    <hr />
                    <div className="product-info">
                        <p className="product-info-text m-0">It’s slim fit and has accentuated shoulders that give a classic style.</p>
                        <div className="size-wrap my-3">
                            <p className="desc mb-1">Choose Size:</p>
                            <div className="size-wrapper my-2">
                                <div className='size-item-wrap'>
                                    <input type="radio" name="size" className='chooseInput visually-hidden' id="sSize" />
                                    <label htmlFor='sSize' className="size-item btn border-dark rounded-0 shadow-none">S
                                    </label>                            
                                </div>
                                <div className='size-item-wrap'>
                                    <input type="radio" name="size" className='chooseInput visually-hidden' id="lSize" />
                                    <label htmlFor='lSize' className="size-item btn border-dark rounded-0 shadow-none">L
                                    </label>                            
                                </div>
                                <div className='size-item-wrap'>
                                    <input type="radio" name="size" className='chooseInput visually-hidden' id="xlSize" />
                                    <label htmlFor='xlSize' className="size-item btn border-dark rounded-0 shadow-none">XL
                                    </label>                            
                                </div>
                                <div className='size-item-wrap'>
                                    <input type="radio" name="size" className='chooseInput visually-hidden' id="xxlSize" />
                                    <label htmlFor='xxlSize' className="size-item btn border-dark rounded-0 shadow-none">XXL
                                    </label>                            
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="products-button">
                            <div className="row">
                                <div className="col-sm-12 d-flex flex-wrap gap-1">
                                    <button type="button" className="btn theme-btn theme-sec shop-button" onClick={()=> {addToCart(id)}}><i className="fa-solid fa-cart-shopping me-2"></i> Add to Cart</button>
                                    <button type="button" className="btn px-4 rounded-pill btn-danger shop-button">Buy Now</button>
                                    <button className="product-fav shadow-none outline-none btn"><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}

export default ProductItem