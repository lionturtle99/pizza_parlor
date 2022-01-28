function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
let pizza = new Pizza("20'", ["red-sauce", "cheese"]);
// console.log(pizza.size)

Pizza.prototype.checkForSize = function() {
  let total = 0;
  if (this.size === "18'") {
    total += 20;
  } else if (this.size === "24'") {
    total += 25;
  } else {
    total += 30;
  }
  console.log(total)
}

pizza.checkForSize();