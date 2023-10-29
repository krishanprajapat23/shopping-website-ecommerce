import React from 'react';
import handIcon from '../Assets/images/hand_icon.png';
import heroImg from '../Assets/images/hero_image.png';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <>
        <section className="hero-sec">
            <div className="container-lg container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="left-sec">
                            <h2 className="title">New Arrivals Only</h2>
                            <div className="more-desc">
                                <div className="hero-hand-icon">
                                    <p className="desc">New</p>
                                    <img src={handIcon} alt="" />
                                </div>
                                <p className="desc">collections</p>
                                <p className="desc">for everyone</p>
                            </div>
                            <div className="hero-btn-wrap">
                                <Link className='btn theme-btn btn-lg' to='#latest'>
                                    <span className='me-1 btn-text'>Latest Collection</span>
                                    <svg width='20' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                                </Link>
                            </div>                        
                        </div>
                    </div>                
                    <div className="col-md-6">
                        <img src={heroImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero