/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
describe('Home Reserva DEV', () => {
    it('Hacer reserva', () => {
      cy.visit('https://staging.differentroads.co/')
      cy.wait(1000)
      cy.aceptarCookies()
      cy.wait(1000)
      cy.title().should('eq','Viajes organizados y tours - Different Roads')
      cy.log("Es el title")
      cy.get('[data-index="1"] > :nth-child(1) > .mx-4 > .card-content > [data-cy="false"] > .tour-grid > .p-2 > .justify-between > :nth-child(2) > .border').click()
      cy.contains('El viaje incluye').should('be.visible')
      cy.get('[data-cy="adults-input"]').clear()
      cy.get('[data-cy="adults-input"]').type('1')//cant adultos
      cy.get(':nth-child(2) > .react-numeric-input > .number-form').clear
      cy.get(':nth-child(2) > .react-numeric-input > .number-form').type('0') //cant niños
      cy.wait(1000)
      
      cy.get('[data-cy="reserve"]').click()
      cy.wait(1000)
      cy.contains('Selecciona las habitaciones').should('be.visible')
      cy.get('[data-cy="Individual"]').type('1')//cant camas
      cy.wait(1000)
      cy.get('.p-6 > .text-xl').click()

      //formulario
      cy.get('input[name=name]').type('Test') //nombre
      cy.get('input[name=surname]').type('Test Vel') // apellido
      cy.get('select[name=sex]').select('Hombre')//.should('have.value','Hombre')//.tab().type('11145555E') // sexo
      cy.wait(1000)
      cy.get('input[name=dni]').type('11145555E') //dni
      cy.get('input[name=email]').type('test@gmail.com')  //email
      cy.get('input[name=phone]').type('5559898911') //télefono
      cy.get('.checkbox').click()
      cy.get('.col-span-2 > .opacity-100').click()
      cy.wait(8000)
      cy.contains('Selecciona la forma de pago').should('be.visible')
      cy.wait(2000)
      cy.get('#headlessui-radiogroup-option-10 > :nth-child(1) > label > .bg-white').click()
      cy.wait(6000)
     // cy.get('[data-cy="pay-button"]').should('be.visible')
      cy.get('.flex > .bg-secondary').click()
      cy.wait(10000)
      cy.contains('Tu número de reserva es:').should('be.visible')


    })
})