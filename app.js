
let rock
let paper
let scissors
let cpuop
let choice
let previousChoice
let userwin = 0
let cpuwin = 0

alert('reach to 10 points and win the game!')
function gameop(symbol) {

    function userwiner() {
        userwin = userwin + 1
        document.getElementById('userwins').innerHTML = userwin
    }

    function cpuwiner() {
        cpuwin = cpuwin + 1
        document.getElementById('cpuwins').innerHTML = cpuwin
    }


    if (previousChoice == 'Rock' || previousChoice == 'Paper' || previousChoice == 'Scissors') {
        resetgame();
    }

    choice = symbol.title

    if (choice == 'Rock') {
        rock = document.createElement('span')
        rock.innerText = "👊"
        document.getElementById('user-select').appendChild(rock)
    }

    if (choice == 'Paper') {
        paper = document.createElement('span')
        paper.innerText = "✋"
        document.getElementById('user-select').appendChild(paper)
    }


    if (choice == 'Scissors') {
        scissors = document.createElement('span')
        scissors.innerText = "✌️"
        document.getElementById('user-select').appendChild(scissors)
    }



    const cpuchoice = ['👊', '✋', '✌️']
    cpuop = document.createElement('span')
    cpuop.innerText = cpuchoice[Math.floor(Math.random() * cpuchoice.length)]
    document.getElementById('cpu-select').appendChild(cpuop)


    if (choice == 'Rock' && cpuop.innerText == '👊') {
        document.getElementById('game-result').innerText = 'Draw!';
    }

    if (choice == 'Rock' && cpuop.innerText == '✋') {
        document.getElementById('game-result').innerText = 'CPU Wins!';
        cpuwiner()
    }

    if (choice == 'Rock' && cpuop.innerText == '✌️') {
        document.getElementById('game-result').innerText = 'You Win!';
        userwiner()
    }


    if (choice == 'Paper' && cpuop.innerText == '👊') {
        document.getElementById('game-result').innerText = 'You Win!';
        userwiner()
    }

    if (choice == 'Paper' && cpuop.innerText == '✋') {
        document.getElementById('game-result').innerText = 'Draw!';
    }

    if (choice == 'Paper' && cpuop.innerText == '✌️') {
        document.getElementById('game-result').innerText = 'CPU Wins!';
        cpuwiner()
    }


    if (choice == 'Scissors' && cpuop.innerText == '👊') {
        document.getElementById('game-result').innerText = 'CPU Wins!';
        cpuwiner()
    }

    if (choice == 'Scissors' && cpuop.innerText == '✋') {
        document.getElementById('game-result').innerText = 'You Win!';
        userwiner()
    }

    if (choice == 'Scissors' && cpuop.innerText == '✌️') {
        document.getElementById('game-result').innerText = 'Draw!';
    }

    previousChoice = choice;



    if (userwin == 10) {
        alert('Congratulations! You Won The Game!')
        location.reload();
    }

    if (cpuwin == 10) {
        alert('CPU Won The Game! This Is The Ai Power!')
        location.reload();
    }

}


function resetgame() {
    if (choice == 'Rock') { document.getElementById('user-select').removeChild(rock) }

    if (choice == 'Paper') { document.getElementById('user-select').removeChild(paper) }

    if (choice == 'Scissors') { document.getElementById('user-select').removeChild(scissors) }

    document.getElementById('cpu-select').removeChild(cpuop)
    document.getElementById('game-result').innerText = null


}