function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
let pizza = new Pizza("20'", ["red-sauce", "cheese"]);
console.log(pizza.size)