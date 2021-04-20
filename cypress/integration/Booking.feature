Feature: Test the booking functionality

Scenario: Verify the booking is created successfully with reserved and unpaid status

Given I open phptravels user app
And I make a booking for a tour
Then the booking status should be shown as 'Unpaid'

When I choose to pay on arrival
Then the booking status should be shown as 'Reserved'

When I open phptravels supplier app
And I search for the booking
Then the status should be shown as Reserved


