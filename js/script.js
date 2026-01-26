// --- 1. CONFIGURAZIONE i18n (DIZIONARIO COMPLETO) ---
const translations = {
  it: {
    // Nav
    lang_label: "IT",
    nav_home: "Home",
    nav_collection: "Collezione",
    nav_journal: "Journal",
    nav_contact: "Contatti",
    // Hero
    hero_title: "M&N Gallery",
    hero_subtitle: "Milano • Londra<br>Arte contemporanea e maestri moderni",
    hero_cta_explore: "Esplora Collezione",
    hero_cta_advisory: "Consulenza Privata",
    // Collection
    collection_title: "Collezione Attuale",
    collection_subtitle: "Opere disponibili per l'acquisto",
    // Services
    services_title: "Servizi",
    service_1: "Art Advisory",
    service_2: "Valutazioni Certificate",
    service_3: "Gestione Collezioni",
    service_cta: "Prenota una Consulenza",
    // Journal
    journal_title: "Journal & Analisi Mercato",
    journal_subtitle: "Analisi e tendenze dal mondo dell'arte globale",
    article_1_title: "L'Arte come Asset Class",
    article_1_desc: "Perché i family office allocano sempre più in opere blue-chip.",
    article_2_title: "L'ascesa dell'Ultra-Contemporary",
    article_2_desc: "Report sulle aste di Hong Kong e Londra 2025.",
    article_3_title: "Focus: Barry X Ball",
    article_3_desc: "La tecnologia CNC incontra la scultura classica.",
    // About & Contact
    about_title: "Chi Siamo",
    about_desc: "Fondata nel 2015 tra Milano e Londra, M&N Gallery rappresenta una selezione esclusiva di maestri moderni e contemporanei.",
    contact_title: "Contatti & Richieste Private",
    form_name: "Nome",
    form_email: "Email",
    form_msg: "Messaggio / Richiesta privata",
    form_btn: "Invia Richiesta",
    // CARRELLO & AZIONI (Inseriti in i18n come richiesto)
    cart_empty: "Il carrello è vuoto.",
    cart_add: "Aggiungi al carrello",
    cart_added: "Aggiunto alla collezione ✓",
    cart_inquire: "Richiedi Info",
    cart_total: "Stima Totale",
    cart_remove: "Rimuovi",
    price_req: "Prezzo su richiesta",
    modal_close: "Chiudi"
  },
  en: {
    lang_label: "EN",
    nav_home: "Home",
    nav_collection: "Collection",
    nav_journal: "Journal",
    nav_contact: "Contact",
    hero_title: "M&N Gallery",
    hero_subtitle: "Milan • London<br>Contemporary art and modern masters",
    hero_cta_explore: "Explore Collection",
    hero_cta_advisory: "Private Advisory",
    collection_title: "Current Collection",
    collection_subtitle: "Works available for acquisition",
    services_title: "Services",
    service_1: "Art Advisory",
    service_2: "Certified Valuations",
    service_3: "Collection Management",
    service_cta: "Book a Consultation",
    journal_title: "Journal & Market Insights",
    journal_subtitle: "Analysis and trends from the global art world",
    article_1_title: "Art as an Asset Class",
    article_1_desc: "Why family offices are allocating more to blue-chip art.",
    article_2_title: "The Rise of Ultra-Contemporary",
    article_2_desc: "Report on Hong Kong and London auctions 2025.",
    article_3_title: "Focus: Barry X Ball",
    article_3_desc: "CNC technology meets classical sculpture.",
    about_title: "About Us",
    about_desc: "Founded in 2015 between Milan and London, M&N Gallery represents an exclusive selection of modern and contemporary masters.",
    contact_title: "Contact & Private Requests",
    form_name: "Name",
    form_email: "Email",
    form_msg: "Message / Private Request",
    form_btn: "Send Request",
    cart_empty: "Your collection is empty.",
    cart_add: "Add to Cart",
    cart_added: "Added to Collection ✓",
    cart_inquire: "Inquire",
    cart_total: "Total Estimate",
    cart_remove: "Remove",
    price_req: "Price on request",
    modal_close: "Close"
  },
  es: {
    lang_label: "ESP",
    nav_home: "Inicio",
    nav_collection: "Colección",
    nav_journal: "Revista",
    nav_contact: "Contacto",
    hero_title: "M&N Gallery",
    hero_subtitle: "Milán • Londres<br>Arte contemporáneo y maestros modernos",
    hero_cta_explore: "Explorar Colección",
    hero_cta_advisory: "Asesoría Privada",
    collection_title: "Colección Actual",
    collection_subtitle: "Obras disponibles para adquisición",
    services_title: "Servicios",
    service_1: "Asesoría de Arte",
    service_2: "Valoraciones Certificadas",
    service_3: "Gestión de Colecciones",
    service_cta: "Reservar Consulta",
    journal_title: "Revista y Mercado",
    journal_subtitle: "Análisis y tendencias del mundo del arte global",
    article_1_title: "El Arte como Activo",
    article_1_desc: "Por qué las family offices invierten más en arte blue-chip.",
    article_2_title: "El auge del Ultra-Contemporáneo",
    article_2_desc: "Informe sobre subastas de Hong Kong y Londres 2025.",
    article_3_title: "Enfoque: Barry X Ball",
    article_3_desc: "La tecnología CNC se encuentra con la escultura clásica.",
    about_title: "Sobre Nosotros",
    about_desc: "Fundada en 2015 entre Milán y Londres, M&N Gallery representa una selección exclusiva de maestros modernos y contemporáneos.",
    contact_title: "Contacto y Solicitudes Privadas",
    form_name: "Nombre",
    form_email: "Correo",
    form_msg: "Mensaje / Solicitud privada",
    form_btn: "Enviar Solicitud",
    cart_empty: "Tu colección está vacía.",
    cart_add: "Añadir a la Cesta",
    cart_added: "Añadido ✓",
    cart_inquire: "Consultar",
    cart_total: "Estimación Total",
    cart_remove: "Eliminar",
    price_req: "Precio a consultar",
    modal_close: "Cerrar"
  }
};

