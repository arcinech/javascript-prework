let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == 1) {
    playerMove = 'kamień';
} else if (playerInput == 2) {
    playerMove = 'papier';
} else if (playerInput == 3) {
    playerMove = 'nożyce';
} else {
    printMessage('Nie znam takiego ruchu.');
}

printMessage('Twój ruch to: ' + playerMove);

printMessage('Mój ruch to: ' + computerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Wygrywam!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Wygrywam!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Wygrywam!');
} else if (computerMove == playerMove) {
    printMessage('Remis!');
} else {
    printMessage('Nie umiesz czytać?! Przegrywasz walkowerem.');
}
