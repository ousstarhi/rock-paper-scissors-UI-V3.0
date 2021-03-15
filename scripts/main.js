const playerImages = document.querySelectorAll('#player-section img');
const computerImages = document.querySelectorAll('#computer-section img');
const modal = document.querySelector('#modal');
let playerChoice;
let computerChoice;
let playerScore = document.querySelector('#player-section p');
let computerScore = document.querySelector('#computer-section p');
const returnButton = document.querySelector('#modal button');
const verdict = document.querySelector('#modal h2');
const playerFinalScore = document.querySelector('#player');
const computerFinalScore = document.querySelector('#computer');

function chooseRandom() {
    return Math.floor(Math.random() * 3);
}

playerImages.forEach((image) => {
    image.addEventListener('click', playRound);
    image.addEventListener('transitionend', () => {
        image.classList.remove('playing');
    });
});

returnButton.addEventListener('click', (e) => {
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    modal.classList.remove('modal');
    playerFinalScore.textContent = "Your score is: ";
    computerFinalScore.textContent = "The computer score is: ";
})

// Playing one round
function playRound(e) {
    if (playerScore.textContent === '5' || computerScore.textContent === '5') {
        return;
    }
    e.target.classList.add('playing');
    playerChoice = e.target.dataset.choice;
    computerChoice = computerImages[chooseRandom()].dataset.choice;
    const audio = document.querySelector(`audio[data-choice ="${e.target.dataset.choice}"]`);
    audio.play();
    computerImages.forEach((image) => {
        if (image.dataset.choice === computerChoice) {
            image.classList.add('playing');
        }
        image.addEventListener('transitionend', () => {
            image.classList.remove('playing');
        });
    });
    updateScore(playerChoice, computerChoice);
    if (gameOver()) {
        verdict.textContent = getVerdict();
        playerFinalScore.textContent += playerScore.textContent;
        computerFinalScore.textContent += computerScore.textContent;
        setTimeout(showModal, 1000);
    }
}

// Updating score after each round
function updateScore(player, computer) {
    if (player === 'paper') {
        if (computer === 'rock') {
            playerScore.classList.add('score-changing')
            playerScore.textContent++;
            playerScore.addEventListener('transitionend', () => {
                playerScore.classList.remove('score-changing');
            });
        } else if (computer === 'scissors') {
            computerScore.classList.add('score-changing')
            computerScore.textContent++;
            computerScore.addEventListener('transitionend', () => {
                computerScore.classList.remove('score-changing');
            });
        }
    } else if (player === 'rock') {
        if (computer === 'scissors') {
            playerScore.classList.add('score-changing')
            playerScore.textContent++;
            playerScore.addEventListener('transitionend', () => {
                playerScore.classList.remove('score-changing');
            });
        } else if (computer === 'paper') {
            computerScore.classList.add('score-changing')
            computerScore.textContent++;
            computerScore.addEventListener('transitionend', () => {
                computerScore.classList.remove('score-changing');
            });
        }
    } else if (player === 'scissors') {
        if (computer === 'paper') {
            playerScore.classList.add('score-changing')
            playerScore.textContent++;
            playerScore.addEventListener('transitionend', () => {
                playerScore.classList.remove('score-changing');
            });
        } else if (computer === 'rock') {
            computerScore.classList.add('score-changing')
            computerScore.textContent++;
            computerScore.addEventListener('transitionend', () => {
                computerScore.classList.remove('score-changing');
            });
        }
    }
}

function gameOver() {
    return computerScore.textContent === '5' || playerScore.textContent === '5';
}

function showModal() {
        modal.classList.add('modal');
}

function getVerdict() {
    if (computerScore.textContent === '5') {
        return 'You lose!';
    } else if (playerScore.textContent === '5') {
        return 'You win!';
    }
}





