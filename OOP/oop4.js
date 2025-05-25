const container = document.getElementById('container');

const greenbutton= TailwindButtonGenerator.createButton('green','click me 1', '5');
const redbutton= TailwindButtonGenerator.createButton('red','click me 1', '5');

const orangebutton= TailwindButtonGenerator.createButton('orange','click me 1', '5');


container.innerHTML += greenbutton;
container.innerHTML += redbutton;

container.innerHTML += orangebutton;
