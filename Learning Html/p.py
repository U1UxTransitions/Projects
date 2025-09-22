import random

number = random.randint(1, 10)
guess = 0

while guess != number:
    guess = int(input("Guess the number: "))

    if guess < number:
        print("Too Low")

    elif guess > number:
        print("Too High")

    else:
        print("You are Correct")        

                            