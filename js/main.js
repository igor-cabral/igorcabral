document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('is-open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false'); links.classList.remove('is-open'); document.body.style.overflow = '';
    }));
  }

  if (typeof SITE_CONFIG !== 'undefined'){
    document.querySelectorAll('[data-wa-link]').forEach(el => { el.href = waLink(el.getAttribute('data-wa-message')); el.target = '_blank'; el.rel = 'noopener'; });
    document.querySelectorAll('[data-ig-link]').forEach(el => { el.href = SITE_CONFIG.instagram.url; el.target = '_blank'; el.rel = 'noopener'; });
    document.querySelectorAll('[data-ig-handle]').forEach(el => { el.textContent = SITE_CONFIG.instagram.handle; });
    document.querySelectorAll('[data-email-link]').forEach(el => { el.href = `mailto:${SITE_CONFIG.email}`; });
    document.querySelectorAll('[data-email-text]').forEach(el => { el.textContent = SITE_CONFIG.email; });
    document.querySelectorAll('[data-price-min]').forEach(el => { el.textContent = SITE_CONFIG.prices.siteMin; });
    document.querySelectorAll('[data-price-max]').forEach(el => { el.textContent = SITE_CONFIG.prices.siteMax; });
    document.querySelectorAll('[data-price-domain]').forEach(el => { el.textContent = SITE_CONFIG.prices.domain; });
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q'); const panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', item.getAttribute('data-open') === 'true' ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';
      document.querySelectorAll('.faq-item[data-open="true"]').forEach(other => { if (other !== item){ other.setAttribute('data-open','false'); other.querySelector('.faq-q')?.setAttribute('aria-expanded','false'); other.querySelector('.faq-a').style.maxHeight = null; }});
      item.setAttribute('data-open', String(!isOpen)); btn.setAttribute('aria-expanded', String(!isOpen)); panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : null;
    });
  });

  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!reduced && 'IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }}), {threshold:.12, rootMargin:'0px 0px -50px 0px'});
    revealEls.forEach(el => io.observe(el));
  } else revealEls.forEach(el => el.classList.add('is-visible'));

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
  };
  updateScroll(); window.addEventListener('scroll', updateScroll, {passive:true}); window.addEventListener('resize', updateScroll);

  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href'); if(!href || href.startsWith('#')) return;
    try { const target = new URL(href, window.location.href); const targetPath = target.pathname.replace(/\/index\.html$/, '/'); if(targetPath === path) a.setAttribute('aria-current','page'); } catch(e){}
  });
});
