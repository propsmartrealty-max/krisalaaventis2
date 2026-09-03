document.addEventListener('DOMContentLoaded', () => {
  /* 1. GLOBAL MOUSE SPOTLIGHT */
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  document.addEventListener('mousemove', (e) => {
    spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
    spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
  }, { passive: true });

  /* 2. DYNAMIC GLASS CARD SPOTLIGHT & 3D TILT PHYSICS */
  const glassCards = document.querySelectorAll(
    '.portfolio-card, .spec-card, .zone-card, .cluster-card, .landmark-card, .bento-card, .fp-card, .tower-card, .glass-glow, .stat-item, .feature-item'
  );

  glassCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--card-mouse-x', `${x}px`);
      card.style.setProperty('--card-mouse-y', `${y}px`);

      // Gentle 3D perspective tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.15s ease-out';
    });
  });

  /* 3. MAGNETIC CTAs */
  const magneticEls = document.querySelectorAll('.magnetic, .btn-primary, .shimmer-btn, .wa-floating-btn');
  magneticEls.forEach((el) => {
    el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      el.style.transform = `translate(0px, 0px)`;
    });
  });

  /* 4. PARALLAX HERO BACKGROUND */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.setProperty('--scroll-offset', `${scrolled * 0.35}px`);
    }, { passive: true });
  }

  /* 5. 3D REVEAL OBSERVER */
  const observer3D = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer3D.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.reveal-3d, .reveal').forEach((el) => observer3D.observe(el));
});
