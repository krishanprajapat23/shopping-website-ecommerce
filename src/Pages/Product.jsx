import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import BreadCrumb from '../Components/BreadCrumb';
import ProductItem from '../Components/ProductItem';
import DescriptionBox from '../Components/DescriptionBox';
import SimilarProducts from '../Components/SimilarProducts';

function Product() {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProducts.find((e)=> e.id === parseInt(productId));
  return (
    <>
    <section className="prodcut-sec">
      <div className="container-lg container-fluid">
        <div className="product-hero-sec">
          <BreadCrumb product={product}/>
        </div>
        <div className="product-content">
          <ProductItem product={product}/>
        </div>
        <div className="product-desc-more">
          <DescriptionBox />
        </div>
      </div>
    </section>
    <SimilarProducts />
    </>
  )
}

export default Product