describe("Testing our form inputs", function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000/pizza')
    })
    it('add text to textarea', function(){{
        cy.get('[data-cy=instructions]').type("Testing Text Out")
    }})
    it('click on multiple sauces', function(){{
        cy.get('[data-cy=checkbox1]').check().should('be.checked')
    }})
    it('click on multiple sauces', function(){{
        cy.get('[data-cy=checkbox2]').check().should('be.checked')
    }})
    it('click on multiple sauces', function(){{
        cy.get('[data-cy=checkbox3]').check().should('be.checked')
    }})
    it('click on multiple sauces', function(){{
        cy.get('[data-cy=checkbox4]').check().should('be.checked')
    }})
    it('tests form submit', function(){{
        cy.get('[data-cy=submit]').submit
    }})
})