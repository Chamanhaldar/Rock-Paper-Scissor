let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["ROCK","PAPER","SCISSOR"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]; 

}

const drawGame = () => {
    console.log("GAME DRAW!");
    msg.innerText = "GAME DRAW! PLAY AGAIN!";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOU WON!");
        msg.innerText = `YOU WON! ${userChoice} BEATS ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("YOU LOST!");
        msg.innerText = `YOU LOST! ${compChoice} BEATS ${userChoice}`;
    }

}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice); 
    
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "ROCK"){
            userWin = compChoice === "PAPER" ? false : true;
        } else if(userChoice === "PAPER"){
            userWin = compChoice === "SCISSOR" ? false : true;
        } else {
            userWin = compChoice === "ROCK" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});