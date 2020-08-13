package com.lucassants.projetofitcard.validator;

import com.lucassants.projetofitcard.model.Estabelecimento;
import org.junit.platform.commons.util.StringUtils;

public class RazaoSocialValidator implements Validator<Estabelecimento>{

    @Override
    public void valida(Estabelecimento estabelecimento) throws ValidatorException {
        if(StringUtils.isBlank(estabelecimento.getRazaoSocial())){
            throw new ValidatorException("O campo Razão Social deve ser preenchido.");
        }
    }
}
