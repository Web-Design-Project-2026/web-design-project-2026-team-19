const cart = JSON.parse(localStorage.getItem("checkoutCart")) || [];

const container = document.getElementById("checkoutItems");
const totalEl = document.getElementById("checkoutTotal");

const format = (p) => Number(p).toLocaleString() + "kr";

/* SAFE TOTAL CALCULATION */
function getTotal() {
  return cart.reduce((sum, item) => {
    const price = Number(item.price || 0);
    const qty = Number(item.qty || 0);
    return sum + price * qty;
  }, 0);
}

function render() {

  if (!container || !totalEl) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty 🛒</p>";
    totalEl.textContent = "Total: 0 kr";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <img src="${item.image}" width="70">
      <div>
        <h4>${item.name}</h4>
        <p>${item.qty} × ${format(item.price)}</p>
      </div>
      <strong>${format(item.price * item.qty)}</strong>
    </div>
  `).join("");

  /*  FIXED TOTAL */
  totalEl.textContent = "Total: " + format(getTotal());
}

render();

  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Payment successful ✅");

    localStorage.removeItem("techifyCart");
    localStorage.removeItem("checkoutCart");

    window.location.href = "index.html";
  });

});