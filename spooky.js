//arrays
eaten = ['Werewolf', 'Slime Monster', 'Ghost'];
underBed = ['Demon', 'Boogey Man', 'Tentacle Creature'];
doNotGo = ['outside', 'under the stars', 'in there'];

//Log spooky messages
let food = eaten[Math.floor(Math.random() * eaten.length)];
console.log(`You will be eaten by a ${food} tonight!`);

let bed = underBed[Math.floor(Math.random() * underBed.length)];
console.log(`There's a ${bed} under your bed!`);

let doNot = doNotGo[Math.floor(Math.random() * doNotGo.length)];
console.log(`Don't go ${doNot}!`);

