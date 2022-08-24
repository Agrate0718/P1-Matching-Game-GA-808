const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
const player = document.querySelector('player')
 player.innerHTML;

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

console.log(player);


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    console.log(firstCard.dataset.framework)
    isMatch ? disableCards() : unflipCards();
       
}            x = 0;

function disableCards(){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            x++
            player.innerHTML = "you:" + x;

            resetBoard();
}
function unflipCards(){
    lockBoard = true;
           setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
           resetBoard();
            }, 150);
    
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos =  Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard))