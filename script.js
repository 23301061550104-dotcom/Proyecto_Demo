document.addEventListener("DOMContentLoaded", () => {

  // Productos
  const productos = [
    { id: "p1", nombre: "Audífonos Bluetooth", categoria: "electronica", descripcion: "Sonido HD y cancelación de ruido.", precio: 550, imagen: "https://i.pinimg.com/1200x/39/9d/6d/399d6d0c4804c3b380f78e5f80ded6ca.jpg" },
    { id: "p2", nombre: "Sudadera Oversize", categoria: "ropa", descripcion: "Estilo urbano, muy cómoda.", precio: 320, imagen: "https://i.pinimg.com/736x/c2/4c/da/c24cdac52ec4bc5dd22fe0b9e7c0d6b6.jpg" },
    { id: "p", nombre: "PUNT ROMA", categoria: "ropa", descripcion: "Chamarra casual de mezclilla para mujer", precio: 1799, imagen: "https://ss533.liverpool.com.mx/lg/1184308998.jpg" },
    { id: "p4", nombre: "STEVE MADDEN", categoria: "ropa", descripcion: "Bolsa satchel Bevelyn para mujer", precio: 1699, imagen: "https://ss511.liverpool.com.mx/lg/1155069887.jpg" },
    { id: "p4", nombre: "COFFEE BEAN", categoria: "ropa", descripcion: "Chamarra para mujer", precio: 699, imagen: "https://ss540.liverpool.com.mx/lg/1186183955.jpg" },
    { id: "p4", nombre: "TRUCCO", categoria: "ropa", descripcion: "Vestido corto de fiesta", precio: 1599, imagen: "https://ss555.liverpool.com.mx/lg/1177764473.jpg" },
    { id: "p4", nombre: "Fashion Fest Animal Print", categoria: "ropa", descripcion: "Chamarra para mujer", precio: 1599, imagen: "https://cm0.liverpool.com.mx/lg/100000026930.jpg" },
    { id: "p4", nombre: "AMERICAN EAGLE", categoria: "ropa", descripcion: "Playera tipo polo para hombre", precio: 599, imagen: "https://ss251.liverpool.com.mx/lg/1102772918.jpg" },
    { id: "p3", nombre: "Mujercitas", categoria: "libros", descripcion: "Edición ilustrada.", precio: 280, imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/a6/d7/a6d752765e95d90d53fccd91ac01ff13.jpg" },
    { id: "p4", nombre: "ALFAGUARA", categoria: "libros", descripcion: "Libro Rayuela de Julio Cortázar", precio: 589, imagen: "https://ss365.liverpool.com.mx/xl/1083425284.jpg" },
    { id: "p5", nombre: "PAIDÓS", categoria: "libros", descripcion: "Libro Mujeres que piensan demasiado de Susan Nolen-Hoeksema", precio: 349, imagen: "https://m.media-amazon.com/images/I/61tux0TZCRL._UF1000,1000_QL80_.jpg" },
    { id: "p", nombre: "LUMEN", categoria: "libros", descripcion: "Libro Los Pasajeros Del Tren de Hankyu de Hiro Arikawa", precio: 249, imagen: "https://ss365.liverpool.com.mx/sm/1186077063.jpg" },
    { id: "p4", nombre: "WILLIAMS-SONOMA", categoria: "libros", descripcion: "Libro Kiwilimón. los mejores postres paso a paso de Varios", precio: 279, imagen: "https://ss307.williams-sonoma.com.mx/sm/1133450323.jpg" },
    { id: "p4", nombre: "PLANETA", categoria: "libros", descripcion: "Libro El Jardín de las Mariposas de Dot Hutchison", precio: 398, imagen: "https://ss365.liverpool.com.mx/lg/1067414507.jpg" },
    { id: "p4", nombre: "MOLINO", categoria: "libros", descripcion: "Libro Rojo, blanco y sangre azul de Casey McQuiston", precio: 249, imagen: "https://ss365.liverpool.com.mx/lg/1112166846.jpg" },
    { id: "p", nombre: "MONTENA", categoria: "libros", descripcion: "Libro Culpa Mia", precio: 499, imagen: "https://ss365.liverpool.com.mx/lg/1172823919.jpg" },
    { id: "p", nombre: "Smartwatch Fitness", categoria: "electronica", descripcion: "Cuenta pasos, calorías y ritmo cardiaco.", precio: 620, imagen: "https://i.pinimg.com/736x/32/ec/31/32ec319fd5a20775f59eda1fbbd2e9eb.jpg" },
    { id: "p", nombre: "APPLE", categoria: "electronica", descripcion: "iPhone 17 6.3 pulgadas Super Retina XDR", precio: 19998, imagen: "https://ss632.liverpool.com.mx/lg/1186094995.jpg" },
    { id: "p", nombre: "APPLE", categoria: "electronica", descripcion: "iPhone 17 Pro 6.3 pulgadas Super Retina XDR", precio: 38498, imagen: "https://ss632.liverpool.com.mx/lg/1186094651.jpg" },
    {id: "p", nombre: "MARSHALL", categoria: "electronica", descripcion: "Audífonos True Wireless inalámbricos con cancelación de ruido", precio: 4799, imagen: "https://ss630.liverpool.com.mx/lg/1143488604.jpg" },
    { id: "p", nombre: "APPLE", categoria: "electronica", descripcion: "AirPods 4 inalámbricos", precio: 2999, imagen: "https://ss632.liverpool.com.mx/lg/1163564986.jpg" },
    { id: "p", nombre: "HP", categoria: "electronica", descripcion: "Laptop 14-EP2011 14 pulgadas HD Intel Celeron Intel UHD graphics 4 GB RAM 128 GB SSD", precio: 6199, imagen: "https://ss628.liverpool.com.mx/lg/1187221401.jpg" },
    { id: "p", nombre: "SONY", categoria: "electronica", descripcion: "Audífonos On-Ear inalámbricos", precio: 699, imagen: "https://ss630.liverpool.com.mx/lg/1178743631.jpg" },
    { id: "p", nombre: "Jeans Mom Fit", categoria: "ropa", descripcion: "Tiro alto, muy cómodos.", precio: 450, imagen: "https://i.pinimg.com/1200x/38/43/a2/3843a2e3029c9271c778de7827de30ee.jpg" },
    { id: "p", nombre: "ANASTASIA BEVERLY HILLS", categoria: "Belleza", descripcion: "Set Holiday.", precio: 780, imagen: "https://m.media-amazon.com/images/I/41dDdmoMgzL._AC_UF894,1000_QL80_.jpg" },
    { id: "p", nombre: "YUYA", categoria: "Belleza", descripcion: "Set de maquillaje.", precio: 900, imagen: "https://ss702.liverpool.com.mx/lg/1185569264.jpg" },
    { id: "p", nombre: "CHANEL", categoria: "Belleza", descripcion: "COCO MADEMOISELLE EDP 100ml", precio: 5800, imagen: "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1240/coco-mademoiselle-eau-de-parfum-spray-1-7fl-oz--packshot-default-116420-9564890529822.jpg" },
    { id: "p1", nombre: "LE LABO Santal 33", categoria: "Belleza", descripcion: "Perfume unisex.", precio: 8437, imagen: "https://media.johnlewiscontent.com/i/JohnLewis/238090019?$rsp-pdp-port-320$" },
    { id: "p", nombre: "KIKO MILANO", categoria: "Belleza", descripcion: "Brillo labial 3D Hydra Lipgloss brillante", precio: 279, imagen: "https://ss706.liverpool.com.mx/lg/1189239544.jpg" },
    { id: "p", nombre: "ESTÉE LAUDER", categoria: "Belleza", descripcion: "Kit labial mate Pure Color Envy", precio: 1780, imagen: "https://ss702.liverpool.com.mx/lg/1185266229.jpg.jpg" },
    { id: "p", nombre: "CAROLINA HERRERA", categoria: "Belleza", descripcion: "Calendario de adviento 24 piezas", precio: 8700, imagen: "https://ss701.liverpool.com.mx/lg/1186946428.jpg" },
    { id: "p", nombre: "TOCOBO", categoria: "Belleza", descripcion: "Base de maquillaje líquido Apple Dewy Fit luminoso", precio: 629, imagen: "https://ss706.liverpool.com.mx/lg/1189074324.jpg" },
    { id: "p", nombre: "FUNDA DUVET SATÍN VAINICA", categoria: "Hogar", descripcion: "Funda duvet confeccionada en algodón satín de 500 hilos con diseño liso y detalle de vainica.", precio: 2799, imagen: "https://static.zarahome.net/assets/public/380b/5b68/e78144c1bff7/091c379b027a/46111088250-p1/46111088250-p1.jpg?ts=1755073453180&f=auto&w=342" },
    { id: "p", nombre: "FUNDA ALMOHADA SATÍN VAINICA", categoria: "Hogar", descripcion: "Funda de almohada confeccionada en algodón satín de 500 hilos con diseño liso y detalle de vainica.", precio: 1699, imagen: "https://static.zarahome.net/assets/public/9a47/0431/831e48b0ac15/934a031f5151/46111091250-p1/46111091250-p1.jpg?ts=1755073488803&f=auto&w=437" },
    { id: "p", nombre: "FUNDA DUVET LINO LAVADO (160 GxM²)", categoria: "Hogar", descripcion: "Funda de duvet de lino lavado de 160 g/m² liso con doble pespunte en el marco.", precio:  2499, imagen: "https://static.zarahome.net/assets/public/b4b0/1b83/177444bcb500/10931e0cdf20/46150088052-p1/46150088052-p1.jpg?ts=1756713304622&f=auto&w=342" },
    { id: "p", nombre: "FUNDA DE ALMOHADA LINO LAVADO (160 GxM²)", categoria: "Hogar", descripcion: "Funda de almohada de lino lavado de 160 g/m² liso con doble pespunte en el marco.", precio:  1399, imagen: "https://static.zarahome.net/assets/public/6718/48f6/ca394f7e935e/097ddcb327d3/40150091052-p1/40150091052-p1.jpg?ts=1756715297922&f=auto&w=342" },
    { id: "p", nombre: "EDREDON REVERSIBLE PIEL SINTÉTICA DE BORREGO", categoria: "Hogar", descripcion: "Edredón reversible con tejido de piel sintética de borrego sintético por un lado y con tejido acolchado por el otro lado.", precio: 4499, imagen: "https://static.zarahome.net/assets/public/50e2/80ce/533d4dfe9f4b/99d615ad0b91/41129005811-p1/41129005811-p1.jpg?ts=1760962928858&f=auto&w=342" },
    { id: "p", nombre: "FUNDA COJÍN EDREDON REVERSIBLE PIEL SINTÉTICA DE BORREGO", categoria: "Hogar", descripcion: "Funda de cojín de edredón reversible con tejido de piel sintética de borrego por un lado y con tejido acolchado por el otro lado.", precio:  699, imagen: "https://static.zarahome.net/assets/public/f1eb/ef6e/c59f425ea03a/d04a3b6e1c62/41129007811-p1/41129007811-p1.jpg?ts=1760962934136&f=auto&w=342" },
    { id: "p", nombre: "EDREDÓN ACOLCHADO PUNTOS", categoria: "Hogar", descripcion: "Edredón acolchado con detalle de puntos, acabado lavado y tacto suave. Disponible en varios colores.", precio:  2799, imagen: "https://static.zarahome.net/assets/public/a32b/0578/b45847cb8176/ea6779ce8de2/45121005500-p1/45121005500-p1.jpg?ts=1760962943211&f=auto&w=342" },
    { id: "p", nombre: "COLCHA ALGODÓN MINI TEJIDO TIPO WAFFLE", categoria: "Hogar", descripcion: "Colcha de algodón con textura con diseño tipo waffle en tamaño mini en color liso.", precio: 2499, imagen: "https://static.zarahome.net/assets/public/9792/cef6/234a4cacb6c8/9d726881cc90/41127006626-p1/41127006626-p1.jpg?ts=1757314244064&f=auto&w=342" }
  ];

  const contenedor = document.querySelector(".productos");
  const botonesFiltro = document.querySelectorAll(".filtro");
  const cantidadCarrito = document.getElementById("cantidadCarrito");
  const carritoBtn = document.getElementById("carritoBtn");
  const carritoModal = document.getElementById("carritoModal");
  const cerrarCarritoBtn = document.getElementById("cerrarCarrito");
  const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
  const comprarCarritoBtn = document.getElementById("comprarCarrito");
  const listaCarritoEl = document.getElementById("listaCarrito");

  let carrito = [];

  function mostrarProductos(categoria = "todos") {
    contenedor.innerHTML = "";
    const visibles = productos.filter(p => categoria === "todos" || p.categoria === categoria);
    visibles.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.imagen}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p class="precio">$${p.precio} MXN</p>
        <button class="btn-agregar" data-id="${p.id}">Agregar al carrito</button>
      `;
      contenedor.appendChild(card);
    });
  }

  function actualizarUICarrito() {
    const totalQty = carrito.reduce((sum, item) => sum + item.qty, 0);
    cantidadCarrito.textContent = totalQty;

    listaCarritoEl.innerHTML = "";

    if (carrito.length === 0) {
      listaCarritoEl.innerHTML = "<li>Tu carrito está vacío</li>";
      return;
    }

    carrito.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.nombre} x ${item.qty}</span>
        <span>$${(item.precio * item.qty).toFixed(2)}</span>
        <button class="btn-quitar" data-id="${item.id}">Quitar</button>
      `;
      listaCarritoEl.appendChild(li);
    });
  }

  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const existe = carrito.find(i => i.id === id);
    if (existe) existe.qty++;
    else carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, qty: 1 });
    actualizarUICarrito();
  }

  document.addEventListener("click", e => {
    if (e.target.classList.contains("btn-agregar")) {
      agregarAlCarrito(e.target.dataset.id);
    }
    if (e.target.classList.contains("btn-quitar")) {
      carrito = carrito.filter(i => i.id !== e.target.dataset.id);
      actualizarUICarrito();
    }
  });

  botonesFiltro.forEach(btn => {
    btn.addEventListener("click", () => mostrarProductos(btn.dataset.categoria));
  });

  carritoBtn.addEventListener("click", () => {
    carritoModal.classList.remove("oculto");
    actualizarUICarrito();
  });

  cerrarCarritoBtn.addEventListener("click", () => {
    carritoModal.classList.add("oculto");
  });

  vaciarCarritoBtn.addEventListener("click", () => {
    if (confirm("¿Vaciar carrito?")) {
      carrito = [];
      actualizarUICarrito();
    }
  });

  comprarCarritoBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    alert("¡Compra realizada con éxito! 💖");

    carrito = [];
    actualizarUICarrito();

    setTimeout(() => location.reload(), 600);
  });

  mostrarProductos();
  actualizarUICarrito();
});

  
  
  
           