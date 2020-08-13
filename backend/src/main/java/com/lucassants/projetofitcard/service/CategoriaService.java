package com.lucassants.projetofitcard.service;

import com.lucassants.projetofitcard.model.Categoria;
import com.lucassants.projetofitcard.model.Estabelecimento;
import com.lucassants.projetofitcard.repository.CategoriaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository repo;

    public List<Categoria> listarCategorias(){
        return repo.findAll();
    }

    public Categoria criarCategoria(Categoria categoria){
        return repo.save(categoria);
    }

    public Optional<Categoria> exibirCategoria(Integer id){
        return repo.findById(id);
    }

    public Optional<Categoria> atualizarCategoria(Categoria categoria, Integer id){
        Optional<Categoria> buscaCategoria = exibirCategoria(id);

        if(!buscaCategoria.isPresent()){
            return null;
        }

        Categoria novaCategoria = buscaCategoria.get();
        BeanUtils.copyProperties(categoria, novaCategoria, "id");
        return Optional.of(criarCategoria(novaCategoria));
    }

    public boolean excluirCategoria(Integer id){
        Optional<Categoria> buscaCategoria = exibirCategoria(id);

        if(!buscaCategoria.isPresent()){
            return false;
        }

        repo.delete(buscaCategoria.get());
        return true;
    }


}
