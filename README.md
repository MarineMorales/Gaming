# Gaming

## List of my gaming programming projects

**1. Guess the Number**

**Rules**: The computer will think of a secret number from 1 to 20 and ask the user to guess it.  After each guess, the computer will tell the user whether the number is too high or too low. The user wins if they can guess the number within six tries.

**Python Main Mechanics**: In this program, we choose a for loop because we know in advance the number of times we want to iterate, which is 6. The for loop is specifically designed for iterating over a sequence, such as a range of numbers or elements in a list, and executing a block of code for each iteration. 

**2. Dragon Realm**

**Rules**: The player is in a land full of dragons. The dragons all live in caves with their large piles of collected treasure. Some dragons are friendly and share their treasure. Other dragons are hungry and eat anyone who enters their cave. The player approaches two caves, one with a friendly dragon and the other with a hungry dragon, but doesn't know which dragon is in the cave. The players decides between the two.

**Python Main Mechanics**: We choose a while loop because the number of iterations is not predetermined. The while loop is used to repeatedly execute a block of code until a certain condition is met, which is useful in situations where the number of iterations is not predetermined. Indeed, the user is prompted to choose a cave, and we check to ensure until the input is either '1' or '2'. Also, we allow the user to play again, and we will repeatedly execute the game until the user chooses not to play again. 

**3. The Hangman**

**Rules**: Hangman is a game for two people in which one player thinks of a word and then draws a blank line on the page for each letter in the word. The second player then tries to guess letters that might be in the word. If the second player guesses the letter correctly, the first player writes the letter in the proper blank.
But if the second player guesses incorrectly, the first player draws a single body part of a hanging man. The second player has to guess all the letters in the word before the hanging man is completely drawn to win the game.

**Python Main Mechanics**: We choose a while True loop because the number of iterations is not predetermined and depends on the player's decision not to play again. A while True loop is a form of a while loop that continues to execute indefinitely until it encounters a break statement. The gameIsDone variable is used to keep track of whether the game is finished or not. Hence if the game is done, the while loop is broken by a break statement.

**4. Tic Tac Toe**

**Rules**: Tic-Tac-Toe is normally played with two people. One player is X and the other is O. Players take turns placing their X or O. If a player gets three of their marks on the board in a row, column, or diagonal, they win. When the board fills up with neither player winning, the game ends in a draw.

**Python Main Mechanics**: Like for the Hangman, we also choose a while True loop because the number of iterations is not predetermined and depends on the player's decision not to play again. Key highlight here is that we develop a very simplistic version of an Artificial Intelligence to lead the computer's strategy.

**5. Bagels Deduction**

**Rules**: Bagels is a deduction game in which the player tries to guess a random three-digit number (with no repeating digits) generated by the computer. After each guess, the computer gives the player three types of clues: Bagels (no correct digit in the correct place), Pico (correct digit not at the correct place) and Fermi (correct digit at the correct place).

**Python Main Mechanics**: We do not choose a for loop even though we know in advance the number of maximum times the player can iterate the guesses, which is 10. Instead we also choose a while True loop because the number of times the game will be played depends on the player's decision whether or not to play again.

**6. Sonar Treasure Hunt**

**Rules**: The player drops snoar devices at various places in the ocean to locate treasure chests sunken under the sea. The sonar devices will then tell the player how far away the closest treasure chest is, but not in what direction. Hence the player needs to place mutliple sonar devices to be able to figure out the location of the treasure chest. The player has only 20 sonar devices to use to find the 3 treasure chests.

**Python Main Mechanics**: We use a Cartesian coordinate system. Coordinates are numbers that represent a specific point on the screen. We also use in this program data structures constituted of lists within lists.

**7. Caesar Cipher**

**Rules**: We convert normal English into secret code. We can also convert secret codes back into regular English. Only someone who knows the key to the secret codes will be able to understand the messages.

**Python Main Mechanics**: We introduce the list comprehension method. It is a concise way to create lists in Python. It allows us to create a list based on an existing list, using a single line of code.

**8. Reversi**

**Rules**: This two-player board game is played on a grid, so we'll use a Cartesian coordinate system with x- and y-coordinates. We will offer the opportunity to play against an AI or test the AI playing against itself.

**Python Main Mechanics**: We introduce the AI simulation testing.

**9. Hungry Kitten**

**Rules**: Your feline friend is on a mission to catch five juicy birds before settling down for a well-deserved nap. As your Hungry Kitty roams around the house patio in pursuit of its prey, it will come across various types of food to keep its energy up. Watch out! As your kitty grows, so does its hitbox, increasing the chances of accidentally consuming toxic food.

**Python Main Mechanics**: Unlike our text-based games, this game has graphics and music and uses the mouse. To to delve into the world of interactive media creation, we use Pygame. It is a popular Python library specifically designed for writing video games providing modules for handling graphics, sound, input devices, game loops, event handling, and event rendering.

## How to run the python games in your Command Prompt

The python version are the files finishing with the .py extensions.

**Input 1**: C:\Users\Your_User_Name>cd C:\Users\Your_User_Name\Code_Folder_location

**Input 2**: C:\Users\Your_User_Name\Code_Folder_location>python Code_File.py 

For instance, if you want to run the python File named *GuessTheNumber.py* located in the folder named *PythonGameFolder* itself located on your desktop, you will need the follow the prompt below:

>C:\Users\MarineMorales>cd C:\Users\MarineMorales\OneDrive\Desktop\PythonGameFolder
>C:\Users\MarineMorales\OneDrive\Desktop\PythonGameFolder>Python GuessTheNumber.py
