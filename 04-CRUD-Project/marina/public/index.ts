

const cells: any = document.querySelectorAll('.cell');
const board: any = document.querySelector('#board');
const winningMessage: HTMLElement = document.querySelector("#winningMessage");
const circle: any = "circle";
const x: any = 'x';
let circleTurn = false;  
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
};


function startGame () {
  circleTurn = false;
  
  cells.forEach((cell) => {
    cell.classList.remove("x");
    cell.classList.remove("circle");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  boardHover();
  winningMessage.classList.remove("show");
}


function handleClick(e) {
  const cell: any = e.target;
  const currentClass: any = circleTurn ? circle : x;  
  placeMark(cell, currentClass);

  if(checkWin(currentClass)) {
    // console.log('winner');
    endGame(false);

  } else if (isLost()) {
    endGame(true);

  } else {
    switchTurn();
    boardHover();
  }

};


function endGame(lost) {

  if(lost) {
    winningMessage.innerHTML = `Game Over! <br> Maybe next time... 
                                <button id="restartButton" onclick="handleRestartGame()">Restart</button>`;

  } else {
    winningMessage.innerHTML = `CONGRATS! <br> ${circleTurn ? "O's" : "X's"} Win!  
                                <button id="restartButton" onclick="handleRestartGame()">Restart</button>`;  
  }
  winningMessage.classList.add('show');
};


function isLost() {

  return [...cells].every(cell => {   

    return cell.classList.contains(x) || cell.classList.contains(circle);   
  })
};


function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
};


function switchTurn() {
  circleTurn = !circleTurn; 
};


function boardHover() {
  board.classList.remove('x');
  board.classList.remove('circle');  

  if(circleTurn) {
    board.classList.add('circle');

  } else {
    board.classList.add('x');
  }
};

function checkWin(currentClass) {           

  return winCombination.some(combination => {  
    
    return combination.every(index => {      

      return cells[index].classList.contains(currentClass)  
    })
  })                   
};
