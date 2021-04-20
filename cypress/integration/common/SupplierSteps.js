import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import * as ui_helper from '../../support/helpers/UIHelper';

Given('I open phptravels supplier app', () => {
    cy.visit(Cypress.env('phpTravelsBaseUrl') + "/supplier")
    cy.get('[placeholder="Email"]').eq(0).type("supplier@phptravels.com", {force:true})
    cy.get('[placeholder="Password"]').eq(0).type("demosupplier", {force:true})
    cy.get('[type="submit"]').click()
})

Given('I search for the booking', () => {
    cy.contains('Search').click()
    cy.get('@booking_ref').then((ref) => {
        cy.get('[name="phrase"]').type(ref, {force:true})
        cy.contains('Go').should('exist')
        cy.contains('Go').click({force:true})
    })
})

Given('the status should be shown as Reserved', () => {
    cy.contains('Reserved').should('be.visible')
    cy.screenshot()
})

