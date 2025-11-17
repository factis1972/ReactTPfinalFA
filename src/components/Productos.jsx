//  const URL = 'https://69162780a7a34288a27c82d0.mockapi.io/api/Productos';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from "../context/ProductosContext"; 

const Productos = () => {
  
  // Usamos los contextos 
  const { productos, setSelectedProductId, cargando, error } = useProductosContext();
  //const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  return(
    <div>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} : {producto.precio}$
            <img src={producto.imagen} height={80} width={80}/>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            <Link to={`/productos/${producto.id}` } onClick={() => setSelectedProductId(producto.id)}>Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;