const gameBoard = (() => {
    let boardArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const board = document.querySelector(".board");
    let markCount = 0;

    function initBoard() {
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        boardArray = ['', '', '', '', '', '', '', '', ''];
        boardArray.forEach((mark) => {
            let div = document.createElement('div');
            div.innerHTML = mark;
            div.classList.add('tile');
            div.setAttribute("data-index", markCount);
            board.appendChild(div);
            markCount++;
        })

        const tiles = document.querySelectorAll('.tile');

        tiles.forEach((tile, index) => {
            tile.addEventListener('click', () => {
                if (boardArray[index]==''){
                    boardArray[index] = `${activePlayer.marker}`;
                    tile.innerHTML = `${activePlayer.marker}`;
                    checkForWin();
                    changePlayer();
                }
                console.log(boardArray);
            })
        });
        return { boardArray }
    }

    const player = (name, marker) => {
        return { name, marker };
    };

    let p1name = document.querySelector("#p1name").value;
    let p1mark = document.querySelector("#p1mark").value;
    let p2name = document.querySelector("#p2name").value;
    let p2mark = document.querySelector("#p2mark").value;
    const playerOne = player(p1name, p1mark);
    const playerTwo = player(p2name, p2mark);
    let activePlayer;

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
        nameDisplay1.innerHTML = playerOne.name;
        let nameDisplay2 = document.querySelector('#playertwo');
        nameDisplay2.innerHTML = playerTwo.name;
        activePlayer = playerOne;
        initBoard();
    }

    function changePlayer() {
        if (activePlayer==playerOne) {
            activePlayer=playerTwo;
        } else {
            activePlayer=playerOne;
        }
    }

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function checkForWin() {
        winConditions.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
            if (boardArray[item[0]] === activePlayer.marker && boardArray[item[1]] === activePlayer.marker && boardArray[item[2]] === activePlayer.marker) {
                alert(`${activePlayer.name} wins!`);
            } 
        })
    }

    const startButton = document.querySelector('.startgame');

    startButton.addEventListener('click', () => {
        startGame();
        console.log(playerOne.name);
    })

    startGame();

})();

