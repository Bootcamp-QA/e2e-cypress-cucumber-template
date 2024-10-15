import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  When("the user visits homepage", () => {
    cy.visit("/");
  });
  
  Then("they should see the title {string}", (title) => {
    cy.title().should('include', title);
  });

 