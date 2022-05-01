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
  const targetProduct = event.currentTarget.parentNode.parentNode;
  targetProduct.parentNode.removeChild(targetProduct);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const newProductDataArr = Array.from(document.getElementsByTagName("input"));
  const newProductPrice = Number(newProductDataArr[newProductDataArr.length-1].value);
  const newProductName = newProductDataArr[newProductDataArr.length-2].value;
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  newProduct.innerHTML = `
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

  console.log(newProduct);
  const insertNewProductHere = document.getElementsByTagName("tbody");
  console.log(insertNewProductHere);
  insertNewProductHere[0].appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.getElementsByClassName("btn-remove");
  const removeProductBtnArr = Array.from(removeProductBtn);
  for(let removeBtn of removeProductBtnArr) {
    removeBtn.addEventListener("click", removeProduct);
  }
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct)
});
