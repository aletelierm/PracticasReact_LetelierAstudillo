import React from "react";
import '../Footer/Footer.css';
import Titulo from "../Titulo/Titulo";

const Footer = () => {
    return (
        <footer className="container-footer">
            <Titulo titulo = 'soy un titulo' />
            <p>2022</p>
        </footer>
    )
}

export default Footer;