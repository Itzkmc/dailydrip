let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    let li = document.createElement("li");
    li.textContent = item.product + " - ₦" + item.price;
    cartItems.appendChild(li);
  });
  document.getElementById("cart-total").textContent = total;
}

function checkout() {
  let handler = PaystackPop.setup({
    key: 'pk_live_260133b92f9628bd00d818e36521c631a06d1b98',
    email: 'customer@email.com',
    amount: document.getElementById("cart-total").textContent * 100,
    currency: 'NGN',
    callback: function(response) {
      window.location.href = "thankyou.html";
    },
    onClose: function() {
      alert('Transaction was not completed.');
    }
  });
  handler.openIframe();
}
