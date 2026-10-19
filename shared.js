// Shared settings and helpers for all pages.
const SPECIALTIES = [
  { id: 'medicine',     name: 'Medicine',      color: '#4f8cff' },
  { id: 'surgery',      name: 'Surgery',       color: '#ff6b7a' },
  { id: 'paediatrics',  name: 'Paediatrics',   color: '#ffb547' },
  { id: 'gynaecology',  name: 'Gynaecology',   color: '#f07be0' },
  { id: 'ophthalmology',name: 'Ophthalmology', color: '#35d0c0' },
  { id: 'ent',          name: 'ENT',           color: '#a58bff' },
  { id: 'dental',       name: 'Dental',        color: '#6fe39b' },
  { id: 'nephrology',   name: 'Nephrology',    color: '#ff9650' },
  { id: 'psychiatry',   name: 'Psychiatry',    color: '#5cc8ff' }
];
const DUTY_DAY_STARTS_AT = 7; // on-call day changes at 07:00

const pad = n => String(n).padStart(2, '0');
const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parseYmd = s => { const p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); };
// The on-call "day" that is active right now (before 07:00 it is still yesterday's rota).
const dutyDate = (now) => ymd(new Date((now || new Date()).getTime() - DUTY_DAY_STARTS_AT * 3600 * 1000));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function initFirebase() {
  const c = window.FIREBASE_CONFIG;
  if (!window.firebase || !c || !c.apiKey || c.apiKey.indexOf('PASTE') === 0) return null;
  if (!firebase.apps.length) firebase.initializeApp(c);
  return firebase.firestore();
}
function setupMessage() {
  return '<div class="notice"><h2>Firebase isn’t connected yet</h2>' +
    '<p>Open <b>firebase-config.js</b> and paste your Firebase web-app settings, then reload this page. The steps are in README.md.</p></div>';
}
