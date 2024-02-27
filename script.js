//Create two variables computerscore and playerscore to keep track of the score
let computerscore = 0;
let playerscore = 0;
//Create a function that generates a random number between 1 and 3
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Create a function that returns computer choice (ROCK, PAPER, SCISSORS)
function getComputerChoice(){
    let choice;
    choice = getRndInteger(1,4);
    if(choice===1){
        return 'ROCK';
    }

    else if(choice===2){ 
        return 'PAPER';
    }

    else if(choice===3){
        return 'SCISSOR';
    }   
}

//Create a function that takes player and computer choice and return the result(win, lose, tie)
function playRound(computerSelection,playerSelection) {
    let computer = computerSelection;
    let player = playerSelection.toUpperCase();
    
    if (player!=='PAPER'&&player!=='SCISSOR'&&player!=='ROCK') {
        return'Wrong input';
    }

    else if ((computer==='ROCK' && player==='PAPER') || (computer==='PAPER' && player==='SCISSOR') || (computer==='SCISSOR' && player==='ROCK')){
        ++playerscore;
        return `You win ${player} beats ${computer}`; 
    }

    else if(computer===player){
        return `Its a tie`;
    }

    else{
        ++computerscore;
        return `You lose ${computer} beats ${player}`;  
    }  
}
//Create a function that plays a round and displays the result and score
// function playGame() {
//     console.log(playRound(getComputerChoice(),prompt('choose: ROCK, PAPER, SCISSOR')));
//     console.log(`computer (${computerscore}) - player (${playerscore})`);
    



const div1 = document.querySelector('#result');
const div2 = document.querySelector('#score');
const buttons = document.querySelectorAll('.en');


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        div1.textContent = playRound(getComputerChoice(),button.id);
        div2.textContent = `computer (${computerscore}) - player (${playerscore})`;    
    });
    
});
