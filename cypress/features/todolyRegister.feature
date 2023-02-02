@todolyRegister
Feature: REGISTER todoLy
    Scenario: Register successfull in todo.ly
        Given User is in todo.ly page

        When User clicks in the register section
        And User completes all the register fields with valid data
        And User clicks in REGISTER button

        Then User must be registered and logged in