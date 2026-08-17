/* Krisala Aventis — Sovereign Intelligence Script v3.0 (Hardened) */
(function () {
  'use strict';

  /* --- Global Error Boundary & Telemetry --- */
  const SOVEREIGN_VERSION = '3.0';
  const ERROR_LOG = [];

  window.addEventListener('error', (e) => {
    const entry = { type: 'js_error', msg: e.message, src: e.filename, line: e.lineno, ts: Date.now() };
    ERROR_LOG.push(entry);
    console.error('[Sovereign Guard] Exception:', entry);
    try { localStorage.setItem('ka_error_log', JSON.stringify(ERROR_LOG.slice(-20))); } catch(_) {}
    return false;
  });

  window.addEventListener('unhandledrejection', (e) => {
    const entry = { type: 'promise_rejection', msg: String(e.reason), ts: Date.now() };
    ERROR_LOG.push(entry);
    console.error('[Sovereign Guard] Unhandled Promise:', entry);
    try { localStorage.setItem('ka_error_log', JSON.stringify(ERROR_LOG.slice(-20))); } catch(_) {}
  });

  /* =============================================
     1. SCROLL REVEAL (Hardened)
     ============================================= */
  const reveals = document.querySelectorAll('.reveal');
  
  try {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -50px 0px' });
    
    reveals.forEach(el => revealObs.observe(el));
  } catch (err) {
    console.warn('[Sovereign Guard] ScrollReveal Observer Failed — Triggering Manual Reveal');
    reveals.forEach(el => el.classList.add('visible'));
  }

  // GLOBAL SAFETY FALLBACK: Reveal everything after 2.5s regardless of intersection
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      el.classList.add('visible');
      console.log('[Sovereign Guard] Safety Reveal Triggered for:', el);
    });
  }, 2500);

  /* =============================================
     2. NAVBAR & STICKY RIBBON SYNCHRONIZED CONTROLLER
     ============================================= */
  const nav       = document.getElementById('mainNav');
  const ribbon    = document.getElementById('stickyRibbon');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (nav) {
    let isScrolled = false;
    const syncNavPosition = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const ribbonHeight = ribbon ? ribbon.offsetHeight : 0;

      if (scrollY > 40) {
        if (!isScrolled) {
          isScrolled = true;
          if (ribbon) {
            ribbon.style.transform = 'translateY(-100%)';
            ribbon.style.opacity = '0';
            ribbon.style.pointerEvents = 'none';
          }
          nav.classList.add('scrolled');
          nav.style.top = '12px';
        }
      } else {
        if (isScrolled || !nav.style.top) {
          isScrolled = false;
          if (ribbon) {
            ribbon.style.transform = 'translateY(0)';
            ribbon.style.opacity = '1';
            ribbon.style.pointerEvents = 'auto';
          }
          nav.classList.remove('scrolled');
          nav.style.top = ribbonHeight > 0 ? `${ribbonHeight + 10}px` : '48px';
        }
      }
    };

    // Initialize immediately and bind events
    syncNavPosition();
    window.addEventListener('scroll', syncNavPosition, { passive: true });
    window.addEventListener('resize', syncNavPosition, { passive: true });
    window.addEventListener('load', syncNavPosition);

    if (ribbon) {
      ribbon.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
    }
    nav.style.transition = 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, box-shadow 0.4s ease';
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        hamburger.classList.remove('open');
        navLinks.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && (navLinks.classList.contains('active') || navLinks.classList.contains('open'))) {
        hamburger.classList.remove('active');
        hamburger.classList.remove('open');
        navLinks.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  /* =============================================
     3. FLOOR PLAN TABS
     ============================================= */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabs     = document.querySelectorAll('.fp-tab');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        const targetEl = document.getElementById(target);

        tabBtns.forEach(b => b.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));

        btn.classList.add('active');
        if (targetEl) {
          targetEl.classList.add('active');
          // Re-trigger reveals in new tab
          targetEl.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 100);
          });
        }
      });
    });
  }

  /* =============================================
     4. SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================= */
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      const hash = href.substring(href.indexOf("#"));
      const path = href.substring(0, href.indexOf("#"));

      // Only smooth scroll if on same page (or if target is on index.html and we are on index.html)
      if (path === "" || path === "/" || path === window.location.pathname) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const offset = 100;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
          }
        }
      }
    });
  });



  /* =============================================
     6. MARQUEE DUPLICATE (for seamless loop)
     ============================================= */
  const track = document.querySelector('.stats-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* =============================================
     7. SOVEREIGN ENQUIRY PIPELINE
        — Dual Dispatch: WhatsApp + Thank You State
        — Destination: propsmartrealty@gmail.com
     ============================================= */
  const forms = document.querySelectorAll('.sovereign-form-logic');
  const modal = document.getElementById('enquiryModal');
  const closeModal = document.getElementById('closeModal');
  
  // Modal Trigger Logic
  document.querySelectorAll('.btn-modal, .cta-pill, .btn-primary, .btn-secondary, .nav-links a, .ribbon-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = (btn.innerText || btn.textContent).toLowerCase();
      
      // Target specific high-intent phrases
      if (text.includes('enquire') || text.includes('visit') || text.includes('price') || text.includes('access') || text.includes('roi') || text.includes('calc')) {
        if (modal) {
          e.preventDefault();
          const modalHeader = modal.querySelector('.modal-header h3');
          const modalDesc   = modal.querySelector('.modal-header p');
          
          // Contextual Header Update
          if (modalHeader) {
            if (text.includes('roi') || text.includes('growth')) {
              modalHeader.innerHTML = 'Request <span class="gold">ROI Analysis</span>';
              if (modalDesc) modalDesc.innerText = 'Unlock the complete market whitepaper and capital appreciation projection.';
            } else if (text.includes('price')) {
              modalHeader.innerHTML = 'Get <span class="gold">Price List</span>';
              if (modalDesc) modalDesc.innerText = 'Receive the latest inventory status and pre-launch pricing directly on WhatsApp.';
            } else {
              modalHeader.innerHTML = 'Unlock <span class="gold">Privilege Access</span>';
              if (modalDesc) modalDesc.innerText = 'Enter your details to receive the official brochure and priority site visit slots.';
            }
          }

          modal.classList.add('open');
          trackEvent('Engagement', 'Modal Opened', text.trim());
        }
      }
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => modal?.classList.remove('open'));
  }
  window.addEventListener('click', (e) => { if (e && modal && e.target === modal) modal.classList.remove('open'); });

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const currentBtn = form.querySelector('.submit-btn');
      if (!currentBtn) return;
      const currentBtnText = currentBtn.querySelector('span') || currentBtn;

      // --- Validation ---
      const name   = form.querySelector('input[name="name"]');
      const phone  = form.querySelector('input[name="phone"]');
      const config = form.querySelector('select[name="config"]');
      let valid = true;

      // Clean UI
      [name, phone].forEach(el => el && el.classList.remove('error'));
      if (config) config.classList.remove('error');

      // Validation Logic (Hardened)
      const cleanedPhone = (phone?.value || '').replace(/\s+/g, '').replace('+', '');
      // Block dummy numbers (e.g., all same digits) and ensure length
      const isDummy = /^(\d)\1{9,}$/.test(cleanedPhone);
      const phoneRegex = /^[0-9]{10,14}$/; 

      if (!name || !name.value.trim() || name.value.length < 2) { if(name) name.classList.add('error'); valid = false; }
      if (!phone || !cleanedPhone || !phoneRegex.test(cleanedPhone) || isDummy) {
        if(phone) phone.classList.add('error'); valid = false;
      }

      if (!valid) {
        shake(currentBtn);
        return;
      }

      // --- Security & Rate Limit Check ---
      const hp = form.querySelector('input[name="contact_me"]');
      if (hp && hp.checked) {
        console.warn('[Sovereign Guard] Bot detected.');
        return;
      }

      const now = Date.now();
      let subHistory = JSON.parse(localStorage.getItem('ka_sub_history') || '[]');
      // Filter out submissions older than 60 seconds
      subHistory = subHistory.filter(t => now - t < 60000);
      
      if (subHistory.length >= 2) { 
        alert('🔒 Security Protocol: Too many requests. Please wait a minute before submitting again.');
        return;
      }
      
      subHistory.push(now);
      localStorage.setItem('ka_sub_history', JSON.stringify(subHistory));

      // --- Loading State ---
      currentBtn.disabled = true;
      const originalText = currentBtnText.textContent;
      currentBtnText.textContent = '⏳ DISPATCHING...';

      // Collect data
      const data = {
        name:    name.value.trim(),
        phone:   cleanedPhone, // Use cleaned phone for data integrity
        email:   form.querySelector('input[name="email"]')?.value.trim() || 'N/A',
        config:  config ? config.value : 'N/A',
        budget:  form.querySelector('select[name="budget"]')?.value || 'N/A',
        message: form.querySelector('textarea[name="message"]')?.value.trim() || 'N/A',
        _subject: 'New Strategic Lead — Krisala Aventis'
      };

      // Persist to local vault
      persistLead(data);

      // --- TRIPLE-REDUNDANT DISPATCH ENGINE ---
      const MAX_RETRIES = 3;
      const RETRY_DELAY = 2000;

      const urlParams = new URLSearchParams(window.location.search);
      const leadData = {
        ...data,
        page_url: window.location.href,
        utm_source: urlParams.get('utm_source') || 'Organic',
        utm_medium: urlParams.get('utm_medium') || 'Organic',
        utm_campaign: urlParams.get('utm_campaign') || 'N/A'
      };

      // Retry-capable fetch wrapper
      async function dispatchWithRetry(url, payload, retries = MAX_RETRIES) {
        for (let attempt = 1; attempt <= retries; attempt++) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify(payload),
              signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
              const result = await response.json();
              console.log(`[Sovereign Pipeline] Relay SUCCESS (attempt ${attempt}):`, result);
              trackEvent('Pipeline', 'Email Delivered', `Attempt ${attempt}`);
              return { success: true, result };
            }
            throw new Error(`HTTP ${response.status}`);
          } catch (err) {
            console.warn(`[Sovereign Pipeline] Attempt ${attempt}/${retries} failed:`, err.message);
            if (attempt < retries) {
              await new Promise(r => setTimeout(r, RETRY_DELAY * attempt));
            }
          }
        }
        return { success: false };
      }

      // Primary Dispatch
      dispatchWithRetry('https://www.krisalaventis.in/api/contact', leadData)
        .then(result => {
          if (result.success) {
            // Mark as delivered in vault
            markVaultDelivered(data);
            try { if (typeof fbq === 'function') fbq('track', 'Lead'); } catch(e) {}
          } else {
            // Queue for retry on next page load
            queueFailedLead(data);
            console.error('[Sovereign Pipeline] All retries exhausted. Lead queued for recovery.');
            trackEvent('Pipeline', 'Email Failed - Queued', data.name);
          }
          // Always show success to user (lead is in vault regardless)
          showSuccess(currentBtn, currentBtnText, originalText, form, data.name, data.phone);
          form.reset();
        });
    });

    // Guard: Prevent "Enter" on selects from triggering premature submission
    form.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('keydown', (e) => { if (e.key === 'Enter') e.preventDefault(); });
    });
  });

  /* =============================================
     7b. AUTO-MODAL ON FIRST LOAD (Hardened)
     ============================================= */
  if (modal) {
    // Reveal modal after 1.5s for maximum engagement
    setTimeout(() => {
      const isAnyModalOpen = document.querySelector('.modal-overlay.open');
      if (!isAnyModalOpen) {
        modal.classList.add('open');
        const modalHeader = modal.querySelector('.modal-header h3');
        const modalDesc   = modal.querySelector('.modal-header p');
        if (modalHeader) modalHeader.innerHTML = 'Unlock <span class="gold">Exclusive Offers</span>';
        if (modalDesc) modalDesc.innerText = 'Register now to receive current inventory status and pre-launch pricing.';
        console.log('[Sovereign Guard] Auto-Modal Triggered');
      }
    }, 1500); 
  }

  function persistLead(data) {
    try {
      const vault = JSON.parse(localStorage.getItem('ka_sovereign_vault') || '[]');
      vault.push({ ...data, status: 'pending', timestamp: new Date().toISOString() });
      localStorage.setItem('ka_sovereign_vault', JSON.stringify(vault.slice(-100)));
    } catch (err) { console.warn('Vault error:', err); }
  }

  function markVaultDelivered(data) {
    try {
      const vault = JSON.parse(localStorage.getItem('ka_sovereign_vault') || '[]');
      const match = vault.find(v => v.phone === data.phone && v.status === 'pending');
      if (match) match.status = 'delivered';
      localStorage.setItem('ka_sovereign_vault', JSON.stringify(vault));
    } catch (_) {}
  }

  function queueFailedLead(data) {
    try {
      const queue = JSON.parse(localStorage.getItem('ka_retry_queue') || '[]');
      queue.push({ ...data, attempts: 0, timestamp: new Date().toISOString() });
      localStorage.setItem('ka_retry_queue', JSON.stringify(queue.slice(-20)));
    } catch (_) {}
  }

  // --- AUTOMATIC QUEUE FLUSH ON PAGE LOAD ---
  (function flushRetryQueue() {
    try {
      const queue = JSON.parse(localStorage.getItem('ka_retry_queue') || '[]');
      if (queue.length === 0) return;

      console.log(`[Sovereign Pipeline] Flushing ${queue.length} queued lead(s)...`);
      const remaining = [];

      queue.forEach(lead => {
        if (lead.attempts >= 5) {
          console.warn('[Sovereign Pipeline] Lead exceeded max retry. Archived:', lead.name);
          return; // Drop after 5 total retries
        }

        lead.attempts = (lead.attempts || 0) + 1;
        const payload = {
          subject: `[RETRY #${lead.attempts}] Lead: ${lead.name} — Krisala Aventis`,
          from_name: 'Krisala Aventis Retry System',
          ...lead
        };

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        })
        .then(r => {
          if (r.ok) {
            console.log(`[Sovereign Pipeline] Retry delivered: ${lead.name}`);
          } else {
            remaining.push(lead);
          }
        })
        .catch(() => remaining.push(lead));
      });

      // Update queue after flush attempt
      setTimeout(() => {
        localStorage.setItem('ka_retry_queue', JSON.stringify(remaining));
      }, 5000);
    } catch (_) {}
  })();

  function showSuccess(btn, btnTextEl, originalText, form, nameVal, phoneVal) {
    btn.disabled = false;
    const formTitle = document.getElementById('formTitle');
    const ppContainer = document.getElementById('priorityPassContainer');
    const ppName = document.getElementById('pp-name');
    const ppId = document.getElementById('pp-id');
    const qrImg = ppContainer?.querySelector('.pass-qr img');

    if (form && ppContainer && ppName && ppId) {
      // Hide form and title
      form.style.display = 'none';
      if (formTitle) formTitle.style.display = 'none';

      // Capture Slot Details
      const day = form.querySelector('select[name="visit-day"]')?.value || 'TBD';
      const slot = form.querySelector('select[name="visit-slot"]')?.value || 'TBD';
      const ppSlot = document.getElementById('pp-slot');
      if (ppSlot) ppSlot.innerText = `${day} | ${slot}`;

      // Set Pass Data
      ppName.innerText = nameVal || 'Valued Guest';
      const passId = 'KA-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      ppId.innerText = passId;

      if (qrImg) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PassID:${passId}|Slot:${day}-${slot}|Phone:${phoneVal}`;
      }

      // Show Pass
      ppContainer.style.display = 'block';
      ppContainer.style.animation = 'fadeIn 0.8s ease forwards';
      
      // WhatsApp Deep Link Update
      const confirmBtn = document.getElementById('confirmWA');
      if (confirmBtn) {
        const waMsg = encodeURIComponent(`Hi, I have generated my Krisala Aventis Priority Pass (${passId}). \nSlot: ${day} | ${slot}. \nPlease confirm my visit.`);
        confirmBtn.href = `https://api.whatsapp.com/send?phone=917744009295&text=${waMsg}`;
      }

      trackEvent('Conversion', 'Priority Pass Generated', `${passId} | ${day}-${slot}`);
    } else {
      // Fallback if elements not present (e.g. on silo pages)
      const originalBg = btn.style.background;
      const originalColor = btn.style.color;
      
      btn.style.background = 'var(--clr-gold)';
      btn.style.color = '#000';
      btnTextEl.textContent = '🏠 Enquiry Protocol Delivered!';
      
      setTimeout(() => {
        btn.style.background = originalBg;
        btn.style.color = originalColor;
        btnTextEl.textContent = originalText;
      }, 5000);
    }
  }

  function shake(el) {
    if (!el) return;
    el.style.animation = 'none';
    requestAnimationFrame(() => {
      el.style.animation = 'shake 0.4s ease';
    });
  }

  /* =============================================
     8. ACTIVE NAV LINK ON SCROLL (highlight)
     ============================================= */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && navAnchors.length > 0) {
    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navAnchors.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${id}`
              ? 'var(--clr-gold)' : '';
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObs.observe(s));
  }

  /* =============================================
     9. BACK TO TOP ON LOGO CLICK
     ============================================= */
  document.querySelector('.logo')?.addEventListener('click', (e) => {
    if (e.target.getAttribute('href') === '#' || e.target.closest('a').getAttribute('href') === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  /* =============================================
     10. ANALYTICS & EVENT TRACKING (dataLayer)
     ============================================= */
  function trackEvent(category, action, label) {
    if (window.dataLayer && typeof window.dataLayer.push === 'function') {
      window.dataLayer.push({
        'event': 'ka_engagement',
        'event_category': category,
        'event_action': action,
        'event_label': label
      });
      console.log(`[Analytics] Tracked: ${category} | ${action} | ${label}`);
    }
  }

  // Track WhatsApp Clicks
  document.querySelectorAll('.wa-float, .wa-fab').forEach(waBtn => {
    waBtn.addEventListener('click', () => {
      trackEvent('Communication', 'WhatsApp Click', waBtn.classList.contains('wa-fab') ? 'Floating FAB' : 'Footer/Ribbon');
    });
  });

  // Track CTA Button Clicks
  document.querySelectorAll('.btn-primary, .btn-secondary, .cta-pill, .ribbon-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.innerText || btn.textContent;
      trackEvent('Engagement', 'Button Click', text.trim());
    });
  });

  /* =============================================
     11. INJECT SHAKE KEYFRAME DYNAMICALLY
     ============================================= */
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-8px); }
      40%       { transform: translateX(8px); }
      60%       { transform: translateX(-5px); }
      80%       { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(shakeStyle);

  const connStyle = document.createElement('style');
  connStyle.textContent = `
    .share-btn-fp { margin-top: 1rem; display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--clr-gold); cursor: pointer; opacity: 0.8; transition: 0.3s; }
    .share-btn-fp:hover { opacity: 1; transform: translateX(5px); }
  `;
  document.head.appendChild(connStyle);

  document.querySelectorAll('.fp-details').forEach(details => {
    const shareBtn = document.createElement('div');
    shareBtn.className = 'share-btn-fp';
    shareBtn.innerHTML = '<span>📲 Share Layout</span>';
    shareBtn.onclick = () => {
      const bhk = details.querySelector('h3')?.innerText || '2/3 BHK';
      const msg = encodeURIComponent(`Check out this ${bhk} layout at Krisala Aventis Tathawade! It looks perfect. \n\nView here: ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
    };
    details.appendChild(shareBtn);
  });

  /* =============================================
     12. INTELLIGENT LINK PRE-FETCHING (SEO SPEED)
     ============================================= */
  const prefetchLinks = () => {
    const links = document.querySelectorAll('a[href^="/"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const href = entry.target.getAttribute('href');
          if (href && !href.includes('#')) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = href;
            document.head.appendChild(link);
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.1 });

    links.forEach(link => observer.observe(link));
  };

  if ('IntersectionObserver' in window) {
    setTimeout(prefetchLinks, 2000); // Start pre-fetching after 2s to prioritize LCP
  }

  /* =============================================
     13. CONNECTIVITY WATCHDOG
     ============================================= */
  window.addEventListener('online', () => {
    console.log('[Sovereign Guard] Connection restored. Flushing retry queue...');
    // Re-attempt queued leads when connection returns
    try {
      const queue = JSON.parse(localStorage.getItem('ka_retry_queue') || '[]');
      if (queue.length > 0) {
        queue.forEach(lead => {
          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              access_key: 'b28972bc-8e15-4fe5-86b7-82b12ee0e82b',
              subject: `[AUTO-RECOVERY] Lead: ${lead.name} — Krisala Aventis`,
              from_name: 'Krisala Aventis Auto-Recovery',
              ...lead
            })
          }).then(r => {
            if (r.ok) console.log(`[Sovereign Guard] Auto-recovered lead: ${lead.name}`);
          }).catch(() => {});
        });
        localStorage.setItem('ka_retry_queue', '[]');
      }
    } catch(_) {}
  });

  window.addEventListener('offline', () => {
    console.warn('[Sovereign Guard] Connection lost. Leads will be queued locally.');
  });

  /* =============================================
     14. INTERACTIVE FINANCIAL & ROI SUITE ENGINE
     ============================================= */
  // 14a. Tab Switcher
  const calcTabs = document.querySelectorAll('.calc-tab-btn');
  const calcPanels = document.querySelectorAll('.calc-panel');
  if (calcTabs.length > 0) {
    calcTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.calc;
        calcTabs.forEach(b => b.classList.remove('active'));
        calcPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });
  }

  const formatINR = (val) => {
    return '₹ ' + Number(Math.round(val)).toLocaleString('en-IN');
  };

  // 14b. Smart EMI Calculator Logic
  const emiAmountSlider = document.getElementById('emi-amount-slider');
  const emiRateSlider = document.getElementById('emi-rate-slider');
  const emiTenureSlider = document.getElementById('emi-tenure-slider');

  const emiAmountBadge = document.getElementById('emi-amount-badge');
  const emiRateBadge = document.getElementById('emi-rate-badge');
  const emiTenureBadge = document.getElementById('emi-tenure-badge');

  const emiMonthlyOutput = document.getElementById('emi-monthly-output');
  const emiPrincipalOutput = document.getElementById('emi-principal-output');
  const emiInterestOutput = document.getElementById('emi-interest-output');
  const emiTotalOutput = document.getElementById('emi-total-output');

  function calculateEMI() {
    if (!emiAmountSlider || !emiRateSlider || !emiTenureSlider) return;
    const P = parseFloat(emiAmountSlider.value);
    const annualRate = parseFloat(emiRateSlider.value);
    const tenureYears = parseFloat(emiTenureSlider.value);

    if (emiAmountBadge) emiAmountBadge.textContent = formatINR(P);
    if (emiRateBadge) emiRateBadge.textContent = annualRate.toFixed(2) + '%';
    if (emiTenureBadge) emiTenureBadge.textContent = tenureYears + ' Years';

    const r = annualRate / 12 / 100;
    const n = tenureYears * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    if (emiMonthlyOutput) emiMonthlyOutput.textContent = formatINR(emi);
    if (emiPrincipalOutput) emiPrincipalOutput.textContent = formatINR(P);
    if (emiInterestOutput) emiInterestOutput.textContent = formatINR(totalInterest);
    if (emiTotalOutput) emiTotalOutput.textContent = formatINR(totalPayment);
  }

  if (emiAmountSlider) {
    emiAmountSlider.addEventListener('input', calculateEMI);
    emiRateSlider.addEventListener('input', calculateEMI);
    emiTenureSlider.addEventListener('input', calculateEMI);

    document.querySelectorAll('.bank-presets .bank-pill[data-rate]').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.bank-presets .bank-pill[data-rate]').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        emiRateSlider.value = pill.dataset.rate;
        calculateEMI();
      });
    });

    calculateEMI();
  }

  // 14c. Capital Growth & ROI Calculator
  const roiPropSlider = document.getElementById('roi-prop-slider');
  const roiRateSlider = document.getElementById('roi-rate-slider');
  const roiYearsSlider = document.getElementById('roi-years-slider');

  const roiPropBadge = document.getElementById('roi-prop-badge');
  const roiRateBadge = document.getElementById('roi-rate-badge');
  const roiYearsBadge = document.getElementById('roi-years-badge');

  const roiFutureOutput = document.getElementById('roi-future-output');
  const roiGainOutput = document.getElementById('roi-gain-output');
  const roiRentalOutput = document.getElementById('roi-rental-output');

  function calculateROI() {
    if (!roiPropSlider || !roiRateSlider || !roiYearsSlider) return;
    const PV = parseFloat(roiPropSlider.value);
    const rate = parseFloat(roiRateSlider.value) / 100;
    const years = parseFloat(roiYearsSlider.value);

    if (roiPropBadge) roiPropBadge.textContent = formatINR(PV);
    if (roiRateBadge) roiRateBadge.textContent = (rate * 100).toFixed(1) + '%';
    if (roiYearsBadge) roiYearsBadge.textContent = years + (years === 1 ? ' Year' : ' Years');

    const FV = PV * Math.pow(1 + rate, years);
    const gainPct = ((FV - PV) / PV) * 100;
    const monthlyRentMin = (PV * 0.045) / 12;
    const monthlyRentMax = (PV * 0.055) / 12;

    if (roiFutureOutput) roiFutureOutput.textContent = formatINR(FV);
    if (roiGainOutput) roiGainOutput.textContent = `+${gainPct.toFixed(1)}% Net Growth`;
    if (roiRentalOutput) roiRentalOutput.textContent = `${formatINR(monthlyRentMin)} - ${formatINR(monthlyRentMax)} / mo`;
  }

  if (roiPropSlider) {
    roiPropSlider.addEventListener('input', calculateROI);
    roiRateSlider.addEventListener('input', calculateROI);
    roiYearsSlider.addEventListener('input', calculateROI);

    document.querySelectorAll('.bank-presets .bank-pill[data-roi]').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.bank-presets .bank-pill[data-roi]').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        roiRateSlider.value = pill.dataset.roi;
        calculateROI();
      });
    });

    calculateROI();
  }

  // 14d. Stamp Duty Calculator
  const stampPropSlider = document.getElementById('stamp-prop-slider');
  const stampPropBadge = document.getElementById('stamp-prop-badge');
  const stampGenderBadge = document.getElementById('stamp-gender-badge');
  const stampTotalOutput = document.getElementById('stamp-total-output');
  const stampDutyOutput = document.getElementById('stamp-duty-output');
  const stampAllincOutput = document.getElementById('stamp-allinc-output');

  let currentStampRate = 0.06; // Default Male/Joint (5% + 1%)

  function calculateStamp() {
    if (!stampPropSlider) return;
    const PV = parseFloat(stampPropSlider.value);
    if (stampPropBadge) stampPropBadge.textContent = formatINR(PV);

    const stampDuty = PV * currentStampRate;
    const regFee = 30000;
    const totalGovt = stampDuty + regFee;
    const allInc = PV + totalGovt;

    if (stampDutyOutput) stampDutyOutput.textContent = formatINR(stampDuty);
    if (stampTotalOutput) stampTotalOutput.textContent = formatINR(totalGovt);
    if (stampAllincOutput) stampAllincOutput.textContent = formatINR(allInc);
  }

  if (stampPropSlider) {
    stampPropSlider.addEventListener('input', calculateStamp);

    const btnMale = document.getElementById('btn-male');
    const btnFemale = document.getElementById('btn-female');

    if (btnMale && btnFemale) {
      btnMale.addEventListener('click', () => {
        btnMale.classList.add('active');
        btnFemale.classList.remove('active');
        currentStampRate = 0.06;
        if (stampGenderBadge) stampGenderBadge.textContent = 'Male / Joint (6%)';
        calculateStamp();
      });
      btnFemale.addEventListener('click', () => {
        btnFemale.classList.add('active');
        btnMale.classList.remove('active');
        currentStampRate = 0.05;
        if (stampGenderBadge) stampGenderBadge.textContent = 'Female Sole Owner (5%)';
        calculateStamp();
      });
    }

    calculateStamp();
  }

  /* =============================================
     15. SMART WHATSAPP CONCIERGE WIDGET HANDLER
     ============================================= */
  const toggleWaBtn = document.getElementById('toggleWaConcierge');
  const waDrawer = document.getElementById('waDrawer');
  const closeWaBtn = document.getElementById('closeWaDrawer');

  if (toggleWaBtn && waDrawer) {
    toggleWaBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      waDrawer.classList.toggle('open');
      trackEvent('Engagement', 'WhatsApp Concierge Toggled', waDrawer.classList.contains('open') ? 'Open' : 'Close');
    });

    if (closeWaBtn) {
      closeWaBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        waDrawer.classList.remove('open');
      });
    }

    document.addEventListener('click', (e) => {
      if (!waDrawer.contains(e.target) && !toggleWaBtn.contains(e.target)) {
        waDrawer.classList.remove('open');
      }
    });
  }

  console.log(`[Krisala Aventis] Sovereign Intelligence v${SOVEREIGN_VERSION} — TOTAL HARDENING ACTIVE ✅`);

  // --- SERVICE WORKER REGISTRATION ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('[Service Worker] Sovereign Registration Successful ✅', reg.scope))
        .catch(err => console.warn('[Service Worker] Sovereign Registration Failed ❌', err));
    });
  }
})();
