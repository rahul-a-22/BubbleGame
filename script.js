var timmer = 60;
var score = 0;
var hitRn;

function makeBubble(){
    var clutter = "";

    for(var i=1;i<=126;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
        //console.log(clutter);
    }
    document.querySelector('#pbottom').innerHTML = clutter;
}

function timmerSet(){
    var timmerInt = setInterval(function(){
        if(timmer>0){
            timmer--;
            document.querySelector('.timmer').textContent = timmer;
        }
        else{
            clearInterval(timmerInt);
            document.querySelector('#pbottom').innerHTML = `<h1>Game Over...!</h1><h2>Your Score is ${score}</h2><button>Reset game</button>`;
            document.querySelector('#pbottom').style.display = 'grid';
            document.querySelector('button').addEventListener('click',function(){
                location.reload();
            });
        }
    },1000);
}

document.querySelector('#start').addEventListener('click',function(){
    document.querySelector('#startBtn').innerHTML='';
    timmerSet();
    getNewHit();
    makeBubble();
    document.querySelector('#startBtn').style.padding = '0px';
});

function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector('.hit').textContent = hitRn;
}

function increaseScore(){
    score += 10;
    document.querySelector('.score').textContent = score;
}

document.querySelector('#pbottom').addEventListener('click',function(details){
    //console.log(Number(details.target.textContent));
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});