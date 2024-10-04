import { ELEMENTS } from "./elements.js";


export class HomePage {
  validarPaginaInicialCarregada() {
    cy.get(ELEMENTS.iconesMenu).should("be.visible");
    cy.get(ELEMENTS.sectionAprovados).should("be.visible");
    cy.get(ELEMENTS.sectionCursos).should("be.visible");

    cy.get(ELEMENTS.menuConteudos).should("be.visible");
  }

  clicaLinkMdCofAcademy() {
    cy.get(ELEMENTS.menuConteudos).click();
    cy.get(ELEMENTS.txtMedCofAcademy).invoke('text').should("eq", "MedCof Academy");
    cy.get(ELEMENTS.linkMedCofAcademy)
    .invoke("attr", "target", "_self")
    .click();
  }
}
