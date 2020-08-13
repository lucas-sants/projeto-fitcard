import React, {useState, useEffect} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { atualizarCategoria } from '../../service/categoriaService';

import './styles.css';

import letreiroDracTif from '../../assets/letreiroDracTif.png';

export default function AtualizarCategoria() {
    
    const {state} = useLocation();
    const {categoria} = state;
    const history = useHistory();

    const [nome, setNome] = useState(categoria.nome || "");

    async function atualizarCateg(){
        const response = await atualizarCategoria({id:categoria.id, nome});

            if(!response.error){
                alert('Atualizada com sucesso.');
                history.push('/categorias');
                return;
            }

            alert(response.message);
    }
    
    return (

        <div className="novaCategoria-container">
        
        <div className="content">

            <form> 
            <center><img src={letreiroDracTif} alt="letreiro"/></center>
            <h1 align="center">Atualizar Categoria</h1>
               <input value={nome} onChange={(event) => {setNome(event.target.value)}} placeholder="Nome" />
                <div>
                </div>

                
            </form>
            <button className="button" onClick={atualizarCateg}>Atualizar</button>

                <Link className="button" to="/categorias">
                Voltar
            </Link>
        </div>

    </div>
);
    
}