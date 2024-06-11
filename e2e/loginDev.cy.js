/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
import variablesPage from "./variables";
describe('POM implementation',()=>{
  let tiempo=2000
       before(()=>{
        cy.visit('https://staging.differentroads.co/login')
        cy.wait(1000)
        cy.aceptarCookies()
        cy.wait(3000)
     
    })
  
    it('Login Sara',()=>{     
      
      //cy.get('.login-area').click(0,0)
      cy.get('input[name=email]').type('sbermudez@differentroads.co') //email
      
        cy.wait(tiempo)
        cy.get('input[name=password]').type('123456789')//pass;
        cy.get('.form > .btn-primary').click()
        cy.wait(tiempo)
        cy.wait(4000)
        cy.clearLocalStorage()
        cy.title().should('eq','Viajes organizados y tours - Different Roads')
        cy.log("Es el title")
        

   //})
   //it('Reserva',function(){     
      
      cy.wait(8000)
      cy.get('.gap-6 > .recommended').scrollIntoView()
      cy.get('[data-index="1"] > :nth-child(1) > .mx-4 > .card-content > [data-cy="false"] > .tour-grid > .p-2 > .justify-between > :nth-child(2) > .border').click() //select tour
      cy.contains('Highlights').should('be.visible')
      //cy.get('#pick-date > :nth-child(1) > .grid-rows-1 > .grid').scrollIntoView()
      cy.get('.css-5auhse-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
      cy.get('.css-ci16j1-container').contains('17 de julio (S)').click()
      variablesPage.typePersonalizaSingle()
      variablesPage.typeDatoPasajero('Test Cinco','Prueba de Mayo','45145545E','test@gmail.com','3015858910')
      cy.wait(tiempo)
      cy.contains('Pago').should('be.visible')
      variablesPage.typeMedioPago()

      
    })

})