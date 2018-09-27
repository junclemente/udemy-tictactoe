
var mark = ["", "X", "O"];
var tictactoeTable = document.querySelector("#tictactoe");
var allSquares = document.querySelectorAll("#tictactoe td");
var restart = document.querySelector("#b");

function changeMark(count) {
    if (count < 2) {
        count += 1
    } else {
        count = 0;
    }
    return mark[count];
};

function updateTheSquare(square) {
    var theSquare = document.getElementById(square);
    var currentMark = theSquare.innerText;
    var index = mark.indexOf(currentMark);
    theSquare.innerText = changeMark(index);
};

restart.addEventListener("click", function() {
    allSquares.forEach(function(square) {
        square.innerText = mark[0];
    });
});

tictactoeTable.addEventListener("click", function(event) {
    var squareID = event.target.id;
    updateTheSquare(squareID);
});
