export function set_no_of_adults(no_of_adults) {
    return new Cypress.Promise((resolve) => {
        var arr = new Array(no_of_adults);
        arr.forEach(() => {
            cy.get('.btn.btn-white.bootstrap-touchspin-up').click()
            cy.wait(500)
        })
        resolve()
      })
  }
