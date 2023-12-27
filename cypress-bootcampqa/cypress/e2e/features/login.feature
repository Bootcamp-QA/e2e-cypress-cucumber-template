Feature: Login Bootcamp QA

    As studen, I want to login bootcamp qa, so I can see training courses

    Background:
        Given the user is at bootcamp qa login page

    Scenario: Success Login
        When the user login with user "testqa" and password "Password-qa1"
        Then the user with name "Test QA" is logged in

    Scenario Outline: Error Login
        When the user login with user <user> and password <password>
        Then the user sees an error message

    Examples:
        | user | password |
        | "testqa" | "invalid" |
        | "invalid" | "Password-qa1" |