let currentLang = 'it'; // Default language

// --- 2. DATI OPERE ---
const artworks = [
  { 
    id: 1, 
    artist: "barry", 
    title: "Purity", 
    year: "2022", 
    price: 380000, 
    img: "https://www.barryxball.com/images/works/large/2022_Purity_in_White_Marble.jpg",
    desc: "Sculpted in translucent Mexican Onyx."
  },
  { 
    id: 2, 
    artist: "hirst", 
    title: "Beautiful, Galactic", 
    year: "2023", 
    price: 1250000, 
    img: "https://www.damienhirst.com/-/media/damienhirst/website/heros/2023/the-beautiful-paintings-2023.ashx?w=1600",
    desc: "Spin painting on canvas. Provenance: Gagosian."
  },
  { 
    id: 3, 
    artist: "cattelan", 
    title: "Comedian (A.P.)", 
    year: "2019", 
    price: 140000, 
    img: "https://www.perrotin.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaThSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19/--/Comedian%20-%20Maurizio%20Cattelan%20-%202019%20-%20Perrotin.jpg",
    desc: "Banana, duct tape. With certificate."
  },
  { 
    id: 4, 
    artist: "vangogh", 
    title: "The Starry Night", 
    year: "1889", 
    price: 110000000, 
    img: "https://uploads5.wikiart.org/images/vincent-van-gogh/the-starry-night-1889.jpg!Large.jpg",
    desc: "Oil on canvas. Private Sale."
  },
  { 
    id: 5, 
    artist: "gauguin", 
    title: "Where Do We Come From?", 
    year: "1897-98", 
    price: 65000000, 
    img: "https://uploads3.wikiart.org/images/paul-gauguin/where-do-we-come-from-what-are-we-where-are-we-going-1897.jpg!Large.jpg",
    desc: "Monumental oil on canvas."
  }
];

