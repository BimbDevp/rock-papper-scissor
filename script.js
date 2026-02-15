function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);

    if (result === 0) return "batu";
    if (result === 1) return "kertas";
    return "gunting";
}


function getHumanChoice(){
    let result = prompt("Tentukan pilihan anda? (Kertas/Batu/Gunting");
    return result.toLowerCase();
}



function playRound(humanChoice, computerChoice){
   let result;

   if (humanChoice === computerChoice) {
    result = "seri";
    console.log(`user memeilih ${humanChoice} dan komputer memilih ${computerChoice}. Hasil SERI!`);
    return result;
    
   } 

   if ((humanChoice === "batu" && computerChoice === "gunting") ||
        (humanChoice === "kertas" && computerChoice === "batu") ||
        (humanChoice === "gunting" && computerChoice === "kertas")) {
            result = "menang";
            console.log(`user memilih ${humanChoice} dan computer memilih ${computerChoice}. Kamu MENANG!`);
            return result;
        } else {
            result = "kalah";
            console.log(`User memilih ${humanChoice} dan computer memilih ${computerChoice}. Kamu KALAH!`);
            return result;
        }
                
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    
    
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const play = playRound(humanSelection, computerSelection);

        if (play === "menang") humanScore++;
        if (play === "kalah") computerScore++;
    }

    return `Hasil pertandingan: Skor User: ${humanScore}, Skor Komputer: ${computerScore}`;
}



console.log(playGame());




