const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#your-choice');
const resultsDisplay = document.querySelector('#results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let results;


//--------------------------------Jak storovat moji volbu rock,paper scisors-----------------------------------------
// pro kazdy prvek z array possibleChoice (jeden prvek = choice),vezmu tento prvek choice nasadim na nej posluchac, ktery bude reagovat na udalost click, do arrow function
//dam parametr e - event , e.target.id mi zjisti jake je id prvku na ktery jsem klikla - tuto hodnotu uchovam v userChoice , ale pokud userChoice napisu pouze do teto funkce bude lokalni a dale
//bych s ni nemohla pracovat, takze si ji napisu i nahore do let userChoice jako globalni promennou 
// dale potrebujeme vzit obsah html prvku userChoiceDisplay a nastavit jeho hodnotu na userChoice ktera uz se mi zjistuje pomoci e.target.id
//PS : vsechny funkce co dale vytvarim zde volam pri kliknuti na tlacitko
possibleChoices.forEach( choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

//--------------------------------Jak generovat volbu počítače ------------------------------------------------------
// zapisu funkci generatecomputerChoice, ktera mi bude generovat nahodne cislo. Proto zalozim promennou randomNumber, ktera bude toto cislo uchovavat 
// pro vygenerovani nahodneho cisla pouziju funkci math.random ktera mi umi generovat cisla od 0 do 0.99 - toto budeme chtit dostat do faze kdy generuje jen 3 cisla,
//vynasobime poctem 3 (generuje random cislo mezi 0-2.99)
// dale tuto fukci zaobalim do Math.floor, ktera prevadi float number na cely Int a zaokrouhluje vzdy dolu . Moznosti, ktere toto vygeneruje jsou 0,1,2
//muzu pridat +1 pro prehlednost generovana cisla tedy budou 1, 2 ,3 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // variace misto *3 -> possibleChoices.length
    console.log(randomNumber)

 //--------------------------------- Generovana cisla priradim k hodnotam rock,paper scicsors -------------------------

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;    
    }

//do html struktury dam i vyslednou hodnotu
 computerChoiceDisplay.innerHTML = computerChoice 
}

//----------------------------- Jak dostat vysledek ---------------------------------------

function getResults() {
    if (computerChoice === userChoice) {
        results = 'Its a draw! 🤔'
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        results = 'You won! 🏆'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        results = 'You lost! 💩 '
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        results = 'You lost! 💩 '
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        results = 'You won! 🏆'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        results = 'You won! 🏆'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        results = 'You lost! 💩 '
    }

    resultsDisplay.innerHTML = results
}


//----------------------------- MIMO KOD APPKY---------------------------------------
//jak pouzivat for each
const array = [ 'a', 'b', 'c']

//nazev array .forEach( prvek => co se ma stat)
array.forEach(element => console.log(element))