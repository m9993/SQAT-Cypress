/// <reference types="cypress"/>
// cy.get('body > div > table > tbody > tr:last-child > td:nth-child(6) > a:nth-child(1)').click()

describe("Admin User Functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#exampleInputEmail1").type("harry@gmail.com");
    cy.get("#exampleInputPassword1").type("123");
    cy.wait(500);
    cy.get("body > div > form > a > button").click();
    cy.title().should("eq", "Admin");
    cy.get("body > div > h4.mb-5.d-inline").should("contain", "Harry");
  });

  // 6
  it("6. Validate the admin profile information will be updated and the edited profile is visible.", () => {
    cy.wait(1500);
    cy.get('.mr-5').click()
    cy.get('#uname').clear().type("Harry-2")
    cy.wait(1500);
    cy.get('.btn').click()
    cy.reload()
    cy.get('.mb-5').should('contain','Harry-2')
  });

  // 7
  it("7. Validate the user list is visible on the admin's dashboard.", () => {
    cy.wait(1500);
    cy.get('.thead-dark > tr > :nth-child(2)').should('contain', 'Name')
  });

  // 8
  it("8. Validate the user information is updated and the edited user information is visible to the admin.", () => {
    cy.wait(1500);
    cy.get('[colspan="2"] > [href="/user/edit/admin/1"] > .fas').click()
    cy.get('#uname').clear().type('Harry')
    cy.get('#uphone').clear().type('01712345678')
    cy.wait(1500);
    cy.get('.btn').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain','Harry')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain','01712345678')
  });

  // 9
  it("9. Validate the user removal operation and the list is updated after the removal.", () => {
    cy.wait(1500);
    // add user
    cy.get('.fa').click()
    cy.get('#uname').type("Test")
    cy.get('#uphone').type("+88 01712345678")
    cy.get('#exampleInputEmail1').type("test@test.com")
    cy.get('#exampleInputPassword1').type('123')
    cy.wait(1500);
    cy.get('.btn').click()
    cy.go(-2)
    cy.reload()
    cy.wait(1500);
    // remove and test
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(7) > a:nth-child(2)').click()
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(2)').should('not.contain', "Test")
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(3)').should('not.contain', '+88 01712345678')
    cy.get('body > div > table > tbody > tr:last-child > td:nth-child(4)').should('not.contain', "test@test.com")
  });

});
