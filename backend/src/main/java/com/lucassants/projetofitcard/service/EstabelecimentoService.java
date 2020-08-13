package com.lucassants.projetofitcard.service;

import com.lucassants.projetofitcard.model.Estabelecimento;
import com.lucassants.projetofitcard.repository.EstabelecimentoRepository;
import com.lucassants.projetofitcard.validator.*;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class EstabelecimentoService {


    @Autowired
    private ApplicationContext applicationContext;


    @Autowired
    private EstabelecimentoRepository repo;

    private List<Validator> getRegras() {
        return Arrays.asList(
                new RazaoSocialValidator(),
                new CnpjValidator(),
                new EmailValidator(),
                applicationContext.getBean(CategoriaValidator.class));
    }

    public List<Estabelecimento> listarEstabelecimentos() {
        return repo.findAll();
    }

    public Estabelecimento criarEstabelecimento(Estabelecimento estabelecimento) throws Exception {
        for (Validator regra : getRegras()) {
            regra.valida(estabelecimento);
        }

        return repo.save(estabelecimento);
    }

    public Optional<Estabelecimento> exibirEstabelecimento(Integer id) {
        return repo.findById(id);
    }

    public Optional<Estabelecimento> atualizarEstabelecimento(Estabelecimento estabelecimento, Integer id) throws Exception{
        Optional<Estabelecimento> buscaEstabelecimento = exibirEstabelecimento(id);

        if (!buscaEstabelecimento.isPresent()) {
            return null;
        }

        Estabelecimento novoEstabelecimento = buscaEstabelecimento.get();
        BeanUtils.copyProperties(estabelecimento, novoEstabelecimento, "id");
        return Optional.of(criarEstabelecimento(novoEstabelecimento));
    }

    public boolean excluirEstabelecimento(Integer id) {
        Optional<Estabelecimento> buscaEstabelecimento = exibirEstabelecimento(id);

        if (!buscaEstabelecimento.isPresent()) {
            return false;
        }

        repo.delete(buscaEstabelecimento.get());
        return true;
    }
}
