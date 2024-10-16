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
      



  Scenario Outline: As a user, click on transferir button

    #When click on 
    When click on tranferir buttton
    Then check availabale balance
    #SSThen transfer money which is greater than availabale balance<amount>
    # Then amount "100" for transfer
    Then transfer amount which is greater than availabale balance
    Then Error msg should be display
    
   #Then click on terceros button
    #  Then I should see a flash message saying <message>
    #  Then I should click on button
    # Then home page should be display
    # Then  text should be display
   
    # Examples:
    #  |    label                              |           
    #   |    Facilidades de pagos              |