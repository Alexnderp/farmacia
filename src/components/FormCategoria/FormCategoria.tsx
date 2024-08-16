import React, { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../Model/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { apiPost, apiSearchGet, apiUpdate } from "../../Service/Service";

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  function back() {
    navigate("/categorias");
  }

  const { id } = useParams<{ id: string }>();

  async function searchById(id: string) {
    try {
      await apiSearchGet(`/categorias/${id}`, setCategoria);
    } catch (e: any) {
      alert("Erro na busca");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      searchById(id);
    }
  }, [id]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
    console.log(JSON.stringify(categoria));
  }

  async function novaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await apiUpdate(`/categorias`, categoria, setCategoria);

        alert("Tema atualizado com sucesso!");
      } catch (e: any) {
        alert("Erro na atualização");
      }

      back();
    } else {
      try {
        await apiPost(`/categorias`, categoria, setCategoria);
        alert("Tema cadastrado");
      } catch (e: any) {
        alert("Erro ao cadastrar o tema");
      }
      back();
    }
  }

  return (
    <div className="p-[6rem] flex justify-center">
      <div className="bg-red-600 w-[40rem] rounded-lg h-[25rem]">
        <h2 className="text-3xl text-center py-8 font-extrabold text-white">
          {id === undefined
            ? "Cadastre uma nova categoria"
            : "Editar categoria"}
        </h2>

        <form
          className="flex flex-col gap-4 justify-center items-center mb-5"
          onSubmit={novaCategoria}
        >
          <div className="flex flex-col gap-2 items-center">
            <label
              htmlFor="nome"
              className="text-xl font-extrabold text-white mb-5"
            >
              Nome:
            </label>
            <input
              type="text"
              placeholder=" Descrição do Tema"
              name="nome"
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
              required
              className="rounded-md border-[.2rem] border-red-600 w-[25rem]"
            />
            <label
              htmlFor="descricao"
              className="text-xl font-extrabold text-white mb-5"
            >
              Descrição:
            </label>
            <input
              type="text"
              placeholder=" Descrição do Tema"
              name="descricao"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
              required
              className="rounded-md border-[.2rem] border-red-600 w-[25rem]"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-green-500 w-[6rem] h-[2.5rem] text-white font-extrabold mt-5 duration-200 hover:bg-white hover:text-green-500 "
          >
            {id === undefined ? "Cadastrar" : "Editar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
