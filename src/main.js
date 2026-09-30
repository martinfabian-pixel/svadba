import { wedding } from './config.js?v=17';

const icons = {
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  bed: '<path d="M3 19V6m0 9h18v4M3 10h7a3 3 0 0 1 3 3v2m0-3h5a3 3 0 0 1 3 3"/><path d="M6 9h2"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h4a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3"/>',
  dress: '<path d="m12 3 3 3-1 3 5 10H5L10 9 9 6l3-3Z"/><path d="M10 9h4"/>',
  gift: '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.4-3.2L12 9Zm0 0h4.5a2.5 2.5 0 1 0-2.4-3.2L12 9Z"/>',
  heart: '<path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>',
  camera: '<path d="M4 7h3l2-3h6l2 3h3v13H4z"/><circle cx="12" cy="13" r="3.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  back: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  plus: '<path d="M12 5v14m-7-7h14"/>',
  minus: '<path d="M5 12h14"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};
const svg = (name, className = '') => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;

const assetFolder = new URL('../assets/', import.meta.url);
const logoUrl = new URL('sm-monogram-exact.png', assetFolder).href;
const wordmarkUrl = new URL('invite-wordmark.png', assetFolder).href;
const wreath = `<img class="wreath-mark" src="${logoUrl}" alt="Monogram S&M" loading="lazy">`;

const branch = `<svg class="leaf-divider" viewBox="0 0 220 62" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 48C66 42 113 28 205 13M44 43c-3-13-12-20-27-21 2 14 11 21 27 21Zm27-8c-2-13-10-20-24-23 1 14 9 22 24 23Zm27-7c0-13-7-21-20-26-1 14 6 22 20 26Zm28-6c2-13-3-22-15-29-4 13 1 23 15 29Zm27-4c5-12 3-22-7-32-7 12-6 23 7 32Zm-80 22c1 12 8 19 22 22-1-13-9-20-22-22Zm30-7c4 12 13 17 27 17-4-13-13-18-27-17Zm30-8c7 11 17 14 31 10-7-12-17-15-31-10Z"/>
</svg>`;const weddingRings = `<svg class="wedding-rings" viewBox="0 0 240 100" aria-hidden="true" focusable="false">
  <ellipse class="ring-loop ring-loop-left" cx="91" cy="55" rx="34" ry="24" transform="rotate(-27 91 55)" />
  <ellipse class="ring-inner ring-inner-left" cx="91" cy="55" rx="28" ry="18" transform="rotate(-27 91 55)" />
  <ellipse class="ring-loop ring-loop-right" cx="149" cy="55" rx="34" ry="24" transform="rotate(27 149 55)" />
  <ellipse class="ring-inner ring-inner-right" cx="149" cy="55" rx="28" ry="18" transform="rotate(27 149 55)" />
  <path class="ring-diamond" d="m149 18 8 8-8 8-8-8 8-8Z" />
  <path class="ring-sparkle" d="M149 8v5m0 26v5m14-18h5m-38 0h5m24-10 3-3m-27 27 3-3" />
</svg>`;
const menu = [
  ['calendar', 'Harmonogram dňa', '#program'],
  ['pin', 'Miesto obradu', '#miesto'],
  ['heart', 'Miesto oslavy', '#oslava'],
  ['bed', 'Ubytovanie', '#ubytovanie'],
  ['route', 'Ako sa dostať', '#doprava'],
  ['dress', 'Dress code', '#dress-code'],
  ['gift', 'Darčeky', '#darceky'],
  ['heart', 'Náš príbeh', '#pribeh'],
  ['camera', 'Galéria', '#galeria'],
  ['mail', 'Kontakt', '#kontakt'],
];
const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="header-brand" href="#home" aria-label="Svadba Simony a Martina — úvod"><img class="header-logo" src="${logoUrl}" alt=""></a>
    <a class="header-date" href="#rsvp">${escapeHTML(wedding.dateLabel)}</a>
    <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Otvoriť navigáciu" aria-expanded="false">${svg('menu')}</button>
  </header>
  <nav class="menu-panel" id="menu-panel" aria-label="Hlavná navigácia" hidden>
    <div class="menu-panel-top"><img class="menu-logo" src="${logoUrl}" alt="S&M"><button class="menu-close" id="menu-close" type="button" aria-label="Zavrieť navigáciu">${svg('close')}</button></div>
    <div class="menu-panel-links">${menu.map(([icon, label, href]) => `<a class="menu-link" href="${href}">${svg(icon)}<span>${label}</span><b>${svg('arrow')}</b></a>`).join('')}</div>
    <a class="button button-olive menu-rsvp" href="#rsvp">Potvrdiť účasť ${svg('arrow')}</a>
  </nav>
  <main>
    <section id="home" class="invitation paper-section">
      <span class="corner-leaf corner-top-left">${branch}</span><span class="corner-leaf corner-bottom-right">${branch}</span>
      <div class="invitation-inner">
        ${wreath}
        <h1 class="couple-names" aria-label="${escapeHTML(wedding.names)}"><span class="visually-hidden">${escapeHTML(wedding.names)}</span><span class="couple-wordmark" aria-hidden="true" style="--wordmark-image: url('${wordmarkUrl}')"></span></h1>
        ${branch}
        <p class="invite-kicker">S radosťou vám oznamujeme,<br>že uzatvárame sviatosť manželstva</p>
        <p class="wedding-date">${escapeHTML(wedding.dateLabel)}</p>
        <p class="wedding-place">v ${escapeHTML(wedding.locationLabel)}</p>
        <p class="wedding-gathering">${escapeHTML(wedding.gatheringTime)} · stretnutie v Šúrovciach</p>        ${weddingRings}
        <a class="button button-olive invitation-cta" href="#rsvp">Potvrdiť účasť ${svg('arrow')}</a>
      </div>
    </section>

    <section id="uvod" class="welcome-section paper-section">
      <div class="welcome-inner">${branch}<p class="eyebrow">${escapeHTML(wedding.dateLabel)} · ${escapeHTML(wedding.locationShort)}</p><h2>Milí naši,</h2><p class="welcome-copy">tešíme sa, že tento deň budete prežívať spolu s nami. Prosíme vás o potvrdenie účasti a niekoľko informácií, ktoré nám pomôžu pripraviť náš svadobný deň.</p>${branch}<a class="button button-olive" href="#rsvp">Začať ${svg('arrow')}</a></div>
    </section>

    <section class="countdown-section"><div class="countdown-inner"><p class="eyebrow">UŽ SA NEVIEME DOČKAŤ</p><h2>Do nášho dňa zostáva</h2><div id="countdown" class="countdown"><div><strong>—</strong><span>Dní</span></div><i>·</i><div><strong>—</strong><span>Hodín</span></div><i>·</i><div><strong>—</strong><span>Minút</span></div><i>·</i><div><strong>—</strong><span>Sekúnd</span></div></div></div></section>

    <section id="rsvp" class="rsvp-section paper-section">
      <div class="rsvp-wrap"><p class="eyebrow">TEŠÍME SA NA VAŠU ODPOVEĎ</p><h2>Potvrdenie účasti</h2>
        <div class="rsvp-card" id="rsvp-card">
          <div class="step-top"><button id="step-back" class="step-back" type="button" aria-label="Predchádzajúci krok" hidden>${svg('back')}</button><div class="step-progress"><span class="progress-track"><i id="progress-fill"></i></span><span id="step-count">1 / 5</span></div></div>
          <div id="step-body" aria-live="polite"></div>
          <div id="step-actions" class="step-actions"><button id="step-next" class="button button-olive" type="button">Pokračovať ${svg('arrow')}</button></div>
        </div>
      </div>
    </section>

    <section id="program" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">TEŠÍME SA NA KAŽDÝ OKAMIH</p><h2>Harmonogram dňa</h2>${branch}<div class="schedule-list"><article><time>${escapeHTML(wedding.gatheringTime)}</time><span class="schedule-dot"></span><div><h3>Stretnutie v Šúrovciach</h3><p>${escapeHTML(wedding.gatheringPlace)}</p></div></article><article><time>${escapeHTML(wedding.ceremony.time)}</time><span class="schedule-dot"></span><div><h3>Svadobný obrad</h3><p>${escapeHTML(wedding.ceremony.name)} v Trnave</p></div></article><article><time>Po obrade</time><span class="schedule-dot"></span><div><h3>Svadobná oslava</h3><p>${escapeHTML(wedding.reception.name)} v Šúrovciach</p></div></article></div></div></section>

        <section id="miesto" class="place-section"><img class="place-photo" src="${wedding.ceremony.photo}" alt="${escapeHTML(wedding.ceremony.photoAlt)}" loading="lazy"><div class="place-copy"><p class="eyebrow">SVADOBNÝ OBRAD · ${escapeHTML(wedding.ceremony.time)}</p><h2>Miesto obradu</h2><p class="place-name">${escapeHTML(wedding.ceremony.name)} v ${escapeHTML(wedding.locationShortLocative || 'Trnave')}</p><p>${escapeHTML(wedding.ceremony.address).replace(', ', '<br>')}</p><a class="button button-outline" href="${wedding.ceremony.maps}" target="_blank" rel="noreferrer">${svg('pin')} Zobraziť na mape</a><p><a class="text-link" href="${wedding.ceremony.parkingMaps}" target="_blank" rel="noreferrer">Parkovanie pri kostole</a></p><p class="photo-attribution">Fotografia: <a href="${wedding.ceremony.photoCreditUrl}" target="_blank" rel="noreferrer">Mister No / Wikimedia Commons</a> · <a href="${wedding.ceremony.photoLicenseUrl}" target="_blank" rel="noreferrer">CC BY 3.0</a></p><p class="photo-attribution">Informácie o kostole: <a href="${wedding.ceremony.website}" target="_blank" rel="noreferrer">Františkáni v Trnave</a></p></div></section>

    <section id="oslava" class="venue-section"><img class="venue-photo" src="${wedding.reception.heroPhoto.src}" alt="${escapeHTML(wedding.reception.heroPhoto.alt)}" loading="lazy"><div class="venue-copy"><p class="eyebrow">OSLAVA PO OBRADE · ZEMIANSKY DVOR</p><h2>Miesto oslavy</h2><p class="place-name">${escapeHTML(wedding.reception.name)}</p><p>${escapeHTML(wedding.reception.address)}</p><p class="venue-description">Po obrade sa stretneme na svadobnej oslave v Penzióne Zemiansky dvor.</p><div class="venue-actions"><a class="button button-outline" href="${wedding.reception.maps}" target="_blank" rel="noreferrer">${svg('pin')} Zobraziť na mape</a><a class="text-link" href="${wedding.reception.website}" target="_blank" rel="noreferrer">Viac o mieste ${svg('arrow')}</a></div></div><div class="venue-strip">${wedding.reception.photos.slice(1, 5).map(photo => `<img src="${photo.src}" alt="${escapeHTML(photo.alt)}" loading="lazy">`).join('')}</div><p class="photo-credit">Fotografie priestorov: <a href="${wedding.reception.website}" target="_blank" rel="noreferrer">La Reunion</a></p></section>

    <section id="ubytovanie" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">PRE POHODLIE NAŠICH HOSTÍ</p><h2>Ubytovanie</h2>${branch}<p class="section-lead">${escapeHTML(wedding.accommodationInfo)}</p><div class="detail-card">${svg('bed')}<div><h3>${wedding.accommodationName}</h3><p>${wedding.accommodationDates}</p><p>${wedding.accommodationAddress}</p></div></div><a class="button button-outline" href="${wedding.accommodationUrl}" target="_blank" rel="noreferrer">Informácie a rezervácia ${svg('arrow')}</a><p class="lodging-rsvp">Dajte nám, prosím, vedieť v RSVP, koľko osôb bude mať o ubytovanie záujem.</p></div></section>

    <section id="doprava" class="content-section soft-section"><div class="section-inner"><p class="eyebrow">CESTA ZA NAMI</p><h2>Ako sa dostať</h2>${branch}<p class="section-lead">O 14:00 sa stretneme v Šúrovciach. Autobus odchádza o 14:15 do Trnavy; hostia môžu prísť aj priamo pred Kostol sv. Jakuba v Trnave. Po oslave autobus odvezie hostí späť do Šúroviec.</p><div class="travel-options"><article><h3>Autobus zo Šúroviec</h3><p>Odchod zo Šúroviec je o 14:15. Autobus vás odvezie na svadbu do Trnavy a po oslave späť do Šúroviec.</p></article><article><h3>Priamo ku kostolu</h3><p>Ak vám to viac vyhovuje, môžete prísť priamo pred ${escapeHTML(wedding.ceremony.name)} v Trnave.</p><a class="text-link" href="${wedding.ceremony.maps}" target="_blank" rel="noreferrer">Mapa ku kostolu ${svg('arrow')}</a></article></div></div></section>

    <section id="dress-code" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">SLÁVNOSTNE A S POHODLÍM</p><h2>Dress code</h2>${branch}<p class="section-lead">Zvoľte si oblečenie, v ktorom sa budete cítiť slávnostne a pohodlne. Ďalšie odporúčania doplníme.</p></div></section>

    <section id="darceky" class="content-section soft-section"><div class="section-inner"><p class="eyebrow">VAŠA PRÍTOMNOSŤ JE DAROM</p><h2>Darčeky</h2>${branch}<p class="section-lead">Najväčším darom pre nás bude, že tento deň oslávite spolu s nami. Ak by ste nás chceli obdarovať aj niečím navyše, veľmi nás poteší finančný príspevok do nášho spoločného začiatku.</p></div></section>
    <section id="zasnuby" class="content-section soft-section">
      <div class="section-inner">
        <p class="eyebrow">NAŠE ÁNO ZAČALO VO FLORENCII</p>
        <h2>Naše zásnuby</h2>
        ${branch}
        <p class="section-lead">
          <strong>4. apríla 2026 · Florencia</strong><br><br>
          Jeden z najkrajších momentov našej spoločnej cesty. Pozrite si, ako sa začala cesta k nášmu svadobnému dňu.
        </p>
        <a class="button button-outline" href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODU2OTYyNzQ4NjMxNTA2?story_media_id=3867776256477509653&stkn=eWY0NXozeDBmdnV1" target="_blank" rel="noreferrer">
          Pozrieť naše zásnuby na Instagrame ${svg('arrow')}
        </a>
      </div>
    </section>

    <section id="pribeh" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">DVA PRÍBEHY, JEDNA SPOLOČNÁ CESTA</p><h2>Náš príbeh</h2>${branch}<p class="section-lead"><a class="text-link" href="${wedding.instagram}" target="_blank" rel="noreferrer">Sledujte naše cestovateľské dobrodružstvá na Instagrame ${svg('arrow')}</a></p></div></section>

    <section id="galeria" class="gallery-section soft-section"><div class="section-inner"><p class="eyebrow">MIESTO NAŠEJ OSLAVY</p><h2>Zemiansky dvor</h2><p class="section-lead">Pohľad na priestory, záhradu a ubytovanie, kde oslávime náš svadobný deň.</p><div class="gallery-grid">${wedding.reception.photos.map((photo, i) => `<figure class="gallery-item"><img src="${photo.src}" alt="${escapeHTML(photo.alt)}" loading="lazy"><figcaption>${String(i + 1).padStart(2, '0')}</figcaption></figure>`).join('')}</div><p class="photo-credit">Fotografie priestorov: <a href="${wedding.reception.website}" target="_blank" rel="noreferrer">La Reunion</a></p></div></section>

    <section id="kontakt" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">BUDEME RADI, KEĎ SA OZVETE</p><h2>Kontakt</h2>${branch}<p class="section-lead">Ak máte otázky, dajte nám vedieť. Kontaktné údaje doplníme.</p>${wedding.contactEmail ? `<a class="text-link" href="mailto:${escapeHTML(wedding.contactEmail)}">${escapeHTML(wedding.contactEmail)} ${svg('arrow')}</a>` : '<span class="contact-placeholder">Kontaktný e-mail doplníme.</span>'}</div></section>

    <footer class="site-footer paper-section"><div>${wreath}<p>Tešíme sa na vás<br>${escapeHTML(wedding.dateLabel)} v ${escapeHTML(wedding.locationShortLocative || 'Trnave')}</p><a class="text-link" href="#home">Späť na úvod ↑</a></div><small>VYTVORENÉ S LÁSKOU</small></footer>
  </main>
  <button id="install-button" class="install-button" type="button" hidden>Nainštalovať aplikáciu</button>
`;

const menuToggle = document.querySelector('#menu-toggle');
const menuPanel = document.querySelector('#menu-panel');
function closeMenu() {
  menuPanel.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Otvoriť navigáciu');
  menuToggle.innerHTML = svg('menu');
}
menuToggle.addEventListener('click', () => {
  const open = menuPanel.hidden;
  menuPanel.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Zavrieť navigáciu' : 'Otvoriť navigáciu');
  menuToggle.innerHTML = svg(open ? 'close' : 'menu');
});
document.querySelector('#menu-close').addEventListener('click', closeMenu);menuPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const revealTargets = document.querySelectorAll('.countdown-section, .rsvp-section, .content-section, .place-section, .venue-section, .gallery-section, .gallery-item, .venue-strip img');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -28px 0px' });
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    if (element.matches('.gallery-item, .venue-strip img')) element.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}

const countdownTarget = new Date(wedding.date).getTime();
function updateCountdown() {
  const remaining = Math.max(0, countdownTarget - Date.now());
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  document.querySelector('#countdown').innerHTML = values.map((value, index) => `${index ? '<i>·</i>' : ''}<div><strong>${String(value).padStart(2, '0')}</strong><span>${['Dní', 'Hodín', 'Minút', 'Sekúnd'][index]}</span></div>`).join('');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const answers = { attending: '', guestCount: 1, guestNames: [''], transport: '', lodging: '', lodgingCount: 1, dietary: '', music: '', message: '' };
const RSVP_STEP_COUNT = 6;
let currentStep = 0;
const stepBody = document.querySelector('#step-body');
const stepCount = document.querySelector('#step-count');
const progressFill = document.querySelector('#progress-fill');
const backButton = document.querySelector('#step-back');
const nextButton = document.querySelector('#step-next');
const actions = document.querySelector('#step-actions');
const rsvpCard = document.querySelector('#rsvp-card');

function counter(field, label) {
  const value = answers[field];
  const max = field === 'guestCount' ? 12 : answers.guestCount;
  return `<div class="guest-counter"><button type="button" data-count="${field}" data-delta="-1" aria-label="Odobrať počet" ${value <= 1 ? 'disabled' : ''}>${svg('minus')}</button><strong>${value}</strong><button type="button" data-count="${field}" data-delta="1" aria-label="Pridať počet" ${value >= max ? 'disabled' : ''}>${svg('plus')}</button></div><p class="counter-caption">${label}</p>`;
}

function showThanks() {
  rsvpCard.classList.add('is-thanks');
  const copy = answers.attending === 'yes' ? 'Vašu odpoveď sme uložili. Veľmi sa tešíme, že náš deň oslávime spolu.' : 'Vašu odpoveď sme uložili. Ďakujeme, že ste nám dali vedieť.';
  rsvpCard.innerHTML = `<div class="thanks-view">${wreath}<p class="thanks-script">Ďakujeme!</p><p class="eyebrow">VAŠA ODPOVEĎ SA ULOŽILA</p><p class="thanks-copy">${copy}</p><a class="button button-olive" href="#home">Späť na úvod</a></div>`;
}

function setRsvpFeedback(message) {
  let feedback = stepBody.querySelector('.rsvp-feedback');
  if (!feedback) {
    feedback = document.createElement('p');
    feedback.className = 'rsvp-feedback';
    feedback.setAttribute('role', 'alert');
    stepBody.append(feedback);
  }
  feedback.textContent = message;
}

function sendRsvp() {
  const guestNames = answers.guestNames.slice(0, answers.guestCount).map(name => String(name || '').trim());
  const missingName = guestNames.findIndex(name => !name);
  if (missingName !== -1) {
    setRsvpFeedback(`Prosíme, doplňte meno osoby ${missingName + 1}.`);
    stepBody.querySelector(`[data-name-index="${missingName}"]`)?.focus();
    return;
  }
  if (answers.attending === 'yes' && !answers.transport) {
    setRsvpFeedback('Prosíme, vyberte spôsob dopravy.');
    return;
  }
  if (answers.attending === 'yes' && !answers.lodging) {
    setRsvpFeedback('Prosíme, vyberte odpoveď k ubytovaniu.');
    return;
  }
  if (!wedding.rsvpEndpoint) {
    setRsvpFeedback('Formulár sa ešte pripravuje. Skúste to, prosíme, neskôr.');
    return;
  }

  nextButton.disabled = true;
  nextButton.innerHTML = 'Odosielame…';
  const frame = document.createElement('iframe');
  frame.name = `sm-rsvp-${Date.now()}`;
  frame.title = 'Odoslanie odpovede';
  frame.hidden = true;
  document.body.append(frame);

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = wedding.rsvpEndpoint;
  form.target = frame.name;
  form.hidden = true;
  const payload = {
    guestNames,
    attendance: answers.attending,
    transport: answers.transport,
    lodging: answers.lodging,
    lodgingCount: answers.lodgingCount,
    dietary: answers.dietary,
    music: answers.music,
    message: answers.message,
    website: '',
  };
  const field = document.createElement('input');
  field.type = 'hidden';
  field.name = 'payload';
  field.value = JSON.stringify(payload);
  form.append(field);
  document.body.append(form);

  let settled = false;
  const finish = (success) => {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    window.removeEventListener('message', onMessage);
    form.remove();
    frame.remove();
    if (success) {
      showThanks();
    } else {
      nextButton.disabled = false;
      renderStep();
      setRsvpFeedback('Odpoveď sa nepodarilo uložiť. Skontrolujte pripojenie a skúste to znova.');
    }
  };
  const onMessage = (event) => {
    if (event.source !== frame.contentWindow || event.data?.type !== 'sm-wedding-rsvp') return;
    finish(event.data.ok === true);
  };
  let submitted = false;

frame.addEventListener('load', () => {
  if (submitted) finish(true);
});

const timeout = setTimeout(() => finish(false), 25000);
window.addEventListener('message', onMessage);

submitted = true;
form.submit();
}

function bindStepFields() {
  stepBody.querySelectorAll('[data-choice]').forEach(input => input.addEventListener('change', () => {
    answers[input.name] = input.value;
    stepBody.querySelectorAll('.choice-card').forEach(card => card.classList.toggle('selected', card.contains(input)));
  }));
  stepBody.querySelectorAll('[data-text]').forEach(input => input.addEventListener('input', () => { answers[input.name] = input.value; }));
  stepBody.querySelectorAll('[data-name-index]').forEach(input => input.addEventListener('input', () => { answers.guestNames[Number(input.dataset.nameIndex)] = input.value; }));
  stepBody.querySelectorAll('[data-count]').forEach(button => button.addEventListener('click', () => {
    const field = button.dataset.count;
    answers[field] = Math.max(1, answers[field] + Number(button.dataset.delta));
    if (field === 'guestCount') {
      answers.guestNames.length = answers.guestCount;
      answers.lodgingCount = Math.min(answers.lodgingCount, answers.guestCount);
    }
    renderStep();
  }));
}

function renderStep() {
  const stepTotal = answers.attending === 'no' ? 2 : RSVP_STEP_COUNT;
  stepCount.textContent = `${currentStep + 1} / ${stepTotal}`;
  progressFill.style.width = `${((currentStep + 1) / stepTotal) * 100}%`;
  backButton.hidden = currentStep === 0;
  nextButton.disabled = false;
  const isFinalStep = currentStep === 5 || (answers.attending === 'no' && currentStep === 1);
  nextButton.innerHTML = isFinalStep ? `Odoslať odpoveď ${svg('arrow')}` : `Pokračovať ${svg('arrow')}`;
  if (currentStep === 0) {
    stepBody.innerHTML = `<p class="eyebrow">RADI BY SME VEDELI</p><h3 class="step-title">Prídete na<br>našu svadbu?</h3><p class="step-description">Prosíme, vyberte jednu možnosť.</p><div class="choice-list"><label class="choice-card ${answers.attending === 'yes' ? 'selected' : ''}"><input type="radio" name="attending" value="yes" data-choice ${answers.attending === 'yes' ? 'checked' : ''}><span class="choice-dot"></span><span>Áno, prídeme</span></label><label class="choice-card ${answers.attending === 'no' ? 'selected' : ''}"><input type="radio" name="attending" value="no" data-choice ${answers.attending === 'no' ? 'checked' : ''}><span class="choice-dot"></span><span>Nie, neprídeme</span></label></div>`;
  } else if (currentStep === 1) {
    const guests = Math.max(1, answers.guestCount);
    const heading = answers.attending === 'no' ? 'Za koho posielate odpoveď?' : 'Koľko vás príde?';
    const description = answers.attending === 'no' ? 'Uveďte mená osôb, za ktoré nám potvrdzujete neúčasť.' : 'Prosíme, uveďte celkový počet osôb, ktoré sa zúčastnia svadby.';
    const counterLabel = answers.attending === 'no' ? 'osoby v pozvánke' : 'osoby spolu';
    stepBody.innerHTML = `<p class="eyebrow">TEŠÍME SA NA KAŽDÉHO Z VÁS</p><h3 class="step-title">${heading}</h3><p class="step-description">${description}</p>${counter('guestCount', counterLabel)}<label class="field-label companion-label">Mená všetkých osôb</label><p class="step-description name-list-note">Zadajte meno každej osoby samostatne.</p><div class="companion-fields">${Array.from({length: guests}, (_, i) => `<input class="form-field" type="text" maxlength="70" data-name-index="${i}" value="${escapeHTML(answers.guestNames[i] || '')}" placeholder="Meno osoby ${i + 1}" aria-label="Meno osoby ${i + 1}">`).join('')}</div>`;
  } else if (currentStep === 2) {
    stepBody.innerHTML = `<p class="eyebrow">CESTA NA OBRAD</p><h3 class="step-title">Ako sa k nám<br>dostanete?</h3><p class="step-description">Vyberte spôsob dopravy pre vašu skupinu. Autobus vás po oslave odvezie späť do Šúroviec.</p><div class="choice-list"><label class="choice-card ${answers.transport === 'bus' ? 'selected' : ''}"><input type="radio" name="transport" value="bus" data-choice ${answers.transport === 'bus' ? 'checked' : ''}><span class="choice-dot"></span><span>Autobus zo Šúroviec · odchod 14:15</span></label><label class="choice-card ${answers.transport === 'direct' ? 'selected' : ''}"><input type="radio" name="transport" value="direct" data-choice ${answers.transport === 'direct' ? 'checked' : ''}><span class="choice-dot"></span><span>Prídeme priamo ku kostolu</span></label></div>`;
  } else if (currentStep === 3) {
    stepBody.innerHTML = `<p class="eyebrow">PRE POHODLIE NAŠICH HOSTÍ</p><h3 class="step-title">Máte záujem<br>o ubytovanie?</h3><p class="step-description">Penzión Zemiansky dvor ponúka ubytovanie priamo v Šúrovciach. Dostupnosť izieb si, prosím, overte priamo v penzióne.</p><div class="choice-list"><label class="choice-card ${answers.lodging === 'yes' ? 'selected' : ''}"><input type="radio" name="lodging" value="yes" data-choice ${answers.lodging === 'yes' ? 'checked' : ''}><span class="choice-dot"></span><span>Áno, máme záujem</span></label><label class="choice-card ${answers.lodging === 'no' ? 'selected' : ''}"><input type="radio" name="lodging" value="no" data-choice ${answers.lodging === 'no' ? 'checked' : ''}><span class="choice-dot"></span><span>Nie, nebudeme potrebovať</span></label></div>`;
  } else if (currentStep === 4) {
    stepBody.innerHTML = `<p class="eyebrow">UBYTOVANIE</p><h3 class="step-title">Koľko osôb bude<br>mať záujem o ubytovanie?</h3>${counter('lodgingCount', 'osoby majú záujem o ubytovanie')}<div class="lodging-note">${svg('bed')}<p>${escapeHTML(wedding.accommodationDates)}<br>Informácie a rezervácia v sekcii Ubytovanie.</p></div>`;
  } else {
    stepBody.innerHTML = `<p class="eyebrow">POMÔŽE NÁM TO PRI PRÍPRAVE</p><h3 class="step-title">Ďalšie informácie</h3><p class="step-description">Odpoveď uložíme do našej súkromnej svadobnej tabuľky a použijeme ju na prípravu svadby.</p><label class="field-label" for="dietary">${svg('dress')} Máte nejaké alergie<br>alebo špeciálne stravovanie?</label><input class="form-field" id="dietary" name="dietary" data-text maxlength="180" value="${escapeHTML(answers.dietary)}" placeholder="Dopíšte, ak je potrebné"><label class="field-label" for="music">${svg('calendar')} Máte nejaké hudobné želanie?</label><input class="form-field" id="music" name="music" data-text maxlength="180" value="${escapeHTML(answers.music)}" placeholder="Pesnička, na ktorú si chcete zatancovať"><label class="field-label" for="message">${svg('mail')} Ešte nám chcete niečo odkázať?</label><textarea class="form-field" id="message" name="message" data-text rows="3" maxlength="500" placeholder="Odkaz pre nás">${escapeHTML(answers.message)}</textarea>`;
  }
  bindStepFields();
}

backButton.addEventListener('click', () => { if (currentStep > 0) { currentStep -= 1; renderStep(); } });
nextButton.addEventListener('click', () => {
  if (currentStep === 0 && !answers.attending) { setRsvpFeedback('Prosíme, vyberte, či sa svadby zúčastníte.'); return; }
  if (currentStep === 1) {
    const missingName = answers.guestNames.slice(0, answers.guestCount).findIndex(name => !String(name || '').trim());
    if (missingName !== -1) { setRsvpFeedback(`Prosíme, doplňte meno osoby ${missingName + 1}.`); stepBody.querySelector(`[data-name-index="${missingName}"]`)?.focus(); return; }
  }
  if ((answers.attending === 'no' && currentStep === 1) || currentStep === 5) { sendRsvp(); return; }
  if (currentStep === 2 && !answers.transport) { setRsvpFeedback('Prosíme, vyberte spôsob dopravy.'); return; }
  if (currentStep === 3 && !answers.lodging) { setRsvpFeedback('Prosíme, vyberte odpoveď k ubytovaniu.'); return; }
  if (currentStep === 3 && answers.lodging === 'no') currentStep = 5;
  else currentStep += 1;
  renderStep();
});
renderStep();

let installEvent;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installEvent = event;
  document.querySelector('#install-button').hidden = false;
});
document.querySelector('#install-button').addEventListener('click', async () => {
  if (!installEvent) return;
  installEvent.prompt();
  await installEvent.userChoice;
  installEvent = null;
  document.querySelector('#install-button').hidden = true;
});
if ('serviceWorker' in navigator && location.protocol !== 'file:') window.addEventListener('load', () => navigator.serviceWorker.register(new URL('../sw.js', import.meta.url)).catch(() => {}));
