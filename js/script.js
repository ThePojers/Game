
function playGame (playerInput, randomNumber){
        // ruch komputera 

        clearMessages()

        let argComputerMove = getMoveName(randomNumber);

        printMessageComp(argComputerMove);

        // ruch gracza 

        console.log('Gracz wpisał: ' + playerInput);

        let argPlayerMove = getMoveName(playerInput);

        printMessagePlayer(argPlayerMove);

        // Wynik gry 

        displayResults(argComputerMove, argPlayerMove);

}

// document.getElementById("ressetto").addEventListener('click', function (){ 
//     playerInput = 4
//     animationPlayer (playerInput)
// });

// Music
var BGM = document.getElementById("mussik");
BGM.autoplay = true;
BGM.volume = 0.2;

var oops  = document.getElementById("oops");


var youwin  = document.getElementById("YouWin");

var draw = document.getElementById("draw");




document.getElementById("Play-Kamień").addEventListener('click', function (){ 
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    playerInput = 1,
    console.log ("1");
    compMoveAnimation(randomNumber)
    console.log ("random w animacji" + randomNumber);
    animationPlayer (playerInput)
    console.log ("3");
    playGame (playerInput, randomNumber)
    console.log ("4");
});

document.getElementById("Play-Papier").addEventListener('click', function (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    playerInput = 2,
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});

document.getElementById("Play-Nożyce").addEventListener('click', function (){ 
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    playerInput = 3,
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});


