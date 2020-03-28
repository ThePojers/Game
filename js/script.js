{
    const playGame =  function(playerInput, randomNumber){
        // ruch komputera
        clearMessages()
        const argComputerMove = getMoveName(randomNumber);
        printMessageComp(argComputerMove);

        // ruch gracza
        console.log('Gracz wpisał: ' + playerInput);
        const argPlayerMove = getMoveName(playerInput);
        printMessagePlayer(argPlayerMove);

        // Wynik gry
        displayResults(argComputerMove, argPlayerMove);
    }
    let hardmode = document.getElementById("witcher1");
    hardmode = true;
    console.log (hardmode);
    document.getElementById("witcher1").addEventListener('click', function (){
        hardmode= !hardmode;
    });
    const randomComputerMove = function(hardmode, playerInput){
        if(hardmode == true){
            console.log ("normaMode");
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            console.log('Wylosowana liczba to: ' + randomNumber); 
            return randomNumber;
        } else if (hardmode == false && playerInput == 1) {
            const randomNumberStart = Math.random() * 3 + 1;
            console.log ("hardmode");
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            if (randomNumberStart > 1.35 && randomNumberStart < 2 || randomNumberStart > 3 && randomNumberStart < 3.65 ){
                return 2;
            } else {
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                const randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber); 
                return randomNumber;
            }
        } else if (hardmode == false && playerInput == 2) {
            const randomNumberStart = Math.random() * 3 + 1;
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            if (randomNumberStart > 1.35 && randomNumberStart < 2.65){
                return 3;
            } else {
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                const randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                return randomNumber;
            }   
        } else if (hardmode == false && playerInput == 3) {
            const randomNumberStart = Math.random() * 3 + 1;
            console.log('Wylosowana liczba to: ' + randomNumberStart);
            if (randomNumberStart > 2.35 && randomNumberStart < 3.65 ){
                return 1;
            } else {
                console.log('Wylosowana liczba to: ' + randomNumberStart);
                const randomNumber = Math.floor(randomNumberStart);
                console.log('zaokrąglona liczba to ' + randomNumber);
                return randomNumber;  
            }
        }
    }

    document.getElementById("Play-scissors").addEventListener('click', function(){
        const playerInput = 3,
        randomNumber = randomComputerMove(hardmode, playerInput)
        console.log (randomNumber);
        playGame(playerInput, randomNumber)
        compMoveAnimation(randomNumber)
        animationPlayer(playerInput)
    });
    document.getElementById("Play-paper").addEventListener('click', function(){
        const playerInput = 2,
        randomNumber = randomComputerMove(hardmode, playerInput)
        playGame(playerInput, randomNumber)
        compMoveAnimation(randomNumber)
        animationPlayer(playerInput)
    });
    document.getElementById("Play-stone").addEventListener('click', function(){
        const playerInput = 1,
        randomNumber = randomComputerMove(hardmode, playerInput)
        playGame(playerInput, randomNumber)
        compMoveAnimation(randomNumber)
        animationPlayer(playerInput)
    });
}