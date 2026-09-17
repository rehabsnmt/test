@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* =========================================================
   1. GLOBAL
   ========================================================= */

:root {
  --primary: #0284c7;
  --primary-hover: #0369a1;
  --primary-light: #f0f9ff;

  --accent: #e11d48;
  --accent-light: #fff1f2;

  --text-dark: #0f172a;
  --text-body: #475569;
  --border: #e2e8f0;

  --bg-page: #f8fafc;
  --surface: #ffffff;

  --shadow-sm: 0 1px 2px rgba(2, 132, 199, .05);
  --shadow-card: 0 4px 20px rgba(2, 132, 199, .04);
  --shadow-hover: 0 12px 30px rgba(2, 132, 199, .08);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-pill: 50px;

  --transition: all .2s cubic-bezier(.4, 0, .2, 1);
}

/* =========================================================
   2. RESET
   ========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;

  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  line-height: 1.5;

  color: var(--text-body);
  background: var(--bg-page);

  -webkit-font-smoothing: antialiased;
}

button,
input,
select,
textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

/* Nội dung thông thường không tự ngắt */
h1,
h2,
h3,
h4,
h5,
h6,
label,
button,
a,
th,
td,
.nav-item,
.btn-login,
.btn-primary {
  overflow-wrap: normal;
  word-break: normal;
}

/* Các đoạn văn mới được phép xuống dòng */
p {
  overflow-wrap: break-word;
  word-break: normal;
}

/* =========================================================
   3. HEADER
   ========================================================= */

header {
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 1rem;
  padding: .8rem 4%;

  background: rgba(255, 255, 255, .95);
  border-bottom: 1px solid rgba(0, 0, 0, .03);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  transition: var(--transition);
}

/* =========================================================
   4. LOGO
   ========================================================= */

.logo-link {
  display: flex;
  align-items: center;

  min-width: 0;
  flex-shrink: 1;
  gap: 10px;

  color: inherit;
  text-decoration: none;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo img {
  width: auto;
  height: clamp(28px, 3.5vw, 42px);

  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 0;
}

.logo-text div {
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;

  line-height: 1.1;
}

#logo-line-1 {
  color: var(--text-dark);
  font-size: clamp(.8rem, 1.1vw, .95rem);
  font-weight: 700;
}

#logo-line-2 {
  margin-top: .2em;

  color: var(--text-body);
  font-size: clamp(.6rem, .85vw, .75rem);
  font-weight: 600;
}

#logo-line-3 {
  margin-top: .1em;

  color: var(--text-body);
  font-size: clamp(.55rem, .75vw, .65rem);
  font-weight: 500;
}

/* =========================================================
   5. NAVIGATION
   ========================================================= */

.nav-links {
  display: flex;
  align-items: center;

  gap: clamp(.8rem, 1.5vw, 2rem);

  flex-shrink: 0;
}

.nav-item {
  position: relative;

  padding: .4rem 0;

  color: var(--text-body);
  font-size: clamp(.75rem, 1vw, .85rem);
  font-weight: 500;

  text-decoration: none;
  white-space: nowrap;

  transition: var(--transition);
}

.nav-item::after {
  content: '';

  position: absolute;
  left: 0;
  bottom: 0;

  width: 0;
  height: 2px;

  background: var(--primary);
  border-radius: 2px;

  transition: var(--transition);
}

.nav-item:hover {
  color: var(--text-dark);
}

.nav-item:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;

  padding: .4rem;

  border: 0;
  background: transparent;

  color: var(--text-dark);
  font-size: 1.2rem;

  cursor: pointer;
}

/* =========================================================
   6. BUTTONS
   ========================================================= */

.btn-login,
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: max-content;
  padding: .5rem 1rem;

  border: 0;
  border-radius: var(--radius-pill);

  background: var(--primary);
  color: var(--surface);

  font-size: clamp(.75rem, 1vw, .85rem);
  font-weight: 500;

  text-decoration: none;
  white-space: nowrap;

  cursor: pointer;

  box-shadow: var(--shadow-sm);

  transition: var(--transition);
}

.btn-login:hover,
.btn-primary:hover {
  background: var(--primary-hover);
  box-shadow: 0 4px 10px rgba(2, 132, 199, .15);
  transform: translateY(-1px);
}

.btn-login:active,
.btn-primary:active {
  transform: translateY(0);
}

/* =========================================================
   7. MAIN
   ========================================================= */

main {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 4% 3rem;
}

/* Các nội dung khối chính căn giữa */
main > section,
main > .card,
main > .quick-links {
  margin-left: auto;
  margin-right: auto;
}

/* =========================================================
   8. QUICK LINKS
   ========================================================= */

.quick-links {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));

  gap: 1.5rem;
}

.quick-card {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-width: 0;
  padding: 2rem 1.5rem;

  border: 1px solid rgba(0, 0, 0, .02);
  border-radius: var(--radius-md);

  background: var(--surface);
  box-shadow: var(--shadow-card);

  text-decoration: none;

  transition: var(--transition);
}

.quick-card::before {
  content: '';

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 3px;

  background: var(--accent);

  transform: scaleX(0);
  transform-origin: left;

  transition: transform .4s ease;
}

.quick-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}

.quick-card:hover::before {
  transform: scaleX(1);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  margin-bottom: 1.2rem;

  flex-shrink: 0;

  border-radius: var(--radius-md);

  background: var(--primary-light);
  color: var(--primary);

  font-size: 1.3rem;

  transition: var(--transition);
}

.quick-card:hover .icon-wrapper {
  background: var(--primary);
  color: var(--surface);
  transform: scale(1.05);
}

.quick-card h3 {
  margin-bottom: .5rem;

  color: var(--text-dark);
  font-size: 1.05rem;
  font-weight: 600;

  white-space: nowrap;
}

