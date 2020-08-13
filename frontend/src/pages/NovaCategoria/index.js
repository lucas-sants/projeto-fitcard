import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import { criarCategoria } from '../../service/categoriaService';

import './styles.css';

import letreiroDracTif from '../../assets/letreiroDracTif.png';

export default function NovaCategoria() {

    const history = useHistory();

    const [nome, setNome] = useState("");

    async function criarCateg(){
        const response = await criarCategoria({nome});

            if(!response.error){
                alert('Criada com sucesso.');
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
            <h1 align="center">Cadastrar nova Categoria</h1>
               <input value={nome} onChange={(event) => {setNome(event.target.value)}} placeholder="Nome" />

                <div>
                </div>

                
            </form>
            <button className="button" onClick={criarCateg}>Criar</button>

                <Link className="button" to="/categorias">
                Voltar
            </Link>
        </div>

    </div>
);
    
}