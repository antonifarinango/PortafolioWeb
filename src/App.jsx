import "./App.css";
import Proyecto from "./components/Proyecto";
import { useEffect, useRef, useState } from "react";

import enlace from "./assets/enlace.png"

//Redes
import gitHub from "./assets/redes/github.png"
import gitHubModoClaro from "./assets/redes/gitHubModoClaro.png"
import linkedin from "./assets/redes/linkedin.png"
import gmail from "./assets/redes/gmail.png"
import whatsapp from "./assets/redes/whatsapp.png"

//Tecnologias
import css from "./assets/tecnologias/css.png"
import html from "./assets/tecnologias/html.png"
import javascrip from "./assets/tecnologias/js.png"
import reactImg from "./assets/tecnologias/react.png"
import java from "./assets/tecnologias/java.png"
import springboot from "./assets/tecnologias/spring-boot.png"

//Proyectos Img
import suwayPageImg from "./assets/proyectosImg/SuwayPageImg.jpg"
import ToDoList from "./assets/proyectosImg/todoList.jpg"
import pokedex from "./assets/proyectosImg/pokedex.jpg"

//Modos
import luna from "./assets/luna.png"
import sol from "./assets/sol.png"

function App() {

  const [toggleMode, setToggleMode] = useState(true);
  const containerRef = useRef(null)
  const modos = () => {
    setToggleMode(prevMode => !prevMode);
  };

  useEffect(() => {

    const parrafos = containerRef.current.getElementsByTagName("p");
    const divProyecto = document.querySelectorAll(".div-img-proyecto");
    const nombreProyecto = document.querySelectorAll(".nombre-proyecto");
    const textSpanSeccion = document.querySelectorAll(".span-texto-seccion");
    const divTecnologias = document.querySelectorAll(".div-img-tecnologias")
    const divRedes = document.querySelectorAll(".redes")

    if (toggleMode) {
      console.log("Modo oscuro");
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode")

      for(let i = 0; i < textSpanSeccion.length; i++){
        textSpanSeccion[i].classList.remove("span-texto-seccion-light");
      }

      for(let i = 0; i < divProyecto.length; i++){
        divProyecto[i].classList.remove("div-img-proyecto-light");
      }

      for(let i = 0; i < nombreProyecto.length; i++){
        nombreProyecto[i].classList.remove("nombre-proyecto-light");
      }

      for(let i = 0; i < parrafos.length; i++){
        parrafos[i].classList.add("dark-mode");
        parrafos[i].classList.remove("light-mode");
      }

      for(let i = 0; i < divTecnologias.length; i++){
        divTecnologias[i].classList.remove("div-img-tecnologias-light");
      }

      for(let i = 0; i < divRedes.length; i++){
        divRedes[i].classList.remove("redes-light");
      }

    } else {
      console.log("Modo claro");
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode")

      for(let i = 0; i < textSpanSeccion.length; i++){
        textSpanSeccion[i].classList.add("span-texto-seccion-light");
      }

      for(let i = 0; i < divProyecto.length; i++){
        divProyecto[i].classList.add("div-img-proyecto-light");
      }

      for(let i = 0; i < nombreProyecto.length; i++){
        nombreProyecto[i].classList.add("nombre-proyecto-light");
      }
      for(let i = 0; i < parrafos.length; i++){
        parrafos[i].classList.add("light-mode");
        parrafos[i].classList.remove("dark-mode");
      }

      for(let i = 0; i < divTecnologias.length; i++){
        divTecnologias[i].classList.add("div-img-tecnologias-light");
      }

      for(let i = 0; i < divRedes.length; i++){
        divRedes[i].classList.add("redes-light");
      }

    }

    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, [toggleMode]); 


  return (
    <>
      <div ref={containerRef} className="contenedor">
        <div id="secciones">
          <header className={` header ${toggleMode ? "" : "header-light"}`}>
            <div className="div-toggle-mode">
              <button 
              onClick={modos}
              className="btnHeader-toggle">
                <img className="imgToggle" src={toggleMode ? sol : luna} alt="" />
              </button>
            </div>
          </header>
          <div id="contenedor-secciones">
            <section className={`presentacion ${toggleMode ? "" : "presentacion-light"}`}>
              <div className="div-img-presentacion">
                  <img src="" alt="" />
              </div>
              <div className="div-texto-presentacion">
                  <span className={` nombre-presentacion ${toggleMode ? "" : "nombre-presentacion-light"}`}>Anthony FS</span>
                  <p className="texto-presentacion">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  <div className="div-redes-presentacion">
                    <a className="redes-presentacion" target="_blank" href="https://github.com/antonifarinango">
                      <img className="img-redes-presentacion" src={toggleMode ? gitHub : gitHubModoClaro} alt="github" />
                    </a>
                    <a className="redes-presentacion" target="_blank" href="https://www.linkedin.com/in/anthony-farinango-75ba34245">
                      <img className="img-redes-presentacion" src={linkedin} alt="linkeding" />
                    </a>
                    <a className="redes-presentacion" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=farinangoanthony1@gmail.com">
                      <img className="img-redes-presentacion-e" src={gmail} alt="gmail" />
                    </a>
                  </div>
              </div>

              <div className={` div-documento-descarga ${toggleMode ? "" : "div-documento-descarga-light"}`}>
                    <a href="../public/curriculum-vitae.pdf" download="Anthony Farinango CV">Descargar CV</a>
              </div>
            </section>
            <section id="proyectos">
              <span className="span-texto-seccion">Proyectos</span>
              <Proyecto  
              imgProyecto={suwayPageImg}
              altImgProyecto="suwaypage"
              nombreProyecto="Página Web de Grupo de Música Folclórica"
              textoProyecto="Página estática que permite, mediante enlaces, contactar con el grupo, así como revisar los diferentes eventos en los que han participado."
              tecnologia1={reactImg}
              altTecnologia1="reactImg"
              tecnologia2={javascrip}
              altTecnologia2="javaScripImg"
              tecnologia3={css}
              altTecnologia3="cssImg"
              enlaceImg = {enlace}
              altEnlace = "enlaceImg"
              enlaceWeb="https://suwaypage.netlify.app/"
              enlaceGitHub="https://github.com/antonifarinango/suwayStaticPage.git"
              Imggithub= {toggleMode ? gitHub : gitHubModoClaro} 
              />

              <Proyecto  
              imgProyecto={pokedex}
              altImgProyecto="pokedexImg"
              nombreProyecto="Pokedex"
              textoProyecto="Aplicación interactiva desarrollada con React que consume la Poke API, permitiendo a los usuarios filtrar y explorar diferentes Pokémon. La interfaz está completamente estilizada con CSS para una experiencia visual atractiva y fluida."
              tecnologia1={reactImg}
              altTecnologia1="reactImg"
              tecnologia2={javascrip}
              altTecnologia2="javaScripImg"
              tecnologia3={css}
              altTecnologia3="cssImg"
              enlaceImg = {enlace}
              altEnlace = "enlaceImg"
              enlaceWeb="https://fsmipokedex.netlify.app/"
              enlaceGitHub="https://github.com/antonifarinango/Pokedex.git"
              Imggithub= {toggleMode ? gitHub : gitHubModoClaro} 
              />

              <Proyecto  
              imgProyecto={ToDoList}
              altImgProyecto="to-do-list"
              nombreProyecto="To-Do List"
              textoProyecto="CRUD de tareas con React y Spring Boot que permite crear, ver, actualizar y eliminar tareas, donde React gestiona la interfaz y Spring Boot maneja la lógica de backend."
              tecnologia1={reactImg}
              altTecnologia1="reactImg"
              tecnologia2={javascrip}
              altTecnologia2="javaScripImg"
              tecnologia3={css}
              altTecnologia3="cssImg"
              tecnologia4={springboot}
              altTecnologia4="springBootImg"
              tecnologia5={java}
              altTecnologia5="javaImg"
              Imggithub= {toggleMode ? gitHub : gitHubModoClaro}
              enlaceGitHub="https://github.com/antonifarinango/TodoList.git"
              />
            </section>
            <section id="tecnologias">
              <span className="span-texto-seccion">Tecnologías</span>
              <div className="div-container-img-tecnologias">
                <div className="div-img-tecnologias"><img className="img-tecnologia" src={html} alt="" /></div>
                <div className="div-img-tecnologias"><img className="img-tecnologia" src={css} alt="" /></div>
                <div className="div-img-tecnologias"><img className="img-tecnologia" src={javascrip} alt="" /></div>
                <div className="div-img-tecnologias"><img className="img-tecnologia" src={reactImg} alt="" /></div>
                <div className="div-img-tecnologias"><img className="img-tecnologia" src={java} alt="" /></div>
                <div className="div-img-tecnologias"><img className="img-tecnologia" src={springboot} alt="" /></div>
              </div>
            </section>
            <section id="redes">
              <span className="span-texto-seccion">Redes</span>
              <div className="div-redes">
                    <a className="redes" target="_blank" href="https://www.linkedin.com/in/anthony-farinango-75ba34245"><img className="img-redes" src={linkedin} alt="linkeding" />Linkeding</a>
                    <a className="redes" target="_blank" href="https://wa.me/5930984053628"><img className="img-redes" src={whatsapp} alt="whatsApp" />WhatsApp</a>
                    <a className="redes" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=farinangoanthony1@gmail.com"><img className="img-redes" src={gmail} alt="gmail" />Gmail</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
