import React from 'react';
import newCollectionData from '../Assets/new_collections';
import Item from './Item';


function NewCollection() {
  return (
    <section className='new-collection mt-5'>
        <div className="container-lg container-fluid">
        <h2 className='title'>New Collection</h2>
        <hr />
            <div className="new-item popular-item">
                <div className="row g-4">
                    {
                        newCollectionData.map((item, i) =>{
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

export default NewCollection