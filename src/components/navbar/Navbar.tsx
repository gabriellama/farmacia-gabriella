import React from 'react'
import {Butterfly} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


function Navbar() {
 

  return (
    <>
     <div className='w-full bg-sky-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase flex'>Farmacia 
                <Butterfly size={32} weight='bold'/>
            </div>

            <div className='flex gap-4'>
            <Link to='/home'className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Cadastrar Produto</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar