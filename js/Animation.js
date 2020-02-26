
function animationPlayer(playerInput) {
    if( playerInput == 1) {
        document.getElementById("kamień").style.display = "block";
        document.getElementById("nomove").style.display = "none";
        setTimeout(
            () => {
              console.log('Hello after 4 seconds');
              document.getElementById("kamień").style.display = "none";
              document.getElementById("nomove").style.display = "block";
            },
            1 * 1000
          );
    }
}