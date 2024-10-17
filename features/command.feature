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

     
    Scenario Outline: check scroll the screen upto locate element

    When click on menu bar button
    # Then scroll upto element
    # Then Select terceros
    # Then select benificiary account
    # Then click on account
    # Then transfer zero amount 



    Then user select the account no
    # Then click on the accoundt no