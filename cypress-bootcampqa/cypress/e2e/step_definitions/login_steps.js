import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {loginPage} from '@pages/loginPage'
  

  Given("the user is at bootcamp qa login page", () => {
    cy.visit("/");
    cy.get(".cky-btn-accept").first().click();
    cy.get(".btn-warning").last().click();
    cy.get(".login a").click();
  });
  
  When("the user login with user {string} and password {string}", (user,password) => {
    loginPage.fillForm(user,password);
    loginPage.sendForm();
  });
  
  Then("the user with name {string} is logged in", (name) => {
    loginPage.elements.successMessage().should("have.text", name);
  });