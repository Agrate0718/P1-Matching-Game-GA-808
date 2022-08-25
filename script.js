const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
const player = document.querySelector('player');
const CPU = document.querySelector('Computer');
const resetBtn = document.querySelectorAll('.resetBtn');
turn = true;
x = 0;
y = 0;
displayTurn();
function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this; 
        
        return
    } 
        //second click
        secondCard = this;
        checkForMatch();
}
console.log(resetBtn);


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    console.log(firstCard.dataset.framework)
    isMatch ? disableCards() : unflipCards();
       switchPlayer()
}       
function switchPlayer(){
    if(turn == true){
        turn = false;
    }else{
        turn = true;
    }  displayTurn()
}
function disableCards(){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            
           if(turn == true){
            x++
            player.innerHTML = "You:" + " " + x;
            
           

           } else if(turn == false){
            y++
            CPU.innerHTML = "CPU:" + "" + y;
           }

            resetBoard();
}
function unflipCards(){
    lockBoard = true;
           setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
           resetBoard();
            }, 1000);
    
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos =  Math.floor(Math.random()*16);
        card.style.order = randomPos;
    });
})();

function NPC(){
    i = Math.floor(Math.random()*16);
    document.getElementById(i).click();
    setTimeout(function() {
       i = Math.floor(Math.random()*16);
    document.getElementById(i).click();
       }, 1000);
    

}
function displayTurn(){
        if(turn == true){
            CPU.classList.remove('turn');
            player.classList.add('turn');
        }else if (turn == false){
            player.classList.remove('turn');
            CPU.classList.add('turn');  
        }
    }
function reset(){ window.location.reload();}
resetBtn.forEach(btn => btn.addEventListener('click', reset ))
cards.forEach(card => card.addEventListener('click', flipCard))
NPC();