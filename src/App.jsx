
import { useState } from 'react'
//import './App.css'
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
//import Moda from './pages/Moda';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto.jsx';
import PizzasEspeciales from './pages/PizzasEspeciales.jsx';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import Carrito from './components/Carrito.jsx' 
import Catalogo from './pages/Catalogo.jsx';
import ResultadosBusqueda from "./components/ResultadosBusqueda";



function App() {
//  const [isAuthenticated, setisAuthenticated] = useState(true);

//  const cerrarSesion = () => setisAuthenticated(false);
//  const iniciarSesion = () => setisAuthenticated(true);

 // const [count, setCount] = useState(0)

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">

      <Header />

      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/catalogo' element={<Catalogo/>}/> 
        <Route path='/especiales' element={<PizzasEspeciales/>}/> 
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
        <Route path={'/login'} element={<Login/>} />
        <Route path="/busqueda" element={<ResultadosBusqueda />} />
        <Route path="/carrito" element={
            <RutaProtegida >
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route path={'/admin'} element={
          <RutaProtegida> 
              <Admin/>
            </RutaProtegida>} 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

/*
         <Route path='/moda' element={<Moda/>}/> 
*/