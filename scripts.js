
var mark = ["", "X", "O"];

function changeMark(count) {
    if (count < 2) {
        count += 1
    } else {
        count = 0;
    }
    console.log(count)
    return mark[count];
};

var tictactoeTable = document.querySelector("#tictactoe");
var allSquares = document.querySelectorAll("#tictactoe td");
var restart = document.querySelector("#b");
// var r1c1 = document.querySelector("#one-one");

restart.addEventListener("click", function() {
    // console.log(allSquares);
    allSquares.forEach(function(square) {
        square.innerText = mark[0];
    })
});

// r1c1.addEventListener("click", function() {
//     var currentMark = r1c1.innerText;
//     var index = mark.indexOf(currentMark);
//     r1c1.innerText = changeMark(index);
// });

tictactoeTable.addEventListener("click", function(event) {
    var squareID = event.target.id;
    console.log(squareID);
});

// function findTheSquare(square) {
//     var theSquare = document
// };