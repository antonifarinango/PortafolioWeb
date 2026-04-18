import React, { useState } from "react";
import "./proyecto.css";

function Proyecto({
  imgProyecto,
  altImgProyecto,
  nombreProyecto,
  textoProyecto,
  tecnologias = [],
  enlaces = [],
  gitHub,
  gitHubModoClaro,
}) {
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

  return (
    <div className="proyecto-card glass-card reveal-on-scroll">
      <div className="proyecto-img-wrapper">
        <img className="proyecto-img" src={imgProyecto} alt={altImgProyecto || nombreProyecto} />
        <div className="proyecto-overlay">
           <div className="proyecto-tech-icons">
            {tecnologias.map((tec, index) => (
              <img key={index} src={tec.src} alt="tech" className="tech-mini-icon" title={tec.alt} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="proyecto-info">
        <h3 className="proyecto-title">{nombreProyecto}</h3>
        <p className="proyecto-text">{textoProyecto}</p>
        
        <div className="proyecto-actions">
          {enlaces.map((enlace, index) => {
            const isGitHub = enlace.imgSrc === "github";
            return (
              <a
                key={index}
                href={enlace.href}
                target="_blank"
                rel="noopener noreferrer"
                className="proyecto-link-btn"
                onMouseEnter={() => isGitHub && setIsGitHubHovered(true)}
                onMouseLeave={() => isGitHub && setIsGitHubHovered(false)}
              >
                <img
                  src={isGitHub ? (isGitHubHovered ? gitHubModoClaro : gitHub) : enlace.imgSrc}
                  alt="link"
                  className="link-icon"
                />
                <span>{isGitHub ? "GitHub" : "Demo"}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
