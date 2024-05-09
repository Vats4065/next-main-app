import { useRouter } from "next/navigation";
import React, { useState } from "react";

function RestaurantSignup() {
  const [field, setField] = useState({
    firstname: "",
    lastname: "",
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

    const api = await fetch("http://localhost:8080/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    console.log(api);
    if (api.status === 200) {
      alert("user signup successfully");
      // const result = api;
      localStorage.setItem("login", JSON.stringify(api.status));
      router.push("/login");
    } else {
      alert("field");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h2 className="h4 text-center">Registration</h2>
            <h3 className="fs-6 fw-normal text-secondary text-center m-0">
              Enter your details to register
            </h3>
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="row gy-3 overflow-hidden">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="firstname"
                id="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
                value={field.firstname}
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
                name="lastname"
                id="lastName"
                placeholder="First Name"
                required
                onChange={handleChange}
                value={field.lastname}
              />
              <label for="lastName" className="form-label">
                Last Name
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="email"
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
