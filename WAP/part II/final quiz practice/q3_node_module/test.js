const valueOfDuck= require('./duck');
let duck= new valueOfDuck('true', 'false', '10', '13');

// duck.moveTo(1,2);
console.log(duck.flying);
console.log(duck.quacking);

duck.moveTo(3,7);
console.log(duck.takeOff());