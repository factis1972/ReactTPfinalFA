import Pizza from "./../assets/PizzaNueva.jpg";

const Inicio = () => {
  return(
    <div className="bg-fixed bg-center bg-cover">
      <img src={Pizza} alt="Mr. Pizza" />
    </div>
  );
}

export default Inicio;

/*
      <img src={Pizza} alt="Mr. Pizza" className="bg-fixed" />
*/