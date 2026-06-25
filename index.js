/* ==========================================================================
   TSA Agency Landing Page Interactivity Script
   Features: Language Toggling, Mobile Menu, Automatic & Manual Carousels,
             Scroll Highlighting, and CTA Form Handling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Language Toggle System ---
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  const mBtnEs = document.getElementById('m-btn-es');
  const mBtnEn = document.getElementById('m-btn-en');
  
  // Set current year in footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Load language from localStorage, default is Spanish
  let currentLang = localStorage.getItem('tsa-lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tsa-lang', lang);

    if (lang === 'en') {
      document.body.classList.remove('lang-es');
      document.body.classList.add('lang-en');
      document.documentElement.lang = 'en';
      
      // Update selector buttons active states
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
      mBtnEn.classList.add('active');
      mBtnEs.classList.remove('active');
      
      // Update placeholders
      document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute('data-placeholder-en');
      });
    } else {
      document.body.classList.remove('lang-en');
      document.body.classList.add('lang-es');
      document.documentElement.lang = 'es';

      // Update selector buttons active states
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
      mBtnEs.classList.add('active');
      mBtnEn.classList.remove('active');

      // Update placeholders
      document.querySelectorAll('[data-placeholder-es]').forEach(el => {
        el.placeholder = el.getAttribute('data-placeholder-es');
      });
    }

    // Dynamic text replacement for data-es / data-en elements
    document.querySelectorAll('[data-es]').forEach(el => {
      const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
      if (text !== null) {
        el.textContent = text;
      }
    });
  }

  // Bind click events
  btnEs.addEventListener('click', () => applyLanguage('es'));
  btnEn.addEventListener('click', () => applyLanguage('en'));
  mBtnEs.addEventListener('click', () => {
    applyLanguage('es');
    closeMobileMenu();
  });
  mBtnEn.addEventListener('click', () => {
    applyLanguage('en');
    closeMobileMenu();
  });

  // Initial apply
  applyLanguage(currentLang);


  // --- 2. Mobile Navigation Menu Toggle ---
  const hamburgerTrigger = document.getElementById('hamburger-trigger');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    const isOpen = mobileNavMenu.classList.toggle('open');
    hamburgerTrigger.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mobileNavMenu.classList.remove('open');
    hamburgerTrigger.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburgerTrigger.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  // --- 3. Section Scroll Spy (Highlight Active Nav Link) ---
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTargets = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(el => el !== null);

  // Add contact section as a boundary target to clear highlights when scrolled to contact
  const contactSection = document.getElementById('contact');
  if (contactSection && !scrollTargets.includes(contactSection)) {
    scrollTargets.push(contactSection);
  }

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 160; // offset to account for sticky navbar

    // Sort targets dynamically by their absolute top position on the page
    const targetsWithPos = scrollTargets.map(section => {
      const rect = section.getBoundingClientRect();
      return {
        id: section.getAttribute('id'),
        top: rect.top + window.scrollY
      };
    }).sort((a, b) => a.top - b.top);

    // Find which interval scrollPos falls into
    for (let i = 0; i < targetsWithPos.length; i++) {
      const current = targetsWithPos[i];
      const next = targetsWithPos[i + 1];
      
      if (scrollPos >= current.top && (!next || scrollPos < next.top)) {
        currentSectionId = current.id;
        break;
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });


  // --- 4. Creators Gallery Auto-Carousel (Pause on Hover) ---
  const creatorsContainer = document.getElementById('creators-carousel-container');
  const creatorsTrack = document.getElementById('creators-carousel-track');
  
  if (creatorsTrack && creatorsContainer) {
    // Clone children to make it look like a seamless loop
    const originalCards = Array.from(creatorsTrack.children);
    
    // Duplicate the cards twice to ensure wide coverage
    originalCards.forEach(card => {
      const clone1 = card.cloneNode(true);
      const clone2 = card.cloneNode(true);
      creatorsTrack.appendChild(clone1);
      creatorsTrack.appendChild(clone2);
    });

    let speed = 1.2; // Pixels per frame
    let xOffset = 0;
    let isPaused = false;

    // Calculate boundary length of one loop
    let cardWidth = originalCards[0].offsetWidth + 24; // width + gap
    let loopBoundary = cardWidth * originalCards.length;

    function step() {
      if (!isPaused) {
        xOffset -= speed;
        // Reset when one loop cycle finishes
        if (Math.abs(xOffset) >= loopBoundary) {
          xOffset = 0;
        }
        creatorsTrack.style.transform = `translateX(${xOffset}px)`;
      }
      requestAnimationFrame(step);
    }

    // Start auto scrolling animation loop
    requestAnimationFrame(step);

    // Pause / Resume on hover
    creatorsContainer.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    creatorsContainer.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Touch events for mobile (swipe/drag)
    let creatorStartX = 0;
    let creatorXOffsetStart = 0;
    let creatorIsDragging = false;

    creatorsContainer.addEventListener('touchstart', (e) => {
      isPaused = true;
      creatorStartX = e.touches[0].clientX;
      creatorXOffsetStart = xOffset;
      creatorIsDragging = true;
    }, { passive: true });

    creatorsContainer.addEventListener('touchmove', (e) => {
      if (!creatorIsDragging) return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - creatorStartX;
      xOffset = creatorXOffsetStart + diffX;
      
      // Infinite loop boundary wrap-around checks
      if (xOffset > 0) {
        xOffset = -loopBoundary;
      } else if (Math.abs(xOffset) >= loopBoundary) {
        xOffset = 0;
      }
      creatorsTrack.style.transform = `translateX(${xOffset}px)`;
    }, { passive: true });

    creatorsContainer.addEventListener('touchend', () => {
      creatorIsDragging = false;
      isPaused = false;
    }, { passive: true });
  }


  // --- 5. Event Logos Auto-scrolling Strip (Clones Addition) ---
  const eventsTrack = document.getElementById('events-carousel-track');
  if (eventsTrack) {
    const originalEventCards = Array.from(eventsTrack.children);
    // Duplicate once for infinite loop scrolling
    originalEventCards.forEach(card => {
      const clone = card.cloneNode(true);
      eventsTrack.appendChild(clone);
    });
  }


  // --- 6. Game Logs Section Manual Carousel ---
  const logsTrack = document.getElementById('logs-carousel-track');
  const btnPrev = document.getElementById('logs-prev-btn');
  const btnNext = document.getElementById('logs-next-btn');

  if (logsTrack && btnPrev && btnNext) {
    let currentSlideIndex = 0;
    const cards = Array.from(logsTrack.children);
    
    function getVisibleCardsCount() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function updateCarousel() {
      const visibleCount = getVisibleCardsCount();
      const maxIndex = cards.length - visibleCount;

      // Cap indices
      if (currentSlideIndex < 0) currentSlideIndex = 0;
      if (currentSlideIndex > maxIndex) currentSlideIndex = maxIndex;

      // Calculate shift width
      const cardWidth = cards[0].offsetWidth;
      const gap = 28; // matching index.css gap
      const offset = currentSlideIndex * (cardWidth + gap);

      logsTrack.style.transform = `translateX(-${offset}px)`;

      // Enable/Disable buttons based on index limits
      btnPrev.style.opacity = currentSlideIndex === 0 ? '0.4' : '1';
      btnPrev.style.pointerEvents = currentSlideIndex === 0 ? 'none' : 'auto';
      
      btnNext.style.opacity = currentSlideIndex === maxIndex ? '0.4' : '1';
      btnNext.style.pointerEvents = currentSlideIndex === maxIndex ? 'none' : 'auto';
    }

    btnNext.addEventListener('click', () => {
      currentSlideIndex++;
      updateCarousel();
    });

    btnPrev.addEventListener('click', () => {
      currentSlideIndex--;
      updateCarousel();
    });

    // Initial draw & resize handler
    updateCarousel();
    window.addEventListener('resize', () => {
      // Reset position slightly to avoid offset errors on resize
      currentSlideIndex = 0;
      updateCarousel();
    });

    // Swipe support for touch devices
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;

    logsTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    }, { passive: true });

    logsTrack.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    logsTrack.addEventListener('touchend', () => {
      if (!isSwiping) return;
      isSwiping = false;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) { // threshold of 50px
        const visibleCount = getVisibleCardsCount();
        const maxIndex = cards.length - visibleCount;
        
        if (diffX > 0) {
          // Swipe left -> Next
          if (currentSlideIndex < maxIndex) {
            currentSlideIndex++;
            updateCarousel();
          }
        } else {
          // Swipe right -> Prev
          if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateCarousel();
          }
        }
      }
    }, { passive: true });
  }


  // --- 7. Email Form Validation and Feedback Handling ---
  const contactForm = document.getElementById('contact-form');
  const emailField = document.getElementById('email-field');
  const formMsg = document.getElementById('form-msg');
  const btnSubmitInfluencer = document.getElementById('btn-submit-influencer');
  const btnSubmitBrand = document.getElementById('btn-submit-brand');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function handleFormSubmission(event, roleType) {
    event.preventDefault();
    const email = emailField.value.trim();

    if (!email) {
      showFeedback('Por favor, ingresa un correo válido.', 'Please enter a valid email address.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showFeedback('El correo electrónico no es válido.', 'Invalid email address.', 'error');
      return;
    }

    // Success response strings
    if (roleType === 'influencer') {
      showFeedback(
        '¡Registrado como Influencer! Pronto nos pondremos en contacto.',
        'Registered as Influencer! We will get in touch with you shortly.',
        'success'
      );
    } else {
      showFeedback(
        '¡Registrado como Marca! Nuestro equipo comercial se comunicará contigo.',
        'Registered as Brand! Our sales team will get in touch with you shortly.',
        'success'
      );
    }

    // Reset input
    emailField.value = '';
  }

  function showFeedback(esText, enText, statusClass) {
    formMsg.textContent = currentLang === 'es' ? esText : enText;
    formMsg.className = `form-feedback-msg ${statusClass}`;
    
    // Clear message after 5 seconds
    setTimeout(() => {
      formMsg.textContent = '';
      formMsg.className = 'form-feedback-msg';
    }, 5000);
  }

  // Trigger form submission based on clicked action button
  if (contactForm) {
    btnSubmitInfluencer.addEventListener('click', (e) => handleFormSubmission(e, 'influencer'));
    btnSubmitBrand.addEventListener('click', (e) => handleFormSubmission(e, 'brand'));
  }

  // --- 8. Scroll-Reveal Entrance Animations ---
  function initScrollReveal() {
    // Only enable scroll reveal if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      return;
    }

    // Add class to body to enable reveal styles dynamically
    document.body.classList.add('reveal-enabled');

    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -80px 0px', // slightly offset trigger point
      threshold: 0.1 // element is 10% visible
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, we don't need to observe it anymore
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Initialize scroll reveal
  initScrollReveal();

});

