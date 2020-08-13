package com.lucassants.projetofitcard.model;

public class ErrorResponse {
    private String mensagem;

    public ErrorResponse(String mensagem){
        String errorMessage = mensagem.contains("razao_social") ? "Razão Social já existe.":mensagem;
        this.mensagem = errorMessage;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
