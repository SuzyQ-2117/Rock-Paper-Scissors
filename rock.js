const choices = ["Rock", "Paper", "Scissors"];
const pointsToWin = 3;



function getComputerChoice() {
    // const choice = "scissors"
    // return choice;
    const choice = Math.floor(Math.random() * choices.length);
    return  choices[choice].toLowerCase();
}



function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Make your choice! Rock, Paper or Scissors?");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();

        const lowerCaseChoices = choices.map(c => c.toLowerCase());

        if(lowerCaseChoices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}



function evaluateRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "draw";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice = "paper" && computerChoice == "rock")
    ) {
        return "player";
    } else {
        return "computer";
    }
}



function playRound(playerChoice, computerChoice) {
    const result = evaluateRound(playerChoice, computerChoice);
    if (result == "draw") {
        return `Draw! Double ${playerChoice} means no winner.`
    } else if(result == "player") {
        return `You win! ${playerChoice} beats ${computerChoice}.`
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }
}



function evaluateGame(playerScore, computerScore){
    console.log("Game over.")

    if(playerScore > computerScore) {
        console.log("You won!")
    } else if (playerScore < computerScore) {
        console.log("You lost. Better luck next time!")
    } else {
        console.log("It's a draw!")
    }
}



function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    console.log(`Rock, Paper Scissors: first to win ${pointsToWin} rounds!`);
    console.log("Let's go!");

    for (let i=0; ; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log("-----------------------------")
        if(evaluateRound(playerChoice, computerChoice) == "player") {
            playerScore++;
            if(playerScore>=pointsToWin) {
                evaluateGame(playerScore, computerScore);
                break;
            }
        } else if(evaluateRound(playerChoice, computerChoice) == "computer") {
            computerScore++;
            if(computerScore>=pointsToWin) {
                evaluateGame(playerScore, computerScore)
                break;
            }
        }
    }

}


let play = true;

while(play == true) {
    playGame();
    const playAgain = prompt("Play again? Enter y for yes or n to exit.")
    if(playAgain.toLowerCase() == "y") {
        continue;
    } else {
        play = false;
        break;
    }
}