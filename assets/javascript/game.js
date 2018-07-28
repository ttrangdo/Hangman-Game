
    
    // array that lists all possible options to win hangman game
var wordList = ["squirtle",
        "dragonite",
        "charizard",
        "arcanine", "snorlax",
        "jigglypuff", "mew"
    ];

// pick random word from array
var keyWord = wordList[Math.floor(Math.random() * wordList.length)];

// underscores matching number of letters in the word
var currentlyDisplayed = [];
for (var i = 0; i < keyWord.length; i++) {
    currentlyDisplayed[i] = "_";
}

    // create variable for remaining letters
var remainingLetters = wordList.length

// create a variable about remaining guesses
var remainingGuesses = 5;

// create a variable for already guessed letters
var guessedLetters = []; 

// create a variable for number of games won
var wins = 0;


function displayGuessesRemaining() {
    document.querySelector("#guesses").innerHTML = "Remaining Guesses: " + remainingGuesses; 
}


function showkeyWord() {
    document.querySelector("#displaykeyWord").innerHTML = currentlyDisplayed.join('');
}

var userStartedPlaying = false;


function checkifcomplete() {
    for (var i = 0; i < currentlyDisplayed.length; i++) { 
        if (currentlyDisplayed[i] === "_") {
            return 0; // stops the method and returns a value
        }
    }
    return 1;
}

function updateMessage() {
    document.querySelector("#press").innerHTML = "Press a LETTER to guess the Pokemon!";
}

function updateGuesses() {
    document.querySelector("#guessedLetters").innerHTML = "Attempted Letters: " + guessedLetters.join(" ");
}


function resetGame() {
    document.location.href = " ";
}

// calling function
displayGuessesRemaining();
updateGuesses();



// GAME LOOP


// this function runs whenever the user presses a key

document.onkeyup = function(event) {

    // if they press spacebar... start the game
    if(event.keyCode === 32 && userStartedPlaying === false){
        userStartedPlaying = true;
        showkeyWord();
        updateMessage();
        return;
    }

    if (userStartedPlaying === false) {
        return;
    }

    // variable determines which key is pressed and make it lowercase
    var userGuess = event.key.toLowerCase();

    // check if event.key.toLowerCase() is a letter (google how to do this)
    if (!userGuess.match(/[a-z]/i)) {
        alert("Please enter a letter!");
        return;
    }
    guessedLetters.push(userGuess);
    updateGuesses();

    var keyWordToCharArray = keyWord.split('');

    // ex: keyWord = "charizard"
    // keyWord.split('') = ["c", "h", "a", "r", ...]
    // keyWordToCharArray = ["c", "h", "a", "r", ...]

    // numFound will get increased everytime we find a match in the word
    var numFound = 0;

    for (var j = 0; j < keyWordToCharArray.length; j++) {
        // keyWordToCharArray.length = 6
        if (userGuess === keyWordToCharArray[j]) {
            currentlyDisplayed[j] = userGuess;
            numFound++;
        }
    }

    // AT THIS POINT.......
    // - user has inputed a letter
    // - ensured that the letter is a-z
    // - we split up the keyWord into an array of letters (or chars)
    // - we have checked to see if the lettter the user guessed is inside of the keyWord and we have switched display to show if it is        

    if(numFound === 0) {
        // no matches
        remainingGuesses--;
        displayGuessesRemaining();
        // else subtract one from remainingGuesses, then check if they are out of guesses
        if(remainingGuesses === 0 ) {
            alert("Whoops! Couldn't guess 'em all!");        
            userStartedPlaying = false;
            resetGame();
        }        

    } else {
        showkeyWord();
        // found a match
        if (checkifcomplete() === 1) {
            //  user wins -- show winning screen and reset button and add to games won
            alert("CONGRATULATIONS! YOU KNOW YOUR POKEMON!");
            userStartedPlaying = false;
            resetGame();
        }
        // todo: pop up alert appear on time 
        // todo: if no more letters in keyWord === "_"... display game won and reset
    }

}



// Run code if 
//  s q u i r t l e d a
// g o n c h z d x 


    
//Check user's guess against key word
// if (userGuess === "a" || userGuess === "c" || userGuess === "d" ||
//         userGuess === "e" || userGuess === "g" || userGuess === "h" ||
//         userGuess === "i" || userGuess === "l" || userGuess === "n" ||
//         userGuess === "o" || userGuess === "q" || userGuess === "r" ||
//         userGuess === "s" || userGuess === "t" || userGuess === "u" ||
//         userGuess === "x" || userGuess === "z") {

//         }

    // if userGuess matches letter in key word, reveal where letter appears in key word


    // Else, add the guess to the list of previous user guess attempts
            // decrease the number of guess remaining 



// Congratulate player if correctly guessed key word 
// alert("CONGRATULATIONS! YOU CORRECTLY GUESSED THAT POKEMON!");




// Else, display end game screen and reset button

// alert("GAME OVER. TRY AGAIN");
// function resetGame() {
//     game.resetGame();
//     render
// }

// document.querySelector("").innerHTML = "GAME OVER";
// document.querySelector("").innerHTML = "Final Score: ";
