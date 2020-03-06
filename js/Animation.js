function animationPlayer(playerInput) {
    if( playerInput == 1) {
        document.getElementById("messagesplayer").style.display = "none";
        document.getElementById("messagescomputer").style.display = "none";
        document.getElementById("messages").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("stonefinish").style.display = "none";
        document.getElementById("stone").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              // console.log('ime player');
              document.getElementById("stone").style.display = "none";
              document.getElementById("stonefinish").style.display = "block";
              document.getElementById("messagesplayer").style.display = "block";
              document.getElementById("messagescomputer").style.display = "block";
              document.getElementById("messages").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("stonefinish").style.display = "none";
              document.getElementById("start").style.display = "block";
              document.getElementById("button").style.display = "block";
            },
            3 * 1000
          );
    }
    else if( playerInput == 2) {
        document.getElementById("messagesplayer").style.display = "none";
        document.getElementById("messagescomputer").style.display = "none";
        document.getElementById("messages").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("paperfinish").style.display = "none";
        document.getElementById("paper").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("paper").style.display = "none";
              document.getElementById("paperfinish").style.display = "block";
              document.getElementById("messagesplayer").style.display = "block";
              document.getElementById("messagescomputer").style.display = "block";
              document.getElementById("messages").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("paperfinish").style.display = "none";
              document.getElementById("start").style.display = "block";
              document.getElementById("button").style.display = "block";
            },
            3 * 1000
          );
    }
    else if( playerInput == 3) {
        document.getElementById("messagesplayer").style.display = "none";
        document.getElementById("messagescomputer").style.display = "none";
        document.getElementById("messages").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("scissorsfinish").style.display = "none";
        document.getElementById("scissors").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("scissors").style.display = "none";
              document.getElementById("scissorsfinish").style.display = "block";
              document.getElementById("messagesplayer").style.display = "block";
              document.getElementById("messagescomputer").style.display = "block";
              document.getElementById("messages").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("scissorsfinish").style.display = "none";
              document.getElementById("start").style.display = "block";
              document.getElementById("button").style.display = "block";
            },
            3 * 1000
          );
    }
}

function compMoveAnimation(randomNumber) {
    if( randomNumber == 1) {
        document.getElementById("stonefinishright").style.display = "none";
        document.getElementById("stoneright").style.display = "block";
        document.getElementById("startright").style.display = "none";
        setTimeout(
            () => {
                // console.log('Time comp');
                document.getElementById("stoneright").style.display = "none";
                document.getElementById("stonefinishright").style.display = "block";
            },
            1 * 1000
            );
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("stonefinishright").style.display = "none";
                document.getElementById("startright").style.display = "block";
            },
            3 * 1000
            );
    }
    else if( randomNumber == 2) {
        document.getElementById("paperfinishright").style.display = "none";
        document.getElementById("paperright").style.display = "block";
        document.getElementById("startright").style.display = "none";
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("paperright").style.display = "none";
                document.getElementById("paperfinishright").style.display = "block";
            },
            1 * 1000
            );
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("paperfinishright").style.display = "none";
                document.getElementById("startright").style.display = "block";
            },
            3 * 1000
            );
    }
    else if( randomNumber == 3) {
        document.getElementById("scissorsfinishright").style.display = "none";
        document.getElementById("scissorsright").style.display = "block";
        document.getElementById("startright").style.display = "none";
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("scissorsright").style.display = "none";
                document.getElementById("scissorsfinishright").style.display = "block";
            },
            1 * 1000
            );
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("scissorsfinishright").style.display = "none";
                document.getElementById("startright").style.display = "block";
            },
            3 * 1000
            );
    }
}