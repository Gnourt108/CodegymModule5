function App() {

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">

            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Sign in for system mission</h3>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>

                <button className="btn btn-primary w-100">Sign In</button>

                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <a href="#">Sign Up</a>
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
