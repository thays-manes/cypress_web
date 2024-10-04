import { ELEMENTS } from "./elements.js";

export class Academy {
  criaCadastro(nome, email, celular) {
    cy.url().should("eq", "https://academy.grupomedcof.com.br/auth/cadastrar");
    cy.get(ELEMENTS.inputNome).type(nome);
    cy.get(ELEMENTS.inputEmail).type(email);
    cy.get(ELEMENTS.inputCelular).type(celular);
    cy.get(ELEMENTS.btnCriarConta).click();
    cy.log(ELEMENTS.txtConfirmacao);
    cy.get(ELEMENTS.txtConfirmacao)
      .invoke("text")
      .should(
        "eq",
        `\nSeja bem vindo ${nome}!Sua senha de acesso foi enviada para o seu e-mail: ${email}\n`
      );
  }
}
