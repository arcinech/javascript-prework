function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

<<<<<<< HEAD
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = `nieznany ruch`;

    computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = 'nieznany ruch';

    playerMove= getMoveName(playerInput);
=======
    console.log('Wylosowana liczba to: 2') + randomNumber;

    let computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
>>>>>>> master

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

<<<<<<< HEAD
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
=======
        if (argComputerMove == 'kamień' && playerMove == 'papier') {
>>>>>>> master
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Wygrywam!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Nie umiesz czytać?! Przegrywasz walkowerem.');
        }
    }

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
<<<<<<< HEAD
});
=======
});
>>>>>>> master
