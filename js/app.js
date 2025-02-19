'use strict';

// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  if (items) {
    this.items = items;
  } else {
    this.items = [];
  }
};

Cart.prototype.addItem = function (product, quantity) {
  console.log('we are in add cart', product, quantity);
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  var itemToAdd = new CartItem(product, quantity);
  this.items.push(itemToAdd);

};
Cart.prototype.saveToLocalStorage = function () {
  var localProduct = localStorage.getItem('items');
  if (localProduct) {
    console.log(arrayOfNoProduct);
    var arrayOfNoProduct = JSON.parse(localProduct);
    for (var i = 0; i < arrayOfNoProduct.lenght; i++) {
      new Product(arrayOfNoProduct[i].items);
    }
  }


  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function (item) {
  var itemToRemove = new CartItem(item);
  this.items.push(itemToRemove);
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

localStorage.setItem('savedProduct', JSON.stringify('items'));


// Initialize the app by creating the big list of products with images and names
generateCatalog();
