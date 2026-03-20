document.addEventListener('DOMContentLoaded', () => {
  initPresetDates();
  initNav();
  initScrollReveal();
  initTestimonials();
  initLightbox();
  initAvailabilityForm();
  initBookingForm();
  initNewsletter();
  initContactForm();
  initSmoothScroll();
  initStickyNav();
  initExpFilter();
});

/* ─── STICKY NAV ─── */
function initStickyNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ─── NAVIGATION ─── */
function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.getElementById('navMobile');
  const mobileClose = document.getElementById('navMobileClose');

  if (!hamburger || !mobileNav) return;

  let scrollYBeforeOpen = 0;

  function openMobileNav() {
    scrollYBeforeOpen = window.scrollY;
    hamburger.classList.add('active');
    mobileNav.classList.add('active');
    document.body.classList.add('nav-open');
    document.body.style.top = `-${scrollYBeforeOpen}px`;
    hamburger.setAttribute('aria-expanded', 'true');

    // Focus first link for accessibility
    const firstLink = mobileNav.querySelector('.nav__mobile-link');
    if (firstLink) firstLink.focus();
  }

  function closeMobileNav() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.classList.remove('nav-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollYBeforeOpen);
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // Close when clicking outside the mobile nav content
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      closeMobileNav();
    }
  });

  // Close on mobile link click
  mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger, .bungalow-card, .exp-card, .exp-full-card, .transport-card, .about-timeline-item');
  
  if (!reveals.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach((el, i) => {
    if (!el.dataset.delay) {
      el.dataset.delay = (i % 6) * 100;
    }
    observer.observe(el);
  });
}

function initTestimonials() {
  const track = document.querySelector('.testimonials__track');
  const dots = document.querySelectorAll('.testimonials__dot');
  const prevBtn = document.querySelector('.testimonials__arrow--prev');
  const nextBtn = document.querySelector('.testimonials__arrow--next');
  
  if (!track) return;
  
  const cards = track.querySelectorAll('.testimonial-card');
  let current = 0;
  let autoplayInterval;
  
  function goTo(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }
  
  function startAutoplay() {
    autoplayInterval = setInterval(() => goTo(current + 1), 5000);
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      goTo(i);
      startAutoplay();
    });
  });
  
  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });
  
  startAutoplay();
  
  const slider = document.querySelector('.testimonials__slider');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
  }
}

function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;
  
  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
  const nextBtn = lightbox.querySelector('.lightbox__nav--next');
  const counter = lightbox.querySelector('.lightbox__counter');
  
  let images = [];
  let current = 0;
  
  document.querySelectorAll('[data-lightbox]').forEach((el, i) => {
    el.addEventListener('click', () => {
      images = Array.from(document.querySelectorAll(`[data-lightbox="${el.dataset.lightbox}"]`)).map(e => e.src);
      current = images.indexOf(el.src);
      if (current === -1) current = 0;
      showImage(current);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  function showImage(index) {
    if (lightboxImg) {
      lightboxImg.src = images[index];
    }
    if (counter) {
      counter.textContent = `${index + 1} / ${images.length}`;
    }
  }
  
  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function prev() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
  
  function next() {
    current = (current + 1) % images.length;
    showImage(current);
  }
  
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
}

function initAvailabilityForm() {
  const form = document.querySelector('.availability__form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const property = form.querySelector('select')?.value || form.querySelector('option:checked')?.textContent;
    const checkin = form.querySelector('input[type="date"]')?.value;
    const guests = form.querySelector('select:last-of-type')?.value || '2';
    
    const params = new URLSearchParams();
    if (property) params.set('property', property);
    if (checkin) params.set('checkin', checkin);
    if (guests) params.set('guests', guests);
    
    window.location.href = `${window.location.origin}/pages/book.html?${params.toString()}`;
  });
}

function initPresetDates() {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0];
  
  const checkinInput = document.getElementById('avail-checkin');
  const checkoutInput = document.getElementById('avail-checkout');
  
  if (checkinInput) {
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    checkinInput.value = formatDate(nextWeek);
    checkinInput.min = formatDate(today);
  }
  
  if (checkoutInput) {
    const afterCheckin = new Date(today);
    afterCheckin.setDate(today.getDate() + 9);
    checkoutInput.value = formatDate(afterCheckin);
    checkoutInput.min = checkinInput ? checkinInput.value : formatDate(today);
  }
  
  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', () => {
      const minOut = new Date(checkinInput.value);
      minOut.setDate(minOut.getDate() + 1);
      checkoutInput.min = formatDate(minOut);
      if (!checkoutInput.value || checkoutInput.value <= checkinInput.value) {
        checkoutInput.value = formatDate(minOut);
      }
    });
  }
}

