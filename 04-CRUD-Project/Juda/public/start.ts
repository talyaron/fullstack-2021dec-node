

function handleOnLoad(ev) {
    let window = document.querySelector('.startWindow');
    window.innerHTML = ` <div class="join-container">
    <header class="join-header">
        <h1> Juda's TicTacToe</h1>
    </header>
    <main class="join-main">
        <!-- <form action="chat.html"> -->
        <div class="form-control">
            <label for="username">Your name</label>
            <input type="text" name="username" id="playerName" placeholder="Enter your name..." required />
        </div>
        <div class="form-control">


        </div>
        <button type="submit" class="btn" onclick="playerNameInput(event)">Let's play Tic Tac Toe!</button>
        </form>
    </main>
</div>

<div class="gameTable">


</div>`
}



async function playerNameInput(ev) {


    try {
        const userName: string = ev.path[1].children[0].childNodes[3].value
console.log(userName)
        const { data } = await axios.put('/api/insertUserName', { userName });
        const playerObj = data
        console.log(playerObj)

    } catch (error) {
        console.log(error)

    }
}


function renderGame() {
    let gameWindow = document.querySelector('.startWindow')
    gameWindow.innerHTML = ``
}


// const socket = io()

// socket.on('message',message =>{
//     console.log(message)
// } )
