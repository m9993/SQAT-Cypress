/// <reference types="cypress"/>

describe("Check website", () => {
  it("Checks login page", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should("eq", "Login");
  });
});
