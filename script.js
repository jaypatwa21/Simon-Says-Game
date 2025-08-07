let gameSeq=[];
let userSeg=[];
let btns=["yellow", "purple", "red", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started === false){
        console.log("Game started");
        started = true;
        level = 0;
        gameSeq = [];
        userSeg = [];
        levelUp();
    }
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeg = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log("Game sequence:", gameSeq);
    
    // Flash the new button for this level
    setTimeout(() => {
        btnFlash(randomBtn);
    }, 500);
}


function checkAns() {
    // Check if the current user input matches the game sequence at this position
    let currentIdx = userSeg.length - 1;
    
    if (userSeg[currentIdx] !== gameSeq[currentIdx]) {
        // Wrong button pressed
        h2.innerText = `Game Over! Your score was ${level}. Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        started = false;
        level = 0;
        gameSeq = [];
        return;
    }
    
    // If we reach here, the current button is correct
    if (userSeg.length === gameSeq.length) {
        // User completed the sequence correctly
        setTimeout(levelUp, 1000);
    }
}

function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeg.push(userColor);
    
    userFlash(btn); // Flash the button when clicked
    
    checkAns(); // Check the answer after each click
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
