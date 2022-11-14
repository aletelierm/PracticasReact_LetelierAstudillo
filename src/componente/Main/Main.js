
import React from 'react';
import '../Main/Main.css';
import Titulo from '../Titulo/Titulo';

const Main = ({array}) => {
    return (
        <main className="contenedor-main">
            <div>
                <Titulo titulo = 'hola mundo'/>
            </div>
            <ul>
                {array.map((arreglo) => {
                    return (
                        <li >{arreglo.nombre}</li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Main;