Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("button", (element, textElement, textButton) => {
  cy.get(element).contains(textElement);
  cy.contains(textButton).click();
});
