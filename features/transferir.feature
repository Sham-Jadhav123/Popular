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
    
     |  rnbichara        | 321321            |
      

      Scenario Outline: As a check error msg

    When click on transferir button
    Then Select terceros
    Then select benificiary account
    Then click on account
    Then transfer zero amount 
    # Then Transfer "0.00" amount