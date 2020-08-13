package com.lucassants.projetofitcard.validator;

import com.lucassants.projetofitcard.model.Categoria;
import com.lucassants.projetofitcard.model.Estabelecimento;
import com.lucassants.projetofitcard.repository.CategoriaRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertThrows;

@RunWith(MockitoJUnitRunner.class)
public class ValidatorTest {

    @InjectMocks
    CategoriaValidator categoriaValidator;
    @Mock
    CategoriaRepository categoriaRepository;

    @Test
    public void testCategoriaInvalida() throws ValidatorException {
        Categoria categoria = new Categoria();
        categoria.setId(2);
        categoria.setNome("Supermercado");
        when(categoriaRepository.findByNome("Supermercado")).thenReturn(categoria);
        Estabelecimento estabelecimento = new Estabelecimento();
        estabelecimento.setCategoria(categoria);

        assertThrows(ValidatorException.class, () -> {categoriaValidator.valida(estabelecimento);});
    }

    @InjectMocks
    CnpjValidator cnpjValidator;

    @Test
    public void testCnpjInvalido() throws ValidatorException {
        Estabelecimento estabelecimento = new Estabelecimento();
        estabelecimento.setCnpj("94.141.040/0001-05");

        Estabelecimento estabelecimentoCnpjInvalido = new Estabelecimento();
        estabelecimentoCnpjInvalido.setCnpj("1");

        assertThrows(ValidatorException.class, () -> cnpjValidator.valida(estabelecimentoCnpjInvalido));
    }

    @InjectMocks
    EmailValidator emailValidator;

    @Test
    public void testEmailInvalido() throws ValidatorException {
        Estabelecimento estabelecimento = new Estabelecimento();
        estabelecimento.setEmail("email@test.com");

        Estabelecimento estabelecimentoEmailInvalido = new Estabelecimento();
        estabelecimentoEmailInvalido.setEmail("emailInvalido");

        assertThrows(ValidatorException.class, () -> emailValidator.valida(estabelecimentoEmailInvalido));
    }

    @InjectMocks
    RazaoSocialValidator razaoSocialValidator;

    @Test
    public void testRazaoSocial() throws ValidatorException {
        Estabelecimento estabelecimento = new Estabelecimento();
        estabelecimento.setRazaoSocial("Razao Social Teste");

        Estabelecimento estabelecimentoRazaoInvalida = new Estabelecimento();
        estabelecimentoRazaoInvalida.setRazaoSocial(null);

        assertThrows(ValidatorException.class, () -> razaoSocialValidator.valida(estabelecimentoRazaoInvalida));

    }
}
