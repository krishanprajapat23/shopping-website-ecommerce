import React from 'react'
import { Link } from 'react-router-dom';

function BreadCrumb(props) {
    const {product} = props;
  return (
    <div className="breadcrumn-wrapper">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
        </nav>    
    </div>
  )
}

export default BreadCrumb