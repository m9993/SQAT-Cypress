/// <reference types="cypress"/>

describe("Check authentication", () => {
  it("Validate admin authentication", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("harry@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(1500)
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Admin");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
    cy.wait(1500)
    cy.get('.float-right > .text-danger').click()
  });
  
  
  it("Validate customer authentication", () => {
    cy.wait(2000)
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("john@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(1500)
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Customer");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "John");
    cy.wait(1500)
    cy.get('.float-right > .text-danger').click()
  });
});
