(function initHomePage() {
  const yearNode = document.getElementById("current-year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  // Fade out before navigating to internal pages
  document.querySelectorAll("a[href]").forEach(function (a) {
    const href = a.getAttribute("href");
    if (
      href &&
      !href.startsWith("mailto:") &&
      !href.startsWith("http") &&
      !href.startsWith("//") &&
      !href.startsWith("#")
    ) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(function () {
          window.location.href = href;
        }, 350);
      });
    }
  });
})();
