import Award from "../../Award/Award";
import icon1 from "../../../assets/icons/award-icon-1.png";
import icon2 from "../../../assets/icons/award-icon-2.png";
import icon3 from "../../../assets/icons/award-icon-3.png";
import icon4 from "../../../assets/icons/award-icon-4.png";
import "./Awards.scss";

const Awards = () => {
  return (
    <div className="awards-container">
      <Award image={icon1}>Mejor Experiencia Dulce 2015</Award>
      <Award image={icon2}>Mejor Espacio Dulce de México 2017</Award>
      <Award image={icon3}>Mejor Pastelero de Latinoamérica 2018</Award>
      <Award image={icon4}>Mejor Espacio Dulce de México 2017 y 2018</Award>
    </div>
  );
};

export default Awards;
