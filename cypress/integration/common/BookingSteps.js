import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import * as ui_helper from '../../support/helpers/UIHelper';

const loginBtn = ".btn.btn-primary.btn-lg.btn-block.loginbtn"


Given('I open phptravels user app', () => {
    cy.visit(Cypress.env('phpTravelsBaseUrl'))
})


Given('I make a booking for a tour', () => {
    // const tableData = bookingDetailsTable.hashes()
        // cy.get('[data-name="tours"]').click()
        // cy.get('.featured').eq(0).within(($form) => {
        //     cy.wait(3000)
        //     cy.get('.image').eq(0).click({force:true})
        //   })
        cy.visit(Cypress.env('phpTravelsBaseUrl') + '/tours/egypt/alexandria/Spectaculars-Of-The-Nile-3-Nights?date=19/04/2021&adults=1')
        cy.contains('Gallery').should('be.visible')
        cy.contains('Book Now').click()
        cy.get('[name="firstname"]').type("demo",{force:true})
        cy.get('[name="lastname"]').type("user",{force:true})
        cy.get('[name="email"]').type("user@phptravels.com",{force:true})
        cy.get('[name="confirmemail"]').type("user@phptravels.com",{force:true})
        cy.get('[name="country"]').select('Australia',{force:true})
        // cy.contains("Australia").click()
        cy.get('[name="passport[1][name]"]').type("demo user",{force:true})
        cy.get('[name="passport[1][passportnumber]"]').type("abcd1234",{force:true})
        cy.get('[name="passport[1][age]"]').type("30",{force:true})
        cy.get('[name="guest"]').click()
    // tableData.forEach((tableDataRow) => {
        
    // })
})

Given('the booking status should be shown as {string}', (status) => {
    cy.contains("Your booking status is " + status)
    cy.contains('Booking Number').siblings().eq(0).invoke('text').as('booking_ref')
    cy.screenshot()
})

Given('I choose to pay on arrival', () => {
    cy.contains("Pay on Arrival").click()
    cy.screenshot()
})