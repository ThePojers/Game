
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

var BGM = document.getElementById("mussik");
BGM.autoplay = false;
BGM.volume = 0.2;

var oops  = document.getElementById("oops");


var youwin  = document.getElementById("YouWin");

var draw = document.getElementById("draw");

let hardmode = document.getElementById("witcher1");

hardmode = true;
console.log (hardmode);

document.getElementById("witcher1").addEventListener('click', function (){
 hardmode= !hardmode;
});

function numberMode (hardmode, playerInput){
    if(hardmode == true){
        console.log ("normaMode");
        var randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber); 
        return randomNumber;
        }
    else if (hardmode == false && playerInput == 1) {
        var randomNumberStart = Math.random() * 3 + 1;
        console.log ("hardmode");
        console.log('Wylosowana liczba to: ' + randomNumberStart);
        (function () {
            if (randomNumberStart > 1.35 && randomNumberStart < 2 || randomNumberStart > 3 && randomNumberStart < 3.65 ){
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                var randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                randomNumber = 2;
                console.log('zmieniuona liczba to  ' + randomNumber);
            }
            else {
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                var randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber); 
            }
        })()
        return randomNumber;
    }
    else if (hardmode == false && playerInput == 2) {
        var randomNumberStart = Math.random() * 3 + 1;
        console.log('Wylosowana liczba to: ' + randomNumberStart);
        (function () {
            if (randomNumberStart > 1.35 && randomNumberStart < 2.65){
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                var randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                randomNumber = 3;
                console.log('zmieniuona liczba to  ' + randomNumber);
                
            }
            else {
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                var randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                
            }
        })()
        return randomNumber;
    }
    else if (hardmode == false && playerInput == 3) {
        var randomNumberStart = Math.random() * 3 + 1;
        console.log('Wylosowana liczba to: ' + randomNumberStart);
        (function () {
            if (randomNumberStart > 2.35 && randomNumberStart < 3.65 ){
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                var randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                randomNumber = 1;
                console.log('zmieniuona liczba to  ' + randomNumber);
                
            }
            else {
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                var randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                
            }
        })()
        return randomNumber;
    }
}



document.getElementById("Play-Nożyce").addEventListener('click', function (){
    playerInput = 3,
    randomNumber = numberMode (hardmode, playerInput)
    console.log (randomNumber);
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});

document.getElementById("Play-Papier").addEventListener('click', function (){
    playerInput = 2,
    randomNumber = numberMode (hardmode, playerInput)
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});

