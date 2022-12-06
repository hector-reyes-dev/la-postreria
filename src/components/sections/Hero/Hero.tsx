import Header from "../Header/Header";
import Button from "../../Button/Button";
import bgImage from "../../../assets/images/background.png";
import logo from "../../../assets/logos/la-postreria.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <main className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <Header />
      <div className="hero-container">
        <img src={logo} alt="Logo La Postrería" />
        <div className="hero-container-info">
          <h4>¿Sueñas con abrir tu propia pastelería?</h4>
          <h1>
            Adquiere una franquicia <br /> La Postrería.
          </h1>
          <Button label="Ver beneficios de inversión" color="purple" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
