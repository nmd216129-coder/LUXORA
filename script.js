/**
 * LUXORA - Luxury Fashion & Atelier
 * Standalone Client-Side JavaScript (script.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initCartSystem();
  initFAQAccordion();
  initNewsletterForm();
  initScrollAnimations();
});

/* ==========================================================================
   1. Sticky Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // স্ক্রল করলে হেডারের ব্যাকগ্রাউন্ডে অতিরিক্ত গভীরতা যোগ হবে
    if (currentScrollY > 40) {
      header.classList.add('scrolled');
      header.style.background = 'rgba(13, 12, 11, 0.95)';
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      header.classList.remove('scrolled');
      header.style.background = 'rgba(13, 12, 11, 0.85)';
      header.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* ==========================================================================
   2. Mobile Navigation Menu
   ========================================================================== */
function initMobileNav() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('nav-open');
    document.body.classList.toggle('no-scroll', !isExpanded);
  });

  // মেনু লিঙ্কে ক্লিক করলে মোবাইল মেনু স্বয়ংক্রিয়ভাবে বন্ধ হবে
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-open');
      document.body.classList.remove('no-scroll');
    });
  });
}

/* ==========================================================================
   3. Shopping Cart & LocalStorage System
   ========================================================================== */
function initCartSystem() {
  const CART_STORAGE_KEY = 'luxora_cart_items_v1';
  
  // লোকাল স্টোরেজ থেকে কার্টের তথ্য লোড করা
  let cart = [];
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    cart = savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    cart = [];
  }

  const cartCountBadges = document.querySelectorAll('.cart-count-badge');

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountBadges.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    });

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Add to Cart বাটনে ক্লিক ইভেন্ট
  const addToCartButtons = document.querySelectorAll('[data-action="add-to-cart"]');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const productCard = button.closest('article') || button.closest('.product-card');
      const productId = button.dataset.productId || (productCard && productCard.dataset.id) || Date.now().toString();
      const title = button.dataset.productTitle || (productCard ? productCard.querySelector('h3, h1')?.textContent?.trim() : 'Luxury Item');
      const price = button.dataset.productPrice || '$1,250';

      const existingIndex = cart.findIndex(item => item.id === productId);
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({
          id: productId,
          title: title,
          price: price,
          quantity: 1
        });
      }

      updateCartUI();
      showToastNotification(`Added to Atelier Bag: "${title}"`);
    });
  });

  updateCartUI();
}

/* ==========================================================================
   4. Luxury Toast Notification
   ========================================================================== */
function showToastNotification(message) {
  let toastContainer = document.querySelector('.lux-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'lux-toast-container';
    Object.assign(toastContainer.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      pointerEvents: 'none'
    });
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'lux-toast';
  toast.textContent = message;

  Object.assign(toast.style, {
    background: '#161513',
    color: '#f5f0e6',
    border: '1px solid #d4af37',
    padding: '12px 22px',
    borderRadius: '2px',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.82rem',
    letterSpacing: '0.04em',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
    opacity: '0',
    transform: 'translateY(16px)',
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    pointerEvents: 'auto'
  });

  toastContainer.appendChild(toast);

  // অ্যানিমেশন শুরু
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  // ৩.৫ সেকেন্ড পর টোস্ট রিমুভ
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ==========================================================================
   5. Single Open Accordion (FAQ Section)
   ========================================================================== */
function initFAQAccordion() {
  const allDetails = document.querySelectorAll('.faq details');
  
  allDetails.forEach(details => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        allDetails.forEach(other => {
          if (other !== details && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   6. Newsletter Subscription Handler
   ========================================================================== */
function initNewsletterForm() {
  const newsletterForm = document.querySelector('#newsletter-form, form.newsletter');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const email = input?.value?.trim();

    if (!email || !email.includes('@')) {
      showToastNotification('Please enter a valid concierge email address.');
      return;
    }

    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
    }

    // সিমুলেটেড সার্ভার রিকোয়েস্ট
    setTimeout(() => {
      showToastNotification('Welcome to LUXORA Private Atelier Privileges.');
      if (input) input.value = '';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribed';
        setTimeout(() => {
          submitBtn.textContent = 'Subscribe';
        }, 3000);
      }
    }, 700);
  });
}

/* ==========================================================================
   7. Intersection Observer for Fade-Up Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const revealElements = document.querySelectorAll(
    '.category-grid article, .story, .faq details, .hero h1, .hero p'
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
