export function get_weather_data(query_params) {
    return new Cypress.Promise((resolve) => {
        cy.request({
            method: 'GET',
            url: Cypress.env("weatherApiBaseUrl") + "/v2.0/current",
            qs: query_params,
            failOnStatusCode: false
        })
        .then((resp) => { 
            resolve(resp)
        })
      })
  }