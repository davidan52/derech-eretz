// ===== CATEGORY LABELS =====
const CAT_LABELS = {
  kiddush:   'ÃÂÃÂÃÂÃÂÃÂÃÂ¡ÃÂÃÂÃÂÃÂª ÃÂÃÂ§ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ©',
  shabbat:   'ÃÂÃÂ©ÃÂÃÂÃÂÃÂª ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ',
  mezuzot:   'ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂª',
  tallitot:  'ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂªÃÂÃÂÃÂÃÂª',
  tefillin:  'ÃÂÃÂªÃÂÃÂ¤ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ',
  kippot:    'ÃÂÃÂÃÂÃÂÃÂÃÂ¤ÃÂÃÂÃÂÃÂª',
  hanukkah:  'ÃÂÃÂÃÂÃÂ ÃÂÃÂÃÂÃÂÃÂÃÂ',
  pesach:    'ÃÂÃÂ¤ÃÂÃÂ¡ÃÂÃÂ',
  wedding:   'ÃÂÃÂÃÂÃÂªÃÂÃÂÃÂÃÂ ÃÂÃÂ',
  tzedakah:  'ÃÂÃÂ§ÃÂÃÂÃÂÃÂ¤ÃÂÃÂÃÂÃÂª ÃÂÃÂ¦ÃÂÃÂÃÂÃÂ§ÃÂÃÂ',
  jewelry:   'ÃÂÃÂªÃÂÃÂÃÂÃÂ©ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ',
  synagogue: 'ÃÂÃÂÃÂÃÂÃÂÃÂ ÃÂÃÂÃÂÃÂÃÂÃÂª ÃÂÃÂÃÂÃÂ ÃÂÃÂ¡ÃÂÃÂª',
};

