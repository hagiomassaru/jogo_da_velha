document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleclick);
    });
});

function handleclick(event) {
    let square = event.target;
    let position = square.id;

    handMove(position);

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
