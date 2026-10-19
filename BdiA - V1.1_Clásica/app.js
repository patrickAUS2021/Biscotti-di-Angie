// ==========================================
// 1. SECUENCIA DE VIDEOS DEL HERO
// ==========================================
const heroVideos = [
    'assets/video/video1.mp4',
    'assets/video/video2.mp4',
    'assets/video/video3.mp4'
];

let currentVideoIndex = 0;

// ==========================================
// 2. DATOS DE PRODUCTOS Y ESTADO
// ==========================================
const productsData = [
    {
        id: 1,
        title: "Torta Red Velvet Clásica",
        category: "Tortas",
        price: 38000,
        desc: "Bizcochuelo tradicional aterciopelado con suave relleno de frosting de queso crema.",
        img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Cookies Choco Chips (x6)",
        category: "Cookies",
        price: 9500,
        desc: "Galletas artesanales crujientes por fuera y suaves por dentro.",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Cupcakes Vainilla & Frutos Rojos",
        category: "Cupcakes",
        price: 12000,
        desc: "Pack x4 unidades decoradas artesanalmente.",
        img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Alfajores Sablée de Dulce de Leche",
        category: "Alfajores",
        price: 11000,
        desc: "Caja x6 alfajores de masa suave rellenos con puro dulce de leche.",
        img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Box Desayuno Tradicional",
        category: "Boxes",
        price: 24000,
        desc: "Incluye mini torta, cookies y detalles artesanales.",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Cheesecake de Frutos Rojos",
        category: "Tortas",
        price: 36000,
        desc: "Clásica receta horneada sobre base crujiente.",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
    }
];

let cart = [];
let activeCategory = 'Todos';

// ==========================================
// 3. FUNCIONES DEL CARRITO Y TIENDA
// ==========================================
const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    }).format(amount);
};

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    const filteredProducts = activeCategory === 'Todos' 
        ? productsData 
        : productsData.filter(p => p.category === activeCategory);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No hay productos en esta categoría.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.img}" alt="${product.title}" onerror="this.src='https://placehold.co/600x400/d88194/ffffff?text=${encodeURIComponent(product.title)}'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-bottom">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">+ Agregar</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`¡${product.title} agregado al carrito!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartCount || !cartItemsList || !cartTotal) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío 🥐</p>`;
    } else {
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.img}" alt="${item.title}" onerror="this.src='https://placehold.co/100x100/d88194/ffffff?text=Producto'">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p>${item.quantity}x ${formatPrice(item.price)}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartItemsList.appendChild(itemEl);
        });
    }

    const totalMoney = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(totalMoney);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// ==========================================
// 4. INICIALIZACIÓN Y EVENTOS AL CARGAR EL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // A) Inicializar catálogo y carrito
    renderProducts();
    updateCartUI();

    // B) Eventos Modal Carrito
    const openCartButton = document.getElementById('openCartButton');
    const closeCartButton = document.getElementById('closeCartButton');
    const cartModal = document.getElementById('cartModal');
    const checkoutButton = document.getElementById('checkoutButton');

    if (openCartButton && cartModal) {
        openCartButton.addEventListener('click', () => { cartModal.classList.add('active'); });
    }
    if (closeCartButton && cartModal) {
        closeCartButton.addEventListener('click', () => { cartModal.classList.remove('active'); });
    }
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) { cartModal.classList.remove('active'); }
        });
    }
    if (checkoutButton && cartModal) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast("Agregá al menos un producto para finalizar");
                return;
            }
            const paymentMethod = document.getElementById('paymentMethod')?.value || 'Efectivo';
            const cartTotal = document.getElementById('cartTotal')?.textContent || '$0';
            alert(`¡Gracias por tu compra en Biscotti di Angi! 💕\n\nTotal: ${cartTotal}\nMedio de Pago: ${paymentMethod}\n\nTe contactaremos por WhatsApp para coordinar la entrega.`);
            cart = [];
            updateCartUI();
            cartModal.classList.remove('active');
        });
    }

    // C) Eventos Categorías
    const categoryContainer = document.getElementById('categoryContainer');
    if (categoryContainer) {
        categoryContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const buttons = categoryContainer.querySelectorAll('button');
                buttons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                activeCategory = e.target.getAttribute('data-category');
                renderProducts();
            }
        });
    }
    
// D) Evento y Secuencia de Videos en el Hero
    const heroVideoElement = document.getElementById('heroVideo');
    const videoSourceElement = document.getElementById('videoSource');

    if (heroVideoElement && videoSourceElement) {
        heroVideoElement.muted = true;

        heroVideoElement.addEventListener('ended', () => {
            currentVideoIndex = (currentVideoIndex + 1) % heroVideos.length;
            
            // Asignamos la nueva fuente
            videoSourceElement.src = heroVideos[currentVideoIndex];
            heroVideoElement.src = heroVideos[currentVideoIndex];
            
            heroVideoElement.muted = true;
            heroVideoElement.load();

            // Reproducción inmediata
            const playPromise = heroVideoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    heroVideoElement.muted = true;
                    heroVideoElement.play();
                });
            }
        });
    }
}); // Cierre correcto del DOMContentLoaded