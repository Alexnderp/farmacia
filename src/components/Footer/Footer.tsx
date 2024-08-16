import React from "react";
import { Link } from "react-router-dom";
import { Copyright } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="h-[10vh] bg-red-500 flex flex-col">
      <ul className="flex justify-evenly">
        <Link to={"/home"}>
          <li className="m-1 hover:text-white font-semibold">Home</li>
        </Link>
        <Link to={"/category"}>
          <li className="m-1 hover:text-white font-semibold">
            Categorias
          </li>
        </Link>
      </ul>
      <div className="flex items-center justify-center">
        <Copyright size={25} className="p-1 mb-1 mt-1 text-black " />
        <p className="text-center mb-1 mt-1  ">
          2024 Alexander Pereira | Generation Brasil
        </p>
      </div>
    </footer>
  );
}

export default Footer;
