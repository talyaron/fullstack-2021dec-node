// try {
// } catch (error: any) {
//   console.error(error);
// }
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var cells = document.querySelectorAll('.cell');
var board = document.querySelector('#board');
var winningMessage = document.querySelector("#winningMessage");
var circle = "circle";
var x = 'x';
var circleTurn = false;
// const winCombination : any = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];
// async function noname() {
// }
startGame();
function handleRestartGame() {
    startGame();
}
;
function startGame() {
    circleTurn = false;
    cells.forEach(function (cell) {
        cell.classList.remove("x");
        cell.classList.remove("circle");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    });
    boardHover();
    winningMessage.classList.remove("show");
}
function handleClick(e) {
    var cell = e.target;
    var currentClass = circleTurn ? circle : x; // cecking turn -- if its a circleTurn, return circle, otherwise return x
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        // console.log('winner');
        endGame(false);
    }
    else if (isLost()) {
        endGame(true);
    }
    else {
        switchTurn();
        boardHover();
    }
}
;
function endGame(lost) {
    if (lost) {
        winningMessage.innerHTML = "Game Over! <br> Maybe next time... \n                                <img src=\"./img/sad.png\"></img> \n                                <button id=\"restartButton\" onclick=\"handleRestartGame()\">Restart</button>";
    }
    else {
        winningMessage.innerHTML = "CONGRATS! <br> " + (circleTurn ? "O's" : "X's") + " Win! \n                                <img src=\"./img/happy.png\"></img>  \n                                <button id=\"restartButton\" onclick=\"handleRestartGame()\">Restart</button>"; // checking the winning class
    }
    winningMessage.classList.add('show');
}
;
function isLost() {
    return __spreadArrays(cells).every(function (cell) {
        return cell.classList.contains(x) || cell.classList.contains(circle);
    });
}
;
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}
;
function switchTurn() {
    circleTurn = !circleTurn;
}
;
function boardHover() {
    board.classList.remove('x');
    board.classList.remove('circle');
    if (circleTurn) {
        board.classList.add('circle');
    }
    else {
        board.classList.add('x');
    }
}
;
function checkWin(currentClass) {
    return winCombination.some(function (combination) {
        return combination.every(function (index) {
            return cells[index].classList.contains(currentClass);
        });
    });
}
;
