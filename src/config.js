// Údaje o svadbe upravujte na jednom mieste.
const venuePhotos = [
  { src: 'https://lareunion.sk/wp-content/uploads/2025/05/LaReunion-svadby-zemiansky-dvor-surovce-6-e1747219811393.jpeg', alt: 'Svadobná hostina v Zemianskom dvore s dlhým slávnostne prestretým stolom' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/05/LaReunion-svadby-zemiansky-dvor-surovce-svadobna-sala3-e1747645244544.jpeg', alt: 'Svadobná sála v Zemianskom dvore s elegantnou výzdobou' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/05/LaReunion-svadby-zemiansky-dvor-surovce-31-e1747219865645.jpeg', alt: 'Slávnostne prestretý svadobný stôl v Zemianskom dvore' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/05/LaReunion-svadby-zemiansky-dvor-surovce-37.jpeg', alt: 'Záhradný svadobný obrad v areáli Zemianskeho dvora' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/05/LaReunion-svadbyzemiansky-dvor-surovce-7-e1747219913982.jpeg', alt: 'Záhrada a exteriér Zemianskeho dvora v Šúrovciach' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/03/manzelska-izba-penzion-zemiansky-dvor-surovce-2.jpeg', alt: 'Manželská izba v Penzióne Zemiansky dvor' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/03/apartman-lareunion-penzion-zemiansky-dvor-surovce-8.jpeg', alt: 'Apartmán v Penzióne Zemiansky dvor' },
  { src: 'https://lareunion.sk/wp-content/uploads/2025/05/LaReunion-svadby-zemiansky-dvor-surovce-32.jpeg', alt: 'Interiér svadobného priestoru v Zemianskom dvore' },
];

export const wedding = {
  names: 'Simona Sarmírová a Martin Fabian',
  nameFirst: 'Simona Sarmírová',
  nameSecond: 'Martin Fabian',
  date: '2027-04-30T00:00:00+02:00',
  dateLabel: '30. apríla 2027',
  locationLabel: 'Kostole sv. Jakuba v Trnave',
  locationShort: 'Trnava',
  locationShortLocative: 'Trnave',
  gatheringTime: '14:00',
  gatheringPlace: 'Šúrovce · miesto nástupu na autobus doplníme',
  ceremony: {
    name: 'Kostol sv. Jakuba',
    address: 'Námestie sv. Mikuláša, 917 01 Trnava',
    time: '15:00',
    maps: 'https://maps.google.com/?q=Kostol+sv.+Jakuba,+Trnava',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kostol_sv._Jakuba_star%C5%A1ieho.jpg/960px-Kostol_sv._Jakuba_star%C5%A1ieho.jpg',
    photoCreditUrl: 'https://commons.wikimedia.org/wiki/File:Kostol_sv._Jakuba_star%C5%A1ieho.jpg',
  },
  reception: {
    name: 'Penzión Zemiansky dvor',
    address: 'Krakovská 67, 919 25 Šúrovce',
    time: 'Po obrade',
    maps: 'https://maps.google.com/?q=Penzion+Zemiansky+dvor,+Krakovska+67,+Surovce',
    website: 'https://lareunion.sk/penzion-zemiansky-dvor-surovce/',
    heroPhoto: venuePhotos[0],
    photos: venuePhotos,
  },
  rsvpDeadline: 'Dátum potvrdenia doplníme',
  accommodationDates: 'z 30. apríla na 1. mája 2027',
  accommodationName: 'Penzión Zemiansky dvor',
  accommodationAddress: 'Krakovská 67, 919 25 Šúrovce · 9 izieb',
  accommodationInfo: 'Penzión ponúka ubytovanie priamo v areáli. Dostupnosť a rezerváciu izieb si, prosím, overte priamo v penzióne.',
  accommodationUrl: 'https://www.penzionzemianskydvor.sk/ubytovanie/',
  contactEmail: '', // Doplňte až po výbere spôsobu prijímania RSVP odpovedí.
};
