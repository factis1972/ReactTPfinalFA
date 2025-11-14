import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Productos.module.css'
import { CarritoContext } from '../context/CarritoContext';

const Productos = () => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  //Uso el contexto
  const { agregarAlCarrito } = useContext(CarritoContext);

  //const URL = 'https://fakestoreapi.com/products';
  const URL = 'https://69162780a7a34288a27c82d0.mockapi.io/api/Productos';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      })
      .finally(() => setCargando(false))
  },[]);

  if (cargando) return <h4>Cargando productos...</h4>;
  if (error) return error;

  return(
    <div className={Styles.productos}>
        {productos.map((producto) => (
            <div className={Styles.prod}>
                <img src={producto.imagen} height={80} width={80}/>
                <h4>{producto.nombre}</h4>
                <h5>{producto.descripcion}</h5>
                <h2>$ {producto.precio}</h2>
                <div>
                <Link to={`/productos/${producto.id}`} >Detalles</Link>
                </div>
                <button className={Styles.agregar} onClick={() => agregarAlCarrito(producto)}>Agregar</button>

            </div>
        ))}
    </div>
  );
};

export default Productos;
