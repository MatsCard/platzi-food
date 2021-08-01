import React from 'react';
import './styles/Header.css'
import Star from './Star'
import Cash from './Cash'
import logo from '../assets/img/logo-w.svg'

function Header(props) {

    const [nav, setNav] = React.useState(false)
    
    return (     
        <nav className="container py-1 fixed z-10 top-0 bg-secondary text-gray-100 rounded-b-lg ">
          <header>
            <div className="px-2 bg-secondary text-white flex justify-between items-center">
              <div className="">
                <img className="h-8 py-1" src={logo} alt="Logo" />
              </div>
              <div onClick={() => setNav(!nav) }className="text-2xl">&equiv;</div>
              </div>
          </header>
      
          {nav && <div>
      
            <div className="my-1 mx-2">
              <input className="form-control" type="text" placeholder="Busqueda" />
            </div>
            <div className="py-1 mx-2 md:flex justify-around">
                <Cash></Cash>
                <Star></Star>
              <div>
                <button className="btn btn-primary">Filtrar</button>
              </div>
            </div>
          </div>}
        </nav>
        
    );
}

export default Header;

