# blackjack

### Install Dependencies 
To install dependencies, run `yarn` in your terminal.

### Playing
To play the game, install the dependencies and run `yarn start` in your terminal.

Assumptions:
Game is played among 7 people ( 5 computer, 1 user, 1 Dealer)
First card is burned
Each player gets two cards
Each player plays their turn:
    • The user player can see the cards and decide to hit or stay if his cards not over 21.
    • The computer player hits till it gets the sum value greater than 16.
    • The dealer player is like computer player which hits till its value is greater than 16
When all players are finished, we check each player against dealer to decide if they won or lost.

Future features:
    • Chips are not implemented. Each player can have a default amount of chips that based on the play will be added or subtracted.
    • User input is coming from terminal which will be better to improve (write a user interface that can be implemented from web or console)
    • Dealer hand is not printed in the beginning (one should be shown, and one should be hidden)

Class Card:
    • Value: shows number
    • Suit: either Heart, Diamond, Clubs, Spades
Class Deck:
    • Array of Cards
    • Draw : to draw a card from the deck.
    • Shuffle: to make the cards in the deck in the random order.
Class PlayerBase: Abstract class
    • Abstract Hit method: to let the player hit card or not.
    • Abstract Name method: Name of the player
    • Value method:  holds sum of the cards’ values
    • PrintHand method: pretty print of the cards which user have
    • addCard method: to add to the players’ hand of cards
    • cards variable : array of cards that each player have
Class ComputerPlayer extend PlayerBase:
    • hit method
    • Name method
Class Dealer extends ComputerPlayer:
    • Name method: Overwrites
Class HumanPlayer:
    • Hit method : take input from console
    • Name method: take input from console
