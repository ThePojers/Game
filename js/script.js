
function playGame (playerInput){
    // ruch komputera 
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    // ruch gracza 

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    // Wynik gry 

    displayResults(argComputerMove, argPlayerMove);
}

// document.getElementById("ressetto").addEventListener('click', function (){ 
//     playerInput = 4
//     animationPlayer (playerInput)
// });

document.getElementById("Play-Kamień").addEventListener('click', function (){ 
    playerInput = 1,
    playGame (playerInput)
    animationPlayer (playerInput)
});

document.getElementById("Play-Papier").addEventListener('click', function (){ 
    playerInput = 2,
    playGame (playerInput)
    animationPlayer (playerInput)
});

document.getElementById("Play-Nożyce").addEventListener('click', function (){ 
    playerInput = 3,
    playGame (playerInput)
    animationPlayer (playerInput)
});




