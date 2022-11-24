/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Admin Order Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("harry@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Admin");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
  });

  // 13
  it("13. Validate the order history is visible on the admin's dashboard.", () => {
    cy.wait(1500);
    cy.get('[href="/order/vorder/adminOrder"]').click()
    cy.get('.thead-dark > tr > :nth-child(4)').should('contain', 'Payment Method')
  });

  // 14
  it("14. Validate the approve/ reject order and the status is shown on the dashboard.", () => {
    cy.wait(1500);
    cy.get('[href="/order/vorder/adminOrder"]').click()
    cy.get('.thead-dark > tr > :nth-child(5)').should('contain', 'Status')
  });

});
