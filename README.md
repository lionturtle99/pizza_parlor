# Test Driven Development:

### --- Describe Pizza! ---
let testPizza = new Pizza();  
testPizza.sizes.push(12, 18, 32);  
testPizza.toppings.push("red sauce", "pesto", "olives", "artichokes", "mushrooms", "pepperoni", "sausage", "feta", "provolone");  
Expected outcome: testPizza {sizes [...], toppings [...]};  

### --- Describe Pizza.prototype.formula ---  
  
Test: "It should check the size of the pizza order and add the base price"  
  
Code:  
  let pizza1 = new Pizza(24, [1, 4, 5, 6]);
  Pizza.prototype.formula = function(){  
    let total = 0;  
    if (this.size === 18) {  
    _total += 20;  
    } else if (this.size === 24) {  
    _total += 25;  
    } else {  
    total += 30;  
    }
    alert("The price of your pizza is " + "$" + total)  
  }  
    
Expected outcome: "The price of your pizza is $25" 
  

Test: "It should loop through items added to pizza object and add to the total price"  
  
Code:  
  for(i = 0; i < this.toppings.length; i++){  
    if (this.toppings[i] === "red sauce" || this.toppings[i] === "mozzarella") {  
      total;  
    } else if (this.toppings[i] === "artichokes" || this.toppings[i] === "mama's lil peppers") {  
      total += 3;  
    } else {  
      total += 1;  
    }  
    alert("The price of your pizza is " + "$" + total)  
  }  
  let pizza1 = new Pizza(24, ["red sauce", "mozzarella", "artichokes", "olives", "sausage"]);  
pizza1.formula();  
Expected outcome:  
The price of your pizza is $30  