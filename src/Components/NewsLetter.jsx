import React from 'react'

function NewsLetter() {
  return (
    <section className="newsletter-sec mt-5">
        <div className="container-lg container-fluid">
            <div className="newsletter-contents">
                <div className="card p-lg-5 p-4 text-white border-0">
                <div className="row g-4 align-items-center justify-content-center">
                   <div className="col-md-6 text-center"> 
                        <h2 className="my-0 text-white"> Subscribe to the Newsletter </h2>
                        </div>
                        <div className="col-md-6">
                            <div className="row d-flex my-2 align-items-center g-3">
                                <div className="col-md-5 col-12">
                                    <input type="email" className="form-control py-3" id="subscribeInput" placeholder="Enter email address" />
                                </div>                                
                                <div className="col-3">
                                    <button className="btn theme-btn px-4 py-2">Subscribe</button>
                                </div>
                            </div>                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default NewsLetter