# Código para vista de Dasboard:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin | Biscotti di Angie</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Font: Playfair Display & Plus Jakarta Sans -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            rose: '#FDF0F0',
                            roseDark: '#F7D6D8',
                            pink: '#E8A0BF',
                            cream: '#FFFDF9',
                            gold: '#D4AF37',
                            brown: '#4A3525',
                            text: '#2C1810',
                            accent: '#BA7A92'
                        }
                    },
                    fontFamily: {
                        serif: ['"Playfair Display"', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #FAF6F0;
            color: #2C1810;
        }
        .sidebar-item.active {
            background-color: #E8A0BF;
            color: #ffffff;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(232, 160, 191, 0.35);
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #E8A0BF;
            border-radius: 10px;
        }
    </style>
</head>
<body class="h-screen flex overflow-hidden">

    <!-- SIDEBAR NAVEGABLE -->
    <aside class="w-64 bg-white border-r border-rose-100 flex flex-col justify-between z-20 shadow-sm">
        <div>
            <!-- Branding Header -->
            <div class="p-6 border-b border-rose-50 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-brand-roseDark flex items-center justify-center text-brand-brown font-serif text-xl font-bold shadow-sm">
                    B
                </div>
                <div>
                    <h1 class="font-serif font-bold text-lg text-brand-brown leading-tight">Biscotti di Angie</h1>
                    <span class="text-xs text-brand-accent font-medium tracking-wide">Panel de Control v2.1</span>
                </div>
            </div>

            <!-- Navegación de Módulos -->
            <nav class="p-4 space-y-1.5 custom-scrollbar overflow-y-auto max-h-[calc(100vh-160px)]">
                <a href="#" onclick="switchTab('inicio')" id="nav-inicio" class="sidebar-item active flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-chart-line w-5 text-center"></i>
                    <span>Inicio / Resumen</span>
                </a>
                <a href="#" onclick="switchTab('productos')" id="nav-productos" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-cookie-bite w-5 text-center"></i>
                    <span>Productos</span>
                </a>
                <a href="#" onclick="switchTab('pos')" id="nav-pos" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-cash-register w-5 text-center"></i>
                    <span>Punto de Venta</span>
                </a>
                <a href="#" onclick="switchTab('pedidos')" id="nav-pedidos" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-clipboard-list w-5 text-center"></i>
                    <span>Pedidos</span>
                </a>
                <a href="#" onclick="switchTab('clientes')" id="nav-clientes" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-users w-5 text-center"></i>
                    <span>Clientes</span>
                </a>
                <a href="#" onclick="switchTab('pagos')" id="nav-pagos" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-wallet w-5 text-center"></i>
                    <span>Pagos y Señas</span>
                </a>
                <a href="#" onclick="switchTab('reportes')" id="nav-reportes" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-chart-pie w-5 text-center"></i>
                    <span>Reportes</span>
                </a>
                <a href="#" onclick="switchTab('integraciones')" id="nav-integraciones" class="sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-rose transition-all">
                    <i class="fa-solid fa-plug w-5 text-center"></i>
                    <span>Integraciones Meta</span>
                </a>
            </nav>
        </div>

        <!-- Footer Admin Status -->
        <div class="p-4 border-t border-rose-50 bg-brand-rose/40 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold text-xs">
                AD
            </div>
            <div class="text-xs">
                <p class="font-bold text-brand-brown">Angie (Admin)</p>
                <p class="text-emerald-600 flex items-center gap-1 font-medium"><span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> En línea</p>
            </div>
        </div>
    </aside>

    <!-- ÁREA PRINCIPAL CONTENT -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <!-- HEADER SUPERIOR -->
        <header class="bg-white border-b border-rose-100 h-16 px-8 flex items-center justify-between shadow-sm z-10">
            <div class="flex items-center gap-4">
                <h2 id="page-title" class="text-xl font-serif font-bold text-brand-brown">Inicio y Métricas del Día</h2>
                <span class="text-xs bg-brand-rose px-2.5 py-1 rounded-full text-brand-accent font-semibold">Neuquén Capital</span>
            </div>

            <div class="flex items-center gap-4">
                <!-- Botón integración Tienda Cliente -->
                <a href="index.html" target="_blank" class="flex items-center gap-2 bg-gradient-to-r from-brand-pink to-brand-accent text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-95 shadow-sm transition-all hover:scale-105">
                    <i class="fa-solid fa-globe"></i>
                    <span>🌐 Ver Tienda Online (index.html)</span>
                </a>
            </div>
        </header>

        <!-- CONTENIDO DINÁMICO DE PESTAÑAS -->
        <main class="flex-1 overflow-y-auto p-8 custom-scrollbar">

            <!-- 1. MÓDULO INICIO -->
            <section id="tab-inicio" class="tab-content space-y-6">
                <!-- Tarjetas KPI -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <div class="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold uppercase text-gray-400 tracking-wider">Ventas de Hoy</p>
                            <h3 class="text-2xl font-bold text-brand-brown mt-1">$148.500</h3>
                            <span class="text-xs text-emerald-600 font-semibold">+18% vs ayer</span>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-money-bill-wave"></i>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold uppercase text-gray-400 tracking-wider">Pedidos Pendientes</p>
                            <h3 class="text-2xl font-bold text-brand-brown mt-1">7 Encargos</h3>
                            <span class="text-xs text-amber-600 font-semibold">3 para entregar hoy</span>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-clock"></i>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold uppercase text-gray-400 tracking-wider">Consultas WhatsApp</p>
                            <h3 class="text-2xl font-bold text-brand-brown mt-1">12 Mensajes</h3>
                            <span class="text-xs text-emerald-600 font-semibold">Bot Meta Activo</span>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold uppercase text-gray-400 tracking-wider">Catálogo Activo</p>
                            <h3 id="total-products-count" class="text-2xl font-bold text-brand-brown mt-1">0</h3>
                            <span class="text-xs text-brand-accent font-semibold">Productos sincronizados</span>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-brand-rose text-brand-pink flex items-center justify-center text-xl">
                            <i class="fa-solid fa-cake-candles"></i>
                        </div>
                    </div>
                </div>

                <!-- Actividad Reciente & Resumen Operativo -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                        <h3 class="font-serif font-bold text-lg text-brand-brown mb-4">Pedidos para Entregar Hoy</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3.5 rounded-xl bg-brand-rose/30 border border-rose-100">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold text-xs">
                                        ML
                                    </div>
                                    <div>
                                        <p class="font-bold text-sm text-brand-brown">María Laura - Red Velvet Especial</p>
                                        <p class="text-xs text-gray-500">Retiro por local • 17:30 hs</p>
                                    </div>
                                </div>
                                <span class="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">En preparación</span>
                            </div>
                            <div class="flex items-center justify-between p-3.5 rounded-xl bg-brand-rose/30 border border-rose-100">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xs">
                                        CP
                                    </div>
                                    <div>
                                        <p class="font-bold text-sm text-brand-brown">Carlos Pérez - Box Cookies x12</p>
                                        <p class="text-xs text-gray-500">Envío a domicilio • 19:00 hs</p>
                                    </div>
                                </div>
                                <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">Listo</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                        <h3 class="font-serif font-bold text-lg text-brand-brown mb-4">Accesos Rápidos</h3>
                        <div class="space-y-3">
                            <button onclick="switchTab('productos')" class="w-full text-left p-3 rounded-xl bg-brand-rose/40 hover:bg-brand-rose text-brand-brown font-semibold text-sm transition-all flex items-center justify-between">
                                <span><i class="fa-solid fa-plus mr-2 text-brand-pink"></i> Cargar Nuevo Producto</span>
                                <i class="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                            <button onclick="switchTab('pos')" class="w-full text-left p-3 rounded-xl bg-brand-rose/40 hover:bg-brand-rose text-brand-brown font-semibold text-sm transition-all flex items-center justify-between">
                                <span><i class="fa-solid fa-cash-register mr-2 text-brand-pink"></i> Nueva Venta Mostrador</span>
                                <i class="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                            <button onclick="switchTab('integraciones')" class="w-full text-left p-3 rounded-xl bg-brand-rose/40 hover:bg-brand-rose text-brand-brown font-semibold text-sm transition-all flex items-center justify-between">
                                <span><i class="fa-brands fa-whatsapp mr-2 text-emerald-600"></i> Ver Mensajes WhatsApp</span>
                                <i class="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 2. MÓDULO PRODUCTOS (DINÁMICO & PERSISTENCIA LOCALSTORAGE) -->
            <section id="tab-productos" class="tab-content hidden space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <!-- Formulario de Creación de Producto -->
                    <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm h-fit">
                        <h3 class="font-serif font-bold text-lg text-brand-brown mb-1">Cargar Nuevo Producto</h3>
                        <p class="text-xs text-gray-500 mb-5">El producto se guardará dinámicamente y estará disponible en la tienda online.</p>

                        <form id="product-form" class="space-y-4" onsubmit="handleProductSubmit(event)">
                            <div>
                                <label class="block text-xs font-bold uppercase text-gray-600 mb-1">Nombre del Producto *</label>
                                <input type="text" id="prod-name" required placeholder="Ej. Alfajores de Maizena" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-pink">
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-600 mb-1">Categoría *</label>
                                    <select id="prod-category" required class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-pink">
                                        <option value="Tortas">Tortas</option>
                                        <option value="Tartas">Tartas</option>
                                        <option value="Cookies">Cookies</option>
                                        <option value="Alfajores">Alfajores</option>
                                        <option value="Cupcakes">Cupcakes</option>
                                        <option value="Box de regalo">Box de regalo</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-600 mb-1">Precio ($) *</label>
                                    <input type="number" id="prod-price" required placeholder="1500" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-pink">
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold uppercase text-gray-600 mb-1">Descripción</label>
                                <textarea id="prod-desc" rows="2" placeholder="Detalles, ingredientes o porciones..." class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-pink"></textarea>
                            </div>

                            <div>
                                <label class="block text-xs font-bold uppercase text-gray-600 mb-1">Imagen del Producto *</label>
                                <input type="file" id="prod-image" accept="image/*" onchange="previewImage(event)" class="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-rose file:text-brand-brown hover:file:bg-brand-roseDark">
                                <!-- Contenedor Vista Previa -->
                                <div id="image-preview-container" class="mt-3 hidden">
                                    <img id="image-preview" src="" alt="Vista previa" class="w-full h-36 object-cover rounded-xl border border-rose-100">
                                </div>
                            </div>

                            <button type="submit" class="w-full py-3 bg-brand-pink text-white font-bold rounded-xl hover:bg-brand-accent transition-all shadow-sm">
                                Guardar Producto en Catálogo
                            </button>
                        </form>
                    </div>

                    <!-- Tabla del Catálogo Dinámico -->
                    <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <h3 class="font-serif font-bold text-lg text-brand-brown">Catálogo de Productos</h3>
                                    <p class="text-xs text-gray-500">Gestión en tiempo real sincronizada con <code class="bg-gray-100 px-1 py-0.5 rounded text-brand-pink">localStorage</code></p>
                                </div>
                                <button onclick="resetToSeedData()" class="text-xs text-gray-500 underline hover:text-brand-pink">
                                    Restaurar Datos por Defecto
                                </button>
                            </div>

                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-sm text-gray-600">
                                    <thead class="bg-brand-rose/40 text-xs font-bold uppercase text-brand-brown">
                                        <tr>
                                            <th class="p-3 rounded-l-xl">Imagen</th>
                                            <th class="p-3">Producto</th>
                                            <th class="p-3">Categoría</th>
                                            <th class="p-3">Precio</th>
                                            <th class="p-3">Estado</th>
                                            <th class="p-3 rounded-r-xl text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="products-table-body" class="divide-y divide-rose-50">
                                        <!-- Renderizado por JS -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- 3. MÓDULO PUNTO DE VENTA (POS) -->
            <section id="tab-pos" class="tab-content hidden space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Selector de Productos para la Venta -->
                    <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                        <h3 class="font-serif font-bold text-lg text-brand-brown mb-4">Mostrador - Selección de Productos</h3>
                        <div id="pos-products-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto custom-scrollbar p-1">
                            <!-- Cargado dinámicamente -->
                        </div>
                    </div>

                    <!-- Carrito de Cobro POS -->
                    <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 class="font-serif font-bold text-lg text-brand-brown border-b border-rose-100 pb-3 mb-4">Ticket de Venta</h3>
                            <div id="pos-cart-items" class="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                                <p class="text-xs text-gray-400 text-center py-8">Selecciona productos para agregar a la venta.</p>
                            </div>
                        </div>

                        <div class="border-t border-rose-100 pt-4 mt-6">
                            <div class="flex justify-between font-bold text-lg text-brand-brown mb-4">
                                <span>Total:</span>
                                <span id="pos-total-price">$0</span>
                            </div>

                            <div class="space-y-2">
                                <label class="block text-xs font-bold uppercase text-gray-600">Medio de Pago</label>
                                <select id="pos-payment-method" class="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm">
                                    <option value="Efectivo">Efectivo</option>
                                    <option value="Transferencia">Transferencia Bancaria</option>
                                    <option value="MercadoPago">MercadoPago / QR</option>
                                    <option value="Tarjeta">Tarjeta de Débito/Crédito</option>
                                </select>
                            </div>

                            <button onclick="processPosSale()" class="w-full mt-4 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-sm">
                                Registrar Cobro Instantáneo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 4. MÓDULO PEDIDOS -->
            <section id="tab-pedidos" class="tab-content hidden space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h3 class="font-serif font-bold text-lg text-brand-brown">Ciclo de Vida de Pedidos</h3>
                            <p class="text-xs text-gray-500">Gestión de encargos, fechas de entrega y canales</p>
                        </div>
                        <div class="flex gap-2">
                            <select id="filter-channel" class="px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold">
                                <option value="TODOS">Todos los Canales</option>
                                <option value="WhatsApp">WhatsApp</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Local">Local</option>
                                <option value="Web">Web</option>
                            </select>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-600">
                            <thead class="bg-brand-rose/40 text-xs font-bold uppercase text-brand-brown">
                                <tr>
                                    <th class="p-3 rounded-l-xl">ID</th>
                                    <th class="p-3">Cliente</th>
                                    <th class="p-3">Detalle Pedido</th>
                                    <th class="p-3">Canal</th>
                                    <th class="p-3">Fecha Entrega</th>
                                    <th class="p-3">Estado</th>
                                    <th class="p-3 rounded-r-xl">Acción</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-rose-50">
                                <tr>
                                    <td class="p-3 font-bold text-brand-brown">#ORD-1024</td>
                                    <td class="p-3">María Laura (299-4123456)</td>
                                    <td class="p-3">Red Velvet + Topper Cumpleaños</td>
                                    <td class="p-3"><span class="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">WhatsApp</span></td>
                                    <td class="p-3 text-xs">Hoy - 17:30 hs</td>
                                    <td class="p-3"><span class="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">En preparación</span></td>
                                    <td class="p-3">
                                        <button class="px-3 py-1 bg-brand-pink text-white text-xs font-bold rounded-lg hover:bg-brand-accent">Avanzar Estado</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-bold text-brand-brown">#ORD-1025</td>
                                    <td class="p-3">Carlos Pérez (299-5987654)</td>
                                    <td class="p-3">Box Cookies x12 Decoradas</td>
                                    <td class="p-3"><span class="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-semibold">Instagram</span></td>
                                    <td class="p-3 text-xs">Mañana - 11:00 hs</td>
                                    <td class="p-3"><span class="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Confirmado</span></td>
                                    <td class="p-3">
                                        <button class="px-3 py-1 bg-brand-pink text-white text-xs font-bold rounded-lg hover:bg-brand-accent">Avanzar Estado</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <!-- 5. MÓDULO CLIENTES -->
            <section id="tab-clientes" class="tab-content hidden space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                    <h3 class="font-serif font-bold text-lg text-brand-brown mb-4">Directorio Único de Clientes</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 rounded-xl border border-rose-100 bg-brand-cream space-y-2">
                            <div class="flex items-center justify-between">
                                <h4 class="font-bold text-brand-brown">María Laura</h4>
                                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Cliente Frecuente</span>
                            </div>
                            <p class="text-xs text-gray-500"><i class="fa-solid fa-phone mr-1"></i> +54 9 299 4123456</p>
                            <p class="text-xs text-gray-500"><i class="fa-solid fa-cake-candles mr-1"></i> 5 Pedidos Realizados</p>
                        </div>
                        <div class="p-4 rounded-xl border border-rose-100 bg-brand-cream space-y-2">
                            <div class="flex items-center justify-between">
                                <h4 class="font-bold text-brand-brown">Carlos Pérez</h4>
                                <span class="text-xs bg-brand-rose text-brand-accent px-2 py-0.5 rounded-full">Nuevo</span>
                            </div>
                            <p class="text-xs text-gray-500"><i class="fa-solid fa-phone mr-1"></i> +54 9 299 5987654</p>
                            <p class="text-xs text-gray-500"><i class="fa-solid fa-cake-candles mr-1"></i> 1 Pedido Realizado</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 6. MÓDULO PAGOS -->
            <section id="tab-pagos" class="tab-content hidden space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                    <h3 class="font-serif font-bold text-lg text-brand-brown mb-4">Registro de Señas y Saldos Pendientes</h3>
                    <p class="text-xs text-gray-500 mb-4">Control de cobros para encargo de tortas y mesas dulces.</p>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-4 rounded-xl border border-rose-100 bg-white">
                            <div>
                                <p class="font-bold text-sm text-brand-brown">Pedido #ORD-1024 - María Laura</p>
                                <p class="text-xs text-gray-500">Total: $38.000 | Seña abonada (50%): $19.000</p>
                            </div>
                            <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">Saldo Pendiente: $19.000</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 7. MÓDULO REPORTES -->
            <section id="tab-reportes" class="tab-content hidden space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                    <h3 class="font-serif font-bold text-lg text-brand-brown mb-2">Reporte de Ventas y Categorías</h3>
                    <p class="text-xs text-gray-500 mb-6">Métricas resumidas de rendimiento comercial.</p>
                    <div class="h-48 bg-brand-rose/20 rounded-xl flex items-center justify-center border border-dashed border-brand-pink text-brand-accent font-semibold text-sm">
                        <i class="fa-solid fa-chart-line mr-2"></i> Gráfico de Rendimiento de Ventas (Ruta Neuquén)
                    </div>
                </div>
            </section>

            <!-- 8. MÓDULO INTEGRACIONES META -->
            <section id="tab-integraciones" class="tab-content hidden space-y-6">
                <div class="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm space-y-6">
                    <div>
                        <h3 class="font-serif font-bold text-lg text-brand-brown">Centro de Integraciones Meta (API Cloud)</h3>
                        <p class="text-xs text-gray-500">Gestión de canales automáticos de atención al cliente</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- WhatsApp API -->
                        <div class="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40 flex items-start justify-between">
                            <div class="space-y-2">
                                <div class="flex items-center gap-2">
                                    <i class="fa-brands fa-whatsapp text-2xl text-emerald-600"></i>
                                    <h4 class="font-bold text-brand-brown">WhatsApp Business API</h4>
                                </div>
                                <p class="text-xs text-gray-600">Número conectado: +54 9 299 XXX-XXXX</p>
                                <span class="inline-block px-2.5 py-0.5 bg-emerald-200 text-emerald-800 rounded-full text-xs font-bold">Bot Activo</span>
                            </div>
                            <button class="px-3 py-1.5 bg-white border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold hover:bg-emerald-100">
                                Configurar
                            </button>
                        </div>

                        <!-- Instagram Meta API -->
                        <div class="p-5 rounded-2xl border border-pink-100 bg-pink-50/40 flex items-start justify-between">
                            <div class="space-y-2">
                                <div class="flex items-center gap-2">
                                    <i class="fa-brands fa-instagram text-2xl text-pink-600"></i>
                                    <h4 class="font-bold text-brand-brown">Instagram Messaging</h4>
                                </div>
                                <p class="text-xs text-gray-600">Cuenta: @biscottidiangie</p>
                                <span class="inline-block px-2.5 py-0.5 bg-pink-200 text-pink-800 rounded-full text-xs font-bold">Conectado</span>
                            </div>
                            <button class="px-3 py-1.5 bg-white border border-pink-200 text-pink-700 rounded-xl text-xs font-bold hover:bg-pink-100">
                                Configurar
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <!-- LOGICA DE JS DEL DASHBOARD -->
    <script>
        // Key de localStorage para compartir con la tienda pública
        const STORAGE_KEY = 'biscotti_products';

        // Seed Data Inicial
        const seedProducts = [
            {
                id: 1,
                title: "Torta Red Velvet Clásica",
                category: "Tortas",
                price: 38000,
                desc: "Bizcochuelo tradicional aterciopelado con suave relleno de frosting de queso crema.",
                img: "1.2_assets/v1.2_images/Foto Tiramisou.jpg",
                active: true
            },
            {
                id: 2,
                title: "Cookies Choco Chips (x6)",
                category: "Cookies",
                price: 9500,
                desc: "Galletas artesanales crujientes por fuera y suaves por dentro.",
                img: "1.2_assets/v1.2_images/Foto Cookies.jpg",
                active: true
            },
            {
                id: 3,
                title: "Alfajores de Maizena Tradicionales",
                category: "Alfajores",
                price: 11000,
                desc: "Caja x6 alfajores suavemente horneados rellenos con dulce de leche repostero.",
                img: "1.2_assets/v1.2_images/Foto Alfajores con Maizena.jpg",
                active: true
            }
        ];

        let products = [];
        let currentImageBase64 = '';
        let posCart = [];

        // Inicializar Dashboard al Cargar
        window.onload = function () {
            loadProducts();
            renderProductsTable();
            renderPosProducts();
        };

        // Cambiar pestañas SPA
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));

            document.getElementById(`tab-${tabId}`).classList.remove('hidden');
            document.getElementById(`nav-${tabId}`).classList.add('active');

            const titles = {
                'inicio': 'Inicio y Métricas del Día',
                'productos': 'Gestión de Productos y Catálogo',
                'pos': 'Punto de Venta / Mostrador',
                'pedidos': 'Control de Pedidos y Encargos',
                'clientes': 'Directorio de Clientes',
                'pagos': 'Gestión de Pagos y Señas',
                'reportes': 'Reportes y Analítica',
                'integraciones': 'Centro de Integraciones Meta APIs'
            };
            document.getElementById('page-title').innerText = titles[tabId] || 'Dashboard Admin';
        }

        // Cargar productos desde localStorage
        function loadProducts() {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    products = JSON.parse(stored);
                } catch (e) {
                    products = seedProducts;
                }
            } else {
                products = seedProducts;
                saveProductsToStorage();
            }
            document.getElementById('total-products-count').innerText = products.length;
        }

        // Guardar en localStorage
        function saveProductsToStorage() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
            document.getElementById('total-products-count').innerText = products.length;
        }

        // Preview de imagen subida (FileReader a Base64)
        function previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    currentImageBase64 = e.target.result;
                    const preview = document.getElementById('image-preview');
                    preview.src = currentImageBase64;
                    document.getElementById('image-preview-container').classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        }

        // Formulario de Submit de Producto
        function handleProductSubmit(event) {
            event.preventDefault();

            const name = document.getElementById('prod-name').value;
            const category = document.getElementById('prod-category').value;
            const price = parseFloat(document.getElementById('prod-price').value);
            const desc = document.getElementById('prod-desc').value;

            if (!currentImageBase64) {
                alert('Por favor selecciona una imagen para el producto.');
                return;
            }

            const newProd = {
                id: Date.now(),
                title: name,
                category: category,
                price: price,
                desc: desc || "Deliciosa especialidad de la casa.",
                img: currentImageBase64,
                active: true
            };

            products.unshift(newProd);
            saveProductsToStorage();
            renderProductsTable();
            renderPosProducts();

            // Resetear formulario
            document.getElementById('product-form').reset();
            document.getElementById('image-preview-container').classList.add('hidden');
            currentImageBase64 = '';

            alert('¡Producto agregado con éxito! Ya está disponible en la tienda.');
        }

        // Renderizar tabla de productos Admin
        function renderProductsTable() {
            const tbody = document.getElementById('products-table-body');
            tbody.innerHTML = '';

            if (products.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-gray-400">No hay productos en el catálogo.</td></tr>`;
                return;
            }

            products.forEach(p => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-brand-rose/20 transition-all';
                tr.innerHTML = `
                    <td class="p-3">
                        <img src="${p.img}" alt="${p.title}" class="w-12 h-12 rounded-xl object-cover border border-rose-100">
                    </td>
                    <td class="p-3 font-bold text-brand-brown">${p.title}</td>
                    <td class="p-3 text-xs"><span class="bg-brand-rose text-brand-accent px-2 py-1 rounded-full font-semibold">${p.category}</span></td>
                    <td class="p-3 font-bold text-gray-700">$${p.price.toLocaleString()}</td>
                    <td class="p-3">
                        <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${p.active ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'}">
                            ${p.active ? 'Activo' : 'Inactivo'}
                        </span>
                    </td>
                    <td class="p-3 text-right space-x-1">
                        <button onclick="toggleProductState(${p.id})" class="px-2.5 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg">
                            ${p.active ? 'Desactivar' : 'Activar'}
                        </button>
                        <button onclick="deleteProduct(${p.id})" class="px-2.5 py-1.5 text-xs bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold rounded-lg">
                            Eliminar
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        // Cambiar estado Activo/Inactivo
        function toggleProductState(id) {
            products = products.map(p => p.id === id ? { ...p, active: !p.active } : p);
            saveProductsToStorage();
            renderProductsTable();
            renderPosProducts();
        }

        // Eliminar Producto
        function deleteProduct(id) {
            if (confirm('¿Estás seguro de eliminar este producto?')) {
                products = products.filter(p => p.id !== id);
                saveProductsToStorage();
                renderProductsTable();
                renderPosProducts();
            }
        }

        // Restaurar Seed Data
        function resetToSeedData() {
            if (confirm('¿Restaurar los productos por defecto? Se perderán las modificaciones personalizadas.')) {
                products = seedProducts;
                saveProductsToStorage();
                renderProductsTable();
                renderPosProducts();
            }
        }

        // Render POS Productos
        function renderPosProducts() {
            const grid = document.getElementById('pos-products-grid');
            grid.innerHTML = '';

            const activeProds = products.filter(p => p.active);
            activeProds.forEach(p => {
                const card = document.createElement('div');
                card.className = 'p-3 rounded-xl border border-rose-100 bg-white hover:border-brand-pink cursor-pointer transition-all flex flex-col justify-between';
                card.onclick = () => addToPosCart(p);
                card.innerHTML = `
                    <img src="${p.img}" class="w-full h-24 object-cover rounded-lg mb-2">
                    <p class="font-bold text-xs text-brand-brown line-clamp-1">${p.title}</p>
                    <p class="text-xs text-brand-pink font-bold mt-1">$${p.price.toLocaleString()}</p>
                `;
                grid.appendChild(card);
            });
        }

        // POS Cart Logic
        function addToPosCart(prod) {
            const existing = posCart.find(item => item.id === prod.id);
            if (existing) {
                existing.qty++;
            } else {
                posCart.push({ ...prod, qty: 1 });
            }
            renderPosCart();
        }

        function renderPosCart() {
            const container = document.getElementById('pos-cart-items');
            container.innerHTML = '';

            if (posCart.length === 0) {
                container.innerHTML = `<p class="text-xs text-gray-400 text-center py-8">Selecciona productos para agregar a la venta.</p>`;
                document.getElementById('pos-total-price').innerText = '$0';
                return;
            }

            let total = 0;
            posCart.forEach(item => {
                const subtotal = item.price * item.qty;
                total += subtotal;

                const div = document.createElement('div');
                div.className = 'flex items-center justify-between text-xs p-2 rounded-lg bg-brand-rose/30';
                div.innerHTML = `
                    <div class="truncate max-w-[120px]">
                        <p class="font-bold text-brand-brown">${item.title}</p>
                        <p class="text-gray-400">$${item.price.toLocaleString()} c/u</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-bold">x${item.qty}</span>
                        <span class="font-bold text-brand-pink">$${subtotal.toLocaleString()}</span>
                    </div>
                `;
                container.appendChild(div);
            });

            document.getElementById('pos-total-price').innerText = `$${total.toLocaleString()}`;
        }

        function processPosSale() {
            if (posCart.length === 0) {
                alert('El carrito POS está vacío.');
                return;
            }
            alert('¡Venta registrada con éxito en el sistema!');
            posCart = [];
            renderPosCart();
        }
    </script>
</body>
</html>
