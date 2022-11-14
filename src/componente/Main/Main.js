
import React from 'react';
import '../Main/Main.css';
import Titulo from '../Titulo/Titulo';

const Main = () => {
    return (
        <main className="contenedor-main">
            <div>
                <Titulo titulo = 'hola mundo'/>
            </div>
        </main>
    )
}

export default Main;