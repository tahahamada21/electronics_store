// Sample product data
const products = [
    { id: 1, name: "iphone-14", category: "Apple", price: 850, description: "            Lorem ipsum dolor sit amet consectetur.", image :"images/apple-iphone-14r.jpg" },
    { id: 2, name: "iphone-13", category: "Apple", price: 590, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/IPHONE-13.jpg" },
    { id: 3, name: "iphone-11", category: "Apple", price: 600, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/apple-iphone-11.jpg" },
    { id: 4, name: "iphone-12", category: "Apple", price: 800, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/apple_iphone-12.jpg" },
    { id: 5, name: "iPhone_SE", category: "Apple", price: 120, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/iPhone_SE.png" },
    { id: 9, name: "Galaxy-s24-ultra", category: "Samsung", price: 600, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/Galaxy-s24-ultra.jpg" },
    { id: 10, name: "galaxy a24 5g", category: "Samsung", price: 680, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/galaxy-a24-5g.jpeg" },
    { id: 11, name: "galaxy a55", category: "Samsung", price: 600, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/galaxy-a55.jpg" },
    { id: 12, name: "Samsung Galaxy A53", category: "Samsung", price: 1000, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/Samsung-A53.jpg" },
    { id: 13, name: "Samsung Galaxy z flip 5", category: "Samsung", price: 650, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/Samsung-Galaxy-z-flip-5.jpeg" },
    { id: 14, name: "Redmi Note 13 Pro Plus", category: "Redmi", price: 556, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/note13proplus-design.jpg" },
    { id: 15, name: "Redmi Note 13 Pro", category: "Redmi", price: 506, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/Redmi-Note-13-Pro.jpeg" },
    { id: 16, name: "Redmi Note 12 Pro", category: "Redmi", price: 506, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/Redmi-Note-12-Pro.jpeg" },
    { id: 17, name: "redmi-not-8", category: "Redmi", price: 606, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/redmi-not-8.png" },
    { id: 18, name: "redmi-not-10", category: "Redmi", price: 806, description: "            Lorem ipsum dolor sit amet consectetur.", image: "images/redmi-not-10.png" },
  
  ];
  
  
  let cart = [];
  
  
  const productsContainer = document.getElementById('productsContainer');
  const categoryFilters = document.getElementById('categoryFilters');
  const priceSort = document.getElementById('priceSort');
  const searchInput = document.getElementById('searchInput');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const themeToggle = document.getElementById('darkModeSwitch');
  
  
  
  
  function displayProducts(productsToShow) {
    productsContainer.innerHTML = '';
    productsToShow.forEach(product => {
      const productCard = `
            <div class="col">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price: $${product.price}</strong></p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
      productsContainer.innerHTML += productCard;
    });
  
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', addToCart);
    });
  }
  
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function createCategoryFilters() {
    const categories = [...new Set(products.map(product => product.category))];
    categories.forEach(category => {
      const checkbox = `
            <div class="form-check">
                <input class="form-check-input category-filter" type="checkbox" value="${category}" id="${category}">
                <label class="form-check-label" for="${category}">${category}</label>
            </div>
        `;
      categoryFilters.innerHTML += checkbox;
    });
  
    document.querySelectorAll('.category-filter').forEach(filter => {
      filter.addEventListener('change', filterProducts);
    });
  }
  
  
  function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(filter => filter.value);
    const searchTerm = searchInput.value.toLowerCase();
    const sortOrder = priceSort.value;
  
    let filteredProducts = products;
  
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }
  
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    }
  
    filteredProducts.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  
    displayProducts(filteredProducts);
  }
  
  
  function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
  
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCartCount();
    saveCart();
  }
  
  
  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
  }
  
  
  
  
  function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  }
  
  
  function displayCartItems() {
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      const cartItemHTML = `
            <div class="cart-item">
                <h5>${item.name}</h5>
                <p>Price: $${item.price}</p>
                <p>
                    Quantity: 
                    <button class="btn btn-sm btn-secondary decrease-quantity" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="btn btn-sm btn-secondary increase-quantity" data-id="${item.id}">+</button>
                </p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
                <button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
      cartItems.innerHTML += cartItemHTML;
    });
  
    cartTotal.textContent = total.toFixed(2);
  
  
    document.querySelectorAll('.decrease-quantity').forEach(btn => btn.addEventListener('click', decreaseQuantity));
    document.querySelectorAll('.increase-quantity').forEach(btn => btn.addEventListener('click', increaseQuantity));
    document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', removeItem));
  }
  
  
  function decreaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart = cart.filter(item => item.id !== productId);
    }
    updateCartCount();
    saveCart();
    displayCartItems();
  }
  
  function increaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    item.quantity += 1;
    updateCartCount();
    saveCart();
    displayCartItems();
  }
  
  
  function removeItem(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCart();
    displayCartItems();
  }
  
  
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  
  priceSort.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', filterProducts);
  cartBtn.addEventListener('click', () => {
    displayCartItems();
    new bootstrap.Modal(document.getElementById('cartModal')).show();
  });
  checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    saveCart();
    updateCartCount();
    new bootstrap.Modal(document.getElementById('cartModal')).hide();
  });
  themeToggle.addEventListener('click', toggleTheme);
  
  
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  
  
  function init() {
    displayProducts(products);
    createCategoryFilters();
    loadCart();
    updateCartCount();
  }
  
  
  init();