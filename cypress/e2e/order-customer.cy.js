/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Customer Order Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("john@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.get('.mt-5.text-danger').should('contain','Customer')
    // cy.title().should("eq", "Cutomer");
    // cy.get("body > div > h4.mb-5.d-inline").should("contain", "John");
  });

  // 15
  it("15. Validate the order list is visible on the customer's dashboard.", () => {
    cy.wait(1500);
    cy.get('[href="/order/vorder/customerOrder"]').click()
    cy.get('.thead-dark > tr > :nth-child(4)').should('contain', 'Payment Method')
  });

});
