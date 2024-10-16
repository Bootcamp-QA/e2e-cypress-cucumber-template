import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  When("the user visits homepage", () => {
    cy.visit("/");
  });

 