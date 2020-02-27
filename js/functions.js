function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printMessagePlayer(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messagesplayer').appendChild(div);
}

function printMessageComp(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messagescomputer').appendChild(div);
}

function clearMessages(){
	document.getElementById('messagescomputer').innerHTML = '';
	document.getElementById('messagesplayer').innerHTML = '';
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'Kamień';
	} else if (argMoveId == 2){
	  return 'Papier';
	} else if (argMoveId == 3){
	  return 'Nożyce';
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'Drogi użytkowniku. Wybrałeś liczbe z poza przedziału. Spróbuj ponownie';
	}
}

function displayResults(argComputerMove, argPlayerMove) {
	if(argComputerMove == 'Kamień' && argPlayerMove == 'Papier'){
		youwin.play()
		printMessage('Owijasz kamień i rzucasz nim daleko. Gratulacje wygrałeś!');
	  } else if (argComputerMove == 'Kamień' && argPlayerMove == 'Nożyce'){
		oops.play()
		printMessage('Panie, twoje ostrza zostały stępnione przez twardość kamienia. Przegrałeś :(');
	  } else if (argComputerMove == 'Kamień' && argPlayerMove == 'Kamień'){
		draw.play()
		printMessage('Remis');
	  } else if (argComputerMove == 'Papier' && argPlayerMove == 'Kamień'){
		oops.play()
		printMessage('Zostałeś owinięty i rzucony jak taki kamień co go nikt nie chciał. Przegrałeś :(');
	  } else if (argComputerMove == 'Papier' && argPlayerMove == 'Nożyce'){
		youwin.play()
		printMessage('Pamiętasz jak robiłeś sobie kanapki na śniadnie? Przecięcie tego papieru było dla ciebie jak bułka z masłem:D Wygrywasz!');
	  } else if (argComputerMove == 'Papier' && argPlayerMove == 'Papier'){
		draw.play()
		printMessage('Remis');
	  } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Papier'){
		oops.play()
		printMessage('Ajajaj... jedyne co z ciebie zostało to strzępki. Przegrałeś :(');
	  } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Kamień'){
		youwin.play()
		printMessage('Chyba wystarczająco go utemperowałeś. Wygrywasz!');
	  } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Nożyce'){
		draw.play()
		printMessage('Remis');
	  } else {
		printMessage('Brak możliwości sprawdzenia wyniku ERROR@#%$ co sie dzieje. SKshhT...');
	  }
}

