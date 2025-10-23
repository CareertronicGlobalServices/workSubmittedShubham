let randomNumber = (parseInt(Math.random()*100+1));

const submit= document.querySelector("#submit-Button");
const input= document.querySelector("#num-input");
const Pgusses= document.querySelector(".previous-Gusses");
const Rgusses= document.querySelector(".remaning-Gusses");
const lowHigh= document.querySelector(".low-High");
const startOver = document.querySelector(".result");

const p = document.createElement('p');

let preGuess= [];
let Attempted=1;

let playGame=true;

if (playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess= parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("This is not a number enter a Number between 1 to 100");
    }
    else if(guess<1){
        alert("Given number is less than 1 enter between 1 to 100");
    }
    else if(guess>100){
        alert("Given number is greater than 100e nter between 1 to 100");
    }
    else{
        preGuess.push(guess);
        console.log(preGuess);
       // Pgusses.innerHTML= preGuess;
        //displayGuess(guess)
        if(Attempted ===10){
            displayGuess(guess);
            messageDisplay(`Opps Game over you have reached gusseing limit random number was${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            check(guess);
            }
        }
    }
    
function check(guess){
    if(guess===randomNumber){
        messageDisplay(`Congrats you won the game`);
        endGame();
    }
    else if(guess < randomNumber){
        messageDisplay(`Number is low`);
    }
    else if(guess > randomNumber){
        messageDisplay(`Number is high`)
    }
}

function displayGuess(guess){
    input.value ='';
    console.log(guess)
    Pgusses.innerHTML += `${guess}, `
    Attempted++;
    console.log(Attempted);
    Rgusses.innerHTML=`Remaining Guesses : ${11 - Attempted}`;
}

function messageDisplay(message){
    lowHigh.innerHTML= `<h3>${message}</h3>`
}

function endGame(){
    input.value ="";
    input.setAttribute('disabled','');
    playGame=false;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess= [];
    Attempted=1;
    Pgusses.innerHTML = '';
    Rgusses.innerHTML = `${11 - numGuess} `;
    input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
 