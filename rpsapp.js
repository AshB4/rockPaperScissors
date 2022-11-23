const pcChoice = document.getElementById('pc-choice')
const userChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelector('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice =e.target.id
userChoiceDisplay.innterHTML = userChoice
generatePcChoice()
getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1// or possibleChoices.length
    
if (randomNumber === 1)
    pcChoice = 'rock'
} 
if (randomNumber === 2) {
    pcChoice = 'scissors'
}
if (randomNumber === 3) {
    pcChoice = 'paper'
}
pcChoiceDisplay.innerHTML = pcChoice

function getResult() 
{if (pcChoice === userChoice)
     {
        result = 'Draw! - try again.'
    if (pcChoice === 'rock' && userChoice ==='paper')
    {
        result = 'Yay! you win! lets play again.'
    }
    if (pcChoice === 'rock' && userChoice ==='scissors')
    {
        result = 'Oh No! you lose - try again'
    }
        if (pcChoice === 'paper' && userChoice ==='scissors')
    {
    result = 'Yay! you win! lets play again.'
    }
        if (pcChoice=== 'paper' && userChoice==='rock')
    {
    result = 'Oh No! you lose - try again'
    }
        if (pcChoice=== 'scissors' && userChoice==='rock')
    {
    result = 'Yay! you win! lets play again.'
    }
        if (pcChoice=== 'scissors' && userChoice==='paper')
    {
    result = 'Yay! you win! lets play again.'
    }
  } 
}
