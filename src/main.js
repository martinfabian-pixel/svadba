import { wedding } from './config.js?v=5';

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

const wreath = `<svg class="wreath-mark" viewBox="0 0 220 220" role="img" aria-label="Monogram S a M vo venci">
  <circle cx="110" cy="110" r="101" fill="none" stroke="currentColor" stroke-width=".8" opacity=".42"/>
  <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M103 183C48 161 29 112 40 69c6-24 20-39 42-52M117 183c55-22 74-71 63-114-6-24-20-39-42-52"/>
    <path d="M57 137c-20-4-31-15-34-34 20 2 31 13 34 34Zm-8-37C30 92 23 78 29 60c17 7 24 20 20 40Zm8-36C43 51 41 36 48 20c14 11 18 26 9 44Zm24-27C69 22 72 9 84 0c9 14 8 27-3 37Zm82 100c20-4 31-15 34-34-20 2-31 13-34 34Zm8-37c19-8 26-22 20-40-17 7-24 20-20 40Zm-8-36c14-13 16-28 9-44-14 11-18 26-9 44Zm-24-27c12-22 9-35-3-44-9 14-8 27 3 44Z"/>
  </g>
  <text x="110" y="94" text-anchor="middle" fill="currentColor" font-family="'Cormorant Garamond', Georgia, serif" font-size="47" font-weight="400">S</text>
  <path d="M88 109h44" stroke="currentColor" stroke-width=".8" opacity=".7"/>
  <text x="110" y="160" text-anchor="middle" fill="currentColor" font-family="'Cormorant Garamond', Georgia, serif" font-size="47" font-weight="400">M</text>
</svg>`;

