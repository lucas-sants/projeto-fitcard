import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

 import letreiroDracTifImg from '../../assets/letreiroDracTif.png';
 import logoImg from '../../assets/logodractifPNG.png';

export default function Inicial(){
    return (
        <div className="inicial-container">
            <section className="form">
                <img src={letreiroDracTifImg} alt="DracFit"/>

                <form>
                    <h1>Seja bem vindo!</h1>   
                    <Link className="button" to="/menu">Acessar o sistema</Link>                            
                </form>
            </section>

            <img src={logoImg} alt="logo"/>
            
            

        </div>
        
    );
}