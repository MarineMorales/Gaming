#Guess the Number game
import random # import module "random"

guessesTaken = 0
print('Hello! What is your name?')
myName=input()

number=random.randint(1,20) # Call the function "
print('Well, '+myName+', I am thinking of a number between 1 and 20.')

for guessesTaken in range(6):
	print('Take a guess.')
	guess=input()
	guess=int(guess)

	if guess<number:
		print('your guess is too low.')

	if guess>number:
		print('Your guess is too high.')

	if guess==number:
		break

if guess==number:
	guessesTaken=str(guessesTaken+1)
	print('Good job, '+myName+'! You guesses my number in '+ guessesTaken+' guesses!')

if guess!=number:
	number=str(number)
	print('Nope. The number I was thinking of was '+number+'.')
