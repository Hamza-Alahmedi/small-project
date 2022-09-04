let removeBottuns = document.getElementsByClassName("revomebtn");
console.log(removeBottuns);
for (let i = 0; i < removeBottuns.length; i++) {
  let button = removeBottuns[i];
  button.addEventListener("click", removeItem);
}

//remove item from Cart
function removeItem(event) {
  let clickButton = event.target;
  clickButton.parentElement.parentElement.parentElement.remove();
  updateTotal();
}

let quantityElement = document.getElementsByClassName("quantityinput");
for (let i = 0; i < quantityElement.length; i++) {
  quantityElement[i].value = 1;
  quantityElement[i].addEventListener("change", updateSubTotal);
}

//update the sub-total
function updateSubTotal(event) {
  quantity = event.target;
  quantityParent = quantity.parentElement.parentElement;
  priceElement = quantityParent.getElementsByClassName("itemPrice")[0];
  subTotal = quantityParent.getElementsByClassName("subTotal")[0];
  price = priceElement.innerText.replace("$", " ");
  subTotal.children[0].innerText = "$" + quantity.value * price;
  if (isNaN(quantity.value) || quantity.value <= 0) {
    quantity.value = 1;
  }
  updateTotal();
}

//update the Grand-total
function updateTotal() {
  let total = 0;
  let grandTotal = document.getElementsByClassName("totalPrice")[0];
  let allTotalFields = document.getElementsByClassName("subTotal");
  for (let i = 0; i < allTotalFields.length; i++) {
    finalPrice = Number(allTotalFields[i].innerText.replace("$", " "));
    total += finalPrice;
  }
  document.getElementsByClassName("totalPrice")[0].innerText = "$" + total;
  console.log(total);
}
