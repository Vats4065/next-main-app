import React from "react";

function RestaurantSignup() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <div className="text-center mb-4">
              <a href="#!">
                {/* <img
                              src="./assets/img/bsb-logo.svg"
                              
                              width="175"
                              height="57"
                            /> */}
              </a>
            </div>
            <h2 className="h4 text-center">Registration</h2>
            <h3 className="fs-6 fw-normal text-secondary text-center m-0">
              Enter your details to register
            </h3>
          </div>
        </div>
      </div>
      <form action="#!">
        <div className="row gy-3 overflow-hidden">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
              <label for="firstName" className="form-label">
                First Name
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                placeholder="First Name"
                required
              />
              <label for="lastName" className="form-label">
                Last Name
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="name@example.com"
                required
              />
              <label for="email" className="form-label">
                Email
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value=""
                placeholder="Password"
                required
              />
              <label for="password" className="form-label">
                Password
              </label>
            </div>
          </div>
          {/* <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="iAgree"
                            id="iAgree"
                            required
                          />
                          <label
                            className="form-check-label text-secondary"
                            for="iAgree"
                          >
                            I agree to the{" "}
                            <a
                              href="#!"
                              className="link-primary text-decoration-none"
                            >
                              terms and conditions
                            </a>
                          </label>
                        </div>
                      </div> */}
          <div className="col-12">
            <div className="d-grid">
              <button className="btn bsb-btn-xl btn-primary" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RestaurantSignup;
