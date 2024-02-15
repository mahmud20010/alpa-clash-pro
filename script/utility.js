function hideElementById(elementId) {
  const hideElement = document.getElementById(elementId);
  hideElement.classList.add("hidden");
}

function showElementById(elementId) {
  const showElement = document.getElementById(elementId);
  showElement.classList.remove("hidden");
}
// set background color
function setBackGroundColor(elementId){
  const elementBgcolor = document.getElementById(elementId);
  elementBgcolor.classList.add('bg-orange-400');
}


// get a random alphabet
function randomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const singleAlphabet = alphabets.split("");
  console.log(singleAlphabet);

  const randomAlphabet = Math.random() * 25;
  const alphabetIndex = Math.round(randomAlphabet);

  const alphabet = singleAlphabet[alphabetIndex];
  console.log(alphabetIndex, alphabet);
  return alphabet;
}