const branch = `<svg class="leaf-divider" viewBox="0 0 220 62" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 48C66 42 113 28 205 13M44 43c-3-13-12-20-27-21 2 14 11 21 27 21Zm27-8c-2-13-10-20-24-23 1 14 9 22 24 23Zm27-7c0-13-7-21-20-26-1 14 6 22 20 26Zm28-6c2-13-3-22-15-29-4 13 1 23 15 29Zm27-4c5-12 3-22-7-32-7 12-6 23 7 32Zm-80 22c1 12 8 19 22 22-1-13-9-20-22-22Zm30-7c4 12 13 17 27 17-4-13-13-18-27-17Zm30-8c7 11 17 14 31 10-7-12-17-15-31-10Z"/>
</svg>`;
const menu = [
  ['calendar', 'Harmonogram dňa', '#program'],
  ['pin', 'Miesto svadby', '#miesto'],
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
    <a class="header-brand" href="#home" aria-label="Svadba Simony a Martina — úvod"><span class="header-monogram">S<span>&</span>M</span></a>
    <a class="header-date" href="#rsvp">${escapeHTML(wedding.dateLabel)}</a>
    <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Otvoriť navigáciu" aria-expanded="false">${svg('menu')}</button>
  </header>
  <nav class="menu-panel" id="menu-panel" aria-label="Hlavná navigácia" hidden>
    <div class="menu-panel-top"><span class="menu-script">S <i>&</i> M</span><button class="menu-close" id="menu-close" type="button" aria-label="Zavrieť navigáciu">${svg('close')}</button></div>
    <div class="menu-panel-links">${menu.map(([icon, label, href]) => `<a class="menu-link" href="${href}">${svg(icon)}<span>${label}</span><b>${svg('arrow')}</b></a>`).join('')}</div>
    <a class="button button-olive menu-rsvp" href="#rsvp">Potvrdiť účasť ${svg('arrow')}</a>
  </nav>
  <main>
    <section id="home" class="invitation paper-section">
      <span class="corner-leaf corner-top-left">${branch}</span><span class="corner-leaf corner-bottom-right">${branch}</span>
      <div class="invitation-inner">
        ${wreath}
        <h1 class="couple-names"><span>${escapeHTML(wedding.nameFirst)}</span><i>a</i><span>${escapeHTML(wedding.nameSecond)}</span></h1>
        ${branch}
        <p class="invite-kicker">S radosťou vám oznamujeme,<br>že uzatvárame sviatosť manželstva</p>
        <p class="wedding-date">${escapeHTML(wedding.dateLabel)}</p>
        <p class="wedding-place">v ${escapeHTML(wedding.locationLabel)}</p>
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

    <section id="program" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">TEŠÍME SA NA KAŽDÝ OKAMIH</p><h2>Harmonogram dňa</h2>${branch}<p class="section-lead">Časy ešte doladíme a doplníme.</p><div class="schedule-list"><article><time>13:30</time><span class="schedule-dot"></span><div><h3>Príchod hostí</h3><p>Privítanie a chvíľa na stretnutie.</p></div></article><article><time>14:00</time><span class="schedule-dot"></span><div><h3>Svadobný obrad</h3><p>Kostol sv. Jakuba v Trnave</p></div></article><article><time>15:00</time><span class="schedule-dot"></span><div><h3>Gratulácie a spoločné fotografie</h3><p>Prvé spoločné chvíle po obrade.</p></div></article><article><time>16:00</time><span class="schedule-dot"></span><div><h3>Svadobná hostina</h3><p>Miesto a čas upresníme.</p></div></article><article><time>19:00</time><span class="schedule-dot"></span><div><h3>Prvý tanec a zábava</h3><p>Tešíme sa na parket plný priateľov.</p></div></article></div></div></section>

    <section id="miesto" class="place-section"><div class="place-photo" role="img" aria-label="Kostol svätého Jakuba v Trnave"></div><div class="place-copy"><p class="eyebrow">KDE SA STRETNEME</p><h2>Miesto svadby</h2><p class="place-name">${escapeHTML(wedding.ceremony.name)} v ${escapeHTML(wedding.locationShortLocative || 'Trnave')}</p><p>${escapeHTML(wedding.ceremony.address).replace(', ', '<br>')}</p><a class="button button-outline" href="${wedding.ceremony.maps}" target="_blank" rel="noreferrer">${svg('pin')} Zobraziť na mape</a><div class="place-thumbs">${wedding.photos.slice(0, 4).map(photo => `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`).join('')}</div></div></section>

    <section id="ubytovanie" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">PRE POHODLIE NAŠICH HOSTÍ</p><h2>Ubytovanie</h2>${branch}<p class="section-lead">Pre našich hostí sme zabezpečili ubytovanie. Dajte nám, prosím, vedieť, či ho budete potrebovať.</p><div class="detail-card">${svg('bed')}<div><h3>${wedding.accommodationName}</h3><p>${wedding.accommodationDates}</p><p>${wedding.accommodationAddress}</p></div></div><a class="text-link" href="#rsvp">Odpovedať v RSVP ${svg('arrow')}</a></div></section>

    <section id="doprava" class="content-section soft-section"><div class="section-inner"><p class="eyebrow">CESTA ZA NAMI</p><h2>Ako sa dostať</h2>${branch}<p class="section-lead">Obrad sa koná v centre Trnavy. Podrobnosti o parkovaní a doprave doplníme čoskoro.</p><a class="button button-outline" href="${wedding.ceremony.maps}" target="_blank" rel="noreferrer">${svg('route')} Otvoriť mapu</a></div></section>

    <section id="dress-code" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">SLÁVNOSTNE A S POHODLÍM</p><h2>Dress code</h2>${branch}<p class="section-lead">Zvoľte si oblečenie, v ktorom sa budete cítiť slávnostne a pohodlne. Ďalšie odporúčania doplníme.</p></div></section>

    <section id="darceky" class="content-section soft-section"><div class="section-inner"><p class="eyebrow">VAŠA PRÍTOMNOSŤ JE DAROM</p><h2>Darčeky</h2>${branch}<p class="section-lead">Najväčším darom pre nás bude, že tento deň oslávite spolu s nami.</p></div></section>

    <section id="pribeh" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">DVA PRÍBEHY, JEDNA SPOLOČNÁ CESTA</p><h2>Náš príbeh</h2>${branch}<p class="section-lead">Sem čoskoro doplníme pár slov o tom, ako sa začal náš spoločný príbeh.</p></div></section>

    <section id="galeria" class="gallery-section soft-section"><div class="section-inner"><p class="eyebrow">NAŠE SPOLOČNÉ CHVÍLE</p><h2>Galéria</h2><p class="section-lead">Po svadbe sem pribudnú fotografie z nášho dňa.</p><div class="gallery-grid">${wedding.photos.map((photo, i) => `<figure class="gallery-item"><img src="${photo.src}" alt="${photo.alt}" loading="lazy"><figcaption>${String(i + 1).padStart(2, '0')}</figcaption></figure>`).join('')}</div></div></section>

    <section id="kontakt" class="content-section paper-section"><div class="section-inner"><p class="eyebrow">BUDEME RADI, KEĎ SA OZVETE</p><h2>Kontakt</h2>${branch}<p class="section-lead">Ak máte otázky, dajte nám vedieť. Kontaktné údaje doplníme.</p>${wedding.contactEmail ? `<a class="text-link" href="mailto:${escapeHTML(wedding.contactEmail)}">${escapeHTML(wedding.contactEmail)} ${svg('arrow')}</a>` : '<span class="contact-placeholder">Kontaktný e-mail doplníme.</span>'}</div></section>

    <footer class="site-footer paper-section"><div>${wreath}<p class="footer-script">S <i>&</i> M</p><p>Tešíme sa na vás<br>${escapeHTML(wedding.dateLabel)} v ${escapeHTML(wedding.locationShortLocative || 'Trnave')}</p><a class="text-link" href="#home">Späť na úvod ↑</a></div><small>VYTVORENÉ S LÁSKOU</small></footer>
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
document.querySelector('#menu-close').addEventListener('click', closeMenu);
menuPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const countdownTarget = new Date(wedding.date).getTime();
function updateCountdown() {
  const remaining = Math.max(0, countdownTarget - Date.now());
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  document.querySelector('#countdown').innerHTML = values.map((value, index) => `${index ? '<i>·</i>' : ''}<div><strong>${String(value).padStart(2, '0')}</strong><span>${['Dní', 'Hodín', 'Minút', 'Sekúnd'][index]}</span></div>`).join('');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const answers = { attending: 'yes', guestCount: 2, guestNames: ['', ''], lodging: 'yes', lodgingCount: 2, dietary: '', music: '', message: '' };
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
  return `<div class="guest-counter"><button type="button" data-count="${field}" data-delta="-1" aria-label="Odobrať počet" ${value <= 1 ? 'disabled' : ''}>${svg('minus')}</button><strong>${value}</strong><button type="button" data-count="${field}" data-delta="1" aria-label="Pridať počet">${svg('plus')}</button></div><p class="counter-caption">${label}</p>`;
}

function showThanks() {
  rsvpCard.classList.add('is-thanks');
  rsvpCard.innerHTML = `<div class="thanks-view">${wreath}<p class="thanks-script">Ďakujeme!</p><p class="eyebrow">VAŠA ODPOVEĎ SA ULOŽILA</p><p class="thanks-copy">Veľmi sa tešíme, že náš deň budeme môcť prežiť spolu s vami.</p><p class="local-note">Táto verzia zatiaľ ukladá RSVP v tomto zariadení.</p><a class="button button-olive" href="#home">Späť na úvod</a></div>`;
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
    if (field === 'guestCount') answers.guestNames.length = Math.max(0, answers.guestCount - 1);
    renderStep();
  }));
}

