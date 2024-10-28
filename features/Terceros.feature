

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



   Scenario: Terceros Transaction flow

   When successfully login click on transferi button
   Then click on Terceros 
   Then select user selected account
   Then select  account
   Then select benificiary 
   Then enter amount
   Then Enter descriptions
   Then click on continue button
  #  Then click on Si transfer button
  #  Then enter tocken





   

 Scenario: Terceros Transaction flow for USD to USD 

   When user login to app click on transferi
   Then click on Terceros button
   Then select   user  account should be USD
   Then select USD account
   Then select USD benificiary 
   Then enter USD amount
  #  Then Enter descriptions for USD Transaction
    Then click on the continue button
  #  Then click on the Si transfer button
  #  Then enter tocken for Transaction
