import "./App.css";
import Proyecto from "./components/Proyecto";
import { useEffect, useState, useRef } from "react";
import FondoParticulas from "./components/FondoParticulas";

import enlaceImg from "./assets/enlace.png";

//Iconos
import { GoChevronDown } from "react-icons/go";

//Redes
import gitHub from "./assets/redes/github.png";
import gitHubModoClaro from "./assets/redes/gitHubModoClaro.png";
import linkedin from "./assets/redes/linkedin.png";
import gmail from "./assets/redes/gmail.png";
import whatsapp from "./assets/redes/whatsapp.png";

//Tecnologias
import css from "./assets/tecnologias/css.png";
import html from "./assets/tecnologias/html.png";
import javascript from "./assets/tecnologias/js.png";
import reactImg from "./assets/tecnologias/react.png";
import java from "./assets/tecnologias/java.png";
import springboot from "./assets/tecnologias/spring-boot.png";
import sql from "./assets/tecnologias/sql.png";
import bootstrap from "./assets/tecnologias/Bootstrap_logo.png"
import gitHubSkill from "./assets/tecnologias/github.png"
import postman from "./assets/tecnologias/Postman.png"

//Proyectos Img
import suwayPageImg from "./assets/proyectosImg/suwaypage.webp";
import ToDoList from "./assets/proyectosImg/todolist.webp";
import pokedex from "./assets/proyectosImg/pokedex.webp";
import peliculas from "./assets/proyectosImg/peliculas.webp";
import toDoListLocalStorage from "./assets/proyectosImg/todoListLocalStorage.webp";

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="capa-principal">
        <FondoParticulas/>
      {/* Overlay */}
      <div className="capa"></div>

      {/* Sidebar Social (Fixed) */}
      <aside className="sidebar-social d-none d-md-flex">
        <a href="https://github.com/antonifarinango" target="_blank" rel="noreferrer" className="social-item">
          <img src={gitHub} alt="GitHub" style={{ width: "30px" }} />
        </a>
        <a href="https://www.linkedin.com/in/anthony-farinango-75ba34245" target="_blank" rel="noreferrer" className="social-item">
          <img src={linkedin} alt="LinkedIn" style={{ width: "30px" }} />
        </a>
        <a href="https://wa.me/5930984053628" target="_blank" rel="noreferrer" className="social-item">
          <img src={whatsapp} alt="WhatsApp" style={{ width: "30px" }} />
        </a>
      </aside>

      {/* Contenido */}
      <div className="contenedor-principal">

        <header className="sticky-top glass-header d-flex" style={{ height: "150px" }}>
          <nav className="w-100 d-flex flex-column justify-content-center align-items-center py-3">

            {/* Social Links for Mobile */}
            <div className="header-socials d-flex d-lg-none gap-5 mb-3 align-items-center" style={{ height: "150px" }}>
              <a href="https://github.com/antonifarinango" target="_blank" rel="noreferrer">
                <img src={gitHub} alt="GitHub" style={{ width: "40px" }} />
              </a>
              <a href="https://www.linkedin.com/in/anthony-farinango-75ba34245" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" style={{ width: "40px" }} />
              </a>
              <a href="https://wa.me/5930984053628" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="WhatsApp" style={{ width: "40px" }} />
              </a>
            </div>

            <ul className="container-full d-none d-lg-flex list-unstyled m-0 gap-4 fw-bold nav-links w-75 justify-content-between align-items-center" style={{ height: "100px" }}>
              <li><a href="#inicio" style={{ fontSize: "25px" }}>Inicio</a></li>
              <li><a href="#sobre-mi" style={{ fontSize: "25px" }}>Sobre Mí</a></li>
              <div className="logo-container d-flex flex-column justify-content-center align-items-center">
                <img src="/logo.png" alt="logo" style={{ height: "90px" }} />
              </div>
              <li><a href="#skills" style={{ fontSize: "25px" }}>Skills</a></li>
              <li><a href="#proyectos" style={{ fontSize: "25px" }}>Proyectos</a></li>
            </ul>

          </nav>
        </header>

        <section id="inicio" style={{ height: "calc(100vh - 150px)", gap: "50px" }} className="hero-section d-flex flex-column text-center">
          <div className="contenedor-inicio">
            <h1 className="display-1  title-reveal fw-semibold">Anthony Farinango</h1>
            <p className="lead fs-3 fade-in-delayed">Desarrollador Full Stack</p>
          </div>
          <div className="d-flex align-items-center col-lg-3">
            <a href="https://drive.google.com/file/d/12XY29z6b20r7zQXL0251qO8NPJfdBb8t/view?usp=drive_link" target="_blank" rel="noreferrer" className="cv-btn d-sm-block w-100">
              Descargar CV
            </a>
          </div>
          <div className="bounce">
            <a href="#sobre-mi" className="nav-links text-light"><GoChevronDown size={60}/></a>
          </div>
        </section>

        <section id="sobre-mi" className="section-container container py-5">
          <div className="glass-card p-5 reveal-on-scroll">
            <h2 className="section-title mb-4">Sobre Mí</h2>
            <p className="fs-5">
              Me gusta construir aplicaciones web completas, aunque donde más disfruto trabajar es en el backend con Java y Spring Boot. Me interesa desarrollar soluciones bien estructuradas, escalables y que realmente funcionen bien en escenarios reales. También cuido la parte visual para que la experiencia del usuario sea clara y agradable. Siempre estoy aprendiendo y mejorando mis habilidades para crear proyectos cada vez más sólidos.
            </p>
          </div>
        </section>

        <section id="skills" className="section-container container py-5">
          <h2 className="section-title text-center mb-5 reveal-on-scroll">Tecnologías</h2>
          <div className="skills-grid reveal-on-scroll">
            {[
              { src: html, name: "HTML5" }, { src: css, name: "CSS3" },
              { src: javascript, name: "JavaScript" }, { src: reactImg, name: "React" },
              { src: java, name: "Java" }, { src: springboot, name: "Spring Boot" },
              { src: sql, name: "SQL" },
              { src: bootstrap, name: "Bootstrap" },
              { src: gitHubSkill, name: "Git Hub" },
              { src: postman, name: "Postman" }
            ].map((skill, idx) => (
              <div key={idx} className="skill-card glass-card">
                <img src={skill.src} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section-container container py-5">
          <h2 className="section-title text-center mb-5 reveal-on-scroll">Mis Proyectos</h2>
          <div className="proyectos-list d-flex flex-column gap-5">
            <Proyecto
              imgProyecto={pokedex}
              nombreProyecto="Pokedex"
              textoProyecto="Aplicación interactiva desarrollada con React que consume la Poke API, permitiendo a los usuarios filtrar y explorar diferentes Pokémon."
              tecnologias={[{ src: reactImg }, { src: javascript }, { src: css }, { src: html }]}
              enlaces={[{ href: "https://fsmipokedex.netlify.app/", imgSrc: enlaceImg }, { href: "https://github.com/antonifarinango/Pokedex.git", imgSrc: "github" }]}
              gitHub={gitHub}
              gitHubModoClaro={gitHubModoClaro}
            />
            <Proyecto
              imgProyecto={peliculas}
              nombreProyecto="Peliculas"
              textoProyecto="Aplicación web en React que interactúa con la API de The Movie Database, ofreciendo búsqueda y detalles de películas."
              tecnologias={[{ src: reactImg }, { src: javascript }, { src: css }, { src: html }]}
              enlaces={[{ href: "https://fs-peliculas.netlify.app/", imgSrc: enlaceImg }, { href: "https://github.com/antonifarinango/Peliculas.git", imgSrc: "github" }]}

              gitHub={gitHub}
              gitHubModoClaro={gitHubModoClaro}
            />
            <Proyecto
              imgProyecto={toDoListLocalStorage}
              nombreProyecto="Lista de Tareas"
              textoProyecto="Aplicación web de lista de tareas con persistencia en Local Storage, desarrollada con JavaScript puro."
              tecnologias={[{ src: javascript }, { src: css }, { src: html }]}
              enlaces={[{ href: "https://todolist-fs.netlify.app/", imgSrc: enlaceImg }, { href: "https://github.com/antonifarinango/todoListLocalStorage.git", imgSrc: "github" }]}

              gitHub={gitHub}
              gitHubModoClaro={gitHubModoClaro}
            />
            <Proyecto
              imgProyecto={suwayPageImg}
              nombreProyecto="Web Folclórica"
              textoProyecto="Página estática para un grupo de música folclórica con gestión de eventos y contactos."
              tecnologias={[{ src: reactImg }, { src: javascript }, { src: css }, { src: html }]}
              enlaces={[{ href: "https://suwaypage.netlify.app/", imgSrc: enlaceImg }, { href: "https://github.com/antonifarinango/suwayStaticPage.git", imgSrc: "github" }]}

              gitHub={gitHub}
              gitHubModoClaro={gitHubModoClaro}
            />
            <Proyecto
              imgProyecto={ToDoList}
              nombreProyecto="Full Stack To-Do"
              textoProyecto="CRUD completo con React y Spring Boot, manejando persistencia en MySQL."
              tecnologias={[{ src: reactImg }, { src: springboot }, { src: java }, { src: sql }]}
              enlaces={[{ href: "https://github.com/antonifarinango/TodoList.git", imgSrc: "github" }]}

              gitHub={gitHub}
              gitHubModoClaro={gitHubModoClaro}
            />
          </div>
        </section>

        <footer className="py-5 text-center mt-5 glass-footer mx-0">
          <div className="container">
            <h3 className="mb-4 section-title">Contáctame</h3>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=farinangoanthony1@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="Gmail" style={{ height: "40px" }} />
              </a>
              <a href="https://wa.me/5930984053628" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="WhatsApp" style={{ height: "40px" }} />
              </a>
            </div>
            <p className="m-0">&copy; 2026 Anthony Farinango. Todos los derechos reservados.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
