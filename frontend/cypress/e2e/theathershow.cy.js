import {addDays} from "date-fns";

describe("Theater Show Form", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/sneed")
  })

  let dateSelect = String(addDays(new Date(), 5).getDate());

  it("Tests if form if filled in correctly", () => {
    cy.get("#email").type('test@live.nl')
    cy.get("#aantal").type(`5`)

    cy.get('button').contains(`${dateSelect}`).click();

    cy.get('#submitButton').click();

    cy.intercept({
      method : 'POST',
      url : 'http://localhost:8000/boek',
    }, [])
  })


})
