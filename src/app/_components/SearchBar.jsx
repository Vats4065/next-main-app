import React from "react";

function SearchBar() {
  return (
    <>
      <div className="search-bar bg-image mt-5 pt-5 pb-3" >
       
       <div className="container">
       <form action="">
          <div className="p-1 bg-secondary rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search food"
                aria-describedby="button-addon1"
                className="form-control border-0 bg-secondary rounded-pill text-light"
              />
              <div className="input-group-append">
                <button
                  id="button-addon1"
                  type="submit"
                  className="btn btn-link text-info"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
       </div>
      </div>
    </>
  );
}

export default SearchBar;
