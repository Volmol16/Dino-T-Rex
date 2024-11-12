const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let gameOverScreen = null;

document.addEventListener("keydown", function(event) {
    jump()
})

function jump () {
    if(!dino.classList.contains("jump")) {
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        clearInterval(isAlive);

        gameOverScreen = document.createElement('div');
        gameOverScreen.id = 'gameOver';
        gameOverScreen.style.position = 'fixed';
        gameOverScreen.style.top = 0;
        gameOverScreen.style.left = 0;
        gameOverScreen.style.width = '100%';
        gameOverScreen.style.height = '100%';
        gameOverScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        gameOverScreen.style.display = 'flex';
        gameOverScreen.style.justifyContent = 'center';
        gameOverScreen.style.alignItems = 'center';
        gameOverScreen.style.zIndex = '1000';

        const gameOverText = document.createElement('h1')
        gameOverText.textContent = 'Game over';
        gameOverText.style.color = 'white';

        const okButton = document.createElement('button')
        okButton.textContent = 'OK';
        okButton.style.backgroundColor = 'green';
        okButton.style.color = 'white';
        okButton.style.padding = '10px 20px';
        okButton.style.border = 'none';
        okButton.style.borderRadius = '5px';
        okButton.style.cursor = 'pointer';
        okButton.style.marginLeft = '10px';

        okButton.addEventListener('click', () => {
            document.body.removeChild(gameOverScreen)
            location.reload()
        });

        gameOverScreen.appendChild(gameOverText);
        gameOverScreen.appendChild(okButton);
        document.body.appendChild(gameOverScreen)
        cactus.style.animationPlayState = 'paused';
    }
})