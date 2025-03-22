function rollDice() {
    var player1Number = Math.floor(Math.random() * 6 + 1);
    var player2Number = Math.floor(Math.random() * 6 + 1);

    console.log("Set player 1 number to " + player1Number);
    console.log("Set player 2 number to " + player2Number);
    
    document.querySelector(".dice > .img1").setAttribute("src", "images/dice" + player1Number + ".png");
    document.querySelector(".dice > .img2").setAttribute("src", "images/dice" + player2Number + ".png");

    console.log("Set player 1 dice to: " + document.querySelector(".dice > .img1").getAttribute("src").valueOf())
    console.log("Set player 2 dice to: " + document.querySelector(".dice > .img2").getAttribute("src").valueOf())

    if (player1Number > player2Number) {
        document.querySelector(".container > h1").innerHTML = "&#x1F6A9 Player 1 Wins"
    } else if (player2Number > player1Number) {
        document.querySelector(".container > h1").innerHTML = "Player 2 Wins &#x1F6A9"
    } else {
        document.querySelector(".container > h1").innerHTML = "It's a Tie"
    }
}

rollDice();