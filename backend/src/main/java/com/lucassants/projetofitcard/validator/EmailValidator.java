package com.lucassants.projetofitcard.validator;

import com.lucassants.projetofitcard.model.Estabelecimento;
import org.junit.platform.commons.util.StringUtils;

public class EmailValidator implements Validator<Estabelecimento>{

    public static final String REGEX_EMAIL = "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$";

    @Override
    public void valida(Estabelecimento estabelecimento) throws ValidatorException {
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(REGEX_EMAIL);
        if(StringUtils.isNotBlank(estabelecimento.getEmail())){
            if(!p.matcher(estabelecimento.getEmail()).matches()){
                throw new ValidatorException("E-mail inválido.");
            }
        }
    }
}
