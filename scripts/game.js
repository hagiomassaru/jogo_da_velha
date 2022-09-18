// iniciar vairaveis
let board = ["", "", "", "", "", "", "", "", ""];
let playTime = 0;
let simbols = ["x", "o"];
let gameOver = false;
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

function handMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == "") {
        board[position] = simbols[playTime];

        gameOver = isWin();

        if (gameOver == false) {
            if (playTime == 0) {
                playTime = 1;
            } else {
                playTime = 0;
            }
        }
    }
    return gameOver;
}

function isWin() {
    

    for (let i = 0; i < winstate.length; i++) {
        let sequencia = winstate[i];

        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];

        if (
            board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ""
        ) {
            return true;
        }
    }
    return false;
}
