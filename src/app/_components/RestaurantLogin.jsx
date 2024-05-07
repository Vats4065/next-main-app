import Link from "next/link";
import React from "react";

function RestaurantLogin() {
  return (
    <>
      <div className="row text-center">
        <div className="col-12">
          <div className="mb-5">
            <h3>Login</h3>
          </div>
        </div>
      </div>
      <form action="#!">
        <div className="row gy-3 overflow-hidden">
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
                            name="remember_me"
                            id="remember_me"
                          />
                          <label
                            className="form-check-label text-secondary"
                            for="remember_me"
                          >
                            Keep me logged in
                          </label>
                        </div>
                      </div> */}
          <div className="col-12">
            <div className="d-grid">
              <button className="btn bsb-btn-2xl btn-primary" type="submit">
                Log in now
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RestaurantLogin;
