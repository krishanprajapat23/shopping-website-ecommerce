import React from 'react'
import Item from './Item';
import dataProducts from '../Assets/data';

function SimilarProducts() {
  return (
    <section className='similar-product mt-5'>
        <div className="container-lg container-fluid">
        <h2 className='title'>Similar Collections</h2>
        <hr />
            <div className="new-item popular-item">
                <div className="row g-4">
                    {
                        dataProducts.map((item, i) =>{
                            return (
                            <div key={i} className="col-sm-6 col-lg-3">
                                <Item {...item}/>                     
                            </div>
                            )
                        })
                    }        
                </div>   
            </div>
        </div>
    </section>
  )
}

export default SimilarProducts