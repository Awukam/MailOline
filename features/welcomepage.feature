Feature: Newspaper edition test mobile

    #Background: App lunched
    #Given the mailoline app is lunched
    
    Scenario: Verify the Newspaper edition is downloadable
    When I navigate to see more on the Newspaper tab
    And I tap to dowload the 6 january 2024 edition from the Archive tab   
    Then I should see that the Newspaper edition is downloadable
