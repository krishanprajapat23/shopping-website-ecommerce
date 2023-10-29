import React from 'react'

function Login() {
  return (
    <>
    <div className="modal fade" id="loginModal" aria-labelledby="loginModal" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-3 fw-bold" id="loginModal">LOGIN</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="login-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="card border-0">
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="username" className="form-label">Username/Email</label>
                      <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-1">
                      <input type="checkbox" className="form-check-input" id="remember" />
                      <label htmlFor="remember" className="form-label">Remember Me</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>    
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn theme-btn">Login</button>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login