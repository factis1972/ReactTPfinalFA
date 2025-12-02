import Formulario from "../components/Formulario";
import ImgContacto from "./../assets/ImgContacto.jpg";

const Contacto = () => {
    return (
        <div className="flex flex-row static bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ImgContacto})` } }  >
            <Formulario />
        </div>
    );
}
export default Contacto;