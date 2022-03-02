# _Pizza Parlor_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

#### By: _**Liam Eller**_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

#### _a webpage practicing objects and prototypes_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Description

_A webpage where you can order a custom pizza_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Setup/Installation Requirements

* _To download onto your personal device: Click the green "Code" button in the top right of the github repository, from the dropdown, select the "Download Zip" option, Once the file has finished downloading, navigate to your computers downloads and right click, select open with Archive Utility for macs (or whatever un-compress application your computer has), open file directory and open index.html in your browser or text editor application._  
  
* _Or got to the [live site](https://lionturtle99.github.io/pizza-parlor-objects/) on github pages to view._

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## Known Bugs

_None_

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## License

_[MIT](https://opensource.org/licenses/MIT)_  
  
Copyright (c) _01/28/2022_ _Liam Eller_  

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)
  
# Test Driven Development
  
  
### Describe Pizza! 
  

Test: "It should create a pizza object with the correct properties"

Code: let pizza = new Pizza("18', ["res-sauce", "cheese", "pepperoni"])

Expected Output: pizza{size: toppings:}
  
  
### Describe Pizza.prototype.checkForSize   
  
Test: "It should check the size of the pizza order and add the base price"  
  
Code: let pizza1 = new Pizza(24, [1, 4, 5, 6]);  
  Pizza.prototype.checkForSize = function(){  
    let this.price = 0;  
    if (this.size === 18) {  
      this.price += 20;  
    } else if (this.size === 24) {  
      this.price += 25;  
    } else {  
    this.price += 30;  
    }
    alert("The price of your pizza is " + "$" + this.price)  
  }  
    
Expected outcome: "The price of your pizza is $25" 
  
  
### Describe Pizza.prototype.checkForToppings  
  
  
Test: "It should loop through toppings"  
  
Code: let pizza = new Pizza("18', ["res-sauce", "cheese", "pepperoni"]);   
  Pizza.prototype.checkForToppings = function() {  
    this.toppings.forEach(function(i) {  
      console.log(i)  
    })  
  }  
   
Expected outcome: "res-sauce", "cheese", "pepperoni"   
  
  
Test: "It should check topping and add price accordingly"  
  
Code: let pizza = new Pizza("18', ["res-sauce", "cheese", "pepperoni"]);    
  Pizza.prototype.checkForToppings = function() {  
    this.toppings.forEach(function(i) {  
      if (i === "prosciutto" || i === "sausage" || i === "pepperoni") {  
        this.Price += 3;  
      } else if (i === "artichokes" || i === "mama lil peppers") {  
        this.price += 2;  
      } else {  
        this.price += 1;  
      }  
    })  
  }  
  
Expected Output: pizza.price = 25;  
