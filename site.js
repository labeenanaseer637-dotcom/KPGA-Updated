// Reveal content cards as they enter the viewport.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealTargets = document.querySelectorAll(
  ".info-card, .industry-card-link, .publication-card, .executive-card, .objective-grid article, .women-card, .demo-event-card, .demo-news-card, .membership-tier-card, .membership-doc-card, .registration-download-card, .registration-card, .empty-publication, .industry-detail-aside, .industry-resource-band, .news-strip, .office-cta, .membership-band, .feature-band, .contact-detail-row, .purpose-grid > *, .contact-form-wrap",
);
if (
  revealTargets.length &&
  !motionPreference.matches &&
  "IntersectionObserver" in window
) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
  );

  revealTargets.forEach((card, index) => {
    card.classList.add("js-reveal");
    card.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    revealObserver.observe(card);
  });
}
