/* ==========================================================================
   STACKLY LOGISTICS - DISTINCT GSAP ANIMATIONS & FULLSCREEN MOBILE MENU
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Preloader 1.5-Second Animation Timeout
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 500);
    }, 1500);
  }

  // 2. Distinct GSAP & ScrollTrigger Animations for Every Section (Excluding .header)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Section 1: Hero Main Entrance (Header excluded to ensure 100% visibility)
    const heroTl = gsap.timeline();
    heroTl.from('.hero-main-title', { y: 40, opacity: 0, scale: 0.95, duration: 0.8, ease: 'power3.out', delay: 1.5, clearProps: 'all' })
          .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', clearProps: 'all' }, '-=0.4')
          .from('.hero-buttons-group .btn-get-started', { x: -20, opacity: 0, duration: 0.5, ease: 'back.out(1.5)', clearProps: 'all' }, '-=0.3')
          .from('.hero-buttons-group .btn-explore-services', { x: 20, opacity: 0, duration: 0.5, ease: 'back.out(1.5)', clearProps: 'all' }, '-=0.4')
          .from('.hero-warehouse-wrapper', { scale: 0.95, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all' }, '-=0.3');

    // Section 2: Trust Marquee Fade-in
    gsap.from('.trust-banner-section', {
      scrollTrigger: { trigger: '.trust-banner-section', start: 'top 95%' },
      opacity: 0, y: 20, duration: 0.7, ease: 'power2.out', clearProps: 'all'
    });

    // Section 3: Cargo Solutions 4-Card Grid
    gsap.from('.service-cards-grid .service-card', {
      scrollTrigger: { trigger: '.service-cards-grid', start: 'top 95%' },
      y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', clearProps: 'all'
    });

    // Section 4: Feature Spotlight (Split Slide)
    gsap.from('.feature-main-image', {
      scrollTrigger: { trigger: '.feature-showcase-section', start: 'top 95%' },
      x: -40, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all'
    });
    gsap.from('.feature-content-box', {
      scrollTrigger: { trigger: '.feature-showcase-section', start: 'top 95%' },
      x: 40, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all'
    });

    // Section 5: How It Works (Step Grow Scale)
    gsap.from('.steps-grid .step-card', {
      scrollTrigger: { trigger: '.steps-grid', start: 'top 95%' },
      scale: 0.9, opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)', clearProps: 'all'
    });

    // Section 6: Interactive Calculator (Pop Up Bounce)
    gsap.from('.calc-container-card', {
      scrollTrigger: { trigger: '.interactive-calc-section', start: 'top 95%' },
      y: 40, opacity: 0, duration: 0.75, ease: 'back.out(1.3)', clearProps: 'all'
    });

    // Section 7: Testimonial Banner (Glow Scale)
    gsap.from('.testimonial-banner', {
      scrollTrigger: { trigger: '.testimonial-section', start: 'top 95%' },
      scale: 0.95, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all'
    });

    // Section 8: Why Choose Us (Left Slide + 2x2 Icon Pop)
    gsap.from('.why-left-content', {
      scrollTrigger: { trigger: '.why-choose-section', start: 'top 95%' },
      x: -40, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all'
    });
    gsap.from('.why-right-features .feature-item', {
      scrollTrigger: { trigger: '.why-choose-section', start: 'top 95%' },
      y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'all'
    });

    // Section 9: Emergency Drone Delivery (Floating Drone + Checklist Stagger)
    gsap.from('.emergency-center-image', {
      scrollTrigger: { trigger: '.emergency-section', start: 'top 95%' },
      y: -30, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
    });
    gsap.from('.emergency-right-list .checklist-item', {
      scrollTrigger: { trigger: '.emergency-section', start: 'top 95%' },
      x: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'all'
    });

    // Section 10: Eco Metrics (Rolled Counter Flip)
    gsap.from('.eco-grid .eco-card', {
      scrollTrigger: { trigger: '.eco-metrics-section', start: 'top 95%' },
      scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)', clearProps: 'all'
    });

    // Section 11: Global Hubs (Slide In)
    gsap.from('.hubs-interactive-grid', {
      scrollTrigger: { trigger: '.global-hubs-section', start: 'top 95%' },
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all'
    });

    // Section 12: FAQ Accordion (Staggered Rise)
    gsap.from('.faq-accordion-container .faq-item', {
      scrollTrigger: { trigger: '.faq-accordion-container', start: 'top 95%' },
      y: 25, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'all'
    });

    // Section 13: Newsletter Banner (Train Slide Along Track)
    gsap.from('.newsletter-image img', {
      scrollTrigger: { trigger: '.newsletter-section', start: 'top 95%' },
      x: 60, opacity: 0, duration: 0.9, ease: 'power3.out', clearProps: 'all'
    });
  }


    // =========================================================================
    // SERVICES PAGE ANIMATIONS (Distinct per section)
    // =========================================================================
    if (document.querySelector('.service-hero-banner') || document.querySelector('.road-freight-header')) {
      gsap.from('.service-hero-title', { y: 50, opacity: 0, duration: 0.85, ease: 'power3.out', delay: 1.5, clearProps: 'all' });
      gsap.from('.service-hero-desc', { y: 25, opacity: 0, duration: 0.65, ease: 'power3.out', delay: 1.7, clearProps: 'all' });
      gsap.from('.btn-hero-talk', { scale: 0.85, opacity: 0, duration: 0.5, ease: 'back.out(1.5)', delay: 1.85, clearProps: 'all' });

      // Service Section 01: Road Freight
      gsap.from('.road-freight-header', {
        scrollTrigger: { trigger: '.road-freight-header', start: 'top 90%' },
        x: -50, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });
      gsap.from('img[src*="road_freight"]', {
        scrollTrigger: { trigger: 'img[src*="road_freight"]', start: 'top 90%' },
        scale: 0.92, rotate: -1, opacity: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all'
      });
      gsap.from('.road-feature-item', {
        scrollTrigger: { trigger: '.road-features-bar', start: 'top 92%' },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.5)', clearProps: 'all'
      });

      // Service Section 02: Ocean Freight (Dark Section Depth)
      gsap.from('img[src*="ocean_freight"]', {
        scrollTrigger: { trigger: 'img[src*="ocean_freight"]', start: 'top 90%' },
        x: 60, opacity: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all'
      });

      // Service Section 03: Air Freight (Jet Flight Entrance)
      gsap.from('img[src*="air_freight"]', {
        scrollTrigger: { trigger: 'img[src*="air_freight"]', start: 'top 90%' },
        x: -70, y: -30, opacity: 0, duration: 0.9, ease: 'power3.out', clearProps: 'all'
      });
    }

    // =========================================================================
    // CONTACT PAGE ANIMATIONS (Distinct per section)
    // =========================================================================
    if (document.querySelector('.contact-card-box') || document.querySelector('.contact-hero-banner') || document.querySelector('.contact-sec')) {
      gsap.from('.contact-hero-title', { y: 45, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 1.5, clearProps: 'all' });
      
      gsap.from('.contact-form-card, .contact-form-wrapper', {
        scrollTrigger: { trigger: '.contact-form-card, .contact-form-wrapper', start: 'top 90%' },
        x: -50, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });
      gsap.from('.contact-info-card, .office-location-card', {
        scrollTrigger: { trigger: '.contact-info-card, .office-location-card', start: 'top 90%' },
        x: 50, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });
      gsap.from('.office-card', {
        scrollTrigger: { trigger: '.office-locations-grid', start: 'top 90%' },
        y: 35, scale: 0.92, opacity: 0, duration: 0.65, stagger: 0.12, ease: 'back.out(1.4)', clearProps: 'all'
      });
    }

    // =========================================================================
    // BLOGS PAGE ANIMATIONS (Distinct per section)
    // =========================================================================
    if (document.querySelector('img[src*="blog_road"]') || document.querySelector('img[src*="blog_air"]')) {
      // Blog Section 01: Road Insight
      gsap.from('img[src*="blog_road"]', {
        scrollTrigger: { trigger: 'img[src*="blog_road"]', start: 'top 90%' },
        x: -55, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });

      // Blog Section 02: Air Insight
      gsap.from('img[src*="blog_air"]', {
        scrollTrigger: { trigger: 'img[src*="blog_air"]', start: 'top 90%' },
        x: 55, y: -20, opacity: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all'
      });

      // Blog Section 03: Ocean Insight
      gsap.from('img[src*="blog_ocean"]', {
        scrollTrigger: { trigger: 'img[src*="blog_ocean"]', start: 'top 90%' },
        scale: 0.9, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });

      // Blog Section 04: Last Mile Locker
      gsap.from('img[src*="blog_locker"]', {
        scrollTrigger: { trigger: 'img[src*="blog_locker"]', start: 'top 90%' },
        y: -45, opacity: 0, duration: 0.8, ease: 'back.out(1.3)', clearProps: 'all'
      });

      // Blog Section 05: Rail Insight Panorama
      gsap.from('img[src*="blog_rail"]', {
        scrollTrigger: { trigger: 'img[src*="blog_rail"]', start: 'top 90%' },
        scaleX: 0.94, y: 30, opacity: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all'
      });
    }

    // =========================================================================
    // ABOUT PAGE ANIMATIONS (Distinct per section)
    // =========================================================================
    if (document.querySelector('img[src*="about_hero"]') || document.querySelector('img[src*="about_story"]')) {
      // About Hero Banner
      gsap.from('img[src*="about_hero"]', {
        scrollTrigger: { trigger: 'img[src*="about_hero"]', start: 'top 90%' },
        scale: 0.95, opacity: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all'
      });

      // Section 01: Story / Origin
      gsap.from('img[src*="about_story"]', {
        scrollTrigger: { trigger: 'img[src*="about_story"]', start: 'top 90%' },
        x: -50, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });

      // Section 02: Approach
      gsap.from('img[src*="about_approach"]', {
        scrollTrigger: { trigger: 'img[src*="about_approach"]', start: 'top 90%' },
        x: 50, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });

      // Section 03: Future & Sustainability
      gsap.from('img[src*="about_future"]', {
        scrollTrigger: { trigger: 'img[src*="about_future"]', start: 'top 90%' },
        scale: 0.92, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all'
      });
    }

  // 3. Dashboard Sidebar Navigation Routing (Right Side Content Switcher)
  function initDashboardSidebarRouting(linkSelector, panelClass) {
    const sidebarLinks = document.querySelectorAll(linkSelector);
    const panels = document.querySelectorAll('.' + panelClass);

    if (sidebarLinks.length > 0 && panels.length > 0) {
      sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('data-panel') || link.getAttribute('data-tab');
          if (!targetId) return;

          sidebarLinks.forEach(l => {
            l.classList.remove('active');
            l.classList.remove('is-active');
          });
          link.classList.add('active');
          link.classList.add('is-active');

          panels.forEach(panel => {
            if (panel.id === targetId) {
              panel.classList.add('active');
              panel.classList.add('is-active');
            } else {
              panel.classList.remove('active');
              panel.classList.remove('is-active');
            }
          });
        });
      });
    }
  }

  initDashboardSidebarRouting('.adash-nav__item, .adash-nav-link', 'adash-panel');
  initDashboardSidebarRouting('.dash-nav__item, .udash-nav-link', 'dash-panel');

  // 4. Mobile Menu Toggle (Fullscreen Overlay)
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    document.querySelectorAll('.nav-link, .btn-signin').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }

  // 5. Calculator & Tracker Interactive Tabs
  const calcTabs = document.querySelectorAll('.calc-tab-btn');
  const calcPanels = document.querySelectorAll('.calc-panel');

  calcTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanelId = tab.getAttribute('data-target');
      if (!targetPanelId) return;
      
      calcTabs.forEach(t => t.classList.remove('active'));
      calcPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Calculate Rate Form Logic
  const calcForm = document.getElementById('calcRateForm');
  const estCostSpan = document.getElementById('estimatedCost');
  const estDaysSpan = document.getElementById('estimatedDays');

  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const weight = parseFloat(document.getElementById('calcWeight').value) || 10;
      const type = document.getElementById('calcServiceType').value;

      let multiplier = 5;
      let days = '3-5 Days';

      if (type === 'ocean') { multiplier = 2; days = '7-14 Days'; }
      else if (type === 'air') { multiplier = 12; days = '1-2 Days'; }
      else if (type === 'drone') { multiplier = 25; days = '1-3 Hours'; }

      const total = (weight * multiplier + 45).toFixed(2);
      if (estCostSpan) estCostSpan.textContent = `$${total}`;
      if (estDaysSpan) estDaysSpan.textContent = days;
    });
  }

  // 6. Interactive Regional Hub Switcher
  const hubBtns = document.querySelectorAll('.hub-btn');
  const hubTitle = document.getElementById('hubTitle');
  const hubDesc = document.getElementById('hubDesc');
  const hubSpecs = document.getElementById('hubSpecs');

  const hubData = {
    na: {
      name: "North America Hub (Chicago & LA)",
      desc: "Servicing 50 US states, Canada, and Mexico with 240+ heavy freight trucks and 2 primary airport logistics hubs.",
      specs: "Capacity: 850,000 Tons/Year • Drone Fleet: Active • ISO 9001 Certified"
    },
    eu: {
      name: "European Gateway (Rotterdam & Frankfurt)",
      desc: "Premier ocean port container terminal directly connected to trans-European highway networks and green rail freight.",
      specs: "Capacity: 1,200,000 TEU/Year • 100% Solar Warehousing • EV Fleet"
    },
    ap: {
      name: "Asia Pacific Hub (Singapore & Tokyo)",
      desc: "High-speed air freight hub specializing in semiconductor, electronic, and high-value cargo express transportation.",
      specs: "Transit Guarantee: 24h Express • Temperature-Controlled Cold Storage"
    },
    me: {
      name: "Middle East Logistics Center (Dubai)",
      desc: "Crossroads logistics hub providing rapid sea-air cargo conversions and automated drone parcel dispatch.",
      specs: "Customs Clearance: 15-Minute Express • Free Zone Terminal"
    }
  };

  hubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hubBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const regionKey = btn.getAttribute('data-region');
      const data = hubData[regionKey];

      if (data && hubTitle) {
        hubTitle.textContent = data.name;
        hubDesc.textContent = data.desc;
        hubSpecs.textContent = data.specs;
      }
    });
  });

  // 7. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    if (header && body) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBody = otherItem.querySelector('.faq-body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  if (faqItems.length > 0) {
    const firstHeader = faqItems[0].querySelector('.faq-header');
    if (firstHeader) firstHeader.click();
  }

  // 8. Testimonial Carousel Slider
  const testimonials = [
    { quote: "Our shipments have never felt easier to manage. The team is responsive, thoughtful, and there when we need them.", avatar: "S.", role: "Delivery partner" },
    { quote: "Stackly's drone delivery reduced our urgent transit times by over 60%. Absolutely flawless execution and tracking!", avatar: "M.", role: "Operations Director" },
    { quote: "Exceptional service across both ocean and road freight. Customer support is always 1 step ahead.", avatar: "A.", role: "Supply Chain Manager" }
  ];

  let currentIdx = 0;
  const quoteText = document.getElementById('testimonialQuote');
  const authorAvatar = document.getElementById('authorAvatar');
  const authorRole = document.getElementById('authorRole');
  const dotsContainer = document.getElementById('carouselDots');

  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    testimonials.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === currentIdx ? 'active' : ''}`;
      dot.addEventListener('click', () => switchTestimonial(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function switchTestimonial(index) {
    currentIdx = index;
    const data = testimonials[index];
    if (quoteText) {
      quoteText.style.opacity = '0';
      setTimeout(() => {
        quoteText.textContent = `"${data.quote}"`;
        if (authorAvatar) authorAvatar.textContent = data.avatar;
        if (authorRole) authorRole.textContent = data.role;
        quoteText.style.opacity = '1';
      }, 200);
    }
    renderDots();
  }

  renderDots();
  setInterval(() => {
    currentIdx = (currentIdx + 1) % testimonials.length;
    switchTestimonial(currentIdx);
  }, 6000);

  // 9. Modal Controls & Sign in redirect
  const quoteModal = document.getElementById('quoteModal');
  const openBtns = document.querySelectorAll('.open-quote-modal');
  const closeBtn = document.getElementById('closeQuoteModal');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.classList.contains('btn-signin')) {
        window.location.href = 'login.html';
      } else if (quoteModal) {
        quoteModal.classList.add('active');
      }
    });
  });

  if (closeBtn && quoteModal) {
    closeBtn.addEventListener('click', () => quoteModal.classList.remove('active'));
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) quoteModal.classList.remove('active');
    });
  }

  // Quote Form Submission -> Redirect to 404.html
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = '404.html';
    });
  }

  // Newsletter Form Submission -> Redirect to 404.html
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = '404.html';
    });
  }

  // 10. Express Tracking Lookup Handler
  window.loadSampleTracking = function(code) {
    const input = document.getElementById('homeTrackingInput');
    const resultBox = document.getElementById('trackerStatusResult');
    const tags = document.querySelectorAll('.sample-tag-btn');
    if (input) input.value = code;
    
    tags.forEach(t => {
      if (t.textContent.includes(code)) t.classList.add('active');
      else t.classList.remove('active');
    });

    if (resultBox) {
      resultBox.style.opacity = '0.4';
      setTimeout(() => {
        resultBox.style.opacity = '1';
      }, 200);
    }
  };

  const btnTrackSubmit = document.getElementById('btnTrackSubmit');
  if (btnTrackSubmit) {
    btnTrackSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const code = document.getElementById('homeTrackingInput')?.value || 'STK-8921-US';
      window.loadSampleTracking(code);
    });
  }

  // 11. Eco Carbon Offset Calculator Handler
  const distInput = document.getElementById('ecoDistance');
  const weightInput = document.getElementById('ecoWeight');
  const distVal = document.getElementById('ecoDistanceVal');
  const weightVal = document.getElementById('ecoWeightVal');
  const co2Result = document.getElementById('co2SavedDisplay');

  function updateEcoCalc() {
    if (!distInput || !weightInput || !co2Result) return;
    const dist = parseFloat(distInput.value) || 450;
    const weight = parseFloat(weightInput.value) || 350;
    
    if (distVal) distVal.textContent = `${dist} km`;
    if (weightVal) weightVal.textContent = `${weight} kg`;

    const saved = ((dist * weight) * 0.00117).toFixed(1);
    co2Result.innerHTML = `${saved} <small>kg CO₂</small>`;
  }

  if (distInput && weightInput) {
    distInput.addEventListener('input', updateEcoCalc);
    weightInput.addEventListener('input', updateEcoCalc);
  }
});
