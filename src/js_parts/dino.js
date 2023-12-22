const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const game = document.querySelector(".Gdino");

game.addEventListener("click", ()=> {
    startGame()
    jump();
})
dino.classList.add("dinoDead")

function startGame () {
    cactus.classList.add("cactusMove");
    dino.classList.add("dinoRun");
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
    
    if (cactusleft < 50 && cactusleft > 0 && dinoTop >= 249) {
        dino.classList.add("dinoDead")
        alert("Game Over")
    }
})