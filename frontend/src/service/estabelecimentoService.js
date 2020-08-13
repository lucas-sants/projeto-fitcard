import api from './api';

export async function listarEstabelecimentos(){
    const response = await api.get('/estabelecimentos');
    if(response.status != 200){
        return {error:true}
    }

    return {error:false, data:response.data}
}

export async function criarEstabelecimento(estabelecimento){
    console.log('service', estabelecimento);
    try{
    const response = await api.post('/estabelecimentos', estabelecimento);
    
    return {error:false, data:response.data}
    }
    catch(e){
        return {error:true, message:e.response.data.mensagem}
    }
}

export async function deletarEstabelecimento(id){
    
    try{
    const response = await api.delete(`estabelecimentos/${id}`);
    
    return {error:false, data:response.data}
    }
    catch(e){
        return {erro:true, message:e.response.data.mensagem}
    }
}

export async function atualizarEstabelecimento(estabelecimento){
    console.log('SERVICE', estabelecimento);
    try{
    const response = await api.put(`estabelecimentos/${estabelecimento.id}`, estabelecimento);
    
    return {error:false, data:response.data}
    }
    catch(e){
        return {erro:true, message:e.response.data.mensagem}
    }
}

