
function playGame (playerInput){
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

    //     },
    //     4 * 1000
    // );
}

// document.getElementById("ressetto").addEventListener('click', function (){ 
//     playerInput = 4
//     animationPlayer (playerInput)
// });
var BGM = document.getElementById("mussik");
BGM.autoplay = true;
BGM.volume = 0.2;

var oops  = document.getElementById("oops");


var youwin  = document.getElementById("YouWin");

var draw = document.getElementById("draw");

let randomNumber = Math.floor(Math.random() * 3 + 1);
    
console.log('Wylosowana liczba to: ' + randomNumber);

document.getElementById("Play-Kamień").addEventListener('click', function (){ 
    console.log ("0");
    playerInput = 1,
    console.log ("1");
    compMoveAnimation(randomNumber)
    console.log ("2");
    animationPlayer (playerInput)
    console.log ("3");
    playGame (playerInput)
    console.log ("4");
});

document.getElementById("Play-Papier").addEventListener('click', function (){ 
    playerInput = 2,
    playGame (playerInput)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});

document.getElementById("Play-Nożyce").addEventListener('click', function (){ 
    playerInput = 3,
    playGame (playerInput)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});




