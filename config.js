/**
 * LUXORA - Luxury Fashion & Atelier
 * Global Configuration & Environment Settings (config.js)
 *
 * Centralized settings for brand info, currency, shipping rules,
 * payment gateways, social links, SEO, and feature flags.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.LuxoraConfig = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const config = {
    /* ========================================================================
       1. Brand & Atelier Information
       ======================================================================== */
    brand: {
      name: "LUXORA",
      legalName: "LUXORA Haute Horlogerie & Fashion Atelier Inc.",
      tagline: "Haute Horlogerie, Fine Jewellery & Leathercraft",
      description: "Timeless Italian calfskin bags, 18k ethical gold jewellery, Swiss chronographs and Grasse-composed signature fragrances.",
      foundedYear: 2024,
      origin: "New York, Paris & Florence",
      websiteUrl: "https://real-demo-discovery.lovable.app",
      logoUrl: "src/assets/logo.png",
      faviconUrl: "/favicon.ico"
    },

    /* ========================================================================
       2. Private Concierge & Flagship Boutique Contact
       ======================================================================== */
    contact: {
      email: "hello@luxora-store.com",
      vipConciergeEmail: "concierge@luxora-store.com",
      phone: "+1 555 010 0199",
      phoneHref: "tel:+15550100199",
      whatsapp: "+15550100199",
      whatsappHref: "https://wa.me/15550100199?text=Inquiry%20regarding%20LUXORA%20Private%20Collection",
      address: {
        street: "125 Madison Avenue",
        suite: "Penthouse Suite 14B",
        city: "New York",
        state: "NY",
        zip: "10016",
        country: "United States",
        formatted: "125 Madison Avenue, New York, NY 10016, USA"
      },
      operatingHours: "Monday – Saturday: 10:00 – 20:00 EST",
      appointmentUrl: "#book-appointment"
    },

    /* ========================================================================
       3. Currency, Localization & Pricing
       ======================================================================== */
    currency: {
      default: "USD",
      symbol: "$",
      locale: "en-US",
      precision: 0, // Luxury pricing usually omits cents (e.g. $1,280)
      supported: [
        { code: "USD", symbol: "$", rate: 1.0, label: "USD ($)" },
        { code: "EUR", symbol: "€", rate: 0.92, label: "EUR (€)" },
        { code: "GBP", symbol: "£", rate: 0.79, label: "GBP (£)" },
        { code: "AED", symbol: "AED", rate: 3.67, label: "AED (د.إ)" }
      ]
    },

    /* ========================================================================
       4. Shipping, Delivery & Insured Courier Policies
       ======================================================================== */
    shipping: {
      freeShippingThreshold: 500, // Orders over $500 get complimentary white-glove delivery
      standardCourierFee: 25,     // Tracked signature delivery
      expressCourierFee: 65,      // Overnight armored courier
      estimatedDaysStandard: "2 – 4 Business Days",
      estimatedDaysExpress: "Next Business Day Guaranteed",
      courierPartners: ["Ferrari Group", "FedEx Custom Critical", "DHL Express"],
      allOrdersInsured: true,
      signatureRequired: true,
      freeReturnsDays: 30
    },

    /* ========================================================================
       5. Taxation & Duties
       ======================================================================== */
    tax: {
      calculateAtCheckout: true,
      defaultTaxRate: 0.08875, // 8.875% NY state & city tax default
      includedInPrice: false   // false for US, true for EU/UK VAT
    },

    /* ========================================================================
       6. Payment Gateways & Secure Checkout
       ======================================================================== */
    payments: {
      stripe: {
        enabled: true,
        publishableKey: "pk_test_sample_luxora_51Pxxxxxx" // Replace with your real Stripe Key
      },
      applePay: {
        enabled: true,
        merchantId: "merchant.com.luxora.store"
      },
      googlePay: {
        enabled: true
      },
      bankWireTransfer: {
        enabled: true,
        minimumAmount: 2500, // Available for high-value timepieces & diamond sets
        instructionNote: "Complimentary private courier dispatch upon wire confirmation."
      },
      cashOnDelivery: {
        enabled: false // Disabled for luxury security reasons
      }
    },

    /* ========================================================================
       7. Social Media Channels
       ======================================================================== */
    social: {
      instagram: "https://instagram.com/luxora_atelier",
      pinterest: "https://pinterest.com/luxora_atelier",
      facebook: "https://facebook.com/luxorastore",
      youtube: "https://youtube.com/@luxora_atelier",
      wechat: "luxora_official"
    },

    /* ========================================================================
       8. SEO, OpenGraph & Analytics (Replace with your IDs)
       ======================================================================== */
    seo: {
      defaultTitle: "LUXORA | Luxury Handbags, 18k Gold Jewellery, Swiss Watches & Fragrance",
      titleTemplate: "%s | LUXORA Atelier",
      metaDescription: "Explore the LUXORA luxury boutique. Handcrafted Italian leather handbags, certified 18k diamond jewellery, precision Swiss timepieces and Grasse haute perfumery.",
      themeColor: "#0d0c0b",
      googleAnalyticsId: "G-XXXXXXXXXX",     // Google Analytics 4 (GA4)
      metaPixelId: "000000000000000",         // Meta / Facebook Pixel
      googleTagManagerId: "GTM-XXXXXXX"       // GTM Container
    },

    /* ========================================================================
       9. Feature Toggles
       ======================================================================== */
    features: {
      enableCartDrawer: true,
      enableQuickViewModal: true,
      enableWishlist: true,
      enableCustomerReviews: true,
      enableStockCounter: true,
      enableCuratedLooks: true,
      enableNewsletterDiscount: true,
      enableLiveConciergeChat: false,
      maintenanceMode: false
    },

    /* ========================================================================
       10. Design System Brand Tokens (Colors & Aesthetics)
       ======================================================================== */
    theme: {
      colors: {
        noir: "#0d0c0b",          // Deep obsidian black
        atelierCard: "#161513",     // Card background
        goldPrimary: "#d4af37",     // Artisan warm gold
        goldLight: "#f4e4a6",       // Accent champagne
        creme: "#f5f0e6",           // Primary text
        mutedCreme: "#b8b0a2",      // Body copy
        borderCharcoal: "#2a2620"   // Subtle luxury borders
      },
      fonts: {
        display: "'Cinzel', 'Playfair Display', serif",
        body: "'Montserrat', sans-serif"
      }
    }
  };

  /* ========================================================================
     11. Utility Methods for Runtime Access
     ======================================================================== */
  config.formatCurrency = function (amount, currencyCode = config.currency.default) {
    return new Intl.NumberFormat(config.currency.locale, {
      style: "currency",
      currency: currencyCode,
      maximumFractionDigits: config.currency.precision
    }).format(amount);
  };

  config.calculateOrderTotal = function (subtotal, shippingType = "standard") {
    let shipping = 0;
    if (subtotal > 0 && subtotal < config.shipping.freeShippingThreshold) {
      shipping = shippingType === "express" 
        ? config.shipping.expressCourierFee 
        : config.shipping.standardCourierFee;
    } else if (shippingType === "express") {
      shipping = config.shipping.expressCourierFee - config.shipping.standardCourierFee;
    }

    const estimatedTax = config.tax.calculateAtCheckout 
      ? Math.round(subtotal * config.tax.defaultTaxRate) 
      : 0;

    const total = subtotal + shipping + estimatedTax;

    return {
      subtotal,
      shipping,
      estimatedTax,
      total,
      formattedSubtotal: config.formatCurrency(subtotal),
      formattedShipping: shipping === 0 ? "Complimentary" : config.formatCurrency(shipping),
      formattedTax: config.formatCurrency(estimatedTax),
      formattedTotal: config.formatCurrency(total)
    };
  };

  return config;
}));
