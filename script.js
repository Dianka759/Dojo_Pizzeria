// Creating 4 different pizzas

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("cheese crust", "traditional", ["mozzarella", "cheddar"], ["pepperoni", "mushroom", "peppers", "forbidden pineapple"]);
console.log(p3);
var p4 = pizzaOven("cookie crust", "chocolate", ["no"], ["marshmellow", "chocolate chips", "strawberries"]);
console.log(p4);


//  attempt #1 writing a random pizza function 

function randomPizza() {

    var crustType = ["deep dish", "hand tossed", "stuffed crust", "cookie crust"];
    var sauceType = ["traditional", "marinara","Alfredo"];
    var cheese = ["mozzarella", "feta", "no","cheddar"];
    var toppings = ["pepperoni", "olives", "marshmellow", "mushroom","forbidden pineapple"];

    // var random = [Math.floor((Math.random() * crustType.length))];
    // var randomCrust =crustType[random];
    // var randomSauce =sauceType[random];
    // var randomCheese =cheese[random];
    // var randomToppings = toppings[random] + ", " + toppings[random];
    var randomCrust = crustType[Math.floor((Math.random() * crustType.length))];
    var randomSauce = sauceType[Math.floor((Math.random() * sauceType.length))];
    var randomCheese = cheese[Math.floor((Math.random() * cheese.length))];
    var randomToppings = toppings[Math.floor((Math.random() * toppings.length))] + ", " + toppings[Math.floor((Math.random() * toppings.length))] + ", " + toppings[Math.floor((Math.random() * toppings.length))]; 

    console.log("Here is your random pizza!");
    console.log("crust: " + randomCrust);
    console.log("sauce: " + randomSauce);
    console.log("cheese: " + randomCheese);
    console.log("toppings: " + randomToppings);
}
randomPizza()


//////////////  SOLUTION /////////////////

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());