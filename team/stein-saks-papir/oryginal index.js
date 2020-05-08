const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const erna_div = document.getElementById("erna");
const kim_div = document.getElementById("kim");
const trump_div = document.getElementById("trump");

function getComputerChoice() {
    const choices = ['e', 'k', 't'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    console.log("WIN");
}

function lose() {
    console.log("LOSE");
}

function draw() {
    console.log("DRAW");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "et":
        case "tk":
        case "ke":
            win();
            break;
        case "te":
        case "kt":
        case "ek":
            lose();
            break;
        case "ee":
        case "tt":
        case "kk":
            draw();
            break;
    }
}

function main() {
    erna_div.addEventListener('click', function() {
        game("e");
    })

    kim_div.addEventListener('click', function() {
        game("k");
    })

    trump_div.addEventListener('click', function() {
        game("t");
    })
}

main();