const board = document.getElementById('board');
const message = document.getElementById('message');
const turn = document.getElementById('turn');
let currentPlayer = 'X';
let cells = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            gameActive = false;
            message.innerText = `${currentPlayer} wins!`;
            break;
        }
    }
    if (!cells.includes('') && gameActive) {
        message.innerText = "It's a draw!";
        gameActive = false;
    }
}

function handleClick(index) {
    if (gameActive && cells[index] === '') {
        cells[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turn.innerText = `Current Turn: ${currentPlayer}`;
    }
}

function reset() {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.innerText = '';
    turn.innerText = `Current Turn: ${currentPlayer}`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
