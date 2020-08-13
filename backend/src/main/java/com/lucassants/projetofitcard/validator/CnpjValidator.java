package com.lucassants.projetofitcard.validator;

import com.lucassants.projetofitcard.model.Estabelecimento;

public class CnpjValidator implements Validator<Estabelecimento>{

    private static final String REGEX_CNPJ = "(^\\d{2}.\\d{3}.\\d{3}/\\d{4}-\\d{2}$)";

    @Override
    public void valida(Estabelecimento estabelecimento) throws ValidatorException {
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(REGEX_CNPJ);

        if(!p.matcher(estabelecimento.getCnpj()).matches()){
            throw new ValidatorException("CNPJ inválido.");
        }
    }
}
