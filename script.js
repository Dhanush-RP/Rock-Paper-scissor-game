
let globalScore = 0
function getComputerChoice() {
  const arr = ['Rock','Paper','Scissors']
  return arr[Math.floor(Math.random()*arr.length)]
}

function getResult(playerChoice, computerChoice) {

  if(playerChoice==computerChoice)
    return 0;
  else if(playerChoice=='Rock' && computerChoice=='Paper')
    return -1;
  else if(playerChoice=='Rock' && computerChoice=='Scissors')
    return 1;
  else if(playerChoice=='Paper' && computerChoice=='Scissors')
    return -1;
  else if(playerChoice=='Paper' && computerChoice=='Rock')
    return 1;
  else if(playerChoice=='Scissors' && computerChoice=='Rock')
    return -1;
  else if(playerChoice=='Scissors' && computerChoice=='Paper')
    return 1;

}


function showResult(score, playerChoice, computerChoice) {

  let sc = getResult(playerChoice,computerChoice)
  const playerScore = document.getElementById('player-score')
  playerScore.innerText=globalScore;
  const hand = document.getElementById('hands')
  const res = document.getElementById('result')
    if(sc==1)
        res.innerText='You Win!';
    else if(sc==-1)
        res.innerText='You Lose!';
    else if(sc==0)
        res.innerText='It is a Draw!';

    hand.innerText = 'Your pick : '+' '+playerChoice+' VS '+'Computer pick : '+' '+computerChoice
 
}

function onClickRPS(playerChoice) {

  const compChoice = getComputerChoice()
  const ress = getResult(playerChoice,compChoice)
  globalScore+=ress

  console.log(playerChoice+" "+compChoice+" "+globalScore)
    showResult(globalScore,playerChoice,compChoice)
}
function playGame() {

const click = document.querySelectorAll('.rpsButton')
const endGameButton = document.getElementById('endGameButton')
  click.forEach(cli =>{
    cli.onclick = ( )=> 
    {
      onClickRPS(cli.value)
    }
  }
  )

  endGameButton.onclick = () => endGame()

}

function endGame() {

    globalScore=0

  const playerScore = document.getElementById('player-score')
  const hand = document.getElementById('hands')
  const res = document.getElementById('result')
  
  playerScore.innerText=''
  hand.innerText=''
  res.innerText=''
  
}
playGame()