import Title from "../../Title/Title";
import video from "../../../assets/images/video.png";
import Button from "../../Button/Button";
import "./UsContent.scss";

const UsContent = () => {
  return (
    <section className="us-container">
      <img src={video} alt="Video Image" />
      <div className="us-info">
        <Title
          firstLine="Apasionados por"
          secondLine="el mundo dulce"
          color="green"
        />
        <p>
          Desde 2013 creamos experiencias únicas y singularmente dulces, que
          transmiten en sus sabores la pasión por crearlos, instaurando una
          cultura del postre en México y el mundo con dedicación y trabajo en
          equipo.
        </p>
        <Button label="Ver modelos de franquicia" color="green" />
      </div>
    </section>
  );
};

export default UsContent;
