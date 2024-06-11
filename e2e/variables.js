class variablesPage{
    elements={
        nombre: ()=> cy.get('input[name=name]'),
        apellido:()=> cy.get('input[name=surname]'),
        dni:()=> cy.get('input[name=dni]'),
        email: ()=> cy.get('input[name=email]'),
        telefono: ()=> cy.get('input[name=phone]'),
        Sexo:()=>cy.get('select[name=sex]').select('Hombre'),
        ///Selec Viajeros
        limpiarCampo: ()=> cy.get('input[name="adults"]').clear(),
        NumAdulto: ()=> cy.get('[data-cy="adults-input"]').type('1'),
        NumNene: ()=>  cy.get('input[name=children]').type('0'),
        BtnContinuar: ()=> cy.contains('Continuar').click(),
        NumCamaIndividual:()=> cy.get('[data-cy="Individual"]', { timeout: 10000 }).should('be.visible').type('1'),
        NumCamaDoble:()=> cy.get('[data-cy="Doble dos camas"]').type('1'),
        
        
        //Check Continuar
        checkbox:()=> cy.get('.checkbox').click(),
        BtnContinuar: ()=> cy.contains('Continuar').click(),
        //Descuentos
        Cupon:()=> cy.get('.bg-aqua > .flex-col > .flex-1').type(''),
        BtnAplicar:()=> cy.contains('Aplicar').click(),

        // Medio de Pago
        transferencia:()=> cy.contains('Transferencia bancaria',{ timeout: 10000 }).click(),
        BtnRealizaPago:()=> cy.contains('Realizar pago').click(),
        CompMedioPago:()=> cy.get('.col-span-2 > :nth-child(4)').click(),

        //Desglose Reserva
        NumReserva:()=> cy.contains('Tu número de reserva es',{ timeout: 50000 }).should('be.visible')



    }
    typeDatoPasajero(nombre,apellido,dni,email,telefono){
        this.elements.nombre().type(nombre)
        this.elements.apellido().type(apellido)
        this.elements.Sexo()
        this.elements.dni().type(dni)
        this.elements.email().type(email)
        this.elements.telefono().type(telefono)
        this.elements.BtnContinuar()
    }
     
   
    typePersonaliza (viajeros){
        this.elements.limpiarCampo(viajeros)
        this.elements.NumAdulto(viajeros)
        this.elements.limpiarCampo(viajeros)
        this.elements.NumNene(viajeros)
        this.elements.BtnContinuar(viajeros)
        this.elements.NumCamaIndividual(viajeros)
        this.elements.BtnContinuar(viajeros)
        this.elements.checkbox(viajeros)
        this.elements.BtnContinuar(viajeros)

    }
    typePersonalizaSingle(single){
        this.elements.limpiarCampo(single)
        this.elements.NumAdulto(single) 
        this.elements.BtnContinuar(single)
        this.elements.NumCamaIndividual(single)
        this.elements.BtnContinuar(single)
        this.elements.checkbox(single)
        this.elements.BtnContinuar(single)
    }
    typeMedioPago(pago){
        this.elements.CompMedioPago(pago)
        this.elements.transferencia(pago)
        this.elements.BtnRealizaPago(pago)
        this.elements.NumReserva(pago)
    }
}
module.exports = new variablesPage();