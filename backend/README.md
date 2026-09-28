# S&M Wedding RSVP receiver

`Code.gs` appends each named guest to the private Google Sheet `S&M Wedding — RSVP odpovede`, tab `Odpovede`. Create/open this script from that sheet via **Extensions → Apps Script**. The `@OnlyCurrentDoc` annotation narrows its Google Sheets permission to that single bound spreadsheet. The sheet remains private; the web app responds only with a success/failure signal and does not provide a way to read sheet contents.

The public website's `src/config.js` contains the deployed Apps Script web app URL in `wedding.rsvpEndpoint`. The site only shows a success message after the receiver confirms that the response was saved.

The frontend sends one RSVP group. It creates one sheet row per guest and repeats the group's shared transport, accommodation, food, music, and note answers on each row. The diet/allergy field may contain health-related information; the couple has authorized storing those answers in this private sheet.
