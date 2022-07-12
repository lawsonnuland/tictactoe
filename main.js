const gameBoard = (() => {
    let boardArray =["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const board = document.querySelector(".board");
    let markCount=0;
    
    boardArray.forEach( (mark) => {
        let div = document.createElement('div');
        div.innerHTML= mark;
        div.classList.add('tile');
        div.setAttribute("data-index", markCount);
        board.appendChild(div);
        markCount++;
    })

    const tiles= document.querySelectorAll('.tile');
    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => {
            boardArray[index] = "X";
            tile.innerHTML = "X";
            console.log(boardArray);
        })
    });

    return {
        boardArray
    }
})();

const player = (name, marker) => {
    return {name, marker};
};

const displayController = (() => {
    let p1name = document.querySelector("#p1name").value;
    let p1mark = document.querySelector("#p1mark").value;
    let p2name = document.querySelector("#p2name").value;
    let p2mark = document.querySelector("#p2mark").value;
    const playerOne = player(p1name, p1mark);
    const playerTwo = player(p2name, p2mark);

    function startGame() {
        p1name = document.querySelector("#p1name").value;
        p1mark = document.querySelector("#p1mark").value;
        p2name = document.querySelector("#p2name").value;
        p2mark = document.querySelector("#p2mark").value;
        playerOne.name = p1name;
        playerOne.marker = p1mark;
        playerTwo.name = p2name;
        playerTwo.marker = p2mark;
        let nameDisplay1 = document.querySelector('#playerone');
        nameDisplay1.innerHTML= playerOne.name;
        let nameDisplay2 = document.querySelector('#playertwo');
        nameDisplay2.innerHTML= playerTwo.name;
    }

    const startButton = document.querySelector('.startgame');
    
    startButton.addEventListener('click', () => {
        startGame();
        console.log(playerOne.name);
    })

    startGame();

    return {
        startGame,
        playerOne,
        playerTwo
    }

})();

