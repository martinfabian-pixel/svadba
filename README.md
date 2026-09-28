# S&M Wedding

Mobilná svadobná webová stránka Simony a Martina v krémovom papierovom štýle. Používa pečať S&M z pozvánky, kaligrafický nápis s menami a krokový RSVP formulár.

## Zverejnenie cez GitHub Pages

V repozitári otvorte **Settings → Pages**, v časti **Build and deployment** zvoľte **Deploy from a branch**, potom vyberte vetvu `main` a priečinok `/(root)`. Po zverejnení bude stránka dostupná na:

https://martinfabian-pixel.github.io/svadba/

## Úprava obsahu

Všetky ľahko meniteľné údaje sú v `src/config.js`: mená, dátum, miesto obradu, adresy, časy a fotografie. Grafické súbory z pozvánky sú v `assets/`.

## RSVP

Prijímací skript je v `backend/Code.gs` a zapisuje do súkromnej tabuľky `S&M Wedding — RSVP odpovede`, hárok `Odpovede`. Je vytvorený cez **Rozšírenia → Apps Script** priamo z tejto tabuľky; anotácia `@OnlyCurrentDoc` obmedzuje jeho prístup iba na ňu. Adresa nasadenej webovej aplikácie je nastavená v `src/config.js`. Formulár zobrazí potvrdenie až po úspešnom uložení odpovede.

Formulár vytvorí jeden riadok pre každú pomenovanú osobu a uloží účasť, dopravu autobusom zo Šúroviec o 14:15 alebo príchod priamo ku kostolu, cestu autobusom späť, ubytovanie, stravovacie potreby, hudobné želanie a poznámku. Ostatné odpovede skupiny sa opakujú pri každom jej mene. Verejný prijímač prijíma iba nové odpovede; obsah tabuľky hosťom nesprístupňuje. Nasadenie spúšťa skript pod účtom vlastníka, hostia sa prihlasovať nemusia.

Fotografie sú zatiaľ ilustračné.
