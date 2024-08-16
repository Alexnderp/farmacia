import React, { useEffect, useState } from "react";
import Categoria from "../../Model/Categoria";
import { apiSearchGet } from "../../Service/Service";
import CardCategoria from "../CardCategoria/CardCategoria";
import { Circles } from "react-loader-spinner";

function ListaCategorias() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);



  async function buscarCategoria() {
    try {
      await apiSearchGet("/categorias", setCategoria);
    } catch (e: any) {
      alert("Erro na busca");
    }
  }

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);

  return (
    <>
      {categoria.length === 0 && <div className="flex justify-center p-10 items-center"><Circles color="#f00" visible={true} /></div>}
      <div className="flex justify-center w-full py-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
