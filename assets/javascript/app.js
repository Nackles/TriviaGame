//Countdown timer is functioning and calling functions
//Reset isn't linked to anything yet
//Reset function doesn't clear answers
//Answercheck doesn't add values

////////////////
//RESET BUTTON//
////////////////
window.onload = (function () {
  $("#reset").on("click", reset);
});

//////////////////////////////
//TIMER + TIMER DISPLAY CODE//
///////////////////////////////////////////////////////////////////////
//The way this updates the html makes it appear to have a start delay//
///////////////////////////////////////////////////////////////////////
var time = 21;
var answerCountDown = setInterval(function () {
  time--;
  console.log(time);
  $("#display").html(time);
  if (time <= 0) {
    answerCheck();
  }
}, 1000);

/////////
//RESET//
/////////
function reset() {
    clearInterval(answerCountDown);
    time = 20;
    //clear radio inputs
    console.log("reset called");
  }

/////////////////
//CHECK ANSWERS//
/////////////////
function answerCheck() {
    console.log("answercheck function called");
    clearInterval(answerCountDown);
    alert("this is where you add the values");
    
    //get total value(might need to rename as points?) of selected radio answers/ clear radio inputs
  }

//////////
//SCRIPT//
//////////

// Unfairly Random Facts

// What is the third-highest grossing movie of all time?
// *Star Wars: The Force Awakens
// Black Panther
// Frozen
// Zootopia

// Which video game is best?
// *Dead Rising
// *Apex Legends
// *Any Zelda game
// *Some other game

// Where did Toby Fox create Undertale?
// *Someone else's basement
// Their house
// An office
// A studio apartment

// How many times does the Earth get hit by lightning in one year?
// 136,000
// 3,000
// *Like 3 billion
// 50,789,144

// In Finding Nemo, what kind of fish is Dory?
// *Regal Blue Tang
// Tiger Shark
// Short-term Bluegill
// Elephant Plankton