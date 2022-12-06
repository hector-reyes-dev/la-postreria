import Button from "../Button/Button";
import postreriaIcon from "../../assets/icons/icon.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img src={postreriaIcon} alt="Isotipo La Postrería" />
      <nav>
        <ul className="menu">
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Selling Points</li>
          <li>Tabla de inversión</li>
        </ul>
      </nav>
      <Button label="Solicitar Información" color="purple" />
    </header>
  );
};

export default Header;
