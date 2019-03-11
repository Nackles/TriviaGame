//Countdown timer is functioning and calling functions
//Reset has no button yet

//Answercheck was returning 2/5 every time because I didn't specify I wanted input*:checked[..*, just *input[..*, so it looks like it interpreted that as 'take the first value encountered from that name group'
//Answercheck radio inputs are not being cleared

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
var time = 10;
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
  console.log("reset called");
}

/////////////////
//CHECK ANSWERS//
/////////////////
function answerCheck() {
  var q1 = parseInt($("input:checked[name='grossingmovie']").val());
  console.log("q1: "+q1);
  var q2 = parseInt($("input:checked[name='bestgame']").val());
  console.log("q2: "+q2);
  var q3 = parseInt($("input:checked[name='gamemade']").val());
  console.log("q3: "+q3);
  var q4 = parseInt($("input:checked[name='lightning']").val());
  console.log("q4: "+q4);
  var q5 = parseInt($("input:checked[name='dory']").val());
  console.log("q5: "+q5);
  var correct = (q1 + q2 + q3 + q4 + q5);
  alert("Do you value this? " + correct + "/5");
  //clearing radio inputs is not functioning
  // $("radio").removeAttr("checked");
  clearInterval(answerCountDown);
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