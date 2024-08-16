import React, { useEffect, useState } from "react";
import Categoria from "../../Model/Categoria";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiDelete, apiSearchGet } from "../../Service/Service";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  async function buscaPorId(id: string) {
    try {
      await apiSearchGet(`/categorias/${id}`, setCategoria);
    } catch (e: any) {
        alert("Erro na busca");
       
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscaPorId(id);
    }
  }, [id]);

  function back() {
    navigate("/categorias");
  }

  async function deleteTheme() {
    try {
      await apiDelete(`/themes/${id}`);
      alert("Tema deletado com sucesso");
    } catch (e: any) {
      alert("Erro ao deletar tema");
    }

    back();
  }

  return (
    <section className="p-10 flex flex-col justify-center items-center">
      <h2 className="text-2xl text-red-500 font-extrabold m-10">
        Deseja deletar este tema?
      </h2>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
        <div className="bg-red-100 rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
            <div className="mt-3 font-semibold text-lg">{categoria.nome}</div>

            <div className="my-4">
              <span className="font-light text-sm">
                {categoria.descricao}
              </span>
            </div>

            <Link to={`/editCategoria/${categoria.id}`}>
              <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:bg-green-500 hover:text-white duration-200">
                Sim
              </button>
            </Link>
            <Link to={`/deleteCategoria/${categoria.id}`}>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 hover:bg-red-500 hover:text-white duration-200">
              Não
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeletarCategoria;
