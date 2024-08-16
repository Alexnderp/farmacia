import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="flex justify-around items-center h-[14vh] border-b-2 border-red-500">
      <img
        src="https://i.postimg.cc/SRG5Jq2K/473ef843-ab98-48ed-b1b7-ded67ed2d195-removebg-preview.png"
        className="h-[11rem]"
        alt=""
      />
      <nav>
        <ul className="list-none flex">
          <Link to={"/home"}>
            <li className="m-[2rem] hover:text-red-500 font-semibold">Home</li>
          </Link>
          <Link to={"/category"}>
            <li className="m-[2rem] hover:text-red-500 font-semibold">Categorias</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
