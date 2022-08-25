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
let computer = true;
let person = true;
displayTurn();
function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this; 
        // console.log(this);
        return
    } 
        //second click
        secondCard = this;
        checkForMatch();
        if (turn == false){setTimeout(NPC, 1500);}
        
}
// console.log(resetBtn);


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    // console.log(firstCard.dataset.framework)
    isMatch ? disableCards() : unflipCards();
       switchPlayer()
       gameCheck()
}       
function switchPlayer(){
    if(turn == true){
        // setTimeout(NPC, 1500);
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
    let n = 0;
    let i = Math.floor(Math.random()*16);
    let flipCheck = document.getElementById(i).classList;
    while(flipCheck == "card flip"){
        i = Math.floor(Math.random()*16);
        flipCheck = document.getElementById(i).classList;
        flipCheck = document.getElementById(i).classList;
        console.log(flipCheck);
    }    console.log(i);
        document.getElementById(i).click();
    setTimeout(function() {
       n = Math.floor(Math.random()*16);
       let flipCheck2 = document.getElementById(n).classList;
    while(i == n || flipCheck2 == "card flip"){
        console.log(i,n,(flipCheck2 == 'card flip'));
        n = Math.floor(Math.random()*16);
        flipCheck2 = document.getElementById(n).classList;
        console.log(n);
    }   console.log(n);
        document.getElementById(n).click();
        computer = false;
       }, 100);}
    
function displayTurn(){
        if(turn == true){
            CPU.classList.remove('turn');
            player.classList.add('turn');
        }else if (turn == false){
            player.classList.remove('turn');
            CPU.classList.add('turn');  
        }
    }
    let msg = document.getElementById("endState")
    console.log(msg);
function gameCheck(){
    let msg = document.getElementById("endState")
    if(x+y == 8){
        turn = true;
         document.getElementById("end-game").style.opacity = "1";
        document.getElementById("end-game").style.zIndex = "1";
     if(x>y){
       msg.innerHTML = "You win!"
    }else if(x<y){
       msg.innerHTML = "CPU win"
    }else{
       msg.innerHTML = 'Tie'
    }
}
   
}

function reset(){ window.location.reload();}
resetBtn.forEach(btn => btn.addEventListener('click', reset ))
cards.forEach(card => card.addEventListener('click', flipCard))
