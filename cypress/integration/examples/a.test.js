/// <reference types="cypress" />

it("should open app", function() {
  cy.visit("https://kingclothing.netlify.com/");
  expect(true).equal(true);
});
