describe("Simple navigation test to the theatershow page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it("Tests if form if filled in correctly", () => {
        cy.get("#TheaterShow_Link").click()

        assert(cy.get('#RootDiv').contains('h1', 'Theatershow Sneed'))
    })


})
