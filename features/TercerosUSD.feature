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
    
     |  jordyaponte         | 321321            |




  
 Scenario Outline: Terceros Transaction flow for USD to USD 

#    When user login to app click on transferir button
   When user click on the transfe button
   Then click on Tercero btn
   Then select USD acc
   Then select account


   Then select USD acc benificiary 
   Then enter USD amount
   Then Enter descriptions for USD Transaction
   Then click on the continue button
   Then click on the Si transfer button
   Then enter tocken for Transaction