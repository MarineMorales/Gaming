#Game: Guess the Number

#Rules: 
#The computer will think of a secret number from 1 to 20 and ask the user to guess it. 
#After each guess, the computer will tell the user whether the number is too high or too low.
#The user wins if they can guess the number within six tries.

#Program:
import random #Import module "random"

guessesTaken = 0
print('Hello! What is your name?')
myName = input()

number = random.randint(1,20) #Call the function "randit"
print('Well, '+ myName +', I am thinking of a number between 1 and 20.')

for guessesTaken in range(6):
	print('Take a guess.')
	guess = input()
	guess = int(guess)
	
#Do not confuse the boolean comparison operator "==" (True vs False output) with the assignment operator "=".
	if guess < number: # This is a boolean data comparison
		print('Your guess is too low.')
	if guess > number:
		print('Your guess is too high.')
	if guess == number:
		break

if guess == number:
	guessesTaken = str(guessesTaken + 1)
	print('Good job, '+ myName +'! You guessed my number in '+ guessesTaken +' guesses!')

if guess != number:
	number = str(number)
	print('Nope. The number I was thinking of was '+ number +'.')