.quick-card p {
  color: var(--text-body);
  font-size: .85rem;
  line-height: 1.5;

  text-align: justify;
}

/* =========================================================
   9. CARD
   ========================================================= */

.card {
  width: 100%;

  margin-bottom: 1.5rem;
  padding: 1.5rem;

  border-radius: var(--radius-md);

  background: var(--surface);
  box-shadow: var(--shadow-card);
}

/* =========================================================
   10. TABLE
   ========================================================= */

.table-responsive {
  width: 100%;

  margin-top: 1rem;

  overflow-x: auto;
  overflow-y: hidden;

  border: 1px solid var(--border);
  border-radius: var(--radius-sm);

  -webkit-overflow-scrolling: touch;
}

table {
  width: 100%;
  min-width: max-content;

  border-collapse: collapse;

  text-align: center;
}

th,
td {
  padding: .75rem 1rem;

  border-bottom: 1px solid var(--border);

  font-size: .85rem;

  white-space: nowrap;
  vertical-align: middle;
}

th {
  background: var(--bg-page);

  color: var(--text-dark);

  font-size: .75rem;
  font-weight: 600;

  letter-spacing: .03em;
  text-transform: uppercase;

  text-align: center;
}

td {
  text-align: center;
}

tr:last-child td {
  border-bottom: 0;
}

/* Cột cần chứa văn bản dài có thể cho xuống dòng */
td.text-long,
td.description,
td.note,
.text-long {
  white-space: normal;
  min-width: 220px;

  text-align: justify;
  overflow-wrap: break-word;
}

/* =========================================================
   11. FORM
   ========================================================= */

input[type='number'],
input[type='text'],
input[type='password'],
input[type='email'],
select,
textarea {
  width: 100%;

  padding: .5rem;

  border: 1px solid var(--border);
  border-radius: var(--radius-sm);

  background: var(--bg-page);
  color: var(--text-dark);

  font-size: .85rem;

  transition: var(--transition);
}

input[type='number'] {
  max-width: 70px;
  text-align: center;
}

input:focus,
select:focus,
textarea:focus {
  outline: 0;

  border-color: var(--primary);

  background: var(--surface);

  box-shadow: 0 0 0 2px rgba(2, 132, 199, .15);
}

textarea {
  min-height: 100px;
  resize: vertical;

  line-height: 1.5;
}

/* =========================================================
   12. FOOTER
   ========================================================= */

footer {
  margin-top: auto;
  padding: 1.5rem 1rem;

  overflow: hidden;

  border-top: 1px solid var(--border);

  background: var(--surface);
  color: var(--text-body);

  text-align: center;
}

footer p {
  margin: 0;

  overflow: hidden;

  font-size: clamp(.55rem, 2.5vw, .8rem);

  white-space: nowrap;
  text-overflow: ellipsis;
}

/* =========================================================
   13. COMMON COMPONENTS
   ========================================================= */

.author-info {
  display: none !important;
}

body.is-logged-in .author-info {
  display: flex !important;
  align-items: center;
  gap: 6px;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 8px;
  padding-top: 12px;

  border-top: 1px dashed var(--border);
}

.btn-warning,
.btn-danger {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: max-content;
  padding: 5px 10px;

  border: 0;
  border-radius: var(--radius-sm);

  color: #fff;

  font-size: .75rem;
  font-weight: 500;

  white-space: nowrap;

  cursor: pointer;

  transition: var(--transition);
}

.btn-warning {
  background: #f59e0b;
}

.btn-warning:hover {
  background: #d97706;
}

.btn-danger {
  background: var(--accent);
}

.btn-danger:hover {
  background: #be123c;
}

.btn-danger:disabled {
  opacity: .6;
  cursor: not-allowed;
}

/* =========================================================
   14. MODAL
   ========================================================= */

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px;

  background: rgba(15, 23, 42, .6);

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.modal-content {
  position: relative;

  width: 100%;
  max-width: 400px;

  padding: 25px;

  border-radius: var(--radius-md);

  background: var(--surface);
  box-shadow: var(--shadow-hover);

  text-align: center;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  border: 1px solid var(--border);
  border-radius: 50%;

  background: var(--bg-page);
  color: var(--text-body);

  cursor: pointer;

  transition: var(--transition);
}

.modal-close:hover {
  background: var(--border);
  color: var(--text-dark);
}

.hidden {
  display: none !important;
}

/* =========================================================
   15. RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {

  header {
    gap: .8rem;
    padding: .8rem 4%;
  }

  .menu-toggle {
    display: block;
    flex-shrink: 0;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 0;
    padding: .5rem 0;

    border-top: 1px solid var(--border);

    background: var(--surface);
    box-shadow: 0 10px 15px rgba(0, 0, 0, .05);

    opacity: 0;
    visibility: hidden;

    transform: translateY(-10px);

    transition: var(--transition);
  }

  .nav-links.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-item {
    display: block;

    width: 100%;
    padding: .8rem 1.5rem;

    font-size: .85rem;

    white-space: nowrap;
  }

  .nav-item::after {
    display: none;
  }

  .btn-login {
    width: calc(100% - 3rem);

    margin: .5rem 1.5rem;
  }
}

/* =========================================================
   16. SMALL MOBILE
   ========================================================= */

@media (max-width: 480px) {

  main {
    padding-left: 3%;
    padding-right: 3%;
  }

  .quick-links {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .quick-card {
    padding: 1.5rem 1rem;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;

    margin-bottom: 1rem;

    font-size: 1.1rem;
  }

  .quick-card h3 {
    font-size: .95rem;
  }

  .quick-card p {
    font-size: .8rem;
  }

  th,
  td {
    padding: .5rem;

    font-size: .75rem;

    white-space: nowrap;
  }
}
