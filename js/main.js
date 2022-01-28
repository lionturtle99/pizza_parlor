function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0
}
let pizza = new Pizza("20'", ["red-sauce", "cheese"]);
// console.log(pizza.size)

Pizza.prototype.checkForSize = function() {
  if (this.size === "18'") {
    this.price += 20;
  } else if (this.size === "24'") {
    this.price += 25;
  } else {
    this.price += 30;
  }
  this.checkForToppings();
  console.log("size is " + this.size)
}

Pizza.prototype.checkForToppings = function() {
  console.log("It made it here")
  this.toppings.forEach(function(i){
    console.log(i)
  })
}

pizza.checkForSize();