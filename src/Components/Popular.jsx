import React from 'react'
import Item from './Item';
import productData from '.././Assets/data';

function Popular() {
  return (
    <section className='popular mt-5'>
    <div className="container-lg container-fluid">
        <h2 className='title'>Popular In Women</h2>
        <hr />
        <div className="popular-item">
            <div className="row g-4">
                {
                    productData.map((item, i) =>{
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

export default Popular;