
function animationPlayer(playerInput) {
    if( playerInput == 1) {
        document.getElementById("messagesplayer").style.display = "none";
        document.getElementById("messagescomputer").style.display = "none";
        document.getElementById("messages").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("kamieńfinish").style.display = "none";
        document.getElementById("kamień").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              // console.log('ime player');
              document.getElementById("kamień").style.display = "none";
              document.getElementById("kamieńfinish").style.display = "block";
              document.getElementById("messagesplayer").style.display = "block";
              document.getElementById("messagescomputer").style.display = "block";
              document.getElementById("messages").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("kamieńfinish").style.display = "none";
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
        document.getElementById("papierfinish").style.display = "none";
        document.getElementById("papier").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("papier").style.display = "none";
              document.getElementById("papierfinish").style.display = "block";
              document.getElementById("messagesplayer").style.display = "block";
              document.getElementById("messagescomputer").style.display = "block";
              document.getElementById("messages").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("papierfinish").style.display = "none";
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
        document.getElementById("nożycefinish").style.display = "none";
        document.getElementById("nożyce").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("nożyce").style.display = "none";
              document.getElementById("nożycefinish").style.display = "block";
              document.getElementById("messagesplayer").style.display = "block";
              document.getElementById("messagescomputer").style.display = "block";
              document.getElementById("messages").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              // console.log('Hello after 4 seconds');
              document.getElementById("nożycefinish").style.display = "none";
              document.getElementById("start").style.display = "block";
              document.getElementById("button").style.display = "block";
            },
            3 * 1000
          );
    }
}
    // }
    // else if(playerInput == 4) {
    //     clearMessages()
    //     document.getElementById("nożycefinish").style.display = "none";
    //     document.getElementById("papierfinish").style.display = "none";
    //     document.getElementById("kamieńfinish").style.display = "none";
    //     document.getElementById("start").style.display = "block";
    // }

function compMoveAnimation(randomNumber) {
    if( randomNumber == 1) {
        document.getElementById("kamieńfinishright").style.display = "none";
        document.getElementById("kamieńright").style.display = "block";
        document.getElementById("startright").style.display = "none";
        setTimeout(
            () => {
                // console.log('Time comp');
                document.getElementById("kamieńright").style.display = "none";
                document.getElementById("kamieńfinishright").style.display = "block";
            },
            1 * 1000
            );
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("kamieńfinishright").style.display = "none";
                document.getElementById("startright").style.display = "block";
            },
            3 * 1000
            );
    }
    else if( randomNumber == 2) {
        document.getElementById("papierfinishright").style.display = "none";
        document.getElementById("papierright").style.display = "block";
        document.getElementById("startright").style.display = "none";
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("papierright").style.display = "none";
                document.getElementById("papierfinishright").style.display = "block";
            },
            1 * 1000
            );
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("papierfinishright").style.display = "none";
                document.getElementById("startright").style.display = "block";
            },
            3 * 1000
            );
    }
    else if( randomNumber == 3) {
        document.getElementById("nożycefinishright").style.display = "none";
        document.getElementById("nożyceright").style.display = "block";
        document.getElementById("startright").style.display = "none";
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("nożyceright").style.display = "none";
                document.getElementById("nożycefinishright").style.display = "block";
            },
            1 * 1000
            );
        setTimeout(
            () => {
                // console.log('Hello after 4 seconds');
                document.getElementById("nożycefinishright").style.display = "none";
                document.getElementById("startright").style.display = "block";
            },
            3 * 1000
            );
    }
}