// function play(){
//    const homeScreen = document.getElementById('home');
//    homeScreen.classList.add('hidden');

//    const playGround = document.getElementById('play-ground ');
//    playGround.classList.remove('hidden')
// }

function continueGame(){
   const alphabets = randomAlphabet();

   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabets;
}



function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame()
}
