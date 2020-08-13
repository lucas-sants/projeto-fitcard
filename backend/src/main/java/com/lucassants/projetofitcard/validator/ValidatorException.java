package com.lucassants.projetofitcard.validator;

import javax.xml.validation.Validator;

public class ValidatorException extends Exception {

    public ValidatorException(String message) {
        super(message);
    }
}