let globalCurrency = 'EUR';
let globalRate = 1;
let cart = JSON.parse(localStorage.getItem('mnCart')) || [];

// --- 3. LOGICA i18n & CARRELLO ---

function setLanguage(lang) {
  currentLang = lang;
  
  // A. Aggiorna testo normale
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // B. Aggiorna placeholder dei form
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // C. Aggiorna il bottone nell'Header (IT / EN / ESP)
  const btn = document.getElementById('lang-btn');
  if(btn) {
    // Prende il valore "lang_label" dal dizionario i18n
    btn.textContent = translations[lang].lang_label; 
  }

  // D. Ricarica componenti dinamici per aggiornare la lingua
  renderArtworks();
  renderCartModal();
}

// --- FUNZIONALITÀ CARRELLO ---

// Funzione richiamata dal bottone "Aggiungi" nel Modale
function addToCart(id) {
  const art = artworks.find(a => a.id === id);
  const t = translations[currentLang];

  // Verifica se è già nel carrello
  if (!cart.some(item => item.id === id)) {
    // 1. Aggiungi array e salva
    cart.push(art);
    localStorage.setItem('mnCart', JSON.stringify(cart));
    
    // 2. Aggiorna interfaccia Carrello
    updateCartUI();
    
    // 3. Feedback Visivo sul bottone (senza ricaricare tutto)
    const btn = document.querySelector(`#artModal${id} .btn-acquire`);
    if(btn) {
        btn.textContent = t.cart_added;
        btn.disabled = true;
        btn.classList.remove('btn-dark');
        btn.classList.add('btn-success');
    }

    // 4. Chiudi modale opera e apri modale carrello (opzionale, ma elegante)
    setTimeout(() => {
        const artModalEl = document.getElementById(`artModal${id}`);
        const artModal = bootstrap.Modal.getInstance(artModalEl);
        if(artModal) artModal.hide();

        const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
    }, 500);
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('mnCart', JSON.stringify(cart));
  updateCartUI();
  renderCartModal();
}

function updateCartUI() {
  const counter = document.getElementById('cart-counter');
  if(counter) counter.textContent = cart.length;
}

function renderCartModal() {
  const container = document.getElementById('cart-items');
  const t = translations[currentLang];

  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `<div class="text-center py-5 text-muted"><i class="bi bi-basket display-4"></i><p class="mt-3">${t.cart_empty}</p></div>`;
    return;
  }

  let totalEUR = 0;
  
  // Genera HTML lista prodotti
  const itemsHtml = cart.map(item => {
    totalEUR += (item.price || 0);
    return `
    <div class="d-flex align-items-center mb-4 border-bottom pb-4">
      <img src="${item.img}" alt="${item.title}" class="rounded" style="width: 80px; height: 80px; object-fit: cover;">
      <div class="ms-3 flex-grow-1">
        <h6 class="mb-1 fw-bold">${item.title}</h6>
        <span class="text-secondary small">${formatPrice(item.price)}</span>
      </div>
      <button class="btn btn-sm btn-outline-danger border-0" onclick="removeFromCart(${item.id})">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `}).join('');

  // Totale
  container.innerHTML = `
    ${itemsHtml}
    <div class="d-flex justify-content-between align-items-center mt-3 pt-3">
      <h5 class="mb-0">${t.cart_total}</h5>
      <h4 class="mb-0 fw-bold">${formatPrice(totalEUR)}</h4>
    </div>
  `;
}

// --- RENDERING & UTILITIES ---

