/// <reference types="cypress"/>

describe("Check admin login", () => {
  it("Checks login page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("harry@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Admin");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
  });
});
