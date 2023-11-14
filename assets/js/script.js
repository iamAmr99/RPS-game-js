let bossChoice = document.getElementById('bossChoice')
let bossScore = document.getElementById('bossScore')
let bossStatus = document.getElementById('bossStatus')
let bossStatusColor = document.getElementById('bossStatusColor')
let playerScore = document.getElementById('playerScore')
let playerStatus = document.getElementById('playerStatus')
let playerStatusColor = document.getElementById('playerStatusColor')

let playerHand = document.getElementById('playerHand')

var userChoice;
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user() {
    userChoice = this.id;
    console.log("User: " + userChoice);

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    bossChoice.innerHTML = computerChoice + '!'

    game(userChoice, computerChoice, playerStatusColor)
}

function game(player, boss) {
    if (player == 'rock') {
        playerHand.src = '/assets/imgs/sprites/rock.gif'
        if (boss == 'scissors') {
            bossStatusColor.classList.remove('bg-success')
            bossStatusColor.classList.add('bg-danger')
            bossStatus.innerHTML = 'Loser'
            playerStatusColor.classList.remove('bg-danger')
            playerStatusColor.classList.add('bg-success')
            playerStatus.innerHTML = 'Winner'
        }
        else if (boss == 'paper') {
            bossStatusColor.classList.remove('bg-danger')
            bossStatusColor.classList.add('bg-success')
            bossStatus.innerHTML = 'Winner'
            playerStatusColor.classList.remove('bg-success')
            playerStatusColor.classList.add('bg-danger')
            playerStatus.innerHTML = 'Loser'
        } else if (boss == 'rock') {
            bossStatusColor.classList.remove('bg-success', 'bg-danger')
            bossStatusColor.classList.add('bg-primary')
            bossStatus.innerHTML = 'Tie'
            playerStatusColor.classList.remove('bg-success', 'bg-danger')
            playerStatusColor.classList.add('bg-primary')
            playerStatus.innerHTML = 'Tie'
        }
    }
    else if (player == 'paper') {
        playerHand.src = '/assets/imgs/sprites/paper.gif'
        if (boss == 'rock') {
            bossStatusColor.classList.remove('bg-success')
            bossStatusColor.classList.add('bg-danger')
            bossStatus.innerHTML = 'Loser'
            playerStatusColor.classList.remove('bg-danger')
            playerStatusColor.classList.add('bg-success')
            playerStatus.innerHTML = 'Winner'
        }
        else if (boss == 'scissors') {
            bossStatusColor.classList.remove('bg-danger')
            bossStatusColor.classList.add('bg-success')
            bossStatus.innerHTML = 'Winner'
            playerStatusColor.classList.remove('bg-success')
            playerStatusColor.classList.add('bg-danger')
            playerStatus.innerHTML = 'Loser'
        } else if (boss == 'paper') {
            bossStatusColor.classList.remove('bg-success', 'bg-danger')
            bossStatusColor.classList.add('bg-primary')
            bossStatus.innerHTML = 'Tie'
            playerStatusColor.classList.remove('bg-success', 'bg-danger')
            playerStatusColor.classList.add('bg-primary')
            playerStatus.innerHTML = 'Tie'
        }
    } else if (player == 'scissors') {
        playerHand.src = '/assets/imgs/sprites/scissors.gif'
        if (boss == 'paper') {
            bossStatusColor.classList.remove('bg-success')
            bossStatusColor.classList.add('bg-danger')
            bossStatus.innerHTML = 'Loser'
            playerStatusColor.classList.remove('bg-danger')
            playerStatusColor.classList.add('bg-success')
            playerStatus.innerHTML = 'Winner'
        }
        else if (boss == 'rock') {
            bossStatusColor.classList.remove('bg-danger')
            bossStatusColor.classList.add('bg-success')
            bossStatus.innerHTML = 'Winner'
            playerStatusColor.classList.remove('bg-success')
            playerStatusColor.classList.add('bg-danger')
            playerStatus.innerHTML = 'Loser'
        } else if (boss == 'scissors') {
            bossStatusColor.classList.remove('bg-success', 'bg-danger')
            bossStatusColor.classList.add('bg-primary')
            bossStatus.innerHTML = 'Tie'
            playerStatusColor.classList.remove('bg-success', 'bg-danger')
            playerStatusColor.classList.add('bg-primary')
            playerStatus.innerHTML = 'Tie'
        }
    }
}
