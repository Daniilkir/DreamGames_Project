const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const game = document.querySelector(".Gdino");
let isBtnPres = true;

if (isBtnPres) {
    game.addEventListener("click", ()=> {
        dino.classList.add("dinoDead")
        startGame()
        jump();
        isBtnPres = false
    })
    setTimeout(()=> {
        isBtnPres = true;
    }, 500)
}
dino.classList.add("dinoDead")

function startGame () {
    cactus.classList.add("cactusMove");
    dino.classList.add("dinoRun");
}

function endGame () {
    cactus.classList.remove("cactusMove");
    dino.classList.remove("dinoRun");
    dino.classList.add("dinoDead")
}

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (()=> {
        dino.classList.remove("jump")
    }, 750)
}

let isAlive = setInterval (()=> {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusleft < 40 && cactusleft > 0 && dinoTop >= 90) {
        endGame()
    }
})