function initBookingForm() {
  const form = document.querySelector('.booking-form');
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  if (params.get('property')) {
    const prop = document.getElementById('booking-property');
    if (prop) {
      const options = prop.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value.toLowerCase().includes(params.get('property').toLowerCase())) {
          prop.selectedIndex = i;
          break;
        }
      }
    }
  }
  
  const steps = form.querySelectorAll('.booking-form__step');
  const stepLine = form.querySelector('.booking-form__step-line-fill');
  const nextBtns = form.querySelectorAll('[data-next]');
  const prevBtns = form.querySelectorAll('[data-prev]');
  let currentStep = 0;
  
  function updateSteps() {
    steps.forEach((step, i) => {
      step.classList.remove('active', 'completed');
      if (i === currentStep) step.classList.add('active');
      if (i < currentStep) step.classList.add('completed');
    });
    if (stepLine) {
      stepLine.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
    }
  }
  
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep = Math.min(currentStep + 1, steps.length - 1);
      updateSteps();
      updateSummary();
    });
  });
  
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep = Math.max(currentStep - 1, 0);
      updateSteps();
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('loading');
    btn.textContent = 'Sending...';
    
    setTimeout(() => {
      const success = document.querySelector('.booking-success');
      if (success) {
        form.style.display = 'none';
        success.style.display = 'block';
      } else {
        btn.classList.remove('loading');
        btn.textContent = 'Book Your Stay';
        alert('Thank you for your booking enquiry! We will get back to you within 24 hours.');
      }
    }, 1500);
  });
  
  updateSteps();
}

function updateSummary() {
  const property = document.querySelector('#booking-property')?.value || document.querySelector('[name="property"]')?.value || 'Mancotta Heritage';
  const checkin = document.querySelector('#booking-checkin')?.value;
  const checkout = document.querySelector('#booking-checkout')?.value;
  const guests = document.querySelector('#booking-guests')?.value || '2';
  
  const update = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };
  
  update('.summary-property', property);
  update('.summary-dates', checkin && checkout ? `${checkin} → ${checkout}` : 'Dates to be confirmed');
  update('.summary-guests', `${guests} Guests`);
}

function initNewsletter() {
  const form = document.querySelector('.newsletter__form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter__input');
    const btn = form.querySelector('.btn');
    
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = 'var(--tea-brown)';
      input.focus();
      return;
    }
    
    btn.classList.add('loading');
    const originalText = btn.textContent;
    btn.textContent = 'Subscribing...';
    
    setTimeout(() => {
      btn.classList.remove('loading');
      btn.textContent = 'Subscribed!';
      btn.style.background = 'var(--tea-green)';
      btn.style.borderColor = 'var(--tea-green)';
      input.value = '';
      input.disabled = true;
      btn.disabled = true;
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        input.disabled = false;
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('loading');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    
    setTimeout(() => {
      btn.classList.remove('loading');
      btn.textContent = 'Sent!';
      btn.style.background = 'var(--tea-green)';
      btn.style.borderColor = 'var(--tea-green)';
      form.reset();
      
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 3000);
    }, 1500);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initExpFilter() {
  const filterBtns = document.querySelectorAll('.exp-filter__btn');
  const cards = document.querySelectorAll('.exp-full-card');
  
  if (!filterBtns.length || !cards.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          setTimeout(() => {
            card.classList.add('visible');
          }, 50);
        } else {
          card.style.display = 'none';
          card.classList.remove('visible');
        }
      });
    });
  });
}
