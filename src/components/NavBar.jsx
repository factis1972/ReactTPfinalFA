import { Link } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === 'admin';

    return(
      <nav className="backdrop-filter  sticky top-0 p-4">
        <ul className="flex md:flex-row flex-col md:gap-10 gap-8 items-center md:items-center bg-transparent">
          <li className="flex mx-15 gap-10 flex-wrap wrap">
            <Link to="/" 
            className="text-gray-700 md:text-lg text-2xl font-medium 
                      hover:text-black hover:underline underline-offset-4 hover:decoration-green-700
                      focus:underline decoration-2 decoration-gray-700">Inicio</Link>
            <Link to="/catalogo" 
            className="text-gray-700 md:text-lg text-2xl font-medium 
                      hover:text-black hover:underline underline-offset-4 hover:decoration-green-700
                      focus:underline decoration-2 decoration-gray-700">Pizzas Tradicionales</Link>
            <Link to="/especiales" 
            className="text-gray-700 md:text-lg text-2xl font-medium 
                      hover:text-black hover:underline underline-offset-4 hover:decoration-green-700
                      focus:underline decoration-2 decoration-gray-700">Pizzas Especiales</Link>
            <Link to="/contacto" 
            className="text-gray-700 md:text-lg text-2xl font-medium 
                      hover:text-black hover:underline underline-offset-4 hover:decoration-green-700
                      focus:underline decoration-2 decoration-gray-700">Contacto</Link>
            {esAdmin && 
              <Link to="/Admin" 
              className="text-gray-700 md:text-lg text-2xl font-medium 
                      hover:text-black hover:underline underline-offset-4 hover:decoration-green-700
                      focus:underline decoration-2 decoration-gray-700">Admin</Link>
            }
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;

  
