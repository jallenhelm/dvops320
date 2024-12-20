import React from "react";

const SignInPage = () => {
    return (
      <div className="container-fluid">
        <div className="d-flex align-items-center py-4 ">
          <main className="form-signin w-50 m-auto">
            <form>
                <div className="d-flex">
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/Quill.png`}
                    alt="Logo"
                    width="30"
                    height="24"
                    class="d-inline-block align-text-top"
                    />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>  
                </div>


              <div className="form-floating mb-1">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
            </form>
          </main>
        </div>
      </div>
    );
}

export default SignInPage;