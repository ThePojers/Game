function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
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
	if( argComputerMove == 'Kamień' && argPlayerMove == 'Papier'){
		printMessage('Owijasz kamień i rzucasz nim daleko. Gratulacje wygrałeś!');
	  } else if (argComputerMove == 'Kamień' && argPlayerMove == 'Nożyce'){
		  printMessage('Panie, twoje ostrza zostały stępnione przez twardość kamienia. Przegrałeś :(');
	  } else if (argComputerMove == 'Kamień' && argPlayerMove == 'Kamień'){
		printMessage('Remis');
	  } else if (argComputerMove == 'Papier' && argPlayerMove == 'Kamień'){
		printMessage('Zostałeś owinięty i rzucony jak taki kamień co go nikt nie chciał. Przegrałeś :(');
	  } else if (argComputerMove == 'Papier' && argPlayerMove == 'Nożyce'){
		printMessage('Pamiętasz jak robiłeś sobie kanapki na śniadnie? Przecięcie tego papieru było dla ciebie jak bułka z masłem:D Wygrywasz!');
	  } else if (argComputerMove == 'Papier' && argPlayerMove == 'Papier'){
		printMessage('Remis');
	  } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Papier'){
		printMessage('Ajajaj... jedyne co z ciebie zostało to strzępki. Przegrałeś :(');
	  } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Kamień'){
		printMessage('Chyba wystarczająco go utemperowałeś. Wygrywasz!');
	  } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Nożyce'){
		printMessage('Remis');
	  } else {
		printMessage('Brak możliwości sprawdzenia wyniku ERROR@#%$ co sie dzieje. SKshhT...');
	  }
	}