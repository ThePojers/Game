// ruch komputera 

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'Kamień';
} else if (randomNumber == 2){
    computerMove = 'Papier';
} else {
    computerMove = 'Nożyce';
}
*/

printMessage('Mój ruch to: ' + argComputerMove);

// ruch gracza 

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'Kamień';
} else if(playerInput == '2'){
    playerMove = 'Papier';
} else if (playerInput == '3'){
    playerMove = 'Nożyce';
} else {
     playerMove = 'Drogi użytkowniku. Wybrałeś liczbe z poza przedziału. Spróbuj ponownie';
}
*/

printMessage('Twój ruch to: ' + argPlayerMove);

/*
if( computerMove == 'Kamień' && playerMove == 'Papier'){
    printMessage('Owijasz kamień i rzucasz nim daleko. Gratulacje wygrałeś!');
  } else if (computerMove == 'Kamień' && playerMove == 'Nożyce'){
      printMessage('Panie, twoje ostrza zostały stępnione przez twardość kamienia. Przegrałeś :(');
  } else if (computerMove == 'Kamień' && playerMove == 'Kamień'){
    printMessage('Remis');
  } else if (computerMove == 'Papier' && playerMove == 'Kamień'){
    printMessage('Zostałeś owinięty i rzucony jak taki kamień co go nikt nie chciał. Przegrałeś :(');
  } else if (computerMove == 'Papier' && playerMove == 'Nożyce'){
    printMessage('Pamiętasz jak robiłeś sobie kanapki na śniadnie? Przecięcie tego papieru było dla ciebie jak bułka z masłem:D Wygrywasz!');
  } else if (computerMove == 'Papier' && playerMove == 'Papier'){
    printMessage('Remis');
  } else if (computerMove == 'Nożyce' && playerMove == 'Papier'){
    printMessage('Ajajaj... jedyne co z ciebie zostało to strzępki. Przegrałeś :(');
  } else if (computerMove == 'Nożyce' && playerMove == 'Kamień'){
    printMessage('Chyba wystarczająco go utemperowałeś. Wygrywasz!');
  } else if (computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('Remis');
  } else {
    printMessage('Brak możliwości sprawdzenia wyniku ERROR@#%$ co sie dzieje. SKshhT...');
  }
 */

printMessage(displayResults);
  