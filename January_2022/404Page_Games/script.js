/* Variable Initialization */
var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
var scoreSpan = document.getElementById('score');
var scoreAdded = false;
var collisionDetected = false;

document.addEventListener("click",jump);

function jump(){
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    character.src = 'c_jump.png'
    setTimeout(removeJump,275);
};

function removeJump(){
    character.classList.remove("animate");

    character.src = 'character.png'
}

function collisionDetection(){
    var cbc = character.getBoundingClientRect();
    var bbc = block.getBoundingClientRect();

    if(cbc.bottom > 226 && (bbc.left >= cbc.left && bbc.left <= cbc.left+40) && !collisionDetected)
        triggerDetection(collisionDetected = true);
    
    else if(bbc.left < cbc.left && !collisionDetected && !scoreAdded)
        addScore(score++, scoreAdded = true);
    requestAnimationFrame(collisionDetection);
}

function triggerDetection(collisionDetected){
    scoreSpan.innerHTML = "Game Over | Score = " + score;
}

function addScore(scoreReceived, scoreAddedReceived){
    setTimeout(function(){
        scoreAdded = false;
        scoreSpan.innerHTML = score;
    },360)
}

requestAnimationFrame(collisionDetection);

