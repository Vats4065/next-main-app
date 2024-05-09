"use client";

import React from "react";
import RestaurantHeader from "../_components/RestaurantHeader";

import RestaurantLogin from "../_components/RestaurantLogin";
import Link from "next/link";

function login() {
  return (
    <>
      <RestaurantHeader></RestaurantHeader>
      <section class="bg-light p-3 p-md-4 p-xl-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <RestaurantLogin />
                </div>
                <div className="text-center pb-3">
                  <Link
                    style={{
                      cursor: "pointer",
                      "text-decoration": "none",
                      color: "inherit",
                    }}
                    href="/signup"
                  >
                    do not have Account?Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <></>
    </>
  );
}

export default login;
