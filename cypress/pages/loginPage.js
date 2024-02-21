class LoginPage {
  elements = {
    userInput: () => cy.get("#username").first(),
    passwordInput: () => cy.get('#password').first(),
    sendButton: () => cy.get('#loginbtn'),
    successMessage: () => cy.get('.usertext'),
    errorMessage: () => cy.get('.alert-danger'),
    unusedvariable: () => cy.get('.alert-danger')
  };

  typeUser(user) {
    this.elements.userInput().type(user);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  sendForm() {
    this.elements.sendButton().first().click();
  }


  fillForm(user,password){
    this.typeUser(user);
    this.typePassword(password);
  }
}

export const loginPage = new LoginPage();
