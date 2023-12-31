import { Given } from "cypress-cucumber-preprocessor/steps";

let response = null

Given('I hit {string} to endpoint {string}', (method, url) => {
  cy.request(method, url).then(result =>{
    response = result
  })
})

Then('should return status code {string}', (code) => {
  expect(response.status).to.eq(+code)
})