// ===== STORE DATA =====
// Prices below are RETAIL (you set these ÃÂ¢ÃÂÃÂ typically 2xÃÂ¢ÃÂÃÂ3x your wholesale cost)
const PRODUCTS = [
  {
    "id": 1,
    "title": "כוס באבא סאלי",
    "category": "kiddush",
    "badge": "מומלץ",
    "price": 320,
    "oldPrice": 390,
    "rating": 4.9,
    "reviews": 88,
    "img": "https://www.israel-judaica.com/big/42437.jpg"
  },
  {
    "id": 2,
    "title": "כוס קידוש אקריל וזהב – מודרני",
    "price": 185,
    "oldPrice": null,
    "rating": 4.7,
    "reviews": 43,
    "badge": "חדש",
    "category": "kiddush",
    "img": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80"
  },
  {
    "id": 3,
    "title": "כוס קידוש קריסטל עם בסיס כסף",
    "price": 260,
    "oldPrice": 320,
    "rating": 4.8,
    "reviews": 61,
    "badge": "מבצע",
    "category": "kiddush",
    "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
  },
  {
    "id": 4,
    "title": "פמוטים מכסף – זוג, עיצוב ירושלמי",
    "price": 420,
    "oldPrice": 520,
    "rating": 4.9,
    "reviews": 102,
    "badge": "מומלץ",
    "category": "shabbat",
    "img": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80"
  },
  {
    "id": 5,
    "title": "לוח חלה עם סכין – עץ זית",
    "price": 165,
    "oldPrice": null,
    "rating": 4.7,
    "reviews": 55,
    "badge": null,
    "category": "shabbat",
    "img": "https://images.unsplash.com/photo-1549590143-d5855148a9d5?w=400&q=80"
  },
  {
    "id": 6,
    "title": "בשמים לבדלה – כסף מצופה",
    "price": 290,
    "oldPrice": null,
    "rating": 4.8,
    "reviews": 39,
    "badge": "חדש",
    "category": "shabbat",
    "img": "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&q=80"
  },
  {
    "id": 7,
    "title": "מפה לחלות – רקמה ידנית, כחול-לבן",
    "price": 145,
    "oldPrice": 185,
    "rating": 4.6,
    "reviews": 47,
    "badge": "מבצע",
    "category": "shabbat",
    "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
  },
  {
    "id": 8,
    "title": "מזוזה כסף 925 – פרשיה מהודרת",
    "price": 340,
    "oldPrice": null,
    "rating": 5,
    "reviews": 134,
    "badge": "מומלץ",
    "category": "mezuzot",
    "img": "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80"
  },
  {
    "id": 9,
    "title": "מזוזה אקריל וזהב – עיצוב מודרני",
    "price": 120,
    "oldPrice": null,
    "rating": 4.6,
    "reviews": 78,
    "badge": null,
    "category": "mezuzot",
    "img": "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&q=80"
  },
  {
    "id": 10,
    "title": "מזוזה קרמיקה ציורית – ארץ ישראל",
    "price": 95,
    "oldPrice": 120,
    "rating": 4.7,
    "reviews": 53,
    "badge": "מבצע",
    "category": "mezuzot",
    "img": "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&q=80"
  },
  {
    "id": 11,
    "title": "טלית גדול – צמר מרינו, פסים כחולים",
    "price": 490,
    "oldPrice": null,
    "rating": 5,
    "reviews": 47,
    "badge": "חדש",
    "category": "tallitot",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
  },
  {
    "id": 12,
    "title": "טלית קטן כותנה – לבן קלאסי",
    "price": 120,
    "oldPrice": 150,
    "rating": 4.8,
    "reviews": 89,
    "badge": "מבצע",
    "category": "tallitot",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
  },
  {
    "id": 13,
    "title": "כיפה סרוגה – עבודת יד, לבן-תכלת",
    "price": 55,
    "oldPrice": null,
    "rating": 4.7,
    "reviews": 210,
    "badge": null,
    "category": "kippot",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
  },
  {
    "id": 14,
    "title": "כיפה מעור – שחור, חלק",
    "price": 95,
    "oldPrice": null,
    "rating": 4.5,
    "reviews": 143,
    "badge": null,
    "category": "kippot",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
  },
  {
    "id": 15,
    "title": "כיפה קטיפה – לחתן",
    "price": 75,
    "oldPrice": null,
    "rating": 4.9,
    "reviews": 67,
    "badge": "חדש",
    "category": "kippot",
    "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
  },
  {
    "id": 16,
    "title": "חנוכייה כסף מצופה – עיצוב ירושלמי",
    "price": 380,
    "oldPrice": 460,
    "rating": 4.8,
    "reviews": 91,
    "badge": "מבצע",
    "category": "hanukkah",
    "img": "https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=400&q=80"
  },
  {
    "id": 17,
    "title": "חנוכייה אקריל וזהב – מודרנית",
    "price": 195,
    "oldPrice": null,
    "rating": 4.6,
    "reviews": 54,
    "badge": null,
    "category": "hanukkah",
    "img": "https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=400&q=80"
  },
  {
    "id": 18,
    "title": "קערת סדר פסח – קרמיקה מצוירת",
    "price": 320,
    "oldPrice": null,
    "rating": 4.9,
    "reviews": 44,
    "badge": "מומלץ",
    "category": "pesach",
    "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
  },
  {
    "id": 19,
    "title": "כוס מרים + כוס אליהו – סט",
    "price": 245,
    "oldPrice": 300,
    "rating": 4.7,
    "reviews": 37,
    "badge": "מבצע",
    "category": "pesach",
    "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
  },
  {
    "id": 20,
    "title": "טבעת קידושין – זהב 14K",
    "price": 1200,
    "oldPrice": null,
    "rating": 5,
    "reviews": 28,
    "badge": "מומלץ",
    "category": "wedding",
    "img": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80"
  },
  {
    "id": 21,
    "title": "כוס שבירה לחתן – כסף עם תיק",
    "price": 185,
    "oldPrice": null,
    "rating": 4.8,
    "reviews": 61,
    "badge": "חדש",
    "category": "wedding",
    "img": "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&q=80"
  },
  {
    "id": 22,
    "title": "קופת צדקה כסף – עיצוב ירושלים",
    "price": 160,
    "oldPrice": null,
    "rating": 4.7,
    "reviews": 72,
    "badge": null,
    "category": "tzedakah",
    "img": "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=400&q=80"
  },
  {
    "id": 23,
    "title": "שרשרת חמסה – כסף 925",
    "price": 280,
    "oldPrice": null,
    "rating": 4.9,
    "reviews": 115,
    "badge": "מומלץ",
    "category": "jewelry",
    "img": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80"
  },
  {
    "id": 24,
    "title": "עגילי מגן דוד – זהב 14K",
    "price": 490,
    "oldPrice": 580,
    "rating": 4.8,
    "reviews": 39,
    "badge": "מבצע",
    "category": "jewelry",
    "img": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80"
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let currentPage = 1;
let currentCategory = 'all';
let currentSort = 'default';
let searchQuery = '';
const PER_PAGE = 16;
const FREE_SHIPPING_THRESHOLD = 199;

// ===== HELPERS =====
const $ = id => document.getElementById(id);
const formatPrice = n => `ÃÂ¢ÃÂÃÂª${n.toLocaleString('he-IL')}`;

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = 'ÃÂ¢ÃÂÃÂ'.repeat(full);
  if (half) s += 'ÃÂÃÂ½';
  while (s.replace('ÃÂÃÂ½','x').length < 5) s += 'ÃÂ¢ÃÂÃÂ';
  return s;
}

function badgeClass(badge) {
  if (!badge) return '';
  const map = { 'ÃÂÃÂÃÂÃÂÃÂÃÂ©': 'new', 'ÃÂÃÂÃÂÃÂÃÂÃÂ¦ÃÂÃÂ¢': 'sale', 'ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¥': '' };
  return map[badge] ?? '';
}

// ===== FILTER & SORT =====
function getFiltered() {
  let list = [...PRODUCTS];
  if (currentCategory !== 'all') list = list.filter(p => p.category === currentCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => p.title.toLowerCase().includes(q));
  }
  switch (currentSort) {
    case 'price-asc': list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'rating': list.sort((a,b) => b.rating - a.rating); break;
    case 'newest': list.sort((a,b) => b.id - a.id); break;
  }
  return list;
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = $('productGrid');
  const countEl = $('resultsCount');
  const filtered = getFiltered();
  const total = filtered.length;
  const start = (currentPage - 1) * PER_PAGE;
  const page = filtered.slice(start, start + PER_PAGE);

  countEl.innerHTML = `ÃÂÃÂÃÂÃÂ¦ÃÂÃÂÃÂÃÂ <strong>${start + 1}ÃÂ¢ÃÂÃÂ${Math.min(start + page.length, total)}</strong> ÃÂÃÂÃÂÃÂªÃÂÃÂÃÂÃÂ <strong>${total}</strong> ÃÂÃÂÃÂÃÂÃÂÃÂ¦ÃÂÃÂ¨ÃÂÃÂÃÂÃÂ`;

  grid.innerHTML = page.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        ${p.badge ? `<span class="badge ${badgeClass(p.badge)}">${p.badge}</span>` : ''}
        <button class="wishlist-btn" title="ÃÂÃÂÃÂÃÂÃÂÃÂ¡ÃÂÃÂ£ ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂ¤ÃÂÃÂÃÂÃÂ" onclick="toggleWish(event, ${p.id})">ÃÂ¢ÃÂÃÂ¡</button>
        <button class="quick-add" onclick="addToCart(${p.id})">+ ÃÂÃÂÃÂÃÂÃÂÃÂ¡ÃÂÃÂ¤ÃÂÃÂ ÃÂÃÂÃÂÃÂ¡ÃÂÃÂ</button>
      </div>
      <div class="product-info">
        <div class="product-category">${CAT_LABELS[p.category] || ''}</div>
        <div class="product-title">${p.title}</div>
        <div class="product-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="price-wrap">
            ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
            <span class="price">${formatPrice(p.price)}</span>
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">+ ÃÂÃÂÃÂÃÂÃÂÃÂ¡ÃÂÃÂ£</button>
        </div>
      </div>
    </div>
  `).join('');

  renderPagination(total);
}

// ===== PAGINATION =====
function renderPagination(total) {
  const pages = Math.ceil(total / PER_PAGE);
  const el = $('pagination');
  if (pages <= 1) { el.innerHTML = ''; return; }

  let html = `<button class="page-btn" onclick="goPage(${currentPage-1})" ${currentPage===1?'disabled':''}>ÃÂ¢ÃÂÃÂº</button>`;

  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || Math.abs(i - currentPage) <= 2) {
      html += `<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
    } else if (Math.abs(i - currentPage) === 3) {
      html += `<span style="padding:0 4px;color:var(--text-muted)">ÃÂ¢ÃÂÃÂ¦</span>`;
    }
  }

  html += `<button class="page-btn" onclick="goPage(${currentPage+1})" ${currentPage===pages?'disabled':''}>ÃÂ¢ÃÂÃÂ¹</button>`;
  el.innerHTML = html;
}

