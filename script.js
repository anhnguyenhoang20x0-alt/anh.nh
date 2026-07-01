/**
 * Render toàn bộ nội dung trang từ data.js.
 * Không cần sửa file này khi thêm CV / bằng cấp mới — chỉ sửa data.js.
 */

const ICONS = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
};

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

function renderProfile() {
  document.getElementById("profile-name").textContent = PROFILE.name;
  document.getElementById("profile-role").textContent = PROFILE.title;
  document.getElementById("profile-bio").textContent = PROFILE.bio;
  document.getElementById("avatar-img").alt = `Ảnh chân dung ${PROFILE.name}`;
  document.getElementById("avatar-tag").textContent = PROFILE.tagline || PROFILE.title;
  document.title = `${PROFILE.name} — ${PROFILE.tagline || PROFILE.title}`;

  const contactRow = document.getElementById("contact-row");
  const items = [];

  if (PROFILE.email) {
    items.push(`<a class="pill" href="mailto:${escapeHtml(PROFILE.email)}">${ICONS.mail}${escapeHtml(PROFILE.email)}</a>`);
  }
  if (PROFILE.phone) {
    const telHref = PROFILE.phone.replace(/\s+/g, "");
    items.push(`<a class="pill" href="tel:${escapeHtml(telHref)}">${ICONS.phone}${escapeHtml(PROFILE.phone)}</a>`);
  }
  if (PROFILE.location) {
    items.push(`<span class="pill">${ICONS.pin}${escapeHtml(PROFILE.location)}</span>`);
  }
  if (PROFILE.socials) {
    Object.entries(PROFILE.socials).forEach(([label, url]) => {
      if (url) {
        items.push(`<a class="pill" href="${escapeHtml(url)}" target="_blank" rel="noopener">${ICONS.link}${escapeHtml(label)}</a>`);
      }
    });
  }
  contactRow.innerHTML = items.join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  document.getElementById("skills-count").textContent = `${SKILLS.length} kỹ năng`;
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-card">
      <span class="skill-name">${escapeHtml(s.name)}</span>
      <span class="skill-level">${escapeHtml(s.level)}</span>
    </div>`
  ).join("");
}

function renderCertificates() {
  const list = document.getElementById("cert-list");
  const countEl = document.getElementById("cert-count");

  if (!CERTIFICATES.length) {
    countEl.textContent = "0 mục";
    list.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        Chưa có bằng cấp nào được thêm.<br/>
        Cập nhật trong <code>data.js</code> → mục CERTIFICATES.
      </div>`;
    return;
  }

  countEl.textContent = `${CERTIFICATES.length} mục`;

  list.innerHTML = CERTIFICATES.map((c) => `
    <article class="cert-card" data-image="${escapeHtml(c.image)}" data-title="${escapeHtml(c.title)}" tabindex="0" role="button" aria-label="Xem ảnh ${escapeHtml(c.title)}">
      <div class="cert-thumb">
        <img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.title)}" loading="lazy" />
      </div>
      <div class="cert-body">
        <div class="cert-title">${escapeHtml(c.title)}</div>
        <div class="cert-meta">${escapeHtml(c.issuer)} · ${escapeHtml(c.year)}</div>
        <span class="cert-type">${escapeHtml(c.type)}</span>
      </div>
    </article>`
  ).join("");

  // lightbox interactions
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("open");
  }

  list.querySelectorAll(".cert-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(card.dataset.image, card.dataset.title));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(card.dataset.image, card.dataset.title);
      }
    });
  });
}

function setupLightboxClose() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const close = () => lightbox.classList.remove("open");
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProfile();
renderSkills();
renderCertificates();
setupLightboxClose();