function renderStep() {
  stepCount.textContent = `${currentStep + 1} / 5`;
  progressFill.style.width = `${(currentStep + 1) * 20}%`;
  backButton.hidden = currentStep === 0;
  nextButton.innerHTML = currentStep === 4 ? `Odoslať odpoveď ${svg('arrow')}` : `Pokračovať ${svg('arrow')}`;
  if (currentStep === 0) {
    stepBody.innerHTML = `<p class="eyebrow">RADI BY SME VEDELI</p><h3 class="step-title">Prídete na<br>našu svadbu?</h3><p class="step-description">Prosíme, vyberte jednu možnosť.</p><div class="choice-list"><label class="choice-card ${answers.attending === 'yes' ? 'selected' : ''}"><input type="radio" name="attending" value="yes" data-choice ${answers.attending === 'yes' ? 'checked' : ''}><span class="choice-dot"></span><span>Áno, prídeme</span></label><label class="choice-card ${answers.attending === 'no' ? 'selected' : ''}"><input type="radio" name="attending" value="no" data-choice ${answers.attending === 'no' ? 'checked' : ''}><span class="choice-dot"></span><span>Nie, neprídeme</span></label></div>`;
  } else if (currentStep === 1) {
    const companions = Math.max(0, answers.guestCount - 1);
    stepBody.innerHTML = `<p class="eyebrow">TEŠÍME SA NA KAŽDÉHO Z VÁS</p><h3 class="step-title">Koľko vás príde?</h3><p class="step-description">Prosím, uveďte celkový počet osôb, ktoré sa zúčastnia svadby.</p>${counter('guestCount', 'osoby spolu, vrátane vás')}<label class="field-label companion-label">Mená hostí (okrem vás)</label><div class="companion-fields">${Array.from({length: companions}, (_, i) => `<input class="form-field" type="text" maxlength="70" data-name-index="${i}" value="${escapeHTML(answers.guestNames[i] || '')}" placeholder="Meno hosťa ${i + 1}" ${i === 0 ? 'aria-label="Meno hosťa 1"' : `aria-label="Meno hosťa ${i + 1}"`}>`).join('')}</div>`;
  } else if (currentStep === 2) {
    stepBody.innerHTML = `<p class="eyebrow">PRE POHODLIE NAŠICH HOSTÍ</p><h3 class="step-title">Máte záujem<br>o ubytovanie?</h3><p class="step-description">Pre našich hostí sme zabezpečili ubytovanie. Prosím, dajte nám vedieť, či máte záujem.</p><div class="choice-list"><label class="choice-card ${answers.lodging === 'yes' ? 'selected' : ''}"><input type="radio" name="lodging" value="yes" data-choice ${answers.lodging === 'yes' ? 'checked' : ''}><span class="choice-dot"></span><span>Áno, máme záujem</span></label><label class="choice-card ${answers.lodging === 'no' ? 'selected' : ''}"><input type="radio" name="lodging" value="no" data-choice ${answers.lodging === 'no' ? 'checked' : ''}><span class="choice-dot"></span><span>Nie, nebudeme potrebovať</span></label></div>`;
  } else if (currentStep === 3) {
    stepBody.innerHTML = `<p class="eyebrow">UBYTOVANIE</p><h3 class="step-title">Koľko osôb bude<br>potrebovať ubytovanie?</h3>${counter('lodgingCount', 'osoby potrebujú ubytovanie')}<div class="lodging-note">${svg('bed')}<p>Ubytovanie je zabezpečené<br>${escapeHTML(wedding.accommodationDates)}.<br>Bližšie informácie nájdete v sekcii Ubytovanie.</p></div>`;
  } else {
    stepBody.innerHTML = `<p class="eyebrow">POMÔŽE NÁM TO PRI PRÍPRAVE</p><h3 class="step-title">Ďalšie informácie</h3><p class="step-description">Pomôže nám to lepšie pripraviť svadobnú hostinu.</p><label class="field-label" for="dietary">${svg('dress')} Máte nejaké alergie<br>alebo špeciálne stravovanie?</label><input class="form-field" id="dietary" name="dietary" data-text maxlength="180" value="${escapeHTML(answers.dietary)}" placeholder="Dopíšte, ak je potrebné"><label class="field-label" for="music">${svg('calendar')} Máte nejaké hudobné želanie?</label><input class="form-field" id="music" name="music" data-text maxlength="180" value="${escapeHTML(answers.music)}" placeholder="Pesnička, na ktorú si chcete zatancovať"><label class="field-label" for="message">${svg('mail')} Ešte nám chcete niečo odkázať?</label><textarea class="form-field" id="message" name="message" data-text rows="3" maxlength="500" placeholder="Odkaz pre nás">${escapeHTML(answers.message)}</textarea>`;
  }
  bindStepFields();
}

