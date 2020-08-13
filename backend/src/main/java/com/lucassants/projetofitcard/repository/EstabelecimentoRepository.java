package com.lucassants.projetofitcard.repository;

import com.lucassants.projetofitcard.model.Estabelecimento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EstabelecimentoRepository extends JpaRepository <Estabelecimento, Integer> {
    
}
