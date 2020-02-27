
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
BGM.autoplay = false;
BGM.volume = 0.2;

var oops  = document.getElementById("oops");


var youwin  = document.getElementById("YouWin");

var draw = document.getElementById("draw");

let hardmode = document.getElementById("witcher1");

hardmode = 0;
console.log (hardmode);


document.getElementById("witcher1").addEventListener('click', function (){
    hardmode = hardmode + 1;
    console.log (hardmode);
    // mode(hardmode)
});

    if (hardmode % 2 == 0) {
        console.log ("parzyste");
    }

// function mode(hardmode) {
//     if (hardmode % 2 == 0) {
//         console.log ("parzyste");
//     }
//     else if (hardmode % 2 == 1){
//         console.log ("nieparzyste");
//     }
// };

// switch (hardmode) {
//     case hardmode = hardmode % 2 == 0:
//         console.log ("parzyste");
//     break;
//     case hardmode % 2 == 1:
//         console.log ("parzyste");
//     break;
// }



console.log (hardmode);

// hard mode 74% na wygraną close enough
document.getElementById("Play-Kamień").addEventListener('click', function (){
    var randomNumberStart = Math.random() * 3 + 1;
    function takietamprocenty (randomNumberStart) {
        if(randomNumberStart > 1.35 && randomNumberStart < 2 || randomNumberStart > 3 && randomNumberStart < 3.65 ){
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            randomNumber = 2;
            console.log('zmieniuona liczba to  ' + randomNumber);
            playerInput = 1,
            playGame (playerInput, randomNumber)
            compMoveAnimation(randomNumber)
            animationPlayer (playerInput)
        }
        else {
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            playerInput = 1,
            playGame (playerInput, randomNumber)
            compMoveAnimation(randomNumber)
            animationPlayer (playerInput)
        }
    };
takietamprocenty (randomNumberStart)
});

document.getElementById("Play-Papier").addEventListener('click', function (){
    var randomNumberStart = Math.random() * 3 + 1;
    function takietamprocenty (randomNumberStart) {
        if(randomNumberStart > 1.35 && randomNumberStart < 2.65 ){
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            randomNumber = 3;
            console.log('zmieniuona liczba to  ' + randomNumber);
            playerInput = 2,
            playGame (playerInput, randomNumber)
            compMoveAnimation(randomNumber)
            animationPlayer (playerInput)
        }
        else {
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            playerInput = 2,
            playGame (playerInput, randomNumber)
            compMoveAnimation(randomNumber)
            animationPlayer (playerInput)
        }
    };
takietamprocenty (randomNumberStart)
});

document.getElementById("Play-Nożyce").addEventListener('click', function (){
    var randomNumberStart = Math.random() * 3 + 1;
    function takietamprocenty (randomNumberStart) {
        if(randomNumberStart > 2.35 && randomNumberStart < 3.65 ){
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            randomNumber = 1;
            console.log('zmieniuona liczba to  ' + randomNumber);
            playerInput = 3,
            playGame (playerInput, randomNumber)
            compMoveAnimation(randomNumber)
            animationPlayer (playerInput)
        }
        else {
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            playerInput = 3,
            playGame (playerInput, randomNumber)
            compMoveAnimation(randomNumber)
            animationPlayer (playerInput)
        }
    };
takietamprocenty (randomNumberStart)
});

// normal mode

document.getElementById("Play-Nożyce").addEventListener('click', function (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);
    playerInput = 3,
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});

document.getElementById("Play-Papier").addEventListener('click', function (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);
    playerInput = 2,
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});


document.getElementById("Play-Kamień").addEventListener('click', function (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);
    playerInput = 1,
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});
