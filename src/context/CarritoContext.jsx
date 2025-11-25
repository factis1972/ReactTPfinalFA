import { createContext, useState } from "react";
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(Number(total)+Number((producto.precio)));
  };
  // Usamos filter() para crear un nuevo array que excluye el elemento
  // con el índice dado.
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    setTotal(Number(total)-Number((producto.precio)));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, total, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
