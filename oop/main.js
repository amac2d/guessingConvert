

$(document).ready(startApp);
 var game = null;
function startApp(){
  game = new GuessingGame();
  game.guess_start();
}
