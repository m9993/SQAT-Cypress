/// <reference types="cypress"/>

describe("Check customer login", () => {
  it("Checks login page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("john@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Customer");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
  });
});
