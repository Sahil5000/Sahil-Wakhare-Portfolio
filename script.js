(function () {
    const d = PORTFOLIO;
    const $ = (id) => document.getElementById(id);
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const get = (path) => path.split('.').reduce((o, k) => (o ? o[k] : ''), d);
    const icon = (v) => /^(https?:|\/|assets\/)/.test(v)
        ? `<img src="${esc(v)}" alt="" loading="lazy">`
        : `<i class="fa ${esc(v || 'fa-certificate')}" aria-hidden="true"></i>`;

    // Simple text bindings
    document.querySelectorAll('[data-bind]').forEach((el) => {
        const key = el.dataset.bind;
        // Honorific keeps its own case ("Er.") while the name stays uppercase
        const prefix = d.honorific ? `<span class="honorific">${esc(d.honorific)}</span> ` : '';
        if (key === 'name-upper') el.innerHTML = prefix + esc(d.name.toUpperCase());
        else if (key === 'fullName') el.innerHTML = prefix + esc(d.fullName);
        else el.textContent = get(key);
    });
    document.title = `${d.name} | Portfolio`;
    $('resumeBtn').href = d.resume;
    $('footerText').textContent = `${d.footerText} | Developed By ${d.name}`;

    // Hero chips + typing animation
    $('heroChips').innerHTML = d.heroChips.map((c) =>
        `<span>${/^https?:/.test(c.icon)
            ? `<img src="${esc(c.icon)}" alt="" aria-hidden="true">`
            : `<i class="fa ${esc(c.icon)}" aria-hidden="true"></i>`}${esc(c.label)}</span>`).join('');
    (function typeLoop(i = 0, len = 0, deleting = false) {
        const word = d.typedRoles[i % d.typedRoles.length];
        $('typed').textContent = word.slice(0, len);
        let next = deleting ? 40 : 80;
        if (!deleting && len === word.length) { deleting = true; next = 1600; }
        else if (deleting && len === 0) { deleting = false; i++; next = 300; }
        else len += deleting ? -1 : 1;
        setTimeout(() => typeLoop(i, len, deleting), next);
    })();

    // What I Do
    $('focusList').innerHTML = d.focus.map((f, n) => `
        <div class="focus-card" data-aos="fade-up" data-aos-delay="${n * 100}">
            <img class="focus-icon" src="${esc(f.icon)}" alt="" loading="lazy">
            <h3>${esc(f.title)}</h3>
            <p>${esc(f.text)}</p>
            <div class="focus-tags">${f.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        </div>`).join('');

    $('aboutDetails').innerHTML = d.about.details.map((x) =>
        `<div><strong>${esc(x.label)}:</strong><p>${esc(x.value)}</p></div>`).join('');

    // Profile photo with initials fallback
    const photo = $('profilePhoto');
    const fallback = $('photoFallback');
    fallback.textContent = d.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    photo.alt = `${d.name} Professional Photo`;
    photo.onerror = () => { photo.hidden = true; fallback.hidden = false; };
    photo.src = d.about.photo;

    // Skills
    $('skillsList').innerHTML = d.skills.map((s) => `
        <div class="barWrapper" data-aos="fade-up">
            <div class="skill-info">
                <span class="progressText">${esc(s.name)}</span>
                <span class="percentText">${Number(s.level)}%</span>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" data-level="${Number(s.level)}"
                     aria-valuenow="${Number(s.level)}" aria-valuemin="0" aria-valuemax="100"
                     aria-label="${esc(s.name)} Proficiency"></div>
            </div>
        </div>`).join('');

    // Experience
    $('experienceList').innerHTML = d.experience.map((e) => `
        <div class="card-box" data-aos="fade-up">
            <span class="card-date">${esc(e.date)}</span>
            <h3>${esc(e.title)}</h3>
            <h4>${esc(e.company)}</h4>
            <p>${esc(e.description)}</p>
            ${e.letter ? `<button type="button" class="letter-btn" data-pdf="${esc(e.letter)}" data-title="Experience Letter: ${esc(e.company.split(',')[0])}">
                <i class="fa fa-file-text-o" aria-hidden="true"></i> View Experience Letter</button>` : ''}
        </div>`).join('');

    // Achievements (hidden when empty)
    if (d.achievements.length) {
        $('achievementsList').innerHTML = d.achievements.map((src) => `
            <div class="achievement-item" data-aos="zoom-in">
                <a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="Achievement Screenshot" loading="lazy"></a>
            </div>`).join('');
    } else {
        $('achievements').remove();
        document.querySelector('[data-section="achievements"]').remove();
    }

    // Certifications
    $('certList').innerHTML = d.certifications.map((c) => `
        <div class="cert-card${c.pdf ? ' has-pdf' : c.link ? ' has-link' : ''}" data-aos="flip-left" data-aos-delay="200"
             ${c.pdf ? `data-pdf="${esc(c.pdf)}" data-title="${esc(c.title)}" role="button" tabindex="0" aria-label="View ${esc(c.title)} certificate"`
                : c.link ? `data-link="${esc(c.link)}" role="link" tabindex="0" aria-label="Verify ${esc(c.title)} badge"` : ''}>
            <div class="card-icon">${icon(c.icon)}</div>
            <h4>${esc(c.title)}</h4>
            <p>${esc(c.provider)}</p>
            ${c.link ? `<a class="preview" href="${esc(c.link)}" target="_blank" rel="noopener">Verify <i class="fa fa-external-link"></i></a>` : ''}
        </div>`).join('');

    // Certificate PDF viewer (popup on desktop, new tab on phones)
    const modal = $('pdfModal');
    const frame = $('pdfFrame');
    const closeModal = () => { modal.hidden = true; frame.src = 'about:blank'; document.body.style.overflow = ''; };
    const openPdf = (card) => {
        const pdf = card.dataset.pdf;
        if (window.matchMedia('(max-width: 768px)').matches) { window.open(pdf, '_blank', 'noopener'); return; }
        $('pdfTitle').textContent = card.dataset.title;
        $('pdfOpen').href = pdf;
        frame.src = pdf + '#view=FitH';
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        $('pdfClose').focus();
    };
    // Cards with a PDF open the viewer; badge-only cards open their verification page
    const openCert = (card) => card.dataset.pdf ? openPdf(card) : window.open(card.dataset.link, '_blank', 'noopener');
    $('certList').addEventListener('click', (e) => {
        const card = e.target.closest('.has-pdf, .has-link');
        if (card && !e.target.closest('a')) openCert(card);
    });
    $('certList').addEventListener('keydown', (e) => {
        const card = e.target.closest('.has-pdf, .has-link');
        if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openCert(card); }
    });
    $('experienceList').addEventListener('click', (e) => {
        const btn = e.target.closest('.letter-btn');
        if (btn) openPdf(btn);
    });
    $('pdfClose').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

    // Projects
    $('projectList').innerHTML = d.projects.map((p, n) => `
        <article class="project-card" data-aos="fade-up" data-aos-delay="${(n % 2) * 100}">
            <div class="project-head">
                <img class="project-icon" src="${esc(p.icon)}" alt="" loading="lazy">
                <div>
                    <h3>${esc(p.title)}</h3>
                    <span class="project-sub">${esc(p.subtitle)}${p.date ? ` | ${esc(p.date)}` : ''}</span>
                </div>
            </div>
            <p>${esc(p.description)}</p>
            <div class="focus-tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
            ${p.url ? `<a class="project-link" href="${esc(p.url)}" target="_blank" rel="noopener"><i class="fa ${esc(p.ctaIcon || 'fa-github')}" aria-hidden="true"></i> ${esc(p.cta || 'View Code')} <i class="fa fa-arrow-right" aria-hidden="true"></i></a>` : ''}
        </article>`).join('');

    // Stats counter (counts up when visible)
    $('statsList').innerHTML = d.stats.map((s) => `
        <div class="stat">
            <span class="stat-num" data-target="${Number(s.value)}" data-suffix="${esc(s.suffix)}">0${esc(s.suffix)}</span>
            <span class="stat-label">${esc(s.label)}</span>
        </div>`).join('');
    const countUp = (el) => {
        const target = Number(el.dataset.target), suffix = el.dataset.suffix, dur = 1600;
        let start = null;
        const tick = (now) => {
            if (start === null) start = now;
            const t = Math.min(Math.max((now - start) / dur, 0), 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + suffix;
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        // Guarantee the exact final number even if the last frame is skipped
        setTimeout(() => { el.textContent = target + suffix; }, dur + 150);
    };
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { countUp(en.target); statObserver.unobserve(en.target); } });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-num').forEach((el) => statObserver.observe(el));

    // Contact
    const c = d.contact;
    $('cPhone').textContent = c.phone;
    $('cPhone').href = `tel:${c.phone.replace(/\s+/g, '')}`;
    $('cEmail').textContent = c.email;
    $('cEmail').href = `mailto:${c.email}`;
    $('cWhatsapp').href = `https://wa.me/${c.whatsapp.replace(/\D/g, '')}`;
    $('cLinkedin').href = c.linkedin;

    // Mobile nav
    const links = $('navLinks');
    $('navToggle').addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', (e) => { if (e.target.tagName === 'A') links.classList.remove('open'); });

    // Animate skill bars when visible
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (en.isIntersecting) {
                en.target.style.width = en.target.dataset.level + '%';
                barObserver.unobserve(en.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.progress-bar').forEach((b) => barObserver.observe(b));

    // Highlight active nav link on scroll
    const navAnchors = [...links.querySelectorAll('a')];
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (en.isIntersecting) {
                navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));

    if (window.AOS) AOS.init({ once: true, duration: 900 });
})();
