# M-Ngallery-

# M&N Gallery - Contemporary Art & E-Commerce Platform

Benvenuti nel repository ufficiale di **M&N Gallery**. Questo progetto rappresenta lo sviluppo di una piattaforma web moderna per una galleria d'arte contemporanea, integrando funzionalità di vetrina espositiva e logiche e-commerce avanzate.

## 🚀 Stato dell'Arte (SOTA) - Funzionalità Implementate

Attualmente il progetto è in fase **Beta Avanzata**. Abbiamo migrato da una struttura statica HTML a una *Single Page Application* (SPA) dinamica basata su JavaScript Vanilla.

### 🌟 Nuove Implementazioni Core

1.  **Rendering Dinamico del Catalogo**
    *   Le opere non sono più hardcoded in HTML ma gestite tramite un array di oggetti JSON.
    *   Attualmente sono caricate **23 opere** di artisti di calibro internazionale (Basquiat, Warhol, Kusama, Banksy, ecc.).
    *   Integrazione con **GLightbox** per visualizzazione opere a tutto schermo e zoom.

2.  **Sistema E-Commerce (Carrello)**
    *   Funzionalità **Add to Cart** (Aggiungi al carrello).
    *   **Persistenza Dati:** Utilizzo del `localStorage` per mantenere il carrello attivo anche dopo il refresh della pagina.
    *   Modale riepilogativo con calcolo automatico del totale stimato.
    *   Rimozione dinamica degli articoli.

3.  **Supporto Multilingua (i18n)**
    *   Implementazione completa di 3 lingue: **Italiano (IT), Inglese (EN), Spagnolo (ES)**.
    *   Cambio lingua istantaneo senza ricaricamento della pagina (DOM Manipulation).

4.  **Sistema Multi-Valuta**
    *   Conversione prezzi in tempo reale: **EUR (€), USD ($), GBP (£), JPY (¥)**.
    *   Integrazione logica per recupero tassi di cambio (API ready).

5.  **UI/UX Redesign**
    *   **Header Adattivo:** Navbar trasparente con effetto *blur* allo scroll (glassmorphism).
    *   **Menu Orizzontale:** Riorganizzazione delle voci di menu per una navigazione più fluida.
    *   **Mobile First:** Layout ottimizzato per dispositivi touch.

---

## 🛠 Tecnologia Utilizzata

*   **Struttura:** HTML5 Semantico
*   **Stile:** CSS3 (Custom Properties), Bootstrap 5.3 (Griglia e Modali)
*   **Logica:** JavaScript ES6+ (Vanilla, nessuna dipendenza pesante come React/Vue al momento)
*   **Icone:** Bootstrap Icons
*   **Font:** Google Fonts (Lora per i titoli, Inter per UI)
*   **Librerie Esterne:** GLightbox (per la galleria immagini)

---

## 🔮 Evolution (Roadmap Futura)

Il prossimo step di sviluppo ("Evolution") prevede il passaggio da un prototipo frontend a una web app completa.

*   **Backend Integration:** Collegamento a un database (Firebase o Supabase) per gestire l'inventario opere in tempo reale senza modificare il codice JS.
*   **Checkout Reale:** Integrazione con Stripe/PayPal per processare pagamenti o depositi cauzionali.
*   **Area Riservata:** Login per collezionisti VIP per vedere opere "Private Sale" (non visibili al pubblico).
*   **Filtri Avanzati:** Possibilità di filtrare per Prezzo, Artista, Anno e Tecnica.

---

## 🎯 Mission

Il nostro obiettivo è creare un'esperienza digitale che non sia solo un negozio, ma un'estensione virtuale della galleria fisica.

> *"Trasmettere esclusività, affidabilità e valore curatoriale, abbattendo le barriere linguistiche e valutarie per attrarre investitori globali."*

---

## 📦 Come testare il progetto

1.  Scaricare la repository.
2.  Aprire il file `index.html` in un browser moderno.
3.  Oppure visualizzare la live demo su Stackblitz/Vercel/Netlify.

---
*Ultimo aggiornamento: [28/01/2026]*
