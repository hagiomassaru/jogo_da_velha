// iniciar vairaveis
let board = ["", "", "", "", "", "", "", "", ""];
let playTime = 0;
let simbols = ["x", "o"];

function handMove(position) {
    if (board[position] == "") {
        board[position] = simbols[playTime];
        if (playTime == 0) {
            playTime = 1;
        } else {
            playTime = 0;
        }
    }
}
