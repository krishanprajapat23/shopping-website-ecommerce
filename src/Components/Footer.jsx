import React from 'react'
import { Link } from 'react-router-dom'

function Footer({Logo}) {
  return (
    <footer className='mt-4'>
      <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <p className='text-capitalize'>we made your shopping experience much easier and flexible.</p>
                        <div className="contact-social">
                            <ul>
                                <li><Link className="ft-link" href=""><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link className="ft-link" href=""><i className="fab fa-pinterest-p"></i></Link></li>
                                <li><Link className="ft-link" href=""><i className="fab fa-instagram"></i></Link></li>
                                <li><Link className="ft-link" href=""><i className="fab fa-twitter"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className='copy-text'>Copyright &copy; 2023 All Rights Reserved.</p>
    </footer>
  )
}

export default Footer