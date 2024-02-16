// function play(){
//    const homeScreen = document.getElementById('home');
//    homeScreen.classList.add('hidden');

//    const playGround = document.getElementById('play-ground ');
//    playGround.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectAlphabet = currentAlphabet.toLowerCase();

  // check matched or not

  if (playerPressed === expectAlphabet) {
    console.log("You got a point");
    removeBgColorById(expectAlphabet);
    continueGame();
  } else {
    console.log("You missed, you lost life");
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);
function continueGame() {
  const alphabets = randomAlphabet();

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabets;
  setBackGroundColor(alphabets);
}

function play() {
  hideElementById("home");
  showElementById("play-ground");
  continueGame();
}
