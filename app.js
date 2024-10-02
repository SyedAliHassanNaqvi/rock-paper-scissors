let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const displayUser=document.querySelector("#user-score");
const displayComp=document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const availChoices=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return availChoices[idx]; 
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game Was Draw. Play Again ! ";
}

const playGame = (userChoice) =>{
    const compChoice=genCompChoice();
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        userWin=true;
        if(userChoice === "rock")
            {
                userWin = compChoice === "paper" ? false : true;
                userWin = compChoice === "scissors" ? true : false;
            }
            else if(userChoice === "paper")
                {
                    userWin = compChoice === "rock" ? true : false;
                    userWin = compChoice === "scissors" ? false : true;
                }
                else{
                    userWin = compChoice === "rock" ? false : true;
                    userWin = compChoice === "paper" ? true : false;
                } 
    }
    showWinner(userWin);
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

const showWinner=(userWin)=>{
    if(userWin)
    {
        userScore++;
        displayUser.innerText=userScore;
        console.log("You Win :)");
        msg.innerText="You Win :)";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        displayComp.innerText=compScore;
        console.log("You Lose :(");
        msg.innerText="You Lose :(";
        msg.style.backgroundColor="red";
    }
}