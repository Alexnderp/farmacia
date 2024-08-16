import React from "react";
import Categoria from "../../Model/Categoria";
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
}
function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row w-[15rem] h-[20rem] justify-center items-center mt-10">
        <div className="bg-red-100 rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 ">
            <div className="mt-3 font-semibold text-lg"><p>{categoria.nome}</p></div>

            <div className="my-4">
              <span className="font-light text-sm">
                {categoria.descricao}
              </span>
            </div>

            <Link to={`/editCategoria/${categoria.id}`}>
              <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:bg-green-500 hover:text-white duration-200">
                editar categoria
              </button>
            </Link>
            <Link to={`/deleteCategoria/${categoria.id}`}>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:bg-red-500 hover:text-white duration-200">
              deletar categoria
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCategoria;