document.getElementById("Play-Kamień").addEventListener('click', function (){
    playerInput = 1,
    randomNumber = numberMode (hardmode, playerInput)
    playGame (playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer (playerInput)
});



        

// function veryhardmode(hardmode) {
//         console.log ("nieparzyste");
//         // hard mode 74% na wygraną close enough
//         document.getElementById("Play-Kamień").addEventListener('click', function (){
//             var randomNumberStart = Math.random() * 3 + 1;
//             function takietamprocenty (randomNumberStart) {
//                 if(randomNumberStart > 1.35 && randomNumberStart < 2 || randomNumberStart > 3 && randomNumberStart < 3.65 ){
//                     console.log('Wylosowana liczba to: ' + randomNumberStart);
//                     var randomNumber = Math.floor(randomNumberStart);
//                     console.log('zaokrąglona liczba to ' + randomNumber);
//                     randomNumber = 2;
//                     console.log('zmieniuona liczba to  ' + randomNumber);
//                     playerInput = 1,
//                     playGame (playerInput, randomNumber)
//                     compMoveAnimation(randomNumber)
//                     animationPlayer (playerInput)
//                 }
//                 else {
//                     console.log('Wylosowana liczba to: ' + randomNumberStart);
//                     var randomNumber = Math.floor(randomNumberStart);
//                     console.log('zaokrąglona liczba to ' + randomNumber);
//                     playerInput = 1,
//                     playGame (playerInput, randomNumber)
//                     compMoveAnimation(randomNumber)
//                     animationPlayer (playerInput)
//                 }
//             };
//         takietamprocenty (randomNumberStart)
//         });

//         document.getElementById("Play-Papier").addEventListener('click', function (){
//             var randomNumberStart = Math.random() * 3 + 1;
//             function takietamprocenty (randomNumberStart) {
//                 if(randomNumberStart > 1.35 && randomNumberStart < 2.65 ){
//                     console.log('Wylosowana liczba to: ' + randomNumberStart);
//                     var randomNumber = Math.floor(randomNumberStart);
//                     console.log('zaokrąglona liczba to ' + randomNumber);
//                     randomNumber = 3;
//                     console.log('zmieniuona liczba to  ' + randomNumber);
//                     playerInput = 2,
//                     playGame (playerInput, randomNumber)
//                     compMoveAnimation(randomNumber)
//                     animationPlayer (playerInput)
//                 }
//                 else {
//                     console.log('Wylosowana liczba to: ' + randomNumberStart);
//                     var randomNumber = Math.floor(randomNumberStart);
//                     console.log('zaokrąglona liczba to ' + randomNumber);
//                     playerInput = 2,
//                     playGame (playerInput, randomNumber)
//                     compMoveAnimation(randomNumber)
//                     animationPlayer (playerInput)
//                 }
//             };
//         takietamprocenty (randomNumberStart)
//         });

//         document.getElementById("Play-Nożyce").addEventListener('click', function (){
//             var randomNumberStart = Math.random() * 3 + 1;
//             function takietamprocenty (randomNumberStart) {
//                 if(randomNumberStart > 2.35 && randomNumberStart < 3.65 ){
//                     console.log('Wylosowana liczba to: ' + randomNumberStart);
//                     var randomNumber = Math.floor(randomNumberStart);
//                     console.log('zaokrąglona liczba to ' + randomNumber);
//                     randomNumber = 1;
//                     console.log('zmieniuona liczba to  ' + randomNumber);
//                     playerInput = 3,
//                     playGame (playerInput, randomNumber)
//                     compMoveAnimation(randomNumber)
//                     animationPlayer (playerInput)
//                 }
//                 else {
//                     console.log('Wylosowana liczba to: ' + randomNumberStart);
//                     var randomNumber = Math.floor(randomNumberStart);
//                     console.log('zaokrąglona liczba to ' + randomNumber);
//                     playerInput = 3,
//                     playGame (playerInput, randomNumber)
//                     compMoveAnimation(randomNumber)
//                     animationPlayer (playerInput)
//                 }
//             };
//         takietamprocenty (randomNumberStart)
//         });
//         document.getElementById("Play-Nożyce").removeEventListener('click', function (){
//             let randomNumber = Math.floor(Math.random() * 3 + 1);

//             console.log('Wylosowana liczba to: ' + randomNumber);
//             playerInput = 3,
//             playGame (playerInput, randomNumber)
//             compMoveAnimation(randomNumber)
//             animationPlayer (playerInput)
//         });
//         console.log ("dupa 0 ");
//         document.getElementById("Play-Papier").removeEventListener('click', function (){
//             let randomNumber = Math.floor(Math.random() * 3 + 1);

//             console.log('Wylosowana liczba to: ' + randomNumber);
//             playerInput = 2,
//             playGame (playerInput, randomNumber)
//             compMoveAnimation(randomNumber)
//             animationPlayer (playerInput)
//         });
//         console.log ("dupa 1");
//         document.getElementById("Play-Kamień").removeEventListener('click', function (){
//             let randomNumber = Math.floor(Math.random() * 3 + 1);

//             console.log('Wylosowana liczba to: ' + randomNumber);
//             playerInput = 1,
//             playGame (playerInput, randomNumber)
//             compMoveAnimation(randomNumber)
//             animationPlayer (playerInput)
//         });
//         // if (hardmode % 2 == 0) {
//         //     console.log ("wychodzę");
//         //     return;
            
//         // }

// }