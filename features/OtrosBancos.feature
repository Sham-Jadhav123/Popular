
Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    # Then I should see a flash message saying <message>
    # Then I should click on button
    #Then home page should be display
   # Then  text should be display
   
    Examples:
     |username            | password          |
    
     |  jordyaponte         | 321321            |

   Scenario: otras bancos  Transaction flow

   When successfully login click on  the transferi button
   Then click on  the Otros bancos
   Then select user acc
   Then select the  benificiary 
   Then enter rd amount
   Then select radio button
   
#    Then Enter descriptions
#    Then click on continue button

