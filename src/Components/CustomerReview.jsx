import React from 'react'

function CustomerReview() {
  return (
    <div className='customer-review-wrapper'>
        <div className="card border-0">
            <div className="card-rating">
                <div className="ratings">
                    <span className="star-fill">
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="star-fill">
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="star-fill">
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="star-fill">
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="star-nofill">
                        <i className="fa-regular fa-star"></i>
                    </span>
                </div>
                <div className="card-rating-text">4.5 out of 5</div>
            </div>
            <p className="rating-count">150+ customer ratings</p>
            <div className="rating-percents">
                <div className="rating-percent">
                    <span className="rating-no">5 star</span>
                    <div className="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-75"></div>
                    </div>
                    <span className="rating-percent-no">75%</span>
                </div>
                <div className="rating-percent">
                    <span className="rating-no">4 star</span>
                    <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-50"></div>
                    </div>
                    <span className="rating-percent-no">50%</span>
                </div>
                <div className="rating-percent">
                    <span className="rating-no">3 star</span>
                    <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-25"></div>
                    </div>
                    <span className="rating-percent-no">25%</span>
                </div>
                <div className="rating-percent">
                    <span className="rating-no">2 star</span>
                    <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-25"></div>
                    </div>
                    <span className="rating-percent-no">25%</span>
                </div>
                <div className="rating-percent">
                    <span className="rating-no">1 star</span>
                    <div className="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-0"></div>
                    </div>
                    <span className="rating-percent-no">0%</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CustomerReview