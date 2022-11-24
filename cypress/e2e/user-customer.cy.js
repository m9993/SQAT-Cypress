/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Customer User Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("john@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Customer");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "John");
  });

  // // 10
  // it("10. Validate the customer profile information will be updated and the edited profile is visible.", () => {
  //   cy.wait(1500);
  //   cy.get('.mr-5').click()
  //   cy.get('#uname').clear().type("John-2")
  //   cy.wait(1500);
  //   cy.get('.btn').click()
  //   cy.go(-2)
  //   cy.reload()
  //   cy.get('.mb-5').should('contain','John-2')
  // });

  // 11
  it("11. Validate the customer can register but has to wait for the admin's approval to log into the system.", () => {
    cy.wait(1500);
    cy.get('.float-right.h6 > .text-danger').click()
    cy.get(':nth-child(4) > a').click()
    cy.get('#uname').type('Test')
    cy.get('#uphone').type('0123456789')
    cy.get('#exampleInputEmail1').type('test@test.com')
    cy.get('#exampleInputPassword1').type('123')
    cy.wait(1500);
    cy.get('.btn').click()
    cy.get('body').should('contain','Registration Successful!')
    cy.go(-2)
    cy.reload()
    cy.get('#exampleInputEmail1').type('test@test.com')
    cy.get('#exampleInputPassword1').type('123')
    cy.get('.btn').click()
    cy.get('body').should('contain',"You don't have permission to login")
  });

  // 12
  it("12. Validate the user can successfully log in to the system if the admin approves the user.", () => {
    cy.wait(1500);
    cy.get('.float-right.h6 > .text-danger').click()
    cy.get('#exampleInputEmail1').type('harry@gmail.com')
    cy.get('#exampleInputPassword1').type('123')
    cy.get('.btn').click()
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(7) > a:nth-child(1)').click()
    cy.get(':nth-child(5) > .form-control').select('valid')
    cy.wait(1500);
    cy.get('.btn').click()
    cy.get('.float-right.h6 > .text-danger').click()
    // check login after valid
    cy.get('#exampleInputEmail1').type('test@test.com')
    cy.get('#exampleInputPassword1').type('123')
    cy.wait(1500);
    cy.get('.btn').click()
    cy.get('.container.mt-5 > .mt-5').should('contain','Customer')
    cy.get('.mb-5').should('contain','Test')
  });

});
