package com.lucassants.projetofitcard.validator;

public interface Validator <T>{

    void valida(T objeto) throws ValidatorException;
}
