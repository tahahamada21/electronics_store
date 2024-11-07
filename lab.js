// Sample product data
const products = [
    {
          brand: "HP",
          model: "Spectre x360 14",
          price: "36,000 - 48,000 EGP",
          description: "A high-end 2-in-1 laptop with a 13.5-inch OLED display, Intel Core i5/i7 processors, and up to 16GB RAM. Ideal for professionals who need performance and flexibility.",
          image:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08828053.png",
          id: "1",
      },
      {
          brand: "HP",
          model: "Envy 13",
          price: "27,000 - 36,000 EGP",
          description: "A stylish 13.3-inch laptop with an FHD display, Intel’s 11th Gen processors, perfect for students and professionals needing portable performance.",
          image:" https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08225750.png",
          id: "2",
      },
      {
          brand: "HP",
          model: "Pavilion 15",
          price: "18,000 - 27,000 EGP",
          description: "Mid-range laptop with Intel Core i5/Ryzen 5 processors, a 15.6-inch FHD display. Ideal for everyday multitasking.",
          image: "https://m.media-amazon.com/images/I/71QfKo6n2mL._AC_SL1500_.jpg",
          id: "3",
      },
      {
          brand: "HP",
          model: "Omen 15",
          price: "45,000 - 60,000 EGP",
          description: "Gaming-focused laptop with Intel Core i7/Ryzen 7 processors, NVIDIA GTX/RTX graphics, and a 144Hz display. Great for gamers on a budget.",
          image: "https://images-cdn.ubuy.co.in/64e4c7fb74559752703b6185-hp-omen-15-en0013dx-15-6-fhd-gaming.jpg",
          id: "4",
      },
      {
          brand: "HP",
          model: "Elite Dragonfly G2",
          price: "48,000 - 60,000 EGP",
          description: "A premium business laptop with a 13.3-inch FHD/4K display, up to 16GB RAM, built for portability and security.",
          image: "https://m.media-amazon.com/images/I/41vvBtFIYUL.jpg",
          id: "5",
      },
      {
          brand: "HP",
          model: "ProBook 450 G8",
          price: "24,000 - 30,000 EGP",
          description: "Reliable, budget-friendly 15.6-inch laptop with Intel Core i5. Ideal for office productivity.",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07595333.png",
          id: "6",
      },
      {
          brand: "HP",
          model: "ZBook Firefly 15 G7",
          price: "45,000 - 57,000 EGP",
          description: "Workstation-grade laptop with Intel Core i7, NVIDIA Quadro graphics. Great for engineering and design tasks.",
          image: "https://m.media-amazon.com/images/I/615oA6oFRrL._AC_UF350,350_QL80_.jpg",
          id: "7",
      },
      {
          brand: "HP",
          model: "Chromebook 14",
          price: "12,000 - 18,000 EGP",
          description: "Affordable 14-inch Chromebook with Intel Celeron processors. Ideal for students or basic tasks.",
          image: "https://m.media-amazon.com/images/I/91XR+02AJBL._AC_UF894,1000_QL80_.jpg",
          id: "8",
      },
      {
          brand: "HP",
          model: "15t-dw300",
          price: "15,000 - 21,000 EGP",
          description: "Budget-friendly 15.6-inch laptop with Intel Core i3/i5. Great for basic computing and office work.",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07993234.png?impolicy=Png_Res",
          id: "9",
      },
      {
          brand: "HP",
          model: "ENVY x360 15",
          price: "36,000 - 45,000 EGP",
          description: "A 15.6-inch convertible with AMD Ryzen/Intel Core processors and FHD touch display. Great for creatives and multitaskers.",
          image: "https://m.media-amazon.com/images/I/61XblXYWwuL._AC_UF894,1000_QL80_.jpg",
          id: "10",
      },
      {
          brand: "Dell",
          model: "XPS 13",
          price: "30,000 - 45,000 EGP",
          description: "Premium ultraportable with a nearly bezel-free 13.3-inch display and Intel Core i7. Great for productivity.",
          image: "https://m.media-amazon.com/images/I/91MXLpouhoL._AC_UF894,1000_QL80_.jpg",
          id: "11",
      },
      {
          brand: "Dell",
          model: "Inspiron 15 5000",
          price: "21,000 - 30,000 EGP",
          description: "A mid-range 15.6-inch laptop with Intel Core i5 and 8GB RAM. Ideal for students and professionals.",
          image: "https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFhOEFHY2IwMEwuX0FDX1NMMTUwMF8uanBn.jpg",
          id: "12",
      },
      {
          brand: "Dell",
          model: "G5 15",
          price: "27,000 - 39,000 EGP",
          description: "Gaming laptop with Intel Core i7, NVIDIA GTX 1650 graphics, and FHD display. Great for entry-level gamers.",
          image: "https://m.media-amazon.com/images/I/81qtdSb6SEL.jpg",
          id: "13",
      },
      {
          brand: "Dell",
          model: "Latitude 7320",
          price: "33,000 - 48,000 EGP",
          description: "Compact 13.3-inch business laptop with Intel Core i5/i7. Ideal for professionals who travel.",
          image: "https://m.media-amazon.com/images/I/819r9lG+pBL._AC_SL1500_.jpg",
          id: "14",
      },
      {
          brand: "Dell",
          model: "Precision 3551",
          price: "48,000 - 66,000 EGP",
          description: "Mobile workstation with Intel Core i7, NVIDIA Quadro graphics. Built for heavy-duty tasks like 3D modeling.",
          image: "https://m.media-amazon.com/images/I/81QAOWKPuOS.jpg",
          id: "15",
      },
      {
          brand: "Dell",
          model: "Vostro 14 5490",
          price: "24,000 - 33,000 EGP",
          description: "A 14-inch laptop with Intel Core i5/i7, perfect for small business users needing performance and portability.",
          image: "https://www.notebookcheck.net/fileadmin/Notebooks/Dell/Vostro_14_5490/Bildschirmfoto_2020_01_22_um_12.35.04.png",
          id: "16",
      },
      {
          brand: "Dell",
          model: "Alienware m15 R6",
          price: "60,000 - 90,000 EGP",
          description: "High-performance gaming laptop with Intel Core i7/i9, NVIDIA RTX 30 series graphics, and QHD display. Ideal for serious gamers.",
          image: "https://i.dell.com/sites/csimages/Video_Imagery/all/aw_m15_r6_ark_tgl_thumbnails_product.jpg",
          id: "17",
      },
      {
          brand: "Dell",
          model: "Inspiron 14 7000",
          price: "27,000 - 36,000 EGP",
          description: "Sleek 14-inch laptop with Intel Core i5/i7. Great for students and professionals.",
          image: "https://m.media-amazon.com/images/I/510D1cZ-qeL._AC_UF894,1000_QL80_.jpg",
          id: "18",
      },
      {
          brand: "Dell",
          model: "Latitude 9510",
          price: "54,000 - 72,000 EGP",
          description: "High-end business laptop with Intel Core i7 and 15-inch display. Ideal for executives.",
          image: "https://i5.walmartimages.com/asr/2940d290-9eef-4ba0-97a8-b2dd90cbf431.b875eb8cab21ce51e9fc499b257340ae.jpeg",
          id: "19",
      },
      {
          brand: "Dell",
          model: "G3 15",
          price: "24,000 - 33,000 EGP",
          description: "Entry-level gaming laptop with Intel Core i5/i7 and NVIDIA GTX graphics. Budget-friendly option for casual gamers.",
          image: "https://btech.com/media/catalog/product/6/1/61csqmirbvl._ac_sl1500_.jpg?width=88&height=88&store=en&image-type=thumbnail",
          id: "20",
      },
      {
          brand: "MacBook",
          model: "Air (M1)",
          price: "30,000 - 37,500 EGP",
          description: "Ultra-light laptop with M1 chip and a 13.3-inch Retina display. Great for everyday use and remote work.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfXEty_Xy4CE9EyHj0a4UHPOn7b3yIeTUCA&s",
          id: "21",
      },
      {
          brand: "MacBook",
          model: "Pro 13-inch (M1)",
          price: "39,000 - 45,000 EGP",
          description: "Compact laptop with the M1 chip and up to 20 hours of battery life. Perfect for creative professionals.",
          image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUiG-JoRbvcywL3TffoWDMiYWlQRwvLvwdg&s",
          id: "22",
      },
      {
          brand: "MacBook",
          model: "Pro 16-inch (M1 Pro)",
          price: "75,000 - 105,000 EGP",
          description: "High-performance laptop with M1 Pro chip, ideal for tasks like video editing and software development.",
          image: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
          id: "23",
      },
      {
          brand: "MacBook",
          model: "Air (M2)",
          price: "36,000 - 45,000 EGP",
          description: "Updated with M2 chip and a 13.6-inch Retina display. Great for users who want extra power in a portable device.",
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-m2-midnight-gallery1-202402?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1707416806314",
          id: "24",
      },
      {
          brand: "MacBook",
          model: "Pro 14-inch (M1 Pro)",
          price: "60,000 - 90,000 EGP",
          description: "Compact powerhouse with the M1 Pro chip and a 14.2-inch display. Ideal for professionals needing a portable workstation.",
          image: "https://www.macworld.com/wp-content/uploads/2023/12/14-inch-MacBook-Pro-2021-1-1.jpg?quality=50&strip=all&w=1024",
          id: "25",
      },
      {
          brand: "MacBook",
          model: "Pro 15-inch (Intel)",
          price: "45,000 - 66,000 EGP",
          description: "Intel-based 15-inch MacBook with Intel Core i7/i9. Good for multitasking and compatibility with Intel-based software.",
          image: "https://m.media-amazon.com/images/I/71PHKPH4NQL._AC_SL1500_.jpg",
          id: "26",
      },
      {
          brand: "MacBook",
          model: "Pro 13-inch (Intel)",
          price: "42,000 - 54,000 EGP",
          description: "A lightweight laptop with Intel processors and Touch Bar. Suitable for professionals needing Intel-specific software.",
          image: "https://m.media-amazon.com/images/I/61QktTVE8xS._AC_UF894,1000_QL80_.jpg",
          id: "27",
      },
      {
          brand: "MacBook",
          model: "Pro 16-inch (M2 Pro)",
          price: "90,000 - 120,000 EGP",
          description: "High-end 16-inch laptop with M2 Pro chip. Great for creators and technical professionals needing top performance.",
          image: "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117_Full-Bleed-Image.jpg.large.jpg",
          id: "28",
      },
      {
          brand: "MacBook",
          model: "MacBook (12-inch, Retina)",
          price: "30,000 - 39,000 EGP",
          description: "An ultra-portable MacBook with a 12-inch Retina display. Ideal for users who prioritize portability.",
          image: "https://i.pcmag.com/imagery/reviews/02VGgSMRIjWBm9XCqoj1Wmj-23..v1569477054.jpg",
          id: "29",
      },
      {
          brand: "MacBook",
          model: "Pro 14-inch (M2 Pro)",
          price: "75,000 - 105,000 EGP",
          description: "Portable and powerful 14-inch laptop with the M2 Pro chip, perfect for users needing performance in a compact form.",
          image: "https://images.hothardware.com/contentimages/article/3292/content/small_angle-2-apple-macbook-pro-14-m2-pro-2023.jpg",
          id: "30",
      },
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
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.brand}">
                    <div class="card-body">
                        <h5 class="card-title">${product.brand} ${product.model}</h5>
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
    const categories = [...new Set(products.map(product => product.brand))];
    categories.forEach(brand => {
      const checkbox = `
            <div class="form-check">
                <input class="form-check-input category-filter" type="checkbox" value="${brand}" id="${brand}">
                <label class="form-check-label" for="${brand}">${brand}</label>
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
      filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.brand));
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
    const productId = event.target.getAttribute('data-id');
    const product = products.find(p => p.id === productId);
    console.log(product)
  
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
      const minPrice = parseInt(item.price.split('-')[0].replace(",", ""))
      const itemTotal = minPrice * item.quantity;
      total += itemTotal;
  
      const cartItemHTML = `
            <div class="cart-item">
                <h5>${item.model}</h5>
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
    const productId = event.target.getAttribute('data-id');
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
    const productId = event.target.getAttribute('data-id');
    const item = cart.find(item => item.id === productId);
    console.log(item)
    item.quantity += 1;
    updateCartCount();
    saveCart();
    displayCartItems();
  }
  
  
  function removeItem(event) {
    const productId = event.target.getAttribute('data-id');
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