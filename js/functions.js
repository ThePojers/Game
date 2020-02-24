function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'Kamień';
} else if (randomNumber == 2){
    computerMove = 'Papier'
} else (randomNumber == 3){
    computerMove = 'Nożyce'
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'Kamień';
} else if(playerInput == '2'){
    playerMove = 'Papier';
} else (playerInput == '3'){
    playerMove = 'Nożyce';
  }

printMessage('Twój ruch to: ' + playerMove);


