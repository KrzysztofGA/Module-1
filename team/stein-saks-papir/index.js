let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// const scoreBoard_div = document.querySelector(".score-board"); // What do you want to change here?
const result_div = document.getElementById("result");

function getComputerChoice() {
    const choices = [ 'Erna', 'Kim', 'Trump' ];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[ randomNumber ];
}

function win(opponents) {
    result_div.innerHTML = "<p>You win! User: " + opponents.user + ", Computer: " + opponents.computer + "</p>";
    userScore++;
    showPoints();
    document.getElementById("score-board").classList.add("win");
    document.getElementById("score-board").classList.remove("lose");
}

function lose(opponents) {
    result_div.innerHTML = "<p>You lose! User: " + opponents.user + ", Computer: " + opponents.computer + "</p>";
    computerScore++;
    showPoints();
    document.getElementById("score-board").classList.add("lose");
    document.getElementById("score-board").classList.remove("win");
}

function draw(opponents) {
    result_div.innerHTML = "<p>This time is draw! User: " + opponents.user + ", Computer: " + opponents.computer + "</p>";
    showPoints();
    document.getElementById("score-board").classList.remove("lose");
    document.getElementById("score-board").classList.remove("win");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const opponents = {};
    opponents.user = userChoice;
    opponents.computer = computerChoice;
    switch (userChoice + computerChoice) {
        case "ErnaTrump":
        case "TrumpKim":
        case "ErnaKim":
            win(opponents);
            break;
        case "TrumpErna":
        case "KimTrump":
        case "KimErna":
            lose(opponents);
            break;
        case "ErnaErna":
        case "TrumpTrump":
        case "KimKim":
            draw(opponents);
            break;
    }
}

function showPoints() {
    userScore_span.innerHTML = userScore.toString();
    computerScore_span.innerHTML = computerScore.toString();
}

function main() {
    const erna_div = document.getElementById("erna");
    const kim_div = document.getElementById("kim");
    const trump_div = document.getElementById("trump");
    erna_div.addEventListener('click', function () {
        game("Erna");
    })

    kim_div.addEventListener('click', function () {
        game("Kim");
    })

    trump_div.addEventListener('click', function () {
        game("Trump");
    })
}

main();