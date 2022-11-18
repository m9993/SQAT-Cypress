/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Admin Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("harry@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Admin");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
  });

  // 2
  it("Validate the medicine gets added to the system, and information about the medicine is visible to the system's dashboard", () => {
    cy.get("body > div > div.card.my-4.alert-warning > div > a:nth-child(2)").click()

    cy.get('.fa').click()
    cy.get('#mname').type("Zimax-500mg")
    cy.get('#mgenre').type("antibiotic")
    cy.get('#mprice').type("abc")
    cy.get(':nth-child(4) > .form-control').select('available')
    cy.get('.btn-primary').click()
    cy.go('back')
    cy.reload()
    // verify
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(2)').should('contain','Zimax-500mg')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(3)').should('contain','antibiotic')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(4)').should('not.contain','abc').should('not.contain',0)
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(5)').should('contain','available')
  });
});