function goPage(n) {
  const total = getFiltered().length;
  const pages = Math.ceil(total / PER_PAGE);
  if (n < 1 || n > pages) return;
  currentPage = n;
  renderProducts();
  window.scrollTo({ top: document.querySelector('.shop-container').offsetTop - 80, behavior: 'smooth' });
}

// ===== CART =====
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, title: product.title, price: product.price, img: product.img, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`"${product.title.slice(0, 25)}..." ÃÂÃÂ ÃÂÃÂÃÂÃÂ¡ÃÂÃÂ£ ÃÂÃÂÃÂÃÂ¡ÃÂÃÂ`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = getCartCount();
  const countEl = $('cartCount');
  countEl.textContent = count;
  countEl.style.display = count > 0 ? 'flex' : 'none';
  renderCartItems();
}

function renderCartItems() {
  const container = $('cartItems');
  const total = getCartTotal();
  const remaining = FREE_SHIPPING_THRESHOLD - total;
  const progress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);

  $('freeShippingText').innerHTML = remaining > 0
    ? `ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ <strong>${formatPrice(remaining)}</strong> ÃÂÃÂÃÂÃÂÃÂÃÂ©ÃÂÃÂÃÂÃÂÃÂÃÂ ÃÂÃÂÃÂÃÂÃÂÃÂ ÃÂÃÂ`
    : `<strong>ÃÂ°ÃÂÃÂÃÂ ÃÂÃÂ§ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂª ÃÂÃÂÃÂÃÂ©ÃÂÃÂÃÂÃÂÃÂÃÂ ÃÂÃÂÃÂÃÂÃÂÃÂ ÃÂÃÂ!</strong>`;

  $('freeShippingProgress').style.width = `${progress}%`;
  $('cartTotal').textContent = formatPrice(total);

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">ÃÂ°ÃÂÃÂÃÂ<br>ÃÂÃÂÃÂÃÂ¡ÃÂÃÂ ÃÂÃÂ©ÃÂÃÂÃÂÃÂ ÃÂÃÂ¨ÃÂÃÂÃÂÃÂ§</div>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.title}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.title}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">ÃÂ¢ÃÂÃÂ</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})" title="ÃÂÃÂÃÂÃÂ¡ÃÂÃÂ¨">ÃÂÃÂ</button>
    </div>
  `).join('');
}

// ===== CART SIDEBAR TOGGLE =====
function openCart() {
  $('cartOverlay').classList.add('open');
  $('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('cartOverlay').classList.remove('open');
  $('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== WISHLIST (local) =====
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

function toggleWish(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
    btn.textContent = 'ÃÂ¢ÃÂÃÂ¡';
  } else {
    wishlist.push(id);
    btn.textContent = 'ÃÂ¢ÃÂÃÂ¥';
    btn.style.color = '#e74c3c';
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ===== TOAST =====
function showToast(msg) {
  const toast = $('toast');
  toast.querySelector('.toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== CATEGORY NAV =====
function setCategory(cat) {
  currentCategory = cat;
  currentPage = 1;
  document.querySelectorAll('.nav-item > a[data-cat]').forEach(a => {
    a.classList.toggle('active', a.dataset.cat === cat);
  });
  renderProducts();
}

// ===== SEARCH =====
function handleSearch(e) {
  if (e.key === 'Enter' || e.type === 'input') {
    searchQuery = e.target.value.trim();
    currentPage = 1;
    renderProducts();
  }
}

// ===== SORT =====
function handleSort(e) {
  currentSort = e.target.value;
  currentPage = 1;
  renderProducts();
}

// ===== LOAD ADMIN PRODUCTS IF AVAILABLE =====
const savedAdminProducts = JSON.parse(localStorage.getItem('adminProducts') || 'null');
if (savedAdminProducts && savedAdminProducts.length > 0) {
  PRODUCTS.length = 0;
  savedAdminProducts.forEach(p => PRODUCTS.push(p));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();

  // Search
  const searchInput = $('searchInput');
  searchInput.addEventListener('keyup', handleSearch);
  searchInput.addEventListener('input', handleSearch);

  // Sort
  $('sortSelect').addEventListener('change', handleSort);

  // Cart
  $('cartBtn').addEventListener('click', openCart);
  $('cartClose').addEventListener('click', closeCart);
  $('cartOverlay').addEventListener('click', closeCart);

  // Checkout
  $('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) { showToast('ÃÂÃÂÃÂÃÂ¡ÃÂÃÂ ÃÂÃÂ©ÃÂÃÂÃÂÃÂ ÃÂÃÂ¨ÃÂÃÂÃÂÃÂ§'); return; }
    showToast('ÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂ¨ ÃÂÃÂÃÂÃÂªÃÂÃÂ©ÃÂÃÂÃÂÃÂÃÂÃÂ...');
  });
});
