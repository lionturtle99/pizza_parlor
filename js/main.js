class Pizza{
  constructor(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

  checkForSize() {
    if (this.size === "18'") {
      this.price += 20;
    } else if (this.size === "24'") {
      this.price += 25;
    } else {
      this.price += 30;
    }
    this.checkForToppings();
  }
  
  checkForToppings() { 
    let that = this;
    this.toppings.forEach(function(i) { 
      if (i === "prosciutto" || i === "sausage" || i === "pepperoni") {  
        that.price += 3;  
      } else if (i === "artichokes" || i === "mama lil peppers") {  
        that.price += 2;  
      } else {  
        that.price += 1; 
      }  
    });  
  } 
}

let pizza = new Pizza("24'", ["red-sauce", "artichokes", "pepperoni"]);
console.log(pizza.price)
pizza.checkForSize();
console.log(pizza.price)
