package com.lucassants.projetofitcard.validator;

import com.lucassants.projetofitcard.model.Categoria;
import com.lucassants.projetofitcard.model.Estabelecimento;
import com.lucassants.projetofitcard.repository.CategoriaRepository;
import org.junit.platform.commons.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoriaValidator implements Validator<Estabelecimento> {

    @Autowired
    CategoriaRepository repo;

    @Override
    public void valida(Estabelecimento estabelecimento) throws ValidatorException {
        Categoria categ = repo.findByNome("Supermercado");
        if(estabelecimento.getCategoria().getId().equals(categ.getId())){
            if(StringUtils.isBlank(estabelecimento.getTelefone())){
                throw new ValidatorException("O Telefone deve ser preenchido.");
            }
        }
    }
}
