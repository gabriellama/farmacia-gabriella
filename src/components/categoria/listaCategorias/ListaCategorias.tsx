import React, {useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/Service';
import CardCategorias from '../cardCategorias/CardCategorias'
import { toastAlerts } from '../../../util/toastAlerts';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar('/temas', setCategorias);
    } catch (error: any) {
      if(error.toString().includes('403')) {
        toastAlerts('O token expirou, favor logar novamente', 'info')
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <InfinitySpin
        visible={true}
        width="300"
        color="#0891b2"
        ariaLabel="infinity-spin-loading"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;