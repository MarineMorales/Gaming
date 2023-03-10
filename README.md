# Gaming

## List of my gaming programming projects

1. Guess the Number

The computer will think of a secret number from 1 to 20 and ask the user to guess it.  After each guess, the computer will tell the user whether the number is too high or too low. The user wins if they can guess the number within six tries.

In this program, we choose a for loop because we know in advance the number of times we want to iterate, which is 6. The for loop is specifically designed for iterating over a sequence, such as a range of numbers or elements in a list, and executing a block of code for each iteration. 

2. Dragon Realm

The player is in a land full of dragons. The dragons all live in caves with their large piles of collected treasure. Some dragons are friendly and share their treasure. Other dragons are hungry and eat anyone who enters their cave. The player approaches two caves, one with a friendly dragon and the other with a hungry dragon, but doesn't know which dragon is in the cave. The players decides between the two.

In this program, we choose a while loop because the number of iterations is not predetermined. The while loop is used to repeatedly execute a block of code until a certain condition is met, which is useful in situations where the number of iterations is not predetermined. Indeed, the user is prompted to choose a cave, and we check to ensure until the input is either '1' or '2'. Also, we allow the user to play again, and we will repeatedly execute the game until the user chooses not to play again. 

3. The Hangman

Hangman is a game for two people in which one player thinks of a word and then draws a blank line on the page for each letter in the word. The second player then tries to guess letters that might be in the word. If the second player guesses the letter correctly, the first player writes the letter in the proper blank.
But if the second player guesses incorrectly, the first player draws a single body part of a hanging man. The second player has to guess all the letters in the word before the hanging man is completely drawn to win the game.

In this program, we choose a while True loop because the number of iterations is not predetermined and depends on the player's decision not to play again. A while True loop is a form of a while loop that continues to execute indefinitely until it encounters a break statement. The gameIsDone variable is used to keep track of whether the game is finished or not. Hence if the game is done, the while loop is broken by a break statement.

4. Tic Tac Toe

Tic-Tac-Toe is normally played with two people. One player is X and the other is O. Players take turns placing their X or O. If a player gets three of their marks on the board in a row, column, or diagonal, they win. When the board fills up with neither player winning, the game ends in a draw.

In this program, like for the Hangman, we also choose a while True loop because the number of iterations is not predetermined and depends on the player's decision not to play again. Key highlight here is that we develop a very simplistic version of an Artificial Intelligence to lead the computer's strategy.

## How to run the games in your Command Prompt

Input 1: C:\Users\Your_User_Name>cd C:\Users\Your_User_Name\Code_Folder_location

Input 2: C:\Users\Your_User_Name\Code_Folder_location>python Code_File.py 

For instance, if you want to run the python File named *GuessTheNumber.py* located in the folder named *PythonGameFolder* itself located on your desktop, you will need the follow the prompt below:

>C:\Users\MarineMorales>cd C:\Users\MarineMorales\OneDrive\Desktop\PythonGameFolder
>C:\Users\MarineMorales\OneDrive\Desktop\PythonGameFolder>Python GuessTheNumber.py
