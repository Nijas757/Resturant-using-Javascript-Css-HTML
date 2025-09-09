// Simple hash router for your 4 sections
(() => {
  
  function ensureIds() {
    const map = [
      ['.hero-section', 'home'],   
      ['.h1',           'service'],
      ['.four-left',    'contact'],
      ['.about-hero',   'about'],  
    ];
    map.forEach(([sel, id]) => {
      const el = document.querySelector(sel);
      if (el) el.id = id; 
    });
  }

  // 2) Highlight active nav link
  function setActiveLink(slug) {
    document.querySelectorAll('.sub-navbar a').forEach(a => {
      const href = (a.getAttribute('href') || '').replace(/^#\/?/, '');
      a.classList.toggle('active', href === slug);
    });
  }

  // 3) Scroll to section + close mobile menu
  function routeTo(slug) {
    const targetId = slug || 'home';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(targetId);
    }
    const t = document.getElementById('toggle'); // your hamburger checkbox
    if (t) t.checked = false;
  }

  function getSlugFromHash() {
    return (location.hash || '#/home').replace(/^#\/?/, ''); // supports #/home or #home
  }

  function onHashChange() {
    routeTo(getSlugFromHash());
  }

  // 4) Intercept clicks so we always use "#/slug" style
  function interceptClicks() {
    document.querySelectorAll('.sub-navbar a').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href') || '';
        if (href.startsWith('#')) {
          e.preventDefault();
          const slug = href.replace(/^#\/?/, '');
          location.hash = '/' + slug; // keep your "#/..." format
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    ensureIds();
    interceptClicks();
    onHashChange();
  });
  window.addEventListener('hashchange', onHashChange);
})();
// ----------------------------------------------------------------
// button click scrolls to the reservation section
document.getElementById("reserveBtn").addEventListener("click", function () {
    document.getElementById("reservation-section").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("order-btn").addEventListener("click",function(){
document.getElementById("item").scrollIntoView({
  behavior:"smooth"
})
})

  
    

