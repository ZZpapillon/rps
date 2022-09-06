function getComputerChoice() {
            const randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber === 0) {
                return 'Rock';
            } else if (randomNumber === 1) {
                return 'Scissor';
            } else {
                return 'Paper';
            }
        }


const container = document.querySelector('#container');
const rockButton = document.querySelector('.rock');
const scissorButton= document.querySelector('.scissor');
const paperButton = document.querySelector('.paper');
const outcomeDiv = document.querySelector('.outcome');
const winnerIs = document.querySelector('.winner');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

 function getScore (playerScore, compScore) {
     playerScoreSpan.textContent = `Player score: ${playerScore}`;
     computerScoreSpan.textContent = `Computer score: ${compScore}`;
 }
 



   
       
       function endGame(playerScore, compScore) {
         if (playerScore === 5) {
            const h2 = document.createElement('h2');
                  h2.textContent = 'Winner is YOU!';
                  winnerIs.appendChild(h2);
         } else if (compScore === 5) {
            const h2 = document.createElement('h2');
            h2.textContent = 'Winner is Computer!';
            winnerIs.appendChild(h2);
         }
        }
         
   




    let playerScore = 0;
    let compScore = 0;


    function playRound(playerSelection, computerSelection) {
       if (playerSelection === 'Rock' && computerSelection === 'Rock') {
                const p = document.createElement('p');
                p.textContent ="Its a draw!";
                outcomeDiv.appendChild(p);
            } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
               compScore++
                const p = document.createElement('p'); 
               p.textContent = "You Lose! Paper beats Rock";
                outcomeDiv.appendChild(p);
            } else if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
                playerScore++
                const p = document.createElement('p');
                p.textContent = "You Win! Rock beats scissor";
                outcomeDiv.appendChild(p);
            }

    if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        const p = document.createElement('p');
        p.textContent = "Its a draw!";
        outcomeDiv.appendChild(p);
            } else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
                compScore++        
        const p = document.createElement('p');
                p.textContent = "You Lose! Scissors beats paper.";
                outcomeDiv.appendChild(p);
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                playerScore++        
                const p = document.createElement('p');
                p.textContent = "You Win! Paper beats rock";
                outcomeDiv.appendChild(p);
            }

    if (playerSelection === 'Scissor' && computerSelection === 'Scissor') {
        const p = document.createElement('p');
        p.textContent = "Its a draw!";
        outcomeDiv.appendChild(p);
            } else if (playerSelection === 'Scissor' && computerSelection === 'Rock') {
                compScore++        
        const p = document.createElement('p');
                p.textContent = "You losse! Rock beats scissor";
                outcomeDiv.appendChild(p);
            } else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
               playerScore++              
        const p = document.createElement('p');
               p.textContent = "You Win! Scissor beats paper";
               outcomeDiv.appendChild(p);

            }
        }



rockButton.addEventListener('click', () => {
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    getScore(playerScore, compScore);
    endGame(playerScore, compScore);
});

scissorButton.addEventListener('click', () => {
    let playerSelection = 'Scissor';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    getScore(playerScore, compScore);
    endGame(playerScore, compScore);
});

paperButton.addEventListener('click', () => {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    getScore(playerScore, compScore);
    endGame(playerScore, compScore);
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        //function game() {
      //      for (let i = 0; i < 5; i++) {
    
   
    //console.log(playRound(playerSelection, computerSelection));
    //        }
      //      if (playerScore > compScore) {
        //        return ('You beat computer! You are genious!');
          //  } else {
            //    return ('computer won,better luck next time!');
            //}
        //}

    //console.log(game());





