<!--Guess The number | html/css/javascript version-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h2>Guess the Number</h2>
    <div id="welcomeArea" style="display: none;">
        <button id="startGameButton" onclick="welcome();style.display = 'none'">Start Game</button>
    </div>

    <div id="nameArea" style="display: none;">
        <p id="nameText"></p>
        <input type="text" id="nameInput" placeholder="Enter your name">
        <button id="nameButton" onclick="startGame();style.display = 'none'">Enter your Name</button>
    </div>

    <div id="gameArea" style="display: none;">
        <p id="gameText"></p>
        <input type="number" id="guessInput" placeholder="Enter your guess" min="1" max="20">
        <button id="guessButton" onclick="submitGuess()">Submit Guess</button>
        <p id="resultText"></p>

        <button id="exitButton" onclick="exitGame();style.display = 'none'">Exit Game</button>

    </div>

    <script>
        let welcomeArea = document.getElementById("welcomeArea");
        let startGameButton = document.getElementById("startGameButton");
        let nameArea = document.getElementById("nameArea");
        let nameText = document.getElementById("nameText");
        let nameInput = document.getElementById("nameInput");
        let nameButton = document.getElementById("nameButton");
        let gameArea = document.getElementById("gameArea");
        let gameText = document.getElementById("gameText");
        let guessInput = document.getElementById("guessInput");
        let guessButton = document.getElementById("guessButton");
        let resultText = document.getElementById("resultText");
        let exitButton = document.getElementById("exitButton");

        let myName;
        let number;
        let guessesTaken;

        welcomeArea.style.display = "block";

        function welcome() {
            nameText.textContent = `Hello! What is your name?`;
            nameArea.style.display = "block";
            nameButton.style.display = "inline-block"
        }

        function startGame() {
            myName = nameInput.value;
            number = Math.floor(Math.random() * 20) + 1;
            guessesTaken = 0;

            gameText.textContent = `Well, ${myName}, I am thinking of a number between 1 and 20. \nYou have 6 guesses.`;
            gameArea.style.display = "block";
            guessButton.style.display = "inline-block"
            exitButton.style.display = "inline-block"
        }

        function submitGuess() {
            guessesTaken++;
            let guess = parseInt(guessInput.value);

            if (guess < number) {
                resultText.textContent = `Your guess is too low. \nYou have ${6 - guessesTaken} chances left`;
            } else if (guess > number) {
                resultText.textContent = `Your guess is too high. \nYou have ${6 - guessesTaken} chances left`;
            } else {
                resultText.textContent = `Good job, ${myName}! You guessed my number in ${guessesTaken} guesses!`;
            }

            if (guessesTaken >= 6 && guess != number) {
                resultText.textContent = `Nope. The number I was thinking of was ${number}.`;
            }
        }

        function exitGame() {
            nameArea.style.display = "none";
            gameArea.style.display = "none";
            nameInput.value = "";
            guessInput.value = "";
            resultText.textContent = "";
            welcomeArea.style.display = "block";
            startGameButton.style.display = "inline-block";
        }
    </script>
</body>