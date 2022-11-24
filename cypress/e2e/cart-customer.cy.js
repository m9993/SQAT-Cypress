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

  // 16
  it("16. Validate the added medicines to the cart can be seen correctly.", () => {
    cy.wait(1500);
    cy.get(':nth-child(1) > :nth-child(6) > a > .btn').click()
    cy.get(':nth-child(1) > :nth-child(6) > a > .btn').click()
    cy.get('[href=""]').click()
    // check cart
    cy.get(':nth-child(5) > h6 > .badge').should('contain','2')
  });

  // 17
  it("17. Validate the cart is updated with the medicine and the user can see the updated quantity.", () => {
    cy.wait(1500);
    cy.get(':nth-child(1) > :nth-child(6) > a > .btn').click()
    cy.get('[href=""]').click()
    cy.wait(1500);    
    // update -> add by 1
    cy.get('[href="/medicine/addByOne/1"] > .fas').click()
    // // check cart
    cy.get('[href=""]').click()
    cy.get(':nth-child(5) > h6 > .badge').should('contain','2')
    // update -> reduce by 1
    cy.wait(1500);    
    cy.get('.ml-1 > .fas').click()
    // // check cart
    cy.get('[href=""]').click()
    cy.get(':nth-child(5) > h6 > .badge').should('contain','1')
  });

});
