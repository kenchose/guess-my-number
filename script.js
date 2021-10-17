"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log("random secretNumber", secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = (message) => {
	return (document.querySelector(".message").textContent = message);
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	if (guess !== secretNumber) {
		if (!guess) {
			displayMessage("No number!");
		} else if (score > 1) {
			displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("💥 You lost the game!");
			document.querySelector(".score").textContent = 0;
		}
	}

	if (guess === secretNumber) {
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
		displayMessage("Correct secret number!");
		displayMessage("Correct secret number!");
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = secretNumber;
	}
});

document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20 + 1);
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".score").textContent = 20;
	document.querySelector(".guess").value = "";
	score = 20;
	console.log("new secretNumber", secretNumber);
});
