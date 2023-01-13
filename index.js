
var score = 0;
var maxx, maxy;
var isGameover = false;

if (innerWidth <= 600) {
    maxx = 30;
    maxy = 40;
}
else {
    maxx = 200;
    maxy = 100;
}


setTimeout(() => {

    var dino = document.querySelector(".obstacles");
    dino.classList.add('obstaclesAni');
    document.getElementsByClassName("score")[0].innerHTML = score;
    playgame();

}, 3000);



function playgame() {
    document.onkeydown = function (e) {
        if (e.keyCode == 38) {
            if (!isGameover) {
                countScore();
            }


            if (!isGameover) {
                var dino = document.querySelector(".dino");
                dino.classList.add('animateDino');
                setTimeout(() => {
                    dino.classList.remove('animateDino');
                }, 700);
            }


        }
    }


    document.onclick = function () {
        if (!isGameover) {
            var dino = document.querySelector(".dino");
            dino.classList.add('animateDino');
            setTimeout(() => {
                dino.classList.remove('animateDino');
            }, 700);
        }

    }


    setInterval(() => {
        dino = document.querySelector(".dino");
        gameOver = document.querySelector('.gameOver');
        obstacles = document.querySelector('.obstacles');
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
        ox = parseInt(window.getComputedStyle(obstacles, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacles, null).getPropertyValue('top'));
        ofsetx = Math.abs(dx - ox);
        ofsety = Math.abs(dy - oy);
        if (ofsetx < maxx && ofsety < maxy) {

            var dino = document.querySelector(".obstacles");
            dino.classList.remove('obstaclesAni');
            gameOver.style.visibility = "visible";
            isGameover = true;


        }
    }, 100);

    function countScore() {

        score = score + 10;
        document.getElementsByClassName("score")[0].innerHTML = score;
        return

    }

}


document.getElementsByClassName("reload")[0].addEventListener("click", function () {
    window.location.reload();
});
