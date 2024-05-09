import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function RestaurantHeader() {
  const getUser = localStorage.getItem("login");


  console.log("srgevrerthte",getUser);

  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("signup");
    window.location.reload();
  };

  // const getUser = JSON.parse(localStorage.getItem("login"));
  // setGetLogin(getUser);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" href="#">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
              width={60}
              height={55}
              alt="image"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {getUser == null ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link fs-5 "
                      aria-current="page"
                      href="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" href="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" href="/">
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link fs-5" href="#">
                      Cart
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link fs-5" href="" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default RestaurantHeader;
