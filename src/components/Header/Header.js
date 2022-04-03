import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex bg-indigo-300 text-sm justify-between px-5">
      <h1>Shopping Plaza</h1>
      <div className="">
        <Link className="" to="/">
          HOME
        </Link>
        {/* <NavLink to={`/about`}>ABOUT US</NavLink> */}
        <Link className="mx-3" to="/order">
          ORDER
        </Link>
        <Link to="/about">ABOUT US</Link>
      </div>
    </nav>
  );
};

export default Header;
