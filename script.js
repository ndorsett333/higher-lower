var userNum = "";
var userScore = 0;
var highScore = 0;
var text = "";

function math() {

    userNum = Math.ceil(Math.random() * 13);

    document.getElementById("userNum").innerHTML = userNum;
}

function high() {
    var compNum = Math.ceil(Math.random() * 13);
    document.getElementById("compNum").innerHTML = compNum;
    if (userNum < compNum) {
        text = "Correct! +1 Point!";
        userScore = userScore + 1;
        document.getElementById("score").innerHTML = userScore;
    } else if (userNum > compNum) {
        text = "Wrong! You Lose.";
        if (highScore < userScore) {
            highScore = userScore;
            document.getElementById("highScore").innerHTML = highScore;
            userScore = 0;
            document.getElementById("score").innerHTML = userScore;
        } else {
            userScore = 0;
            document.getElementById("score").innerHTML = userScore;
        }
    } else {
        text = "Same Value! No Points!";
    }
    setTimeout(function() {
        alert(text);
    }, 100);
    setTimeout(function() {
        userNum = Math.ceil(Math.random() * 13);
        document.getElementById("userNum").innerHTML = userNum;
        document.getElementById("compNum").innerHTML = "_";
    }, 500);
}

function low() {
    var compNum = Math.ceil(Math.random() * 13);
    document.getElementById("compNum").innerHTML = compNum;
    if (userNum > compNum) {
        text = "Correct! +1 Point!";
        userScore = userScore + 1;
        document.getElementById("score").innerHTML = userScore;
    } else if (userNum < compNum) {
        text = "Wrong! You Lose.";
        if (highScore < userScore) {
            highScore = userScore;
            document.getElementById("highScore").innerHTML = highScore;
            userScore = 0;
            document.getElementById("score").innerHTML = userScore;
        } else {
            userScore = 0;
            document.getElementById("score").innerHTML = userScore;
        }
    } else {
        text = "Same Value! No Points!";
    }
    setTimeout(function() {
        alert(text);
    }, 100);
    setTimeout(function() {
        userNum = Math.ceil(Math.random() * 13);
        document.getElementById("userNum").innerHTML = userNum;
        document.getElementById("compNum").innerHTML = "_";
    }, 500);
}