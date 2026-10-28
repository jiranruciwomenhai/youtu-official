// Google Analytics 4
(function () {
  const measurementId = 'G-3E2PY6N88T';

  window.dataLayer = window.dataLayer || [];

  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src =
    'https://www.googletagmanager.com/gtag/js?id=' +
    encodeURIComponent(measurementId);

  document.head.appendChild(script);
})();
document.documentElement.classList.add('js');

// Mobile navigation
(function () {
  const button = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-primary-nav');
  if (!button || !nav) return;
  function close() { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); button.textContent = '菜单'; }
  button.addEventListener('click', function () {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
    button.textContent = expanded ? '菜单' : '关闭';
  });
  nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', close); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 720) close(); });
})();
