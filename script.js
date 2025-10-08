document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".sidebar a");

  function highlightCurrentSection() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let currentId = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        currentId = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      if (link.getAttribute("href").substring(1) === currentId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightCurrentSection);
  highlightCurrentSection();

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");
  const images = document.querySelectorAll("main img:not(#fruitguardlogo)");

  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "auto";
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "auto";
    }
  });
});
