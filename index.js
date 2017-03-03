const app = "I don't do much."

var pbj = {
  bread: 'white',
  ingredients: ['peanut butter', 'jelly'],
  cut: 'triangles',
  name: 'peanut butter and jelly',
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log('Your ' + this.name + ' includes: ' + this.ingredients.join(', ') + '. Yum!');
  }
}

function deliverFood(customer, table) {
  console.log('Delivering ' + this.name + ' to ' + customer + ' at table ' + table);
}

function serve() {
  if (arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments);
    last = customers.pop();
    console.log(this.name + " for " + customers.join(', ') + ' and ' + last + '. Enjoy!');
  } else {
    console.log(this.name + ". Order up!");
  }
}

var gc = new Sandwich('white', ['cheese'], 'Grilled Cheese');
var pbj = new Sandwich('wheat', ['chunky peanut butter', 'blackberry preserves'], 'PB&Jam');

pbj.describe();

var salad = {
  ingredients: ['croutons', 'romaine hearts', 'steak', 'parmesan', 'caesar dressing'],
  name: 'Steak Caesar'
}

salad.describe = pbj.describe.bind(salad);

salad.describe();

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer('Sally', '4');

var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
