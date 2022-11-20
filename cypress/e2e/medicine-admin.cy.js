/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Admin Medicine Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("harry@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Admin");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
  });

  // 1
  it("1. Validate all the medicines are visible to the admin in their dashboard.", () => {
    cy.wait(1500);
    cy.get("body > div > div.card.my-4.alert-warning > div > a:nth-child(2)").click()
    cy.get('.thead-dark > tr > :nth-child(2)').should('contain', 'Name')
  });

  // 2
  it("2. Validate the medicine gets added to the system, and information about the medicine is visible to the system's dashboard", () => {
    cy.wait(1500);
    cy.get("body > div > div.card.my-4.alert-warning > div > a:nth-child(2)").click()
    // inputs
    cy.get('.fa').click()
    cy.get('#mname').type("Zimax-500mg")
    cy.get('#mgenre').type("antibiotic")
    cy.get('#mprice').type("abc")
    cy.get(':nth-child(4) > .form-control').select('available')
    cy.wait(1500);
    cy.get('.btn-primary').click()
    cy.go('back')
    cy.reload()
    cy.wait(1500);
    // verify
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(2)').should('contain','Zimax-500mg')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(3)').should('contain','antibiotic')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(4)').should('not.contain','abc').should('not.contain',0)
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(5)').should('contain','available')
  });

  // 3
  it("3. Validate the medicine information gets updated and the updated information is visible to the system's dashboard.", () => {
    cy.wait(1500);
    cy.get("body > div > div.card.my-4.alert-warning > div > a:nth-child(2)").click()
    // inputs
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()
    cy.get('#mname').clear().type("Medicine-1")
    cy.get('#mgenre').clear().type("G-1")
    cy.get('#mprice').clear().type("45")
    cy.get(':nth-child(4) > .form-control').select('not available')
    cy.wait(1500);
    cy.get('.btn').click()
    cy.go(-2)
    cy.reload()
    cy.wait(1500);
    // verify
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(2)').should('contain','Medicine-1')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(3)').should('contain','G-1')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(4)').should('contain','45')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(5)').should('contain','not available')
  });

  // 4
  it("4. Validate the medicine information gets deleted and the medicine cannot be found in the system", () => {
    cy.wait(1500);
    cy.get("body > div > div.card.my-4.alert-warning > div > a:nth-child(2)").click()
    cy.wait(1500);
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(2)').click()
    cy.get('body').should('contain', 'Deleted Successfully!')
    cy.go(-1)
    cy.reload()
  });
});
