import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import { criarEstabelecimento } from '../../service/estabelecimentoService';

import './styles.css';
import { cnpjMask, phoneMask, agenciaMask, contaMask, dataMask} from '../../masks'

import letreiroDracTif from '../../assets/letreiroDracTif.png';
import { listarCategorias } from '../../service/categoriaService';

export default function NovoEstabelecimento() {

    const history = useHistory();
    
    useEffect(() => {
        async function carregarCategorias(){
            const response = await listarCategorias();
            if(!response.error){
                const categoriasOrdenadas = response.data.sort((a, b) => (a.id> b.id) ? 1 : -1)
                setCategorias(categoriasOrdenadas)
                setCategoria(categoriasOrdenadas[0].nome)
            }
        }
        carregarCategorias();
        return setCategorias([]);
    }, []);


    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataDeCadastro, setDataDeCadastro] = useState("");
    const [categoria, setCategoria] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [status, setStatus] = useState('Ativo');
    const [agencia, setAgencia] = useState("");
    const [conta, setConta] = useState("");

    async function criarEstab(){              

          if(dataDeCadastro.length > 0) {
          const splittedData = dataDeCadastro.split("/")

          if(splittedData.length < 3 || splittedData[2].length < 4){
              alert('Data inválida.')
              return
          }         
          
          const isoDate = `${splittedData[2]}-${splittedData[1]}-${splittedData[0]}`

          if(!isValidDate(new Date(isoDate))){
            alert('Data inválida.')
            return
          }
        }


        const response = await criarEstabelecimento({razaoSocial, cnpj, email, endereco, cidade, estado, telefone, 
            dataDeCadastro, categoria:categorias.find(cat => cat.nome === categoria), status, agencia, conta});

            if(!response.error){
                alert('Criado com sucesso.');
                history.push('/estabelecimentos');
                return;
            }

            alert(response.message);
    }

    function handleChange(event) {
        const categoriaSelecionada = event.target.value
        setCategoria(categoriaSelecionada)
    
        categorias.find(cat => cat.nome === categoriaSelecionada)
    
      }

    function isValidDate(d) {
     return d instanceof Date && !isNaN(d);
    }
    
    return (
            
        <div className="novoEstabelecimento-container">
        <div className="content">

            <form> 
            <center><img src={letreiroDracTif} alt="letreiro"/></center>
            <h1 align="center">Cadastrar novo Estabelecimento</h1>
               <input value={razaoSocial} onChange={(event) => {setRazaoSocial(event.target.value)}} placeholder="Razão Social" />
               <input value={cnpj} onChange={(event) => {setCnpj(event.target.value)}} placeholder="CNPJ" value={cnpjMask(cnpj)}/>
               <input value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" placeholder="E-mail" />
               <input value={endereco} onChange={(event) => {setEndereco(event.target.value)}} placeholder="Endereço" />
               <input value={cidade} onChange={(event) => {setCidade(event.target.value)}} placeholder="Cidade" />
               <input value={estado} onChange={(event) => {setEstado(event.target.value)}} placeholder="Estado" />
               <input value={telefone} onChange={(event) => {setTelefone(event.target.value)}} placeholder="Telefone" value={phoneMask(telefone)}/>
               <input value={dataDeCadastro} onChange={(event) => {setDataDeCadastro(event.target.value)}} placeholder="Data de Cadastro" value={dataMask(dataDeCadastro)} maxLength="10"/>
               <input value={agencia} onChange={(event) => {setAgencia(event.target.value)}} placeholder="Agência" value={agenciaMask(agencia)}/>
               <input value={conta} onChange={(event) => {setConta(event.target.value)}} placeholder="Conta" value={contaMask(conta)}/>
               <select value={categoria} onChange={handleChange}>
                    {categorias.map((categoria) => (
                    <option value={categoria.nome}>{categoria.nome}</option>
                    ))}
                </select>

                <select value={status} onChange={(event) => {setStatus(event.target.value)}}>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>

                <div>
                </div>

                
            </form>

            <button className="button" onClick={criarEstab}>Cadastrar</button>

                <Link className="button" to="/estabelecimentos">
                Voltar
            </Link>
        </div>

    </div>
);
    
}