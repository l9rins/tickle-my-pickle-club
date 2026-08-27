document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const navScrim = document.getElementById("nav-scrim");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const hideLoader = () => {
    loader?.classList.add("hidden");
    initReveals();
  };

  if (document.readyState === "complete") {
    window.setTimeout(hideLoader, 250);
  } else {
    window.addEventListener("load", () => window.setTimeout(hideLoader, 250), { once: true });
  }

  const setMenu = (open) => {
    navLinks?.classList.toggle("open", open);
    navToggle?.classList.toggle("active", open);
    navScrim?.classList.toggle("active", open);
    nav?.classList.toggle("menu-active", open);
    document.body.classList.toggle("menu-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
  };

  navToggle?.addEventListener("click", () => {
    setMenu(!navLinks?.classList.contains("open"));
  });

  navScrim?.addEventListener("click", () => setMenu(false));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      setMenu(false);

      const offset = nav ? nav.offsetHeight + 26 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  const updateNav = () => {
    nav?.classList.toggle("scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navItems = Array.from(document.querySelectorAll(".nav-links a"));

  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navItems.forEach((item) => {
          item.classList.toggle("active", item.getAttribute("href") === `#${visible.target.id}`);
        });
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-18% 0px -56% 0px" }
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

  function initReveals() {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("visible"));
      return;
    }

    const revealVisible = () => {
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 120 && rect.bottom > -120) {
          el.classList.add("visible");
        }
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);
    revealVisible();
  }

  if (!prefersReducedMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (event) => {
        if (event.pointerType !== "mouse") return;

        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.12;

        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }
});
