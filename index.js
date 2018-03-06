window.onload = function() {
    let choices = document.querySelectorAll('button');
    let player = document.querySelector('#player');
    let computer = document.querySelector('#computer');
    let compare = document.querySelector('#compare');
    let yourScore = document.querySelector('#yourScore');
    let compScore = document.querySelector('#compScore');
    let rounds = document.querySelector('#rounds');
    let computerPoints = 0;
    let playerPoints = 0;
    let round = 1;

    choices.forEach((choice) => {
        choice.addEventListener('click', game);
    })

    function computerPlay() {
        let plays = ['rock', 'paper', 'scissor'];
        let compChoice = plays[Math.floor(Math.random() * plays.length)];
        return compChoice;
    }

    function playRound(playerSelection, computerSelection) {
        player.innerHTML = "<strong>Player Choice: </strong>" + playerSelection.toUpperCase();
        computer.innerHTML = "<strong>Computer Choice: </strong>" + computerSelection.toUpperCase();
        if (playerSelection === computerSelection) {
            compare.innerHTML = "IT'S A TIE!";
        } else if (playerSelection === "rock") {
            if (computerSelection === "scissor") {
                playerPoints++;
                compare.innerHTML = "You win! Rock blunts Scissor.";
            } else {
                computerPoints++;
                compare.innerHTML = "You lose! Paper covers Rock.";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                playerPoints++;
                compare.innerHTML = "You win! Paper covers Rock.";
            } else {
                computerPoints++;
                compare.innerHTML = "You lose! Scissor cuts Paper.";
            }
        } else if (playerSelection === "scissor") {
            if (computerSelection === "paper") {
                playerPoints++;
                compare.innerHTML = "You win! Scissor cuts Paper.";
            } else {
                computerPoints++;
                compare.innerHTML = "You lose! Rock blunts Scissor."
            }
        }
        yourScore.innerHTML = playerPoints;
        compScore.innerHTML = computerPoints;
    }

    function game() {
        let playerChoice = this.id;
        playRound(playerChoice, computerPlay());
        rounds.innerHTML = round;
        round++;
    }
}