backButton.addEventListener('click', () => { if (currentStep > 0) { currentStep -= 1; renderStep(); } });
nextButton.addEventListener('click', () => {
  if (currentStep < 4) { currentStep += 1; renderStep(); return; }
  try {
    const saved = JSON.parse(localStorage.getItem('sm-wedding-rsvps') || '[]');
    saved.push({ ...answers, guestNames: [...answers.guestNames], createdAt: new Date().toISOString() });
    localStorage.setItem('sm-wedding-rsvps', JSON.stringify(saved));
  } catch { /* The thank-you screen remains available if local storage is disabled. */ }
  if (wedding.contactEmail) {
    const details = `Meno: ${wedding.names}\nÚčasť: ${answers.attending === 'yes' ? 'Áno' : 'Nie'}\nPočet hostí: ${answers.guestCount}\nMená hostí: ${answers.guestNames.filter(Boolean).join(', ') || '—'}\nUbytovanie: ${answers.lodging === 'yes' ? `${answers.lodgingCount} osoby` : 'Nie'}\nStrava: ${answers.dietary || '—'}\nHudba: ${answers.music || '—'}\nOdkaz: ${answers.message || '—'}`;
    window.location.href = `mailto:${encodeURIComponent(wedding.contactEmail)}?subject=${encodeURIComponent(`Svadobné RSVP — ${wedding.names}`)}&body=${encodeURIComponent(details)}`;
  }
  showThanks();
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
