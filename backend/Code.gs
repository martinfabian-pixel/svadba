/**
 * @OnlyCurrentDoc
 */
const SPREADSHEET_ID = '1YwMSO4GFhce3ItK6eM8nawM5J20jQKTeKpBKAJ1Otvo';
const RESPONSE_SHEET = 'Odpovede';

function doPost(e) {
  try {
    const raw = e && e.parameter && e.parameter.payload;
    if (!raw) throw new Error('Missing payload');

    const data = JSON.parse(raw);

    // Quietly discard simple bot submissions without adding rows.
    if (String(data.website || '').trim()) return reply_(true);

    const names = Array.isArray(data.guestNames)
      ? data.guestNames.map(function (name) { return cleanText_(name, 70); })
      : [];
    if (!names.length || names.length > 12 || names.some(function (name) { return !name; })) throw new Error('Invalid guest names');

    const attendance = data.attendance === 'yes' ? 'Áno' : data.attendance === 'no' ? 'Nie' : '';
    if (!attendance) throw new Error('Invalid attendance');

    const transport = attendance === 'Áno'
      ? data.transport === 'bus' ? 'Autobus zo Šúroviec o 14:15' : data.transport === 'direct' ? 'Priamo ku kostolu' : ''
      : '';
    if (attendance === 'Áno' && !transport) throw new Error('Invalid transport');

    const returnBus = attendance === 'Áno' && data.transport === 'bus' ? 'Áno' : attendance === 'Áno' ? 'Nie' : '';
    if (attendance === 'Áno' && !['yes', 'no'].includes(data.lodging)) throw new Error('Invalid accommodation answer');
    const lodgingCount = Math.floor(Number(data.lodgingCount) || 1);
    if (attendance === 'Áno' && data.lodging === 'yes' && (lodgingCount < 1 || lodgingCount > names.length)) throw new Error('Invalid accommodation count');
    const lodging = attendance === 'Áno'
      ? data.lodging === 'yes' ? 'Áno (' + lodgingCount + ' os. v skupine)' : 'Nie'
      : '';
    const dietary = cleanText_(data.dietary, 180);
    const music = cleanText_(data.music, 180);
    const note = cleanText_(data.message, 500);
    const rows = names.map(function (name) {
      return [new Date(), sheetText_(name), attendance, transport, returnBus, lodging,
        sheetText_(dietary), sheetText_(music), sheetText_(note)];
    });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(RESPONSE_SHEET);
      if (!sheet) throw new Error('Response sheet was not found');
      const firstRow = sheet.getLastRow() + 1;
      sheet.getRange(firstRow, 1, rows.length, rows[0].length).setValues(rows);
      sheet.getRange(firstRow, 1, rows.length, 1).setNumberFormat('d. m. yyyy hh:mm');
    } finally {
      lock.releaseLock();
    }

    return reply_(true);
  } catch (error) {
    console.error('RSVP save failed: ' + error.message);
    return reply_(false);
  }
}

function cleanText_(value, maxLength) {
  return String(value || '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, maxLength);
}

function sheetText_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function reply_(ok) {
  const message = JSON.stringify({ type: 'sm-wedding-rsvp', ok: Boolean(ok) });
  const html = '<!doctype html><html><body><script>parent.postMessage(' + message + ', "*");</script></body></html>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doGet() {
  return HtmlService.createHtmlOutput('S&M RSVP receiver is ready.');
}
