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
        swal({
            title: "Oh Too Big",
            text: "Do you want to contineue?",
            icon: "error",
            buttons: ["NO", "Yes"]
          });
        // swal("Too Big!");
        count++;

    } else if (userInput < randomNumber) {
        swal({
            title: "Oh Too Small",
            text: "Do you want to contineue?",
            icon: "error",
            buttons: ["NO", "Yes"]
          });
        // swal("Too Small!");
        
        count++;
        

    } else {
        swal({
            title: "Congratulations! You Won",
            text: "Number of guess you attemp " + count,
            icon: "success",
          });
        // swal("Congratulations! You have won! Number of guess you attemp " + count);
        resetGame();
        console.log(randomNumber);

    }
}


