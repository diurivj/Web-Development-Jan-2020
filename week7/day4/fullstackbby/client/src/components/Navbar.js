import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/project/asmeygw">Project </NavLink>
        </li>
        <li>
          <NavLink to="/project/create">Create project </NavLink>
        </li>
        <li>
          <NavLink to="/project/edit/asih">Edit project </NavLink>
        </li>
        <li>
          <NavLink to="/login">Login </NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
