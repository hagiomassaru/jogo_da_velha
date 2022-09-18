// iniciar vairaveis
let board = ["", "", "", "", "", "", "", "", ""];
let playTime = 0;
let simbols = ["x", "o"];
let gameOver = false;

function handMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == "") {
        board[position] = simbols[playTime];

        gameOver = isWin();

        if (playTime == 0) {
            playTime = 1;
        } else {
            playTime = 0;
        }
    }
}

function isWin() {
    let winstate = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
}
