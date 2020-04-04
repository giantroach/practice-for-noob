function showIntroMessage() {
  message('Welcome to practice for noob!', showIntroDialog);
}

function showIntroDialog() {
  dialog('Is this the first time you are trying this?', showEndingMessage1, showEndingMessage2);
}

function showEndingMessage1() {
  end('Edit "myprogram.js", open index.html on your browser! README.md contains some explanation for the preset functions.', showIntroMessage);
}

function showEndingMessage2() {
  end('Nice! Have a good day!', showIntroMessage);
}

showIntroMessage();
