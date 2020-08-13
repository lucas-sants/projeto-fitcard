package com.lucassants.projetofitcard.repository;

import com.lucassants.projetofitcard.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository <Categoria, Integer> {
    Categoria findByNome(String nome);
}
