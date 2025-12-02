import Pizza from "./../assets/PizzaNueva.jpg";

const Inicio = () => {
  return(
    <>
      <div className="flex flex-row static w-full h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Pizza})` } }  >
        <div className="bg-white/50 backdrop-filter p-10 basis-2/5 text-2xl font-medium text-gray-900 md:text-overflow" >En nuestra pizzería italiana tradicional, cada receta cuenta una historia. <br /><br />
            Elaboramos nuestras pizzas con masa artesanal fermentada lentamente, ingredientes seleccionados y el inconfundible sabor que aporta el horno de piedra. <br /><br />
            Somos un espacio para compartir momentos, disfrutar de la calidez italiana y celebrar la pasión por la buena cocina.
        </div>
      </div>
  </>
  );
}

export default Inicio;

/*
    <div className="w-full h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Pizza})` } }  >
      Contenido sobre la imagen de fondo
      </div>
  

      <div>
        <div>
          <img src={Pizza} alt="Mr. Pizza" />
        </div>
      </div>




    <div>
      <div className="w-full h-screen bg-cover bg-no-repeat bg-center" style="background-image: url('./../assets/PizzaNueva.jpg')"></div>
      <div>
        <h2>En nuestra pizzería italiana tradicional, cada receta cuenta una historia. <br />
          Elaboramos nuestras pizzas con masa artesanal fermentada lentamente, ingredientes seleccionados y el inconfundible sabor que aporta el horno de piedra. <br />
          Somos un espacio para compartir momentos, disfrutar de la calidez italiana y celebrar la pasión por la buena cocina.
        </h2>
      </div>    
    </div>

*/