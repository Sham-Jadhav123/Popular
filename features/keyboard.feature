Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    # Then I should see a flash message saying <message>
    # Then I should click on button
    #Then home page should be display
   # Then  text should be display
   
    Examples:
     |username            | password          |
    
     |  rnbichara         | 321321            |


     Scenario Outline: Enter an value using keyboard

    When click on Trnsferiri button
    Then click on terceroc button
    # Then click on select benificiary
    # Then click on account holder
     Then Enter value using keyboard
    # Then enter value is "5"

   
