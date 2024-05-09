"use client";

import React, { useEffect, useState } from "react";
import RestaurantHeader from "./_components/RestaurantHeader";
// import RestaurantLogin from "./_components/RestaurantLogin";
// import RestaurantSignup from "./_components/RestaurantSignup";
import { useRouter } from "next/navigation";
import SearchBar from "./_components/SearchBar";

import Herosection from "./_components/HeroSection";

async function Restaurant () {

  const getLogin = localStorage.getItem("login");
  const router = useRouter();

  useEffect(() => {
    if (getLogin) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {/* <h1>Restaurant</h1> */}
      <RestaurantHeader />
      {/* <SearchBar></SearchBar> */}
      <Herosection />
    </>
  );
}

export default Restaurant;
