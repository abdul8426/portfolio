document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  const titles = {
    about: "About Me",
    skills: "My Skills",
    projects: "My Projects",
    education: "Education & Experience",
    contact: "Contact Me"
  };

  function showPage(pageName) {

    if (!titles[pageName]) return;

    // Show only the selected page
    pages.forEach(page => {
      page.classList.toggle("active", page.id === pageName);
    });

    // Update active navigation button
    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.page === pageName
      );
    });

    // Return to top when changing pages
    window.scrollTo(0, 0);
  }

  // Sidebar navigation
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });

  // Buttons with data-go navigation
  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", function () {
      showPage(this.dataset.go);
    });
  });

  // Open About page when website starts
  showPage("about");

});