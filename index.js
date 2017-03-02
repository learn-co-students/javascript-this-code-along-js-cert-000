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

function Sandwich(bread, ingredients, cut, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.name = name
  this.serve = function() {
    console.log("Here's your " + this.name + ", enjoy!");
  }
}

var reuben = new Sandwich('rye', ['corned beef', 'sauerkraut', 'swiss', 'russian dressing'], 'diagonal');

pbj.serve();

var blt = new Sandwich('white', ['bacon', 'lettuce', 'tomato', 'mayo'], 'rectangle', 'BLT');

blt.serve();
