import React, { useEffect, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { listarCategorias } from '../../service/categoriaService';
import { deletarCategoria } from '../../service/categoriaService';

import './styles.css';

import letreiroDracTif from '../../assets/letreiroDracTif.png';
import estab from '../../assets/estab.png';
import categImg from '../../assets/categorias.png';

export default function Categorias(){

    const history = useHistory();

    const [categorias, setCategorias] = useState([]);
    async function listar(){
        const listarCateg = await listarCategorias();
        if(!listarCateg.error){
            setCategorias(listarCateg.data);
        }
    }
    useEffect(() => {
        
        listar();
        return setCategorias([]);
    }, []);

    async function deletarCateg(id){
        const response = await deletarCategoria(id);
    
            if(!response.error){
                alert('Categoria deletada.');
                listar();
                return;
            }
    
            alert(response.message);
    }


    return (
        <div className="categorias-container">
            <header>
                <img src={letreiroDracTif} alt="letreiro" />
                <span></span>

                <Link className="button" to="/">Voltar para o início</Link>
                
            </header>

            <center>
            <img src={categImg} alt="categImg" width="130px" className="categImg"/>
            <h1>Categorias</h1>
            <Link className="button" to="/novaCategoria">Nova categoria</Link></center>
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria.id}>
                    <p>
                    <strong> Nome da Categoria: </strong> 
                    <span> {categoria.nome} </span>
                    </p>

                    <div className="botoes">
                    <button onClick={() => {
                        history.push({pathname:'/atualizarCategoria', state:{categoria}});
                    }} className="button" type="button">
                    Atualizar
                    </button>
                    
                    <button onClick={() => deletarCateg(categoria.id)} className="button" type="button">
                    Deletar
                    </button>
                    </div>
                   
                </li>
                ))}
                
                
            </ul>
        </div>
    );
}