import React, { useState } from "react";
import "./proyectoEspecial.css";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ProyectoEspecial({
  imgProyecto,
  nombreProyecto,
  galeria = [],
  textoProyecto,
  tecnologias = [],
  enlaces = [],
  gitHub,
  gitHubModoClaro,
}) {
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  return (
    <div className="proyecto-especial-wrapper reveal-on-scroll ">
      <div className="proyecto-especial-card glass-card">
        <div className="proyecto-especial-main">
          <div className="proyecto-especial-img-wrapper">
            <img src={imgProyecto} alt={nombreProyecto} className="main-featured-img" />
          </div>

          <div className="proyecto-especial-info">
            <h3 className="especial-title">{nombreProyecto}</h3>
            <p className="especial-text">{textoProyecto}</p>

            <div className="especial-tech-list">
              {tecnologias.map((tec, index) => (
                <div key={index} className="tech-tag">
                  <img src={tec.src} alt="tech" className="tech-mini-icon" />
                </div>
              ))}
            </div>

            <div className="especial-actions">
              {enlaces.map((enlace, index) => {
                const isGitHub = enlace.imgSrc === "github";
                return (
                  <a
                    key={index}
                    href={enlace.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="especial-link-btn"
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

{/* Galeria de imagenes del proyecto 
        <div className="d-flex gap-5 p-5">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              {galeria.map((img,index)=>(
                <SwiperSlide>
                <div key={index} className="bg-danger d-flex gap-3" style={{height:"600px",width:"500px"}}>
                  <img src={img} alt="" className="" style={{width:"100%", height:"auto" }}/>
                </div>
                </SwiperSlide>
              ))}
              </Swiper>
        </div>
*/ }
      </div>
    </div>
  );
}

export default ProyectoEspecial;
