/**
 * LUXORA - Luxury Fashion & Atelier
 * Product Catalog, Categories & Utility Functions (products.js)
 * 
 * Works both as a standalone browser script (<script src="products.js">)
 * and as an ES Module (import / export).
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.LuxoraCatalog = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  /* ==========================================================================
     1. Categories Configuration
     ========================================================================== */
  const CATEGORIES = [
    { id: "handbags", label: "Handbags", blurb: "Hand-stitched Italian leather" },
    { id: "jewellery", label: "Jewellery", blurb: "18k gold, ethically sourced" },
    { id: "watches", label: "Watches", blurb: "Swiss movements, sapphire glass" },
    { id: "fragrance", label: "Fragrance", blurb: "Composed in Grasse, France" },
  ];

  /* ==========================================================================
     2. 12 Authentic Luxury Products
     ========================================================================== */
  const PRODUCTS = [
    // --- HANDBAGS ---
    {
      slug: "rose-noir-tote",
      name: "Rosé Noir Tote",
      category: "handbags",
      price: 1280,
      image: "src/assets/p-rose-noir-tote.jpg",
      tagline: "Structured black calfskin with a polished gold clasp",
      description: "Hand-stitched Italian leather with a polished gold clasp. Spacious, structured and effortlessly elegant, from boardroom to dinner.",
      details: [
        "Full-grain Italian calfskin",
        "24k gold-plated brass hardware",
        "Suede-lined interior, 3 pockets",
        "32 × 24 × 15 cm",
        "Made in Florence, Italy"
      ],
      options: { label: "Colour", values: ["Noir", "Cognac", "Ivory"] },
      badge: "Bestseller",
      rating: 4.9,
      reviews: 214
    },
    {
      slug: "milano-mini-crossbody",
      name: "Milano Mini Crossbody",
      category: "handbags",
      price: 890,
      image: "src/assets/p-milano-crossbody.jpg",
      tagline: "Cognac leather on a fine gold chain",
      description: "A compact saddle shape in soft cognac leather, finished with a signature gold push-lock and a detachable curb-chain strap.",
      details: [
        "Vegetable-tanned leather",
        "Detachable 110 cm gold chain",
        "Fits phone, cards and keys",
        "19 × 14 × 6 cm",
        "Made in Milan, Italy"
      ],
      options: { label: "Colour", values: ["Cognac", "Noir", "Bordeaux"] },
      badge: "New",
      rating: 4.8,
      reviews: 96
    },
    {
      slug: "sienna-top-handle",
      name: "Sienna Top-Handle",
      category: "handbags",
      price: 1540,
      image: "src/assets/p-sienna-top-handle.jpg",
      tagline: "Bordeaux croc-embossed leather, gold turn-lock",
      description: "Our most sculptural silhouette. Glossy croc-embossed leather in deep Bordeaux, a rolled top handle and a gold turn-lock closure.",
      details: [
        "Croc-embossed calf leather",
        "Gold turn-lock and protective feet",
        "Optional shoulder strap included",
        "26 × 19 × 11 cm",
        "Made in Florence, Italy"
      ],
      options: { label: "Colour", values: ["Bordeaux", "Noir"] },
      badge: "Limited",
      rating: 5.0,
      reviews: 48
    },

    // --- JEWELLERY ---
    {
      slug: "aurora-diamond-ring",
      name: "Aurora Diamond Ring",
      category: "jewellery",
      price: 2450,
      image: "src/assets/p-aurora-ring.jpg",
      tagline: "18k gold solitaire, brilliant-cut stone",
      description: "An 18k gold band set with a brilliant-cut stone that catches every bit of light. A six-claw setting lifts the stone for maximum brilliance.",
      details: [
        "18k yellow gold",
        "0.75 ct lab-grown diamond, VS1, F colour",
        "IGI certified",
        "Six-claw cathedral setting",
        "Free resizing within 60 days"
      ],
      options: { label: "Ring size", values: ["5", "6", "7", "8"] },
      badge: "Bestseller",
      rating: 4.9,
      reviews: 132
    },
    {
      slug: "lumiere-gold-hoops",
      name: "Lumière Gold Hoops",
      category: "jewellery",
      price: 680,
      image: "src/assets/p-lumiere-hoops.jpg",
      tagline: "Chunky polished 18k gold hoops",
      description: "Bold yet weightless. Hollow-formed 18k gold hoops with a mirror polish and a secure hinged clasp for all-day comfort.",
      details: [
        "18k yellow gold",
        "Diameter 25 mm, width 6 mm",
        "Hinged snap closure",
        "Hypoallergenic"
      ],
      badge: null,
      rating: 4.8,
      reviews: 187
    },
    {
      slug: "celeste-pendant",
      name: "Céleste Pendant",
      category: "jewellery",
      price: 1150,
      image: "src/assets/p-celeste-pendant.jpg",
      tagline: "Pear-cut diamond on a fine gold chain",
      description: "A single pear-cut stone in a bezel setting, suspended on a whisper-fine 18k gold cable chain. Made to be worn every day.",
      details: [
        "18k yellow gold",
        "0.30 ct pear-cut lab-grown diamond",
        "Adjustable 40 / 45 cm chain",
        "Presented in a LUXORA gift box"
      ],
      badge: "New",
      rating: 4.9,
      reviews: 74
    },

    // --- WATCHES ---
    {
      slug: "chrono-gold-classic",
      name: "Chrono Gold Classic",
      category: "watches",
      price: 3900,
      image: "src/assets/p-chrono-gold.jpg",
      tagline: "Swiss chronograph with an ivory dial",
      description: "Swiss movement, sapphire glass and a hand-finished leather strap made to last a lifetime. A three-register chronograph with timeless proportions.",
      details: [
        "Swiss automatic chronograph movement",
        "40 mm gold PVD stainless steel case",
        "Anti-reflective sapphire crystal",
        "Water resistant to 50 m",
        "5-year international warranty"
      ],
      options: { label: "Strap", values: ["Brown alligator", "Black calf"] },
      badge: "Bestseller",
      rating: 4.9,
      reviews: 158
    },
    {
      slug: "riviera-steel-automatic",
      name: "Riviera Steel Automatic",
      category: "watches",
      price: 2750,
      image: "src/assets/p-riviera-steel.jpg",
      tagline: "Midnight sunburst dial, steel bracelet",
      description: "A clean, everyday automatic with a deep midnight-blue sunburst dial, polished baton markers and a brushed three-link bracelet.",
      details: [
        "Swiss automatic, 42-hour reserve",
        "39 mm 316L stainless steel case",
        "Sapphire crystal, display caseback",
        "Water resistant to 100 m",
        "5-year international warranty"
      ],
      badge: null,
      rating: 4.8,
      reviews: 89
    },
    {
      slug: "nuit-rose-lady",
      name: "Nuit Rose Lady",
      category: "watches",
      price: 3200,
      image: "src/assets/p-nuit-rose.jpg",
      tagline: "Mother-of-pearl dial with diamond markers",
      description: "Petite and luminous. A rose-gold case frames a mother-of-pearl dial set with twelve diamond markers, on a fine Milanese mesh bracelet.",
      details: [
        "Swiss quartz movement",
        "30 mm rose gold PVD case",
        "Natural mother-of-pearl dial",
        "12 diamond hour markers (0.06 ct)",
        "Adjustable Milanese mesh bracelet"
      ],
      badge: "Limited",
      rating: 5.0,
      reviews: 61
    },

    // --- FRAGRANCE ---
    {
      slug: "eclat-d-ambre",
      name: "Éclat d’Ambre",
      category: "fragrance",
      price: 320,
      image: "src/assets/p-eclat-ambre.jpg",
      tagline: "Amber, saffron and warm vanilla",
      description: "Amber, saffron and warm vanilla in a hand-blown crystal bottle with a gold cap. A radiant, enveloping signature that lingers for hours.",
      details: [
        "Top: saffron, pink pepper",
        "Heart: amber, jasmine sambac",
        "Base: Madagascar vanilla, labdanum",
        "Eau de Parfum, 22% concentration",
        "Composed in Grasse, France"
      ],
      options: { label: "Size", values: ["50 ml", "100 ml"] },
      badge: "Bestseller",
      rating: 4.9,
      reviews: 341
    },
    {
      slug: "velours-oud",
      name: "Velours Oud",
      category: "fragrance",
      price: 380,
      image: "src/assets/p-velours-oud.jpg",
      tagline: "Smoked oud, leather and black rose",
      description: "Deep and nocturnal. Smoked Cambodian oud meets supple leather and a black rose accord, softened with a whisper of incense.",
      details: [
        "Top: bergamot, cardamom",
        "Heart: black rose, leather",
        "Base: oud, incense, sandalwood",
        "Extrait de Parfum, 25% concentration",
        "Composed in Grasse, France"
      ],
      options: { label: "Size", values: ["50 ml", "100 ml"] },
      badge: "New",
      rating: 4.7,
      reviews: 112
    },
    {
      slug: "fleur-de-soie",
      name: "Fleur de Soie",
      category: "fragrance",
      price: 290,
      image: "src/assets/p-fleur-de-soie.jpg",
      tagline: "Peony, white musk and silk accord",
      description: "Soft as silk. Fresh peony petals and lychee bloom over a clean white musk, for a fragrance that feels like your skin, only better.",
      details: [
        "Top: lychee, pink grapefruit",
        "Heart: peony, rose de mai",
        "Base: white musk, cashmere wood",
        "Eau de Parfum, 18% concentration",
        "Composed in Grasse, France"
      ],
      options: { label: "Size", values: ["50 ml", "100 ml"] },
      badge: null,
      rating: 4.8,
      reviews: 205
    }
  ];

  /* ==========================================================================
     3. Curated Looks (Bundles with 10% Discount)
     ========================================================================== */
  const LOOKS = [
    {
      id: "evening-noir",
      name: "Evening Noir",
      mood: "Black tie, gold light",
      items: ["rose-noir-tote", "aurora-diamond-ring", "chrono-gold-classic", "eclat-d-ambre"],
      discount: 0.10
    },
    {
      id: "city-cognac",
      name: "City Cognac",
      mood: "Paris after dark",
      items: ["milano-mini-crossbody", "lumiere-gold-hoops", "nuit-rose-lady", "fleur-de-soie"],
      discount: 0.10
    },
    {
      id: "bordeaux-velvet",
      name: "Bordeaux Velvet",
      mood: "Late dinner, low light",
      items: ["sienna-top-handle", "celeste-pendant", "riviera-steel-automatic", "velours-oud"],
      discount: 0.10
    }
  ];

  /* ==========================================================================
     4. Store Concierge & Policies
     ========================================================================== */
  const STORE_INFO = {
    name: "LUXORA Atelier & Flagship",
    email: "hello@luxora-store.com",
    phone: "+1 555 010 0199",
    phoneHref: "tel:+15550100199",
    address: "125 Madison Avenue, New York, NY 10016, USA",
    hours: "Monday – Saturday, 10:00 – 20:00 EST",
    freeShippingThreshold: 500,
    standardShippingFee: 25
  };

  /* ==========================================================================
     5. Helper & Query Functions
     ========================================================================== */
  function getAllProducts() {
    return PRODUCTS;
  }

  function getProductBySlug(slug) {
    return PRODUCTS.find(p => p.slug === slug) || null;
  }

  function getProductsByCategory(category) {
    if (!category || category === "all") return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
  }

  function getFeaturedProducts(limit = 4) {
    return PRODUCTS.filter(p => p.badge === "Bestseller" || p.badge === "New").slice(0, limit);
  }

  function formatPrice(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  function calculateShipping(subtotal) {
    if (subtotal === 0 || subtotal >= STORE_INFO.freeShippingThreshold) {
      return 0;
    }
    return STORE_INFO.standardShippingFee;
  }

  function getLookSummary(lookId) {
    const look = LOOKS.find(l => l.id === lookId);
    if (!look) return null;

    const items = look.items.map(slug => getProductBySlug(slug)).filter(Boolean);
    const originalTotal = items.reduce((sum, item) => sum + item.price, 0);
    const discountedTotal = Math.round(originalTotal * (1 - look.discount));

    return {
      ...look,
      itemsData: items,
      originalTotal,
      discountedTotal,
      savings: originalTotal - discountedTotal
    };
  }

  /* ==========================================================================
     6. UI Template Generator (HTML Card Generator)
     ========================================================================== */
  function renderProductCardHTML(product) {
    return `
      <article class="product-card" data-id="${product.slug}" data-category="${product.category}">
        <div class="product-media" style="position: relative; overflow: hidden; background: #161513; aspect-ratio: 4/5;">
          ${product.badge ? `<span class="badge" style="position: absolute; top: 12px; left: 12px; z-index: 2; background: rgba(13,12,11,0.85); color: #d4af37; border: 1px solid #d4af37; padding: 4px 10px; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;">${product.badge}</span>` : ''}
          <img src="${product.image}" alt="${product.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;" onerror="this.src='https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'" />
        </div>
        <div class="product-info" style="padding: 16px 0;">
          <p class="category" style="color: #9c9488; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 4px;">${product.category}</p>
          <h3 style="font-family: 'Cinzel', serif; font-size: 1.05rem; color: #f5f0e6; margin: 0 0 6px 0;">${product.name}</h3>
          <p class="tagline" style="color: #b8b0a2; font-size: 0.82rem; margin-bottom: 12px;">${product.tagline}</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="price" style="font-family: 'Montserrat', sans-serif; font-size: 1.1rem; color: #d4af37; font-weight: 500;">${formatPrice(product.price)}</span>
            <button type="button" 
                    data-action="add-to-cart" 
                    data-product-id="${product.slug}" 
                    data-product-title="${product.name}" 
                    data-product-price="${formatPrice(product.price)}"
                    style="background: transparent; color: #f5f0e6; border: 1px solid #3d3830; padding: 8px 16px; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease;">
              Acquire
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderGridIntoContainer(containerId, category = "all") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = getProductsByCategory(category);
    container.innerHTML = list.map(renderProductCardHTML).join('');
  }

  // Public API Export
  return {
    CATEGORIES,
    PRODUCTS,
    LOOKS,
    STORE_INFO,
    getAllProducts,
    getProductBySlug,
    getProductsByCategory,
    getFeaturedProducts,
    formatPrice,
    calculateShipping,
    getLookSummary,
    renderProductCardHTML,
    renderGridIntoContainer
  };
}));
