function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);

    if (result === 0) return "Batu";
    if (result === 1) return "Kertas";
    return "Gunting";
}




function playRound(humanChoice, computerChoice){
    let result;
    let status;

   if (humanChoice === computerChoice) {
    status = "SERI";
    result = `Kamu memilih ${humanChoice} dan Computer memilih ${computerChoice}. Hasil SERI!`
    return {
        status,
        result
    };
    
   } 

   if ((humanChoice === "Batu" && computerChoice === "Gunting") ||
        (humanChoice === "Kertas" && computerChoice === "Batu") ||
        (humanChoice === "Gunting" && computerChoice === "Kertas")) {
            status = "MENANG";
            result = `Kamu memilih ${humanChoice} dan Computer memilih ${computerChoice}. Kamu MENANG!`
            return {
                status,
                result
            }
        } else {
            status = "KALAH";
            result = `Kamu memilih ${humanChoice} dan Computer memilih ${computerChoice}. Kamu KALAH!`
            return {
                status,
                result
            };
        }
                
}






const result = document.querySelector(".result");
const rate = document.querySelector(".score");
const rock = document.querySelector(".rock");
const papper = document.querySelector(".papper");
const scissor = document.querySelector(".scissor");
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function handleRound(selection) {
    
    if (gameOver) return;

    const select = playRound(selection, getComputerChoice());
    result.textContent = select.result;

    if (select.status === "MENANG") {
        humanScore += 1;
    } else if (select.status === "KALAH") {
        computerScore += 1;
    }

    rate.textContent = `Kamu: ${humanScore} | Computer: ${computerScore}`;


   
        if (humanScore >= 5) {
            result.textContent = "Kamu MENANG!";
            gameOver = true;
        } else if (computerScore >= 5) {
            result.textContent = "Kamu KALAH!";
            gameOver = true;
        }
    


}

rock.addEventListener("click", () => {
    handleRound("Batu");
});


papper.addEventListener("click", () => {
    handleRound("Kertas");
});

scissor.addEventListener("click", () => {
    handleRound("Gunting")
});


