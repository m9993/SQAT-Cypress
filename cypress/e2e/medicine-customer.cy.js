/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Customer Medicine Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("john@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Customer");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "John");
  });

  // 5
  it("5. Validate the search result shows to the customer if the medicine is available in the stock and the add to cart option appears.", () => {
    cy.wait(1500);
    cy.get('#mSearchKey').type("Paracitamol")
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(3)').should('contain','Paracitamol')
  });

});
