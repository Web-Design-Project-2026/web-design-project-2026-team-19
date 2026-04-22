document.addEventListener("DOMContentLoaded", () => {

  const CART_KEY = "techifyCart";
  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const qs = s => document.querySelector(s);
  const qsa = s => document.querySelectorAll(s);

  /*  CORE */
  const formatPrice = p => p.toLocaleString() + "kr";

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function cartCount() {
    return cart.reduce((t, i) => t + i.qty, 0);
  }

  function cartTotal() {
    return cart.reduce((t, i) => t + (i.price * i.qty), 0);
  }

  /* NAV */
  function updateNav() {
    const link = qs("#cartLink");
    if (!link) return;

    link.textContent = `Cart (${cartCount()})`;

    link.onclick = (e) => {
      e.preventDefault();
      openSideCart();
    };
  }

  /* TOAST */
  function showToast(message) {
    const toast = document.querySelector('.toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  /* CART */
  function addToCart(product) {
    const found = cart.find(i => i.id === product.id);

    if (found) found.qty++;
    else cart.push({ ...product, qty: 1 });

    saveCart();
    updateNav();
    renderSideCart();
    showToast(`${product.name} added ✅`);
    openSideCart();
  }

  function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }

    saveCart();
    renderSideCart();
    renderCartPage();
    updateNav();
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderSideCart();
    renderCartPage();
    updateNav();
  }

  /* SIDE CART */
  const sideCart = qs("#sideCart");

  function openSideCart() {
    sideCart?.classList.add("open");
    renderSideCart();
  }

  function closeSideCart() {
    sideCart?.classList.remove("open");
  }

  qs("#closeCart")?.addEventListener("click", closeSideCart);

  function renderSideCart() {
    const container = qs("#sideCartItems");
    const totalEl = qs("#sideCartTotal");

    if (!container || !totalEl) return;

    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty 🛒</p>";
      totalEl.textContent = "Total: 0 kr";
      return;
    }

    container.innerHTML = cart.map(item => `
      <div class="side-cart-item">
        <img src="${item.image}" class="side-img">
        <div class="side-info">
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)}</p>
          <div class="qty">
            <button data-id="${item.id}" class="minus">-</button>
            <span>${item.qty}</span>
            <button data-id="${item.id}" class="plus">+</button>
          </div>
        </div>
        <button class="remove" data-id="${item.id}">X</button>
      </div>
    `).join("");

    totalEl.textContent = `Total: ${formatPrice(cartTotal())}`;

    qsa(".plus").forEach(b =>
      b.onclick = () => changeQty(+b.dataset.id, 1)
    );

    qsa(".minus").forEach(b =>
      b.onclick = () => changeQty(+b.dataset.id, -1)
    );

    qsa(".remove").forEach(b =>
      b.onclick = () => removeFromCart(+b.dataset.id)
    );
  }

  /* SEARCH */
  const searchInput = qs("#search");
  const searchResults = qs("#searchResults");

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();

      if (!value) {
        searchResults.style.display = "none";
        return;
      }

      const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(value)
      );

      searchResults.innerHTML = matches.map(p => `
        <div class="search-item" data-id="${p.id}">
          ${p.name}
        </div>
      `).join("");

      searchResults.style.display = "block";

      qsa(".search-item").forEach(item => {
        item.onclick = () => {
          window.location.href = `product.html?id=${item.dataset.id}`;
        };
      });
    });

    document.addEventListener("click", e => {
      if (!e.target.closest(".search-container")) {
        searchResults.style.display = "none";
      }
    });
  }
  /* PRODUCT CARDS */
qsa(".product-card").forEach(card => {
  const id = +card.dataset.id;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return;

  card.innerHTML = `
    <a href="product.html?id=${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <h3>${product.name}</h3>
    </a>

    <p class="desc">
      ${product.overview || "Premium product with high performance."}
    </p>

    <p class="price">${formatPrice(product.price)}</p>

    <div class="card-actions">
      <a href="product.html?id=${product.id}" class="link-btn">
        Learn more
      </a>

      <button class="buy-btn" data-id="${product.id}">
        Buy
      </button>
    </div>
  `;

  const buyBtn = card.querySelector(".buy-btn");
  buyBtn.onclick = (e) => {
    e.stopPropagation();
    addToCart(product);
  };
});
 
  /* PRODUCT PAGE */
  const productSection = qs("#productSection");

  if (productSection) {
    const id = +new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find(p => p.id === id);

    if (!p) {
      productSection.innerHTML = "<p>Product not found</p>";
    } else {
      productSection.innerHTML = `
        <div class="product-detail">
          <div class="product-grid">

            <!-- LEFT -->
            <div class="product-left">
              <div class="product-image">
                <img src="${p.image}" alt="${p.name}">
              </div>

              ${p.specs ? `
  <div class="product-specs">
    <p><strong>CPU:</strong> ${p.specs.cpu}</p>
    <p><strong>GPU:</strong> ${p.specs.gpu}</p>
    <p><strong>Display:</strong> ${p.specs.display}</p>
  </div>
` : ""}
            </div>

            <!-- RIGHT -->
            <div class="product-right">
              <h1>${p.name}</h1>
              <p class="price">${formatPrice(p.price)}</p>

              <ul class="features">
                ${p.features?.map(f => `<li>✔ ${f}</li>`).join("") || ""}
              </ul>

              <div class="trust-box">
                <p>🚚 Free Shipping</p>
                <p>↩️ 30 Days Easy Return</p>
                <p>🛡️ 2 Year Warranty</p>
              </div>

              <button id="addBtn" class="buy-main">Add to Cart</button>
            </div>

          </div>
        </div>
      `;

      qs("#addBtn").onclick = () => addToCart(p);
    }
  }

  /* CART PAGE */
  function renderCartPage() {
    const section = qs("#cartSection");
    if (!section) return;

    if (cart.length === 0) {
      section.innerHTML = "<h2>Your cart is empty</h2>";
      return;
    }

    section.innerHTML = `
      ${cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" width="80">
          <div>
            <h3>${item.name}</h3>
            <p>${formatPrice(item.price * item.qty)}</p>
          </div>
        </div>
      `).join("")}

      <div class="cart-total">
        Total: <strong>${formatPrice(cartTotal())}</strong>
      </div>
    `;
  }


  updateNav();
  renderSideCart();
  renderCartPage();

});




      


          









