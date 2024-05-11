/*
let again = document.querySelector(".again");
again.addEventListener('click', () => {
    gameBegin();
    again.style.display = "none";
    console.log("game begins by button push");

})
*/
/*
let cats = ["../img/cat1.gif", "../img/cat2.gif", "../img/cat3.gif", "../img/cat4.gif", "../img/cat5.gif", "../img/cat6.gif"];
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let aichoice = 0;
let body = document.querySelector("body");
let wincats = ["../img/cat4.gif", "../img/cat5.gif", "../img/cat6.gif"];

let nowincats = ["../img/cat1.gif", "../img/cat2.gif", "../img/cat3.gif"];

let currentPlayer = "X";
let gameEnded = false;
let board = ["", "", "", "", "", "", "", "", ""];
let available = [0, 1, 2,
    3, 4, 5,
    6, 7, 8];
let cells = ["", "", "", "", "", "", "", "", ""];
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
/*
function gameBegin() {
    let currentPlayer = "X";
    let gameEnded = false;
    let board = ["", "", "", "", "", "", "", "", ""];
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
}

*/


/*

NEED TO WORK ON THIS:









Math.floor(Math.random() * 3);


function cellClicked(cellIndex) {
    console.log("human turn");
    available = available.filter((cell) => cell !== cellIndex)
    
    // document.querySelector(".cell").disabled = true;
    
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i}`).onclick = null;
    }
    console.log("buttons off");
    if (!gameEnded && board[cellIndex] === "") {
        const cell = document.getElementById(`cell${cellIndex}`);

        cell.textContent = currentPlayer;
        cell.setAttribute('data-value', currentPlayer);
        board[cellIndex] = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById("message").textContent = `Игрок ${currentPlayer} победил!`;
            let catindex = Math.floor(Math.random() * 3);
            let cat = document.createElement("img");
            cat.src = wincats[catindex];
            cat.classList.add("cat");
            body.append(cat);
            console.log("cat added");
            gameEnded = true;
            //again.style.display = "block";

        } else if (isBoardFull()) {
            document.getElementById("message").textContent = "Ничья!";
            let catindex = Math.floor(Math.random() * 3);
            let cat = document.createElement("img");
            cat.src = nowincats[catindex];
            cat.classList.add("cat");
            body.append(cat);
            console.log("cat added");
            gameEnded = true;
            //again.style.display = "block";
        } else {
            console.log("next step")
            cellAI();

        }
    }
}
function cellAI() {
    console.log("ai turn");
    console.log("available:", available);
    console.log("available length", available.length);
    aichoice = available[Math.floor(Math.random() * available.length)];
    console.log("aichoice", aichoice);
    let aicell = document.getElementById(`cell${aichoice}`);
    sleep(2000).then(() => {
        console.log("ai made its choice");
        board[aichoice] = "O";
        aicell.textContent = "O";
        aicell.setAttribute('data-value', "O");
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        for (let i = 0; i < 9; i++) {
            let onclickevent = `cellClicked(${i})`
            document.getElementById(`cell${i}`).onclick = onclickevent;
        }
        console.log("buttons on");
    });
}


*/

function checkWinner(player) {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function isBoardFull() {
    return board.every(cell => cell !== "");



}

//onclick = "cellClicked(0)"




//WORKS FOR TWO PLAYERS

function cellClicked(cellIndex) {
    if (!gameEnded && board[cellIndex] === "") {
        const cell = document.getElementById(`cell${cellIndex}`);
        cell.textContent = currentPlayer;
        cell.setAttribute('data-value', currentPlayer);
        board[cellIndex] = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById("message").textContent = `Игрок ${currentPlayer} победил!`;
            let catindex = Math.floor(Math.random() * 3);
            let cat = document.createElement("img");
            cat.src = wincats[catindex];
            cat.classList.add("cat");
            body.append(cat);
            console.log("cat added");
            gameEnded = true;
            //again.style.display = "block";

        } else if (isBoardFull()) {
            document.getElementById("message").textContent = "Ничья!";
            let catindex = Math.floor(Math.random() * 3);
            let cat = document.createElement("img");
            cat.src = nowincats[catindex];
            cat.classList.add("cat");
            body.append(cat);
            console.log("cat added");
            gameEnded = true;
            //again.style.display = "block";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner(player) {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function isBoardFull() {
    return board.every(cell => cell !== "");



}


























/*








let playerchoice = board.indexOf("X");
available = available.filter((cell) => cell !== 'X')
won = false;

//board[available.indexOf(available[Math.floor(Math.random() * 8)])] = "X";

board[available.indexOf(available[Math.floor(Math.random() * 8)])] = "X"; // choosing random place for tac

while (won == false) {
    if 
}


function cellClicked(cellIndex) {
    if (!gameEnded && board[cellIndex] === "") {
        const cell = document.getElementById(`cell${cellIndex}`);
        cell.textContent = currentPlayer;
        cell.setAttribute('data-value', currentPlayer);
        board[cellIndex] = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById("message").textContent = `Игрок ${currentPlayer} победил!`;
            let catindex = Math.floor(Math.random() * 3);
            let cat = document.createElement("img");
            cat.src = wincats[catindex];
            cat.classList.add("cat");
            body.append(cat);
            console.log("cat added");
            gameEnded = true;
            //again.style.display = "block";

        } else if (isBoardFull()) {
            document.getElementById("message").textContent = "Ничья!";
            let catindex = Math.floor(Math.random() * 3);
            let cat = document.createElement("img");
            cat.src = nowincats[catindex];
            cat.classList.add("cat");
            body.append(cat);
            console.log("cat added");
            gameEnded = true;
            //again.style.display = "block";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if (currentPlayer == "O") {    //robot turn

            }


        }
    }
}

*/

/*
step 1: put tac enywhere
step 2: prevent third tic step
step 2.1: if no step hazard: work for own win
step 3: if tic has no more win positions: work for own win




*/











/*



<div class="tenor-gif-embed" data-postid="14459530881087846518" data-share-method="host" data-aspect-ratio="1.35878" data-width="100%"><a href="https://tenor.com/view/cat-black-cat-big-eyes-big-eyed-cat-cute-gif-14459530881087846518">Cat Black Cat GIF</a>from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
<div class="tenor-gif-embed" data-postid="14318776788849531473" data-share-method="host" data-aspect-ratio="0.638554" data-width="100%"><a href="https://tenor.com/view/cat-gif-14318776788849531473">Cat GIF</a>from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>




*/














