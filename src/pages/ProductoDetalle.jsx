import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";
import { Link } from "react-router-dom";
import Styles from "./ProductoDetalle.module.css";


const ProductoDetalle = () => {
  
  //uso el contexto 
  const { selectedProduct } = useProductosContext();

  return(
    <>
      <div className={Styles.contenedor}>
        <h3>Detalles de la Pizza {selectedProduct.tipo}</h3>
        <img src={selectedProduct.imagen} alt={selectedProduct.nombre} width={200} height={200} />
        <h2 className={Styles.nombre}>{selectedProduct.nombre}</h2>
        <h3 className={Styles.precio}> $ {selectedProduct.precio}</h3>
        <p className={Styles.descripcion}>{selectedProduct.descripcion}</p>
      </div>
      <div className={Styles.nombre}>
        <Link to="/catalogo">Volver a Productos</Link>
      </div>
    </>
  );
}
 
export default ProductoDetalle;

/*      <br />
      <Link to='/' >Volver a Inicio</Link>

*/