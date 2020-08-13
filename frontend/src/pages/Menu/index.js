import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

 import letreiroDracTif from '../../assets/letreiroDracTif.png';
 import menu from '../../assets/menu.png';

export default function Menu(){
    return (
        
        <div className="menu-container">
            <header>
                <img src={letreiroDracTif} alt="letreiro" />
                <span></span>

                <Link className="button" to="/">Voltar para o início</Link>
                
            </header>

            <center>
            <img src={menu} alt="menu" width="90px" className="imgMenu"/>
            <h1>Menu</h1>
            <Link className="button" to="/estabelecimentos">Estabelecimentos</Link>
            <Link className="button" to="/categorias">Categorias</Link> </center>
        
        </div>
        
    );
}