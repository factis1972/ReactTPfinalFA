import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from "../context/ProductosContext"; 
import Style from './Productos.module.css';

const Especiales = () => {
  
  // Usamos los contextos de productos y carrito
  const { productos, setSelectedProductId, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  // Filtro las pizzas tipo Tradicional
  const prodTipo = productos.filter((producto, indice) => producto.tipo.includes('Especial'))

  if (cargando) return 'Cargando productos...';
  if (error) return error; 

  return(
    <div className={Style.contenedor}>
      {prodTipo.map((producto) => (
          <div  key={producto.id} className={Style.itm_producto}>
            <div className={Style.imagen}>
              <img src={producto.imagen} height={100} width={100}/>
            </div>
            <div>
              <div className={Style.nombre}>
                {producto.nombre}
              </div>
              <div className={Style.descripcion}>
                {producto.descripcion}  
              </div> 
              <div className={Style.precio}>
                $ {producto.precio}
               </div>
            </div>    
            <div>
              <Link to={`/productos/${producto.id}` } onClick={() => setSelectedProductId(producto.id)}>Detalles</Link>
            </div>
            <div>
              <button onClick={() => agregarAlCarrito(producto)} className={Style.btnAgregar}>Agregar</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Especiales;
