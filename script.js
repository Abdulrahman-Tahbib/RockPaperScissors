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
