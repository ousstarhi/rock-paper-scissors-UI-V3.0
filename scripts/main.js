const playerImages = document.querySelectorAll('#player-section img');
const computerImages = document.querySelectorAll('#computer-section img');
let playerChoice;
let computerChoice;

playerImages.forEach((image) => {
    image.addEventListener('click', () => {
        image.classList.add('playing');
        playerChoice = image.dataset.choice;
        const n = chooseRandom();
        computerChoice = computerImages[n].dataset.choice;
        console.log(computerChoice);
        console.log(playerChoice);
    });
    image.addEventListener('transitionend', () => {
        image.classList.remove('playing');
    });
});
function chooseRandom() {
    return Math.floor(Math.random() * 3);
}

let playerScore = document.querySelector('#player-section p');
let computerScore = document.querySelector('#computer-section p');



