const msgsElm = document.getElementById('messages');
const btnsElm = document.getElementById('buttons');

// display message with next button
function message(msg, nextFunc) {
  msgsElm.innerHTML = msg;
  btnsElm.innerHTML = '';

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = 'Next';
  nextBtn.onclick = nextFunc;
  btnsElm.appendChild(nextBtn);
}

// display dialog that user choose either yes or no
function dialog(msg, yesFunc, noFunc) {
  msgsElm.innerHTML = msg;
  btnsElm.innerHTML = '';

  const yesBtn = document.createElement('button');
  yesBtn.innerHTML = 'Yes';
  yesBtn.onclick = yesFunc;
  btnsElm.appendChild(yesBtn);

  const noBtn = document.createElement('button');
  noBtn.innerHTML = 'No';
  noBtn.onclick = noFunc;
  btnsElm.appendChild(noBtn);
}


// calling this function ends the game
function end(msg, restartFunc) {
  msgsElm.innerHTML = msg;
  btnsElm.innerHTML = '';

  const restartBtn = document.createElement('button');
  restartBtn.innerHTML = 'Restart';
  restartBtn.onclick = restartFunc;
  btnsElm.appendChild(restartBtn);
}

// randomly returning true or false
function random(percent = 0.5) {
  return Math.random() < percent;
}
