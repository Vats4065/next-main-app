"use client";

import React, { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";

import RestaurantHeader from "../_components/RestaurantHeader";

function Restaurant() {
  const [login, setLogin] = useState(true);
  return (
    <>
      {/* <h1>Restaurant</h1> */}
      <RestaurantHeader />
      <section class="bg-light p-3 p-md-4 p-xl-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  {login ? <RestaurantLogin /> : <RestaurantSignup />}
                </div>
                <div className="text-center pb-3">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setLogin(!login)}
                  >
                    {login
                      ? "do not have Account?Signup"
                      : "Already have Account? Login"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurant;
