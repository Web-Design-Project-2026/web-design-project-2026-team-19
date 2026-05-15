const translations = {
  en: {
    nav_home: "Home",
    nav_collections: "Collections",
    nav_deals: "Deals",
    nav_support: "Support",
    nav_account: "Account",

    hero_tag: "New Arrivals",
    hero_title: "Upgrade Your Tech Setup",
    hero_desc: "High performance gear for work, gaming and everyday life.",

    btn_upgrade: "Upgrade",
    btn_latest: "Latest",

    cart_title: "Your Cart",
    continue: "Continue Shopping",
    checkout: "Proceed to Payment",
    added: "added",
    search_placeholder: "Search gadgets...",
  },

  sv: {
    nav_home: "Hem",
    nav_collections: "Kollektioner",
    nav_deals: "Erbjudanden",
    nav_support: "Support",
    nav_account: "Konto",

    hero_tag: "Nyheter",
    hero_title: "Uppgradera Din Teknik",
    hero_desc: "Högpresterande utrustning för arbete, spel och vardag.",

    btn_upgrade: "Uppgradera",
    btn_latest: "Senaste",

    cart_title: "Din Varukorg",
    continue: "Fortsätt Handla",
    checkout: "Gå till betalning",
    added: "tillagd",
    search_placeholder: "Sök produkter...",
  },

  fr: {
    nav_home: "Accueil",
    nav_collections: "Collections",
    nav_deals: "Offres",
    nav_support: "Support",
    nav_account: "Compte",

    hero_tag: "Nouveautés",
    hero_title: "Améliorez Votre Technologie",
    hero_desc: "Équipement haute performance pour le travail et le jeu.",

    btn_upgrade: "Améliorer",
    btn_latest: "Nouveautés",

    cart_title: "Votre Panier",
    continue: "Continuer vos achats",
    checkout: "Passer au paiement",
    added: "ajouté",
    search_placeholder: "Rechercher des produits...",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const CART_KEY = "techifyCart";
  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  let selectedColors = 
     JSON.parse(localStorage.getItem("selectedColors")) || {};

  const qs = (s) => document.querySelector(s);
  const qsa = (s) => document.querySelectorAll(s);

  /* LANGUAGE SYSTEM */
  const langSwitcher = document.getElementById("languageSwitcher");

  let currentLang = localStorage.getItem("lang") || "en";
  applyLanguage(currentLang);

  if (langSwitcher) {
    langSwitcher.value = currentLang;

    langSwitcher.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang]?.[key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang]?.[key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  /*  CORE */
  const formatPrice = (p) => p.toLocaleString() + "kr";

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function cartCount() {
    return cart.reduce((t, i) => t + i.qty, 0);
  }

  function cartTotal() {
    return cart.reduce((t, i) => t + i.price * i.qty, 0);
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
    const toast = document.querySelector(".toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  /* CART */

  function addToCart(product) {

  const chosenColor =
    product.selectedColor ||
    selectedColors[product.id] ||
    product.colors?.[0] ||
    "default";

  const found = cart.find(
    (i) =>
      i.id === product.id &&
      i.selectedColor === chosenColor
  );

  if (found) {
    found.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1,
      selectedColor: chosenColor,
    });
  }

  saveCart();
  updateNav();
  renderSideCart();

  showToast(
    `${product.name} (${chosenColor}) ${
      translations[currentLang].added || "added"
    } ✅`
  );

  openSideCart();
}
  

  function changeQty(id, delta) {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }

    saveCart();
    renderSideCart();
    renderCartPage();
    updateNav();
  }

  function removeFromCart(id) {
    cart = cart.filter((i) => i.id !== id);
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

    container.innerHTML = cart
      .map(
        (item) => `
      <div class="side-cart-item">
        <img src="${item.image}" class="side-img">
        <div class="side-info">
          <h4>${item.name}</h4>
          
          <p class="cart-color">
            Color: ${item.selectedColor}
          </p>

          <p>${formatPrice(item.price)}</p>
          
          <div class="qty">
            <button data-id="${item.id}" class="minus">-</button>
            <span>${item.qty}</span>
            <button data-id="${item.id}" class="plus">+</button>
          </div>
        </div>
        <button class="remove" data-id="${item.id}">X</button>
      </div>
    `,
      )
      .join("");

    totalEl.textContent = `Total: ${formatPrice(cartTotal())}`;

    qsa(".plus").forEach(
      (b) => (b.onclick = () => changeQty(+b.dataset.id, 1)),
    );

    qsa(".minus").forEach(
      (b) => (b.onclick = () => changeQty(+b.dataset.id, -1)),
    );

    qsa(".remove").forEach(
      (b) => (b.onclick = () => removeFromCart(+b.dataset.id)),
    );
  }

  /* SIDE CART BUTTONS */
  const continueShoppingBtn = document.getElementById("continueShopping");
  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener("click", () => {
      closeSideCart();
    });
  }

  const goToCartBtn = document.getElementById("goToCart");
  if (goToCartBtn) {
    goToCartBtn.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

 /* SEARCH */
const searchInput = qs("#search");
const searchResults = qs("#searchResults");

if (searchInput && searchResults) {

  function performSearch(value) {

    const searchTerm = value.trim().toLowerCase();

    /* RESET */
    if (!searchTerm) {

      searchResults.innerHTML = "";
      searchResults.style.display = "none";

      /* SHOW ALL PRODUCTS AGAIN */
      qsa(".product-card").forEach((card) => {
        card.style.display = "block";
      });

      return;
    }

    /* ADVANCED PRODUCT MATCHING */
    const matches = PRODUCTS.filter((p) => {

      const searchableText = `
        ${p.name || ""}
        ${p.category || ""}
        ${p.description || ""}
        ${p.overview || ""}
        ${(p.features || []).join(" ")}
        ${(p.colors || []).join(" ")}
      `
        .toLowerCase()
        .trim();

      return searchableText.includes(searchTerm);
    });

    /* FILTER PRODUCT CARDS LIVE */
    qsa(".product-card").forEach((card) => {

      const id = +card.dataset.id;

      const found = matches.find((p) => p.id === id);

      card.style.display = found ? "block" : "none";
    });

    /* NO RESULTS */
    if (matches.length === 0) {

      searchResults.innerHTML = `
        <div class="search-empty">
          No products found
        </div>
      `;

      searchResults.style.display = "block";
      return;
    }

    /* SEARCH DROPDOWN RESULTS */
    searchResults.innerHTML = matches
      .slice(0, 8)
      .map(
        (p) => `
          <div class="search-item" data-id="${p.id}">
            
            <img 
              src="${p.image}" 
              alt="${p.name}"
              class="search-thumb"
            >

            <div class="search-info">
              <h4>${p.name}</h4>
              <p>${formatPrice(p.price)}</p>
            </div>

          </div>
        `,
      )
      .join("");

    searchResults.style.display = "block";

    /* CLICK SEARCH RESULT */
    qsa(".search-item").forEach((item) => {

      item.onclick = () => {

        const productId = item.dataset.id;

        window.location.href =
          `product.html?id=${productId}`;
      };
    });
  }

  /* LIVE SEARCH */
  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  /* ENTER KEY */
  searchInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

      e.preventDefault();

      const firstMatch =
        searchResults.querySelector(".search-item");

      if (firstMatch) {
        firstMatch.click();
      }
    }
  });

  /* CLOSE SEARCH */
  document.addEventListener("click", (e) => {

    if (!e.target.closest(".search-container")) {

      searchResults.style.display = "none";
    }
  });
}

  /* BUTTONS */
  qsa(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      const id = +card.dataset.id;
      const product = PRODUCTS.find((p) => p.id === id);
      if (product) addToCart(product);
    });
  });

  /* FILTER SYSTEM */
  qs("#applyFilters")?.addEventListener("click", () => {
    const checked = [
      ...document.querySelectorAll("input[name='category']:checked"),
    ].map((c) => c.value);

    qsa(".product-card").forEach((card) => {
      const id = +card.dataset.id;
      const product = PRODUCTS.find((p) => p.id === id);

      if (!product) return;

      if (checked.length === 0 || checked.includes(product.category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  /* CLEAR FILTERS */
  qs(".clear-filters")?.addEventListener("click", () => {
    document
      .querySelectorAll("input[name='category']")
      .forEach((c) => (c.checked = false));
    qsa(".product-card").forEach((card) => (card.style.display = "block"));
  });

  /* PRODUCT CARDS */
  qsa(".product-card").forEach((card) => {
    const id = +card.dataset.id;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) return;

    card.innerHTML = `
  <a href="product.html?id=${product.id}">
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <h3>${product.name}</h3>
  </a>

  <div class="color-options">
    ${
      product.colors
        ?.map(
          (c, i) => `
        <span 
          class="color ${c} ${i === 0 ? "active" : ""}" 
          data-color="${c}">
        </span>
      `,
        )
        .join("") || ""
    }
  </div>

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

    const colorDots = card.querySelectorAll(".color");

colorDots.forEach((dot) => {

  if (
    dot.dataset.color ===
    (selectedColors[product.id] || product.colors?.[0])
  ) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    colorDots.forEach((d) =>
      d.classList.remove("active")
    );

    dot.classList.add("active");

    const selectedColor = dot.dataset.color;

    selectedColors[product.id] = selectedColor;

    localStorage.setItem(
      "selectedColors",
      JSON.stringify(selectedColors)
    );

    if (
      product.imagesByColor &&
      product.imagesByColor[selectedColor]
    ) {
      card.querySelector("img").src =
        product.imagesByColor[selectedColor];
    }
  });
});
  });

  /* PRODUCT PAGE */
  const productSection = qs("#productSection");

  if (productSection) {
    const id = +new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find((p) => p.id === id);
    const activeColor =
       selectedColors[id] || p?.colors?.[0];

    if (!p) {
      productSection.innerHTML = "<p>Product not found</p>";
    } else {
      productSection.innerHTML = `
        <div class="product-detail">
          <div class="product-grid">

            <!-- LEFT -->
            <div class="product-left">
              <div class="product-image">
                <img 
                  src="${
                    p.imagesByColor?.[activeColor] || p.image
                  }"
                  alt="${p.name}"
                >
              </div>

            ${
              p.specs
                ? `
  <div class="product-specs">
    ${Object.entries(p.specs)
      .filter(([_, val]) => val)
      .map(([key, val]) => {
        const label = key.replace(/([A-Z])/g, " $1"); // split camelCase
        return `<p><strong>${label}:</strong> ${val}</p>`;
      })
      .join("")}
  </div>
`
                : ""
            }
            </div>

            <!-- RIGHT -->
            <div class="product-right">
              <h1>${p.name}</h1>
              <p class="price">${formatPrice(p.price)}</p>
              
              <hr style="border:0; border-top:1px solid #eaeaea; margin: 10px 0;">

              <p class="product-desc">${p.description || p.overview || ""}</p>

              ${
                p.colors
                  ? `
              <div class="product-colors">
                <p><strong>Color:</strong></p>
                <div class="color-options">
                  ${p.colors
                    .map(
                      (c) => `
                    <span class="color ${c} ${c === activeColor ? "active" : ""}" data-color="${c}"></span>
                  `,
                    )
                    .join("")}
                </div>
              </div>
              `
                  : ""
              }

              <ul class="features">
                ${p.features?.map((f) => `<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${f}</span></li>`).join("") || ""}
              </ul>

              <div class="trust-box">
                <div class="trust-item"><span class="icon">🚚</span> Free Shipping</div>
                <div class="trust-item"><span class="icon">↩️</span> 30 Days Easy Return</div>
                <div class="trust-item"><span class="icon">🛡️</span> 2 Year Warranty</div>
              </div>

              <button id="addBtn" class="buy-main">Add to Cart</button>
            </div>

          </div>
        </div>
      `;

     
const productImage =
  productSection.querySelector(".product-image img");

const pageColors =
  productSection.querySelectorAll(".color");

let selectedColor = activeColor;

pageColors.forEach((dot) => {

  dot.addEventListener("click", () => {

    pageColors.forEach((d) =>
      d.classList.remove("active")
    );

    dot.classList.add("active");

    selectedColor = dot.dataset.color;

    selectedColors[p.id] = selectedColor;

    localStorage.setItem(
      "selectedColors",
      JSON.stringify(selectedColors)
    );

    if (
      p.imagesByColor &&
      p.imagesByColor[selectedColor]
    ) {
      productImage.src =
        p.imagesByColor[selectedColor];
    }
  });
});

qs("#addBtn").onclick = () => {
  addToCart({
    ...p,
    selectedColor,
  });
};

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
      ${cart
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.image}" width="80">
          <div>
            <h3>${item.name}</h3>

            <p class="cart-color">
              Color: ${item.selectedColor}
            </p>

            <p>${formatPrice(item.price * item.qty)}</p>
          </div>
        </div>
      `,
        )
        .join("")}

      <div class="cart-total">
        Total: <strong>${formatPrice(cartTotal())}</strong>
      </div>
    `;
  }

  updateNav();
  /* CHECKOUT BUTTON */
  const checkoutBtn = document.getElementById("checkoutNow");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      localStorage.setItem("checkoutCart", JSON.stringify(cart));

      window.location.href = "checkout.html";
    });
  }

  renderSideCart();
  renderCartPage();
});
