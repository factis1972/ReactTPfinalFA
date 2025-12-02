import { useState } from "react";
import Style from './Formulario.module.css';


const Formulario = () => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');

    const manejarEnvio = (evento) =>{
        evento.preventDefault();
        alert(`Gracias por suscribirte ${nombre}, ${apellido}!`);
    }

    return (
        <div className={Style.formulario}>
            <h3>Déjanos tus datos para recibir nuestra lista de Pizzas y Precios</h3> <br />
            <form onSubmit={manejarEnvio}>
                <label className={Style.etiqueta} htmlFor="nombre">Nombre</label>
                <input className={Style.campos}
                    value={nombre || ""}
                    type="text"
                    placeholder="Ingrese su nombre"
                    onChange={evento=>setNombre(evento.target.value)}
                    id="nombre"
                    required
                />
                <label className={Style.etiqueta} htmlFor="apellido">Apellido</label>
                <input className={Style.campos}
                    value={apellido || ""}
                    type="text"
                    placeholder="Ingrese su apellido"
                    onChange={evento=>setApellido(evento.target.value)}
                    id="apellido"
                    required
                />
                <label className={Style.etiqueta} htmlFor="email">E-mail</label>
                <input className={Style.campos}
                    value={mail}
                    type="email"
                    placeholder="Ingrese su dirección de correo electrónico"
                    onChange={evento=>setMail(evento.target.value)}
                    id="email"
                    required
                />
                <button className={Style.btnEnviar} type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}
export default Formulario;