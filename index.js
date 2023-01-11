var score=0

document.onkeydown=function(e){
    if(e.keyCode==38){
        countScore();
        
        var dino=document.querySelector(".dino");
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
        
        
    }
}


setInterval(() => {
    dino=document.querySelector(".dino");
    gameOver=document.querySelector('.gameOver');
    obstacles=document.querySelector('.obstacles');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('top'));
    ofsetx=Math.abs(dx-ox);
    ofsety=Math.abs(dy-oy);
    if(ofsetx<100 && ofsety<70){
        
        var dino=document.querySelector(".obstacles");
        dino.classList.remove('obstaclesAni');
        gameOver.style.visibility="visible";
    }
}, 100);

function countScore(){
    
    score=score+10;
    document.getElementsByClassName("score")[0].innerHTML=score;
    return

}