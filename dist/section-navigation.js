const menu = document.querySelector('.guide-sticky-nav .guide-jumps');
if (menu) {
  const entries = [...menu.querySelectorAll('a[href^="#"]')].map(link => ({link, section: document.getElementById(link.hash.slice(1))})).filter(entry => entry.section);
  let pending = false;
  function update() {
    pending = false;
    const boundary = document.querySelector('.guide-sticky-nav').getBoundingClientRect().bottom + 40;
    let active = entries[0];
    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= boundary) active = entry;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = entries.at(-1);
    for (const entry of entries) {
      const selected = entry === active;
      entry.link.classList.toggle('is-current', selected);
      if (selected) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    }
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  update();
}
