let bossChoice = document.getElementById('bossChoice')
let bossScoreView = document.getElementById('bossScoreView')
let bossStatus = document.getElementById('bossStatus')
let bossStatusColor = document.getElementById('bossStatusColor')
let playerScoreView = document.getElementById('playerScoreView')
let playerStatus = document.getElementById('playerStatus')
let playerStatusColor = document.getElementById('playerStatusColor')

let playerHand = document.getElementById('playerHand')

let playerScore = 0;
let bossScore = 0;

var userChoice;
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user() {
    userChoice = this.id;
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    bossChoice.innerHTML = computerChoice + '!'
    game(userChoice, computerChoice)
}
function game(player, boss) {
    if (player == 'rock') {
        playerHand.src = 'src/imgs/sprites/rock.gif'
        playerHand.style
        if (boss == 'scissors') {
            playerWins()
        }
        else if (boss == 'paper') {
            bossWins()
        } else if (boss == 'rock') {
            tie()
        }
    }
    else if (player == 'paper') {
        playerHand.src = 'src/imgs/sprites/paper.gif'
        if (boss == 'rock') {
            playerWins()
        }
        else if (boss == 'scissors') {
            bossWins()
        } else if (boss == 'paper') {
            tie()
        }
    } else if (player == 'scissors') {
        playerHand.src = 'src/imgs/sprites/scissors.gif'
        if (boss == 'paper') {
            playerWins()
        }
        else if (boss == 'rock') {
            bossWins()
        } else if (boss == 'scissors') {
            tie()
        }
    }
}
function playerWins() {
    playerScore += 1
    bossStatusColor.classList.remove('bg-success')
    bossStatusColor.classList.add('bg-danger')
    bossStatus.innerHTML = 'Loser'
    playerStatusColor.classList.remove('bg-danger')
    playerStatusColor.classList.add('bg-success')
    playerStatus.innerHTML = 'Winner'
    updateScore()
}
function bossWins() {
    bossScore += 1
    bossStatusColor.classList.remove('bg-danger')
    bossStatusColor.classList.add('bg-success')
    bossStatus.innerHTML = 'Winner'
    playerStatusColor.classList.remove('bg-success')
    playerStatusColor.classList.add('bg-danger')
    playerStatus.innerHTML = 'Loser'
    updateScore()
}
function tie() {
    bossStatusColor.classList.remove('bg-success', 'bg-danger')
    bossStatusColor.classList.add('bg-primary')
    bossStatus.innerHTML = 'Tie'
    playerStatusColor.classList.remove('bg-success', 'bg-danger')
    playerStatusColor.classList.add('bg-primary')
    playerStatus.innerHTML = 'Tie'
    updateScore()
}
function updateScore() {
    playerScoreView.innerHTML = playerScore;
    bossScoreView.innerHTML = bossScore;
    if (playerScore == 10) {
        resetScore()
        alert('Player saved the day !!!')
    } else if (bossScore == 10) {
        resetScore()
        alert('You couldn\'t stop the Boss')
    }
}
function resetScore() {
    playerScore = 0;
    bossScore = 0;
    playerScoreView.innerHTML = playerScore;
    bossScoreView.innerHTML = bossScore;
}