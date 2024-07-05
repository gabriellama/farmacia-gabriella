import React from 'react';
import homeLogo from '../../assets/logo.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-sky-200 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Compre nossos produtos</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-sky-300 font-bold py-2 px-4'>Ver Produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="Logo" className='img'/>
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;