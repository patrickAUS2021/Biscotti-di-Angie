let carrito = [];

// Abrir y cerrar modal del carrito
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');

cartIcon.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarritoUI();
    cartModal.classList.add('active'); // Abre la modal automáticamente al agregar
}

// Actualizar interfaz del carrito
function actualizarCarritoUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.textContent = carrito.length;

    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
        cartTotal.textContent = '$ 0';
        return;
    }

    let total = 0;
    cartItems.innerHTML = '';

    carrito.forEach((item, index) => {
        total += item.precio;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <strong>${item.nombre}</strong>
                <div>$ ${item.precio.toLocaleString()}</div>
            </div>
            <button onclick="eliminarDelCarrito(${index})" style="background:none; border:none; color:red; cursor:pointer;">❌</button>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = `$ ${total.toLocaleString()}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarritoUI();
}

// Filtros por Categoría
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('#catalogGrid .product-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');

        productCards.forEach(card => {
            if (cat === 'todos' || card.getAttribute('data-category') === cat) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Finalizar pedido por WhatsApp
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const medioPago = document.getElementById('paymentMethod').value;
    let mensaje = '¡Hola Biscotti di Angie! Quisiera realizar el siguiente pedido:\n\n';

    carrito.forEach(item => {
        mensaje += `• ${item.nombre} - $${item.precio.toLocaleString()}\n`;
    });

    const total = document.getElementById('cartTotal').textContent;
    mensaje += `\n*Total:* ${total}`;
    mensaje += `\n*Medio de Pago:* ${medioPago}`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});