function renderArtworks() {
  const container = document.getElementById('artworks');
  container.innerHTML = artworks.map(art => `
    <div class="col-md-6 col-lg-4 artwork" data-artist="${art.artist}">
      <div class="card artwork-card border-0 shadow-sm h-100" onclick="openModal(${art.id})">
        <img src="${art.img}" class="card-img-top" alt="${art.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${art.title}</h5>
          <p class="text-muted mb-2 small">${formatArtistName(art.artist)}, ${art.year}</p>
          <div class="mt-auto">
            <p class="fw-bold mb-0 text-dark">${formatPrice(art.price)}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function openModal(id) {
  const art = artworks.find(a => a.id === id);
  const isInCart = cart.some(item => item.id === id);
  const t = translations[currentLang];

  // Rimuovi modale precedente se esiste
  const existingModal = document.getElementById(`artModal${id}`);
  if(existingModal) existingModal.remove();

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal fade" id="artModal${id}" tabindex="-1">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content overflow-hidden">
          <div class="modal-body p-0">
            <div class="row g-0">
              <div class="col-lg-7 bg-light d-flex align-items-center justify-content-center">
                <img src="${art.img}" class="img-fluid" style="max-height:85vh; object-fit:contain">
              </div>
              <div class="col-lg-5 p-5 d-flex flex-column justify-content-center">
                <h2 class="display-6 fw-bold mb-2">${art.title}</h2>
                <h5 class="text-muted mb-4">${formatArtistName(art.artist)}, ${art.year}</h5>
                <p class="lead text-secondary fs-6 mb-4">${art.desc}</p>
                <hr class="my-4">
                <div class="mb-4">
                  <span class="display-6">${formatPrice(art.price)}</span>
                </div>
                <div class="d-grid gap-2">
                  ${art.price ? 
                    `<button class="btn ${isInCart ? 'btn-success' : 'btn-dark'} btn-lg py-3 btn-acquire" 
                             onclick="addToCart(${art.id})" ${isInCart ? 'disabled' : ''}>
                      ${isInCart ? t.cart_added : t.cart_add}
                     </button>` 
                    : `<a href="#contact" class="btn btn-outline-dark btn-lg py-3">${t.cart_inquire}</a>`
                  }
                  <button class="btn btn-link text-muted" data-bs-dismiss="modal">${t.modal_close}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  
  new bootstrap.Modal(document.getElementById(`artModal${id}`)).show();
}

async function manualCurrency(currency) {
  const btn = document.getElementById('currency-btn');
  if(btn) btn.textContent = currency;
  try {
    if (currency === 'EUR') {
      globalCurrency = 'EUR';
      globalRate = 1;
    } else {
      const req = await fetch(`https://open.er-api.com/v6/latest/EUR`);
      const data = await req.json();
      if (data && data.rates && data.rates[currency]) {
        globalCurrency = currency;
        globalRate = data.rates[currency];
      }
    }
    renderArtworks();
    renderCartModal();
    updateCartUI();
  } catch (error) { console.error(error); }
}

function formatPrice(eurPrice) {
  if (!eurPrice) return `<span class="price-on-request">${translations[currentLang].price_req}</span>`;
  const localPrice = eurPrice * globalRate;
  return new Intl.NumberFormat(currentLang === 'it' ? 'it-IT' : 'en-US', {
    style: 'currency', currency: globalCurrency, maximumFractionDigits: 0
  }).format(localPrice);
}

function formatArtistName(key) {
  const names = {'barry':'Barry X Ball','hirst':'Damien Hirst','cattelan':'Maurizio Cattelan','vangogh':'Vincent van Gogh','gauguin':'Paul Gauguin'};
  return names[key] || key;
}

// Filtri
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'bg-dark', 'text-white'));
    btn.classList.add('active', 'bg-dark', 'text-white');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.artwork').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.artist === filter) ? 'block' : 'none';
    });
  });
});

// Auto-Close Mobile Menu
document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// Init App
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('it'); // Lingua di default
  updateCartUI();
});
