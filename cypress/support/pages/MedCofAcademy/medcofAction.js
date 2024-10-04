import { ELEMENTS } from "./elements.js";

export class MedCofAcademy {
  validaEDirecionaParaAcessarConteudo() {
    cy.url().should("include", "/medcof-academy/");

    cy.get(ELEMENTS.logMedCofAcademy).should("be.visible");
    cy.get(ELEMENTS.acessarGratuitamente)
      .eq(1)
      .invoke("attr", "target", "_self")
      .click();
  }
}
