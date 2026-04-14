// Favicon SVG inline
const FAVICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%234F46E5'/%3E%3Cstop offset='1' stop-color='%2306B6D4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Ctext x='16' y='22' font-family='Inter,Arial' font-size='18' font-weight='800' text-anchor='middle' fill='white'%3EW%3C/text%3E%3C/svg%3E`;

// Meta tags + favicon
(function(){
  const head=document.head;
  const link=document.createElement('link');link.rel='icon';link.type='image/svg+xml';link.href=FAVICON;head.appendChild(link);
  // OG defaults (pages can override by setting window.__OG before this script)
  const og={title:document.title,desc:(document.querySelector('meta[name=description]')||{}).content||'WizeHub — Comunicación omnicanal'};
  [['og:type','website'],['og:title',og.title],['og:description',og.desc],['og:site_name','WizeHub'],['twitter:card','summary_large_image'],['twitter:title',og.title],['twitter:description',og.desc]].forEach(([p,c])=>{
    const m=document.createElement('meta');m.setAttribute(p.startsWith('og:')?'property':'name',p);m.content=c;head.appendChild(m);
  });
})();

const NAV = `
<a class="skip-link" href="#main">Saltar al contenido</a>
<nav class="nav" aria-label="Principal">
  <div class="container nav-inner">
    <a href="index.html" class="logo" aria-label="WizeHub — inicio"><span class="logo-mark">W</span> WizeHub</a>
    <div class="nav-links">
      <div class="dropdown">
        <a href="#features" aria-haspopup="true">Producto ▾</a>
        <div class="dropdown-menu" role="menu">
          <a href="dashboard.html"><strong>Dashboard Colaborativo</strong><small>Bandeja unificada para equipos</small></a>
          <a href="mobile.html"><strong>Apps móviles</strong><small>Responde desde iOS y Android</small></a>
          <a href="integrations.html"><strong>Integraciones</strong><small>Conecta tus herramientas</small></a>
          <a href="wizeflow.html"><strong>WizeFlow</strong><small>Bots e IA a medida</small></a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#channels" aria-haspopup="true">Canales ▾</a>
        <div class="dropdown-menu" role="menu">
          <a href="whatsapp.html"><strong>WhatsApp</strong><small>API oficial para negocios</small></a>
          <a href="livechat.html"><strong>Live Chat</strong><small>Widget para tu sitio web</small></a>
          <a href="email.html"><strong>Email</strong><small>Convierte correos en conversaciones</small></a>
          <a href="instagram.html"><strong>Instagram</strong><small>DMs y comentarios</small></a>
          <a href="facebook.html"><strong>Facebook Messenger</strong><small>Atención unificada</small></a>
          <a href="sms.html"><strong>SMS</strong><small>Mensajería tradicional</small></a>
          <a href="api.html"><strong>API de Canales</strong><small>Conecta cualquier canal</small></a>
        </div>
      </div>
      <a href="wizeflow.html">WizeFlow</a>
      <a href="pricing.html">Precios</a>
      <a href="contact.html">Contacto</a>
    </div>
    <div class="nav-cta">
      <a href="contact.html" class="btn btn-ghost">Iniciar sesión</a>
      <a href="pricing.html" class="btn btn-primary">Prueba gratis</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
  </div>
  <div class="mobile-panel" id="mobilePanel" aria-hidden="true">
    <div class="group"><div class="group-title">Producto</div>
      <a href="dashboard.html">Dashboard Colaborativo</a>
      <a href="mobile.html">Apps móviles</a>
      <a href="integrations.html">Integraciones</a>
      <a href="wizeflow.html">WizeFlow</a>
    </div>
    <div class="group"><div class="group-title">Canales</div>
      <a href="whatsapp.html">WhatsApp</a>
      <a href="livechat.html">Live Chat</a>
      <a href="email.html">Email</a>
      <a href="instagram.html">Instagram</a>
      <a href="facebook.html">Facebook Messenger</a>
      <a href="sms.html">SMS</a>
      <a href="api.html">API de Canales</a>
    </div>
    <div class="group"><div class="group-title">Empresa</div>
      <a href="pricing.html">Precios</a>
      <a href="about.html">Sobre nosotros</a>
      <a href="contact.html">Contacto</a>
      <a href="security.html">Seguridad</a>
    </div>
    <a href="pricing.html" class="btn btn-primary" style="margin-top:16px;width:100%;justify-content:center">Prueba gratis</a>
  </div>
</nav>`;

const FOOTER = `
<footer>
  <div class="container">
    <div class="foot-grid">
      <div>
        <div class="logo" style="color:#fff;margin-bottom:12px"><span class="logo-mark">W</span> WizeHub</div>
        <p>La plataforma de comunicación omnicanal de <strong style="color:#fff">Wize Devs</strong>. Centraliza tus conversaciones y potencia tu atención con IA.</p>
        <div style="margin-top:12px"><span class="live-dot"></span><span style="font-size:.85rem">Todos los sistemas operando</span></div>
      </div>
      <div><h4>Producto</h4>
        <a href="dashboard.html">Dashboard</a><a href="mobile.html">Apps móviles</a>
        <a href="integrations.html">Integraciones</a><a href="wizeflow.html">WizeFlow</a><a href="pricing.html">Precios</a>
      </div>
      <div><h4>Canales</h4>
        <a href="whatsapp.html">WhatsApp</a><a href="livechat.html">Live Chat</a>
        <a href="email.html">Email</a><a href="instagram.html">Instagram</a>
        <a href="facebook.html">Facebook</a><a href="sms.html">SMS</a><a href="api.html">API</a>
      </div>
      <div><h4>Empresa</h4>
        <a href="about.html">Sobre nosotros</a><a href="contact.html">Contacto</a>
        <a href="security.html">Seguridad</a><a href="#">Estado del servicio</a>
      </div>
      <div><h4>Recursos</h4>
        <a href="#">Centro de ayuda</a><a href="#">Guías de inicio</a>
        <a href="#">Blog</a><a href="#">API Reference</a>
      </div>
    </div>
    <div class="foot-bottom">
      <div>© 2026 Wize Devs — Todos los derechos reservados.</div>
      <div>Términos · Privacidad · Cookies</div>
    </div>
  </div>
</footer>
<button class="back-top" id="backTop" aria-label="Volver arriba">↑</button>`;

document.addEventListener('DOMContentLoaded',()=>{
  const n=document.getElementById('nav-slot');if(n)n.innerHTML=NAV;
  const f=document.getElementById('footer-slot');if(f)f.innerHTML=FOOTER;

  // Mobile nav
  const t=document.getElementById('navToggle'),p=document.getElementById('mobilePanel');
  if(t&&p){t.addEventListener('click',()=>{
    const open=p.classList.toggle('open');
    t.setAttribute('aria-expanded',open);p.setAttribute('aria-hidden',!open);
    t.textContent=open?'✕':'☰';
  });}

  // Back to top
  const bt=document.getElementById('backTop');
  if(bt){window.addEventListener('scroll',()=>bt.classList.toggle('show',window.scrollY>500));
    bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}

  // Scroll reveal
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.card, .step-card, .feature-row, .cta-band, .wizeflow-card, .plan, .section-head, .faq').forEach(el=>{el.classList.add('reveal');io.observe(el);});
});
