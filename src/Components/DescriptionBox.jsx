import React from 'react'
import CustomerReview from './CustomerReview'

function DescriptionBox() {
  return (
    <div className="desc-box-wrapper">
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="navDescTab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">Description</button>
                <button className="nav-link" id="navReviewsTab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="false">Rating & Reviews(21+)</button>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="navDescTab">
            <p className="desc mb-2">
            Welcome to our ecommerce website, your one-stop shop for all your shopping needs!            
            </p>
            <p className="desc mb-2">
            We offer a wide range of products, from clothing to electronics, and everything in between. Our selection is constantly expanding, so you can always find the perfect item to suit your needs.
            </p>
            <p className="desc mb-2">
            With our friendly customer service staff, competitive prices, and fast delivery times, you can trust us to provide you with a hassle-free shopping experience every time. We also offer secure payment options and multiple shipping methods, so you can feel safe and confident when shopping with us. Start browsing our selection now and take advantage of our unbeatable deals!            
            </p>
            </div>
            <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="navReviewsTab">
                <CustomerReview />
            </div>
        </div>
    </div>
  )
}

export default DescriptionBox