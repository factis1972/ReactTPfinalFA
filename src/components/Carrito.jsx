import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

import Styles from './Carrito.module.css'

const Carrito = () => {

  const { carrito, eliminarDelCarrito, total } = useContext(CarritoContext);
  
  return (
      <div className={Styles.productos}>
        <h2>Carrito</h2>
        {carrito.map((producto, indice) => (
            <div key={producto.id} className={Styles.itm_producto}>
              <div className={Styles.imagen}>
                <img src={producto.imagen} height={100} width={100} alt={producto.nombre}/>
              </div>
              <div>
                <div className={Styles.nombre}>
                  {producto.nombre}
                </div>
                <div className={Styles.descripcion}>
                  {producto.descripcion}  
                </div> 
                <div className={Styles.precio}>
                  $ {producto.precio}
                </div>
              </div>
              <button 
                className={Styles.boton}
                onClick={() => eliminarDelCarrito(indice)} id='Eliminar'>Eliminar
              </button>
           </div>
        ))}
        <h3>Total $ {total.toFixed(2)} </h3>
      </div>
    ); 
  };
  
  export default Carrito; 