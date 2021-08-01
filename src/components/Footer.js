import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Footer.css'

function Footer(props) {

    return (     
        <footer className="py-1 w-full bg-secondary rounded-t-lg">
            
          <div className="md:flex justify-around md:justify-between md:flex-row-reverse text-gray-200 ">
            <div className="mt-2 mx-4">
              <div className="hover:text-primary"><i className="fab fa-facebook"></i> /facebook</div>
              <div className="hover:text-primary"><i className="fab fa-twitter"></i> @platzifood</div>
              <div className="hover:text-primary"><i className="fab fa-instagram"></i> @platzifood</div>
            </div>
            <ul className="mt-2 md:mb-4 mx-4 text-gray-200 ">
              <li className="hover:text-primary" >Soporte</li>
              <li className="hover:text-primary" >Acerca de nosotros</li>
              <li className="hover:text-primary" >Registro</li>
              <li className="hover:text-primary" >Aviso Privacidad</li>
            </ul>
          </div>
        </footer>
        
    );
}

export default Footer;

