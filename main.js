// What I need to do
// 1.Ensure when button is clicked, the score increases by one on each player btn
// 2.Ensure reset button resets the scores to 0
// 3.In the input area, limimt the max score to 10 points.
// 4.Ensure that the winner is displayed at the bottom

// Add event listeners to the buttons

// Button one
const playerOne = document.getElementById('play1');
const scoreOne = document.getElementById('score-1');
let score1 = 0;


// Button two
const playerTwo = document.getElementById('play2');
const scoreTwo = document.getElementById('score-2');
let score2 = 0;



// Reset Button
const resetScore = document.getElementById('reset');

const finalResult = document.getElementById('winner');

// Adding event listeners
playerOne.addEventListener("click", ()=> {
    // Define the limit
    const limit = document.getElementById('counter').value;
    // Score one increment by one on single click
    score1++;
    // Display score 
    scoreOne.textContent = score1;

    // Adding conditionals
    if (score1 == limit || (score1>score2 && score1>limit)) {
        scoreOne.classList.add("numberScore");
        playerOne.setAttribute("disabled","true");
        playerTwo.setAttribute("disabled","true");

        currentWinner();
    };
    

});

playerTwo.addEventListener("click", ()=> {
    // Define the limit
    const limit = document.getElementById('counter').value;
    // Score two increment by one on single click
    score2++;
    // Display score
    scoreTwo.textContent = score2;

      // Adding conditionals
      if (score2 == limit || (score2>score1 && score2>limit)) {
        scoreTwo.classList.add("numberScore");
        playerOne.setAttribute("disabled","true");
        playerTwo.setAttribute("disabled","true");

        currentWinner();
    };
    
});

// Reset button function 
resetScore.addEventListener("click", ()=> {
    // reset score values to 0
    score1=0;
    score2=0;
    scoreOne.textContent = score1;
    scoreTwo.textContent = score2;
    // remove disabling on buttons & added class
    playerOne.removeAttribute("disabled");
    scoreOne.classList.remove("numberScore");
    playerTwo.removeAttribute("disabled");
    scoreTwo.classList.remove("numberScore");
    finalResult.textContent="";
    $(".winner-alert").fadeTo("opacity", 0);
});


// Displaying the winner
function currentWinner() {
    if (score1>score2){
        finalResult.textContent = "Player 1"
    }else {
        finalResult.textContent = "Player 2";
    };
    $(".winner-alert").fadeTo("opacity", 1);
};