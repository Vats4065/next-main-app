import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function RestaurantLogin() {
  const [field, setField] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setField(() => ({
      ...field,
      [e.target.name]: e.target.value,
    }));
    console.log("000000", field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = await fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    console.log();
    if ( api.status === 200) {
      alert("user login successfully");
      // const result = api;
      localStorage.setItem("login", JSON.stringify(api.status));
      router.push("/");
    } else {
      alert("enter correct details");
    }
  };


  return (
    <>
      <div className="row text-center">
        <div className="col-12">
          <div className="mb-5">
            <h3>Login</h3>
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={field.email}
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
                placeholder="Password"
                required
                onChange={handleChange}
                value={field.password}
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
