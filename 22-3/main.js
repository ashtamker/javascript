const userGuess = document.querySelector(".userGuess");
const guess = document.querySelector(".guess");
const guidance = document.querySelector(".guidance");
const h2 = document.querySelector("h2");
const guessArr = [];

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
let letterToGuess = generateRandomLetter();
  console.log(letterToGuess);


document.body.addEventListener('keyup', (x) => {
    const key = x.code.toLowerCase()[3];

    if(key === letterToGuess){
        guess.removeAttribute("disabled");
        guess.removeAttribute("placeholder")
        guidance.textContent = "Good guess!";
        guidance.style.color = "green";
        h2.textContent = 'Would you like to play again?';
        userGuess.outerHTML = `<button onclick="rerender()">O.K</button>`;
    }
    else{
        if(!guessArr.includes(key)){
            userGuess.textContent += `${key}, `;
            guidance.textContent = "wrong letter";
            guessArr.push(key);
        }
        else{
            guidance.textContent = `${key} has already been guessed!`;
        }
        guidance.style.color = "red";
    }
});
function rerender() {
    window.location.reload();
}