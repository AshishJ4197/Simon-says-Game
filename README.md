# Simon Says Game

The Simon Says game is a classic memory game where players must remember and repeat a sequence of colors or sounds. This README provides a brief overview of how the game works and how to use the provided code to implement it.

## How to Play

1. When the game starts, a sequence of colors will be displayed.
2. Memorize the sequence and click on the colored buttons in the same order.
3. If you click the correct sequence, the game will proceed to the next level, with an additional color added to the sequence.
4. If you make a mistake, the game ends, and your score is displayed.

## Code Overview

The provided JavaScript code implements the logic for the Simon Says game. Here's a brief overview of the main components:

- `gameSeq`: Array to store the sequence of colors generated by the game.
- `userSeq`: Array to store the sequence of colors entered by the player.
- `open_rules()`: Function to display the game rules when the question mark button is clicked.
- `close_rules()`: Function to hide the game rules when the close button is clicked.
- `level`: Variable to keep track of the current level of the game.
- `levelUp()`: Function to generate the next level of the game by adding a new color to the sequence.
- `white_Flash(btn)`: Function to add a white flash effect to a button upon game's random choice.
- `green_Flash(btn)`: Function to add a green flash effect to a button upon user's input.
- `btnPress()`: Function to handle button clicks and capture the player's input.
- `act_Btn_Listeners()`: Function to reset the game state when the game ends.
activateTouchButtonListener()`: Function to activate touch button listeners with a delay at the beginning of the game.
- `rem_Btn_Listeners()`: Function to deactivate touch button listeners after reset.
- `toggleSound()`: Function to toggle the Sound;


## Credits

This project is based on the concept of the Simon Says game and was implemented by **J Ashish**.

