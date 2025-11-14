import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

import Styles from './Carrito.module.css'

const Carrito = () => {

  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
  
  return (
      <div className={Styles.productos}>
        <h2>Carrito</h2>
        {carrito.map((producto, indice) => (
          <table className={Styles.tabla}>
            <tr>
              <div className={Styles.prod} key={indice}>
                <td>
                  <img src={producto.image} alt={producto.title} height={80} width={80} /> 
                </td>
                <td>
                  <p key={producto.indice}> {producto.title} </p>
                  <p>$ {producto.price}</p>
                </td>
                <td>
                  <button onClick={() => eliminarDelCarrito(indice)} id='Eliminar'>Eliminar</button>
                </td>
              </div>
            </tr>
            </table>  
        ))}
      </div>
    ); 
  };
  
  export default Carrito; 