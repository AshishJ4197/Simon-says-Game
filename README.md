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
- `level`: Variable to keep track of the current level of the game.
- `levelUp()`: Function to generate the next level of the game by adding a new color to the sequence.
- `check()`: Function to check if the player's input matches the game sequence.
- `btnPress()`: Function to handle button clicks and capture the player's input.
- `reset()`: Function to reset the game state when the game ends.


## Credits

This project is based on the concept of the Simon Says game and was implemented by **J Ashish**.
