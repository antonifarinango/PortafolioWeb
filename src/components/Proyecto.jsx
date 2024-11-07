import React from "react";
import "./proyecto.css"


function Proyecto (props){

    return(
        <div className="contenedor-proyectos">
            <div className="div-img-proyecto">
                <img className="img-proyecto" src={props.imgProyecto} alt={props.altImgProyecto} />
            </div>
            <div className="div-descripcion-proyecto">
                <span className="nombre-proyecto">{props.nombreProyecto}</span>
                <p>{props.textoProyecto}</p>
                <div className="div-img-tecnologias-proyectos">
                    <img className="img-tecnologias-proyectos" src={props.tecnologia1} alt={props.altTecnologia1} />
                    <img className="img-tecnologias-proyectos" src={props.tecnologia2} alt={props.altTecnologia2} />
                    <img className="img-tecnologias-proyectos" src={props.tecnologia3} alt={props.altTecnologia3}/>
                    <img className="img-tecnologias-proyectos" src={props.tecnologia4} alt={props.altTecnologia4}/>
                    <img className="img-tecnologias-proyectos" src={props.tecnologia5} alt={props.altTecnologia5}/>
                </div>
                <div className="div-enlaces-proyecto">
                    <a target="_blanck" className="enlace-proyecto" href={props.enlaceWeb}><img className="img-enlace-proyecto" src={props.enlaceImg} alt={props.altEnlace} /></a>
                    <a target="_blanck" className="enlace-proyecto" href={props.enlaceGitHub}><img className="img-enlace-proyecto" src={props.Imggithub} alt="github" /></a>
                </div>
            </div>
        </div>
    )

}

export default Proyecto;