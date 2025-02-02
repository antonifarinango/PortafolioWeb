import React from "react";
import "./proyecto.css";

function Proyecto({
  imgProyecto,
  altImgProyecto,
  nombreProyecto,
  textoProyecto,
  tecnologias = [],
  enlaces = [],
  toggleMode,
  gitHub,
  gitHubModoClaro,
}) {
  return (
    <div className="contenedor-proyectos">
      <div className="div-img-proyecto">
        <img className="img-proyecto" src={imgProyecto} alt={altImgProyecto} />
      </div>
      <div className="div-descripcion-proyecto">
        <span className="nombre-proyecto">{nombreProyecto}</span>
        <p>{textoProyecto}</p>
        <div className="div-img-tecnologias-proyectos">
          {tecnologias.map((tecnologia, index) => (
            <>
              <img
                key={index}
                className="img-tecnologias-proyectos"
                src={tecnologia.src}
                alt={tecnologia.alt || "tecnologia-icon"}
              />
            </>
          ))}
        </div>
        {/* Solo muestra la sección si hay enlaces */}
        {enlaces?.length > 0 && (
          <div className="div-enlaces-proyecto">
            {enlaces.map((enlace, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-proyecto"
                href={enlace.href || "https://mi-portafolio-fs.netlify.app/"}
              >
                <img
                  className="img-enlace-proyecto"
                  src={
                    enlace.imgSrc === "github"
                      ? toggleMode
                        ? gitHub
                        : gitHubModoClaro
                      : enlace.imgSrc
                  }
                  alt="enlace-icon"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Proyecto;
