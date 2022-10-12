import React from 'react'
import { Link } from "react-router-dom";
import Portada from "../../../img/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
        <h1>"Juega según las reglas, pero sé feroz"</h1>
            <Link to="/productos">
            <img src={Portada} alt=""/>
            </Link>
            
        </div>
    )
}
