const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const paddleHeight = 100;
const paddleWidth = 10;

let player1Y = canvas.height / 2 - paddleHeight / 2;
let player2Y = canvas.height / 2 - paddleHeight / 2;

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;

function draw() {
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw paddles
	ctx.fillStyle = 'white';
	ctx.fillRect(0, player1Y, paddleWidth, paddleHeight);
	ctx.fillRect(canvas.width - paddleWidth, player2Y, paddleWidth, paddleHeight);

	// Draw the ball
	ctx.beginPath();
	ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
	ctx.fill();

	// Update ball position
	ballX += ballSpeedX;
	ballY += ballSpeedY;

	// Ball collision with top and bottom walls
	if (ballY <= 0 || ballY >= canvas.height) {
		ballSpeedY = -ballSpeedY;
	}

	// Ball collision with paddles
	if (ballX <= paddleWidth && ballY > player1Y && ballY < player1Y + paddleHeight ||
		ballX >= canvas.width - paddleWidth * 2 && ballY > player2Y && ballY < player2Y + paddleHeight) {
		ballSpeedX = -ballSpeedX;
	}

	// Ball out of bounds (reset position)
	if (ballX < 0 || ballX > canvas.width) {
		ballX = canvas.width / 2;
		ballY = canvas.height / 2;
	}

	// Update paddles based on mouse position
	canvas.addEventListener('mousemove', (event) => {
		player1Y = event.clientY - canvas.offsetTop - paddleHeight / 2;
		player2Y = event.clientY - canvas.offsetTop - paddleHeight / 2;
	});

	// Redraw every 16ms (60fps)
		setTimeout(draw, 16);
	}
	
draw();