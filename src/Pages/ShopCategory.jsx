import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import Item from '../Components/Item';
import dropIcon from '../Assets/images/dropdown_icon.png';
// import NoItem from '../Components/NoItem';

function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);
  return (
    <section className='shop-category pt-5'>
      <div className="container-lg container-fluid">
        <div className="hero-sec-inner">
          <img src={props.heroBanner} className='img-fluid' alt="banner image" />
        </div>
        <div className="shop-category-content">
          <div className="content-heading">
            <p className="desc">
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              <select className="form-select shadow-none border-dark rounded-pill">
                <option defaultValue disabled>Sort by</option>
                <option value="1">Price</option>
                <option value="2">Popularity</option>
                <option value="3">Purchase</option>
              </select>
            </div>          
          </div>
          <div className="shop-category-content-cards">
            <div className="row g-4">
              {
                allProducts.map((item, i) => {
                  if (props.category === item.category){
                    return (
                      <div key={i} className="col-sm-6 col-lg-3">
                        <Item {...item} />
                      </div>
                    )
                  }
                  else{
                    return null;
                  }
                })
              }
            </div>
            <div className="explore-more d-flex justify-content-center mt-5">
              <Link to='/' className='btn theme-btn btn-lg'>Explore More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopCategory