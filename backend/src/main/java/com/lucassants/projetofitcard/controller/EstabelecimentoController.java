package com.lucassants.projetofitcard.controller;

import com.lucassants.projetofitcard.model.Categoria;
import com.lucassants.projetofitcard.model.ErrorResponse;
import com.lucassants.projetofitcard.model.Estabelecimento;
import com.lucassants.projetofitcard.repository.EstabelecimentoRepository;
import com.lucassants.projetofitcard.service.EstabelecimentoService;
import com.lucassants.projetofitcard.validator.ValidatorException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("estabelecimentos")
public class EstabelecimentoController {
    @Autowired
    private EstabelecimentoService service;

    @GetMapping
    public ResponseEntity<List<Estabelecimento>> listar(){
        return ResponseEntity.ok(service.listarEstabelecimentos());
    }

    @PostMapping
    public ResponseEntity criar (@RequestBody Estabelecimento estabelecimento){
        ResponseEntity response;

        try{
            response = ResponseEntity.ok(service.criarEstabelecimento(estabelecimento));
        } catch (Exception error){
            response = ResponseEntity.unprocessableEntity().body(new ErrorResponse(error.getMessage()));
        }

        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estabelecimento> exibir(@PathVariable Integer id) {
        Optional<Estabelecimento> estabelecimento = service.exibirEstabelecimento(id);
        return estabelecimento.isPresent() ? ResponseEntity.ok(estabelecimento.get()) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Estabelecimento> atualizar(@RequestBody Estabelecimento estabelecimento, @PathVariable Integer id){
        ResponseEntity response;

        try{
            Optional<Estabelecimento> estabelecimentoAtualizado = service.atualizarEstabelecimento(estabelecimento, id);

            if(!estabelecimentoAtualizado.isPresent()){
                return ResponseEntity.notFound().build();
            }
            response = ResponseEntity.ok(estabelecimentoAtualizado.get());
        } catch (Exception error){
            response = ResponseEntity.unprocessableEntity().body(new ErrorResponse(error.getMessage()));
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity excluir(@PathVariable Integer id){
        boolean estabelecimentoExcluido = service.excluirEstabelecimento(id);

        return estabelecimentoExcluido ?  ResponseEntity.noContent().build() : ResponseEntity.notFound().build();

    }
}
