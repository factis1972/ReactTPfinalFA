import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";

const ProductoDetalle = () => {
  
  //uso el contexto 
  const { selectedProduct } = useProductosContext();

  return(
    <>
      <h2>Detalles del Producto Nro {selectedProduct.id}</h2>
      <img src={selectedProduct.imagen} alt={selectedProduct.nombre} width={100} height={100} />
      <h3>{selectedProduct.nombre}</h3>
      <p>{selectedProduct.descripcion}</p>
    </>
    
  );
}

export default ProductoDetalle;
