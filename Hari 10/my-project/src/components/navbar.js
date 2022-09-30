import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/code-materi"}>Code Materi</Link>
        </li>
        <li>
          <Link to={"/create"}>Create Data</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
