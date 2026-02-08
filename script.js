/* =====================
   Hero load animation
===================== */

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  requestAnimationFrame(() => {
    hero.classList.remove("is-loading");
  });
});

/* =====================
   Scroll fade-ins
===================== */

/* =====================
   Scroll fade-ins (repeatable)
===================== */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


/* =====================
   Proximity effects
===================== */

const titles = document.querySelectorAll(".project-title");
const heroImage = document.querySelector(".hero-image");

if (titles.length || heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    titles.forEach(title => {
      const rect = title.getBoundingClientRect();
      const dx = x - (rect.left + rect.width / 2);
      const dy = y - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const intensity = Math.max(0, 1 - distance / 300);

      title.style.letterSpacing = `${intensity * 0.04}em`;
    });

    if (heroImage) {
      const rect = heroImage.getBoundingClientRect();
      const dx = x - (rect.left + rect.width / 2);
      const dy = y - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const intensity = Math.max(0, 1 - distance / 300);

      heroImage.style.transform =
        `translate(${dx * 0.02 * intensity}px, ${dy * 0.02 * intensity}px)`;
    }
  });
}

/* =====================
   Project gallery
===================== */

const mainImage = document.querySelector(".gallery-main img");
const thumbs = document.querySelectorAll(".gallery-thumbs img");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});
