import React from "react";
import img from '../img/brais.webp';
import img2 from '../img/algo.PNG'
import '../style/perfil.css';

export const Perfil = (props) => {
    return (
        <div className="container">
            <div className="img-container">
                <img
                    className="img-profile"
                    src={props.nombre != "Brais Moure" ? img2 : img}
                    alt={`Foto de ${props.nombre}`}
                />
            </div>
            <div className="info-container">
                <p>{props.nombre} en {props.empresa}</p>
                <p>Pais: {props.pais}</p>
                <p>Cargo: {props.cargo}</p>
                <p>{props.descripcion}</p>
            </div>
        </div>
    );
};