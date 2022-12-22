import React from "react";
import Title from "../../Title/Title";
import image from "../../../assets/images/images-1.png";
import "./HistoryContainer.scss";

const HistoryContainer = () => {
  return (
    <section className="history-container">
      <Title
        firstLine="Tradición y"
        secondLine="creatividad"
        color="pink"
        align="center"
      />
      <div className="history-info-container">
        <img src={image} alt="Platillos La Postrería" />
        <div className="history-info">
          <div className="history-paragraph">
            <h3>
              Productos únicos <span>y recetas innovadoras</span>
            </h3>
            <p>
              En la Postrería utilizamos productos de alta calidad, aplicando el
              conocimiento y la técnica adecuada en cada ingrediente, tratando
              siempre de ir más allá, aportando juego, sorpresa y/o contrastes
              en cada una de nuestras elaboraciones, para hacer de este una
              parte fundamental en cualquier experiencia gastronómica.
            </p>
          </div>
          <div className="history-paragraph">
            <h3>
              Procesos de alta calidad con
              <span>procesos probados y estandarizados</span>
            </h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="history-paragraph">
            <h3>
              Conocimiento y técnica
              <span>aplicados a un concepto original</span>
            </h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryContainer;
