
function animationPlayer(playerInput) {
    if( playerInput == 1) {
        document.getElementById("button").style.display = "none";
        document.getElementById("kamieńfinish").style.display = "none";
        document.getElementById("kamień").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
              document.getElementById("kamień").style.display = "none";
              document.getElementById("kamieńfinish").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
              document.getElementById("kamieńfinish").style.display = "none";
              document.getElementById("start").style.display = "block";
              document.getElementById("button").style.display = "block";
            },
            3 * 1000
          );
    }
    else if( playerInput == 2) {
        document.getElementById("button").style.display = "none";
        document.getElementById("papierfinish").style.display = "none";
        document.getElementById("papier").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
              document.getElementById("papier").style.display = "none";
              document.getElementById("papierfinish").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
              document.getElementById("papierfinish").style.display = "none";
              document.getElementById("start").style.display = "block";
              document.getElementById("button").style.display = "block";
            },
            3 * 1000
          );
    }
    else if( playerInput == 3) {
        document.getElementById("button").style.display = "none";
        document.getElementById("nożycefinish").style.display = "none";
        document.getElementById("nożyce").style.display = "block";
        document.getElementById("start").style.display = "none";
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
              document.getElementById("nożyce").style.display = "none";
              document.getElementById("nożycefinish").style.display = "block";
            },
            1 * 1000
          );
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
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

