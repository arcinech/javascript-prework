{
const playGame = function(playerInput) {

    clearMessages();

    const getMoveName = function(argMoveId) {
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
    },
    displayResult = function(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        const playerWin = function(){
            printMessage('Ty wygrywasz!');
        },
        playerLoss = function(){
            printMessage('Wygrywam!');
        };

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            playerWin();
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            playerLoss();
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            playerLoss();
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            playerWin();
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            playerWin();
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            playerLoss();
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Nie umiesz czytać?! Przegrywasz walkowerem.');
        }
    },
    randomNumber = Math.floor(Math.random() * 3 + 1),
    computerMove = getMoveName(randomNumber),
    playerMove = getMoveName(playerInput);

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
});
}