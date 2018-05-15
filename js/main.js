var button = document.querySelector('button');
var background = document.querySelector('.light');
var text = document.querySelector('h1');

function switchLight(){
  if (button.className == 'switch on'){
    background.className = 'dark';
    text.innerText = 'Hey, who turned off the lights?';
    button.className = 'switch off';
  }
  else if (button.className == 'switch off'){
    background.className = 'light';
    text.innerText = "It's so bright in here!";
    button.className = 'switch on';
  }
}

button.addEventListener('click', switchLight);
