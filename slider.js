// Home page slider content and controls.
(() => {
  const slides = [
    {
      imagePath: "assets/img/placeholders/Slide.jpg",
      imageAlt: "Khyber Pakhtunkhwa gems and jewellery industry",
      kicker: "KHYBER PAKHTUNKHWA · PAKISTAN",
      title: "Bringing the brilliance of our industry <em>together.</em>",
      intro:
        "Connecting the people, craft and opportunities shaping Pakistan’s gems and jewellery sector.",
      primary: "Become a Member",
      primaryHref: "register.html",
      secondary: "Explore the industry",
      secondaryHref: "#industry",
      caption: "CRAFT · COMMUNITY · GROWTH",
      footnote: "Supporting a vibrant gems & jewellery community",
    },
    {
      imagePath: "assets/img/placeholders/Slider1.jpg",
      imageAlt: "KPGJA membership and industry community",
      kicker: "MEMBERSHIP · CONNECTION · OPPORTUNITY",
      title: "A stronger industry starts <em>together.</em>",
      intro:
        "Connect with the KPGJA community and take part in the growth of the gems and jewellery sector.",
      primary: "Membership information",
      primaryHref: "register.html",
      secondary: "Meet the association",
      secondaryHref: "#about",
      caption: "ONE COMMUNITY · SHARED PURPOSE",
      footnote: "Bringing industry members together",
    },
    {
      imagePath: "assets/img/placeholders/Slider2.jpg",
      imageAlt: "Gems and jewellery craft and skills",
      kicker: "CRAFT · SKILLS · NEW POSSIBILITIES",
      title: "Celebrating the craft and people <em>behind every gem.</em>",
      intro:
        "Explore the people, skills and initiatives contributing to a vibrant gems and jewellery community.",
      primary: "Explore initiatives",
      primaryHref: "#initiatives",
      secondary: "Discover the industry",
      secondaryHref: "#industry",
      caption: "KNOWLEDGE · CRAFT · FUTURE",
      footnote: "Sharing knowledge and opportunity across the sector",
    },
  ];
  const title = document.getElementById("slide-title");
  const copy = document.querySelector(".hero-copy");
  const art = document.querySelector(".hero-art");
  const dots = [...document.querySelectorAll(".slider-dot")];
  let current = 0;
  let timer;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    copy.classList.add("is-changing");
    window.setTimeout(() => {
      document.getElementById("slide-kicker").textContent = slide.kicker;
      title.innerHTML = slide.title;
      document.getElementById("slide-intro").textContent = slide.intro;
      const primary = document.getElementById("slide-primary");
      primary.firstChild.textContent = slide.primary + " ";
      primary.href = slide.primaryHref;
      const secondary = document.getElementById("slide-secondary");
      secondary.firstChild.textContent = slide.secondary + " ";
      secondary.href = slide.secondaryHref;
      document.getElementById("slide-caption").textContent = slide.caption;
      document.getElementById("slide-footnote").textContent = slide.footnote;
      document.getElementById("slide-current").textContent = String(
        current + 1,
      ).padStart(2, "0");
      art.dataset.slide = String(current);
      const image = document.getElementById("slide-image");
      if (slide.imagePath) {
        image.src = slide.imagePath;
        image.alt = slide.imageAlt;
        image.hidden = false;
      } else {
        image.removeAttribute("src");
        image.alt = "";
        image.hidden = true;
      }
      dots.forEach((dot, i) => {
        const active = i === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-pressed", String(active));
      });
      copy.classList.remove("is-changing");
    }, 160);
  }

  function restartTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(current + 1), 6000);
  }

  document.getElementById("slide-prev").addEventListener("click", () => {
    showSlide(current - 1);
    restartTimer();
  });
  document.getElementById("slide-next").addEventListener("click", () => {
    showSlide(current + 1);
    restartTimer();
  });
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showSlide(i);
      restartTimer();
    }),
  );
  showSlide(0);
  restartTimer();
})();
