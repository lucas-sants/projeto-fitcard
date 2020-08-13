import React, { useEffect, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { listarEstabelecimentos } from '../../service/estabelecimentoService';
import { deletarEstabelecimento } from '../../service/estabelecimentoService';

import './styles.css';

import letreiroDracTif from '../../assets/letreiroDracTif.png';
import estab from '../../assets/estab.png';

export default function Estabelecimentos(){

    const history = useHistory();

    const [estabelecimentos, setEstabelecimentos] = useState([]);
    async function listar(){
        const listarEstab = await listarEstabelecimentos();
        if(!listarEstab.error){
            setEstabelecimentos(listarEstab.data);
        }
    }
    useEffect(() => {
        
        listar();
        return setEstabelecimentos([]);
    }, []);

    async function deletarEstab(id){
        const response = await deletarEstabelecimento(id);
    
            if(!response.error){
                alert('Estabelecimento deletado.');
                listar();
                return;
            }
    
            alert(response.message);
    }


    return (
        <div className="estabelecimentos-container">
            <header>
                <img src={letreiroDracTif} alt="letreiro" />
                <span></span>

                
                <Link className="button" to="/">Voltar para o início</Link>
                
            </header>

            <center>
            <img src={estab} alt="estab" width="90px" className="imgEstab"/>
            <h1>Estabelecimentos</h1>
            <Link className="button" to="/novoEstabelecimento">Novo estabelecimento</Link></center>
            <ul>
                {estabelecimentos.map((estabelecimento) => (
                    <li key={estabelecimento.id}>
                    <p>
                    <strong> Razão Social: </strong> 
                    <span> {estabelecimento.razaoSocial} </span>
                    </p>

                    <p>
                    <strong> Nome Fantasia: </strong> 
                    <span> {estabelecimento.nomeFantasia} </span>
                    </p>

                    <p>
                    <strong> CNPJ: </strong> 
                    <span> {estabelecimento.cnpj} </span>
                    </p>

                    <p>
                    <strong> E-mail: </strong> 
                    <span> {estabelecimento.email} </span>
                    </p>

                    <p>
                    <strong> Endereço: </strong> 
                    <span> {estabelecimento.endereco} </span>
                    </p>

                    <p>
                    <strong> Cidade: </strong> 
                    <span> {estabelecimento.cidade} </span>
                    </p>

                    <p>
                    <strong> Estado: </strong> 
                    <span> {estabelecimento.estado} </span>
                    </p>

                    <p>
                    <strong> Telefone: </strong> 
                    <span> {estabelecimento.telefone} </span>
                    </p>

                    <p>
                    <strong> Data de Cadastro: </strong> 
                    <span> {estabelecimento.dataDeCadastro} </span>
                    </p>

                    <p>
                    <strong> Categoria: </strong> 
                    <span> {estabelecimento.categoria.nome} </span>
                    </p>

                    <p>
                    <strong> Status: </strong> 
                    <span> {estabelecimento.status} </span>
                    </p>

                    <p>
                    <strong> Agência : </strong> 
                    <span> {estabelecimento.agencia} </span>
                    </p>

                    <p>
                    <strong> Conta: </strong> 
                    <span> {estabelecimento.conta} </span>
                    </p>
                    
                    <div className="botoes">
                        <button onClick={() => {
                            history.push({pathname:'/atualizarEstabelecimento', state:{estabelecimento}});
                        }} type="button">
                        <span>Atualizar</span>
                        </button>
                        
                        <button onClick={() => deletarEstab(estabelecimento.id)} type="button">
                        <span>Deletar</span>
                        </button>
                    </div>
                   
                </li>
                ))}
                
                
            </ul>
        </div>
    );
}