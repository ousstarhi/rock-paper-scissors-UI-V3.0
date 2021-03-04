const playerChoices = document.querySelectorAll('#player-section img');
playerChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        choice.classList.add('playing');
    });
    choice.addEventListener('transitionend', () => {
        choice.classList.remove('playing');
    });
});

