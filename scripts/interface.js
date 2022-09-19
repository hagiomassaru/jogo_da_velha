document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleclick);
    });
});

function handleclick(event) {
    let square = event.target;
    let position = square.id;

    if (handMove(position) == true) {
        let jogador;
        if (playTime == 0) {
            jogador = "Espada";
        } else {
            jogador = "Escudo";
        }
        setTimeout(() => {
            alert("JOGO ACABOU - O jogador " + jogador + " Venceu.");
        }, 10);
    }

    updateSquare();
}

function updateSquare() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let simbols = board[position];

        if (simbols != ``) {
            square.innerHTML = `<div class='${simbols}'></div>`;
        }
    });
}
function updateSquareNone() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = ``;
    });
}
