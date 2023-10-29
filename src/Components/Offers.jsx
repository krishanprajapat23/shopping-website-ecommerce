import React from 'react';
import offerImg from '../Assets/images/exclusive_image.png';

function Offers() {
  return (
    <div className="offers-sec mt-5">
        <div className="container-lg container-fluid">
            <div className="offer-content px-lg-5 px-sm-4 px-2">
                <div className="row g-4 justify-content-center align-items-center">
                    <div className="col-6">
                        <div className="content">
                            <h2 className="title mb-0">Exclusive</h2>
                            <h2 className='title fw-bold display-5'>Offers for you</h2>
                            <p className="desc text-dark mb-3">Offers that you can't resist...</p>
                            <button className='btn theme-btn btn-lg d-inline-block'>
                                Check Now
                            </button>                        
                        </div>
                    </div>
                    <div className="col-6 text-end">
                        <img src={offerImg} alt="offer Image" className='offer-img'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers