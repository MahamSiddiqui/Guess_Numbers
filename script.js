let randomNumber;
let count = 0;
function resetGame() {
    randomNumber = parseInt(Math.random() * 101);
    count = 0;
    //document.querySelector("input").value = "";
}
resetGame();
console.log(randomNumber);

function guessTheNumber() {
    let userInput = parseInt(document.querySelector("input").value);

    if (userInput > randomNumber) {
        alert("Too Big!");
        count++;

    } else if (userInput < randomNumber) {
        alert("Too Small!");
        count++;

    } else {
        alert("Congratulations! You have won! Number of guess you attemp " + count);
        resetGame();
        console.log(randomNumber);

    }
}