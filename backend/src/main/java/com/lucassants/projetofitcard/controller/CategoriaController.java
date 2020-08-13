package com.lucassants.projetofitcard.controller;

import com.lucassants.projetofitcard.model.Categoria;
import com.lucassants.projetofitcard.repository.CategoriaRepository;
import com.lucassants.projetofitcard.service.CategoriaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("categorias")
public class CategoriaController {
    @Autowired
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<Categoria>> listar() {
        return ResponseEntity.ok(service.listarCategorias());
    }

    @PostMapping
    public ResponseEntity<Categoria> criar(@RequestBody Categoria categoria){
        return ResponseEntity.ok(service.criarCategoria(categoria));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> exibir(@PathVariable Integer id) {
        Optional<Categoria> categoria = service.exibirCategoria(id);
        return categoria.isPresent() ? ResponseEntity.ok(categoria.get()) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categoria> atualizar(@RequestBody Categoria categoria, @PathVariable Integer id){
        Optional<Categoria> categoriaAtualizada = service.atualizarCategoria(categoria, id);

        if(categoriaAtualizada == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(categoriaAtualizada.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity excluir(@PathVariable Integer id){
        boolean categoriaExcluida = service.excluirCategoria(id);

        return categoriaExcluida ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }


}
