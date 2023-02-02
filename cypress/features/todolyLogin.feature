@todolyLogin
Feature: LOGIN todoLy
    Scenario: Login successfull in todo.ly
        Given User is in todo.ly page

        When User clicks in the login section
        And User completes all the login fields with a registered account data
        And User click in LOGIN button
        
        Then User must be logged in
    
    Scenario: Login unsuccessfull in todo.ly
        Given User is in todo.ly page

        When User clicks in the login section
        And User completes all the login fields with an unregistered account data
        And User click in LOGIN button
        
        Then User must not be logged in



    

    