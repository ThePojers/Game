function playGame(playerInput, randomNumber){
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

// Muzyka
var BGM = document.getElementById("mussik");
BGM.autoplay = true;
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

function randomComputerMove(hardmode, playerInput){
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
        if (randomNumberStart > 1.35 && randomNumberStart < 2 || randomNumberStart > 3 && randomNumberStart < 3.65 ){
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            randomNumber = 2;
            console.log('zmieniuona liczba to  ' + randomNumber);
            return randomNumber;
        }
        else {
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber); 
            return randomNumber;
        }
    }
    else if (hardmode == false && playerInput == 2) {
        var randomNumberStart = Math.random() * 3 + 1;
        console.log('Wylosowana liczba to: ' + randomNumberStart);
        if (randomNumberStart > 1.35 && randomNumberStart < 2.65){
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            randomNumber = 3;
            console.log('zmieniuona liczba to  ' + randomNumber);
            return randomNumber;
        }
        else {
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            return randomNumber;
        }   
    }
    else if (hardmode == false && playerInput == 3) {
        var randomNumberStart = Math.random() * 3 + 1;
        console.log('Wylosowana liczba to: ' + randomNumberStart);
        if (randomNumberStart > 2.35 && randomNumberStart < 3.65 ){
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            randomNumber = 1;
            console.log('zmieniuona liczba to  ' + randomNumber);
            return randomNumber;
        }
        else {
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            var randomNumber = Math.floor(randomNumberStart);
            console.log('zaokrąglona liczba to ' + randomNumber);
            return randomNumber;  
        }
    }
}

document.getElementById("Play-scissors").addEventListener('click', function(){
    playerInput = 3,
    randomNumber = randomComputerMove(hardmode, playerInput)
    console.log (randomNumber);
    playGame(playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer(playerInput)
});
document.getElementById("Play-paper").addEventListener('click', function(){
    playerInput = 2,
    randomNumber = randomComputerMove(hardmode, playerInput)
    playGame(playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer(playerInput)
});
document.getElementById("Play-stone").addEventListener('click', function(){
    playerInput = 1,
    randomNumber = randomComputerMove(hardmode, playerInput)
    playGame(playerInput, randomNumber)
    compMoveAnimation(randomNumber)
    animationPlayer(playerInput)
});