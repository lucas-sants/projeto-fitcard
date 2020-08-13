import api from './api';

export async function listarCategorias(){
    const response = await api.get('/categorias');
    if(response.status !== 200){
        return {error:true}
    }

    return {error:false, data:response.data}
}

export async function criarCategoria(categoria){
    console.log('service', categoria);
    try{
    const response = await api.post('/categorias', categoria);
    
    return {error:false, data:response.data}
    }
    catch(e){
        return {error:true, message:e.response.data.mensagem}
    }
}

export async function deletarCategoria(id){
    
    try{
    const response = await api.delete(`categorias/${id}`);
    
    return {error:false, data:response.data}
    }
    catch(e){
        return {erro:true, message:e.response.data.mensagem}
    }
}

export async function atualizarCategoria(categoria){
    try{
    const response = await api.put(`categorias/${categoria.id}`, categoria);
    
    return {error:false, data:response.data}
    }
    catch(e){
        return {erro:true, message:e.response.data.mensagem}
    }
}