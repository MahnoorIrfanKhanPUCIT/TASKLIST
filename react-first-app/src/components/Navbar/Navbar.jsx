import React from "react";

const Navbar = () => {
  return (
    <div className="_navbar">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-light ms-3">TODO-LIST</span>
          <button className="btn btn-success me-4" type="submit">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
