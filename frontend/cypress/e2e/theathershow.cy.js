import {addDays} from "date-fns";

describe("Theater Show Form", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/sneed")

    const today = new Date();
    const month = addDays(new Date(), 14)
    const s = `${today.getFullYear()}-${parseInt(today.getMonth() + 1)}-${today.getDate()}`
    const e = `${month.getFullYear()}-${parseInt(month.getMonth() + 1)}-${month.getDate()}`

    cy.intercept(`https://localhost:8001/GetFullDates/${s}to${e}`, {today})
        .as("FetchDates")
  })

  let dateSelect = String(addDays(new Date(), 2).getDate());
  let email = 'test@live.nl';
  let count = '1'

  it("Checks if email is a valid email address", () =>{
    cy.get("#email").type("test")
    cy.get("#aantal").type(count)

    cy.get('button').contains(`${dateSelect}`).click();

    cy.get('#submitButton').click();

    assert(cy.get('#RootDiv').contains('p', "Please enter a valid email address"));
  });

  it("Checks if the count is a valid number", () =>{
    cy.get("#email").type(email)
    cy.get("#aantal").type("e")

    cy.get('button').contains(`${dateSelect}`).click();

    cy.get('#submitButton').click();

    assert(cy.get('#RootDiv').contains('p', "Please enter a number below 10 and above 0"));
  });

  it("Tests if form if filled in correctly", () => {
    cy.get("#email").type(email)
    cy.get("#aantal").type(count)

    cy.get('button').contains(`${dateSelect}`).click();

    cy.get('#submitButton').click();

    cy.intercept('POST' ,'https://localhost:8001/boek', (req) => {
      req.reply({
        statusCode: 201,
        body : {email : email, date : new Date(), count : count}
      })
    }).as('Boeking');

    cy.wait('@Boeking').its('response.statusCode').should('eq' , 201);

    cy.get('#ReservationInfo').contains('p' , email)
    cy.get('#ReservationInfo').contains('p' , count)
  })

})
