function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}
Pizza.prototype.checkForSize = function() {
    if (this.size === "18") {
      this.price += 20;
    } else if (this.size === "24") {
      this.price += 25;
    } else {
      this.price += 30;
    }
    this.checkForToppings();
  } 
Pizza.prototype.checkForToppings = function() { 
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

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("input:radio[name=size]:checked").val();
    let pizzaToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppings.push($(this).val());
    });
    let pizzaOrder = new Pizza(pizzaSize, pizzaToppings);
    pizzaOrder.checkForSize()
    $("#output").append("<p>Order up! That'll be $" + pizzaOrder.price + "</p>");
    $(".speech-div").fadeIn();
  });
});