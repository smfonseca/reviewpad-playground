// Define a class for creating products
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Define a method to print out information about the product
  printInfo() {
    console.log(
      `${this.name} is a ${this.category} that costs $${this.price}.`
    );
  }
}

// Create some product objects
const product1 = new Product('iPhone', 999, 'phone');
const product2 = new Product('iPad', 799, 'tablet');
const product3 = new Product('MacBook', 1299, 'laptop');

// Call the printInfo method on the product objects
product1.printInfo(); // Output: iPhone is a phone that costs $999.
product2.printInfo(); // Output: iPad is a tablet that costs $799.
product3.printInfo(); // Output: MacBook is a laptop that costs $1299.

// Define a class for creating shopping carts
// reviewpad-an: critical
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Define a method to add a product to the shopping cart
  addItem(product) {
    this.items.push(product);
  }

  // Define a method to remove a product from the shopping cart
  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Define a method to calculate the total price of the items in the shopping cart
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      total += item.price;
    }
    return total;
  }

  // Define a method to print out information about the items in the shopping cart
  printItems() {
    console.log(`Items in cart:`);
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      console.log(`${item.name} - $${item.price}`);
    }
  }
}

// Create a shopping cart and add some products to it
const cart = new ShoppingCart();
cart.addItem(product1);
cart.addItem(product2);

// Call the getTotal and printItems methods on the shopping cart
console.log(`Total cost: $${cart.getTotal()}`); // Output: Total cost: $1798
cart.printItems();
/*
Output:
Items in cart:
iPhone - $999
iPad - $799
*/

// Remove a product from the shopping cart and print the updated list of items
cart.removeItem(product1);
console.log(`Total cost: $${cart.getTotal()}`); // Output: Total cost: $799
cart.printItems();
/*
Output:
Items in cart:
iPad - $799
*/
