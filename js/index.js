// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input');
  const subtotal = product.querySelector('.subtotal span');
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subtotalValue = priceValue*quantityValue;
  subtotal.innerHTML = subtotalValue;
  return subtotal.innerHTML;
}

function calculateAll() {
  /*// code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  const productArr = Array.from(products);
  let totalValue = 0;
  for(let productItem of productArr){
    totalValue += Number(updateSubtotal(productItem));
  }

  // ITERATION 3
  const total = document.getElementById("total-value").getElementsByTagName("span");
  total[0].innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
