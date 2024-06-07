import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("the user is at bootcamp qa login page", () => {
    cy.visit("/");
    cy.get(".cky-btn-accept").first().click();
    cy.get(".btn-warning").last().click();
    cy.get(".login a").click();
  });
  
  When("the user login with user {string} and password {string}", (user,password) => {
    cy.get("#username").first().type(user);
    cy.get('#password').first().type(password);
    cy.get('#loginbtn').click();

  });
  
  Then("the user with name {string} is logged in", (name) => {
    cy.get('.usertext').should("have.text", name);
  });

  Then("the user sees an error message", () => {
    cy.get('.alert-danger').should("be.visible");
  });