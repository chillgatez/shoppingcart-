/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableRows = document.querySelectorAll('tbody tr');
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].remove();
 }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tablebody = document.querySelector('tbody');

  // TODO: Iterate over the items in the cart
  let items = state.cart.items; 
  for (let i = 0; i < items.length; i++) {

  // TODO: Create a TR
  let tablerow = document.createElement('tr');
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteLink = document.createElement('td')
  deleteLink.innerHTML = 'x';

  let quantity = document.createElement('td');
  quantity.innerHTML = items[i].quantity;
    
  let item = document.createElement('td');
  item.innerHTML = state.cart.items[i].product.name 


  // TODO: Add the TR to the TBODY and each of the TD's to the TR
   
    tablerow.append(deleteLink, quantity, item);
    tablebody.append(tablerow);

 }
}

function removeItemFromCart(event) {
  if (event.target.innerHTML == 'X') {
    let clickedRow = event.target.parentElement;
    let deletedItemName = productNameTD.innerText;

    for (let i = 0; i < state.cart.items.length; i++) {
      let item = state.cart.items[i].product;
      if (item.name === deletedItemName) {
        state.cart.removeItem(item);
        break;
      }
    }
  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  state.cart.saveToLocalStorage();
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
