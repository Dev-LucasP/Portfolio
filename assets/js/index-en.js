let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
const navbarButton = document.querySelector(".dropbtn"); // Cible le bouton

// Cloner l'état initial de la navbar avec le bouton
const initialNavbar = navbar.cloneNode(true);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    
    // Ajouter les nouveaux liens lorsque la navbar est active
    let newLink1 = document.createElement("a");
    newLink1.href = "index.html";
    newLink1.textContent = "Français";
    navbar.appendChild(newLink1);

    let newLink2 = document.createElement("a");
    newLink2.href = "index-en.html";
    newLink2.textContent = "English";
    navbar.appendChild(newLink2);

    if (navbarButton) {
      navbarButton.remove(); // Supprime le bouton uniquement si le menu est actif
    }
  } else {
    // Réinitialiser la navbar à son état initial
    const clonedNavbar = initialNavbar.cloneNode(true);
    const clonedNavbarButton = clonedNavbar.querySelector(".dropbtn");

    if (clonedNavbarButton) {
      clonedNavbarButton.remove(); // Supprime le bouton uniquement après reset
    }

    navbar.replaceWith(clonedNavbar); // Réinitialise la navbar sans le bouton
    navbar = document.querySelector(".navbar"); // Re-sélectionner la navbar
  }
};



document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });
});

function showMessage() {
  const messageElement = document.getElementById("message");
  messageElement.style.display = "block";
  messageElement.textContent = "Under development";

  setTimeout(() => {
    messageElement.style.display = "none";
  }, 5000);
}

function showProjectDetails(title, description, link) {
  const projectDetailsOverlay = document.createElement("div");
  projectDetailsOverlay.classList.add("project-details-overlay");

  const projectDetails = `
    <div class="project-details-container">
      <span class="close-btn" onclick="closeProjectDetails()">&times;</span>
      <h2>${title}</h2>
      <p>${description}</p>
      <br>
      <a href="${link}" target="_blank">Voir</a>
    </div>
  `;

  projectDetailsOverlay.innerHTML = projectDetails;

  projectDetailsOverlay.addEventListener("click", (event) => {
    if (event.target === projectDetailsOverlay) {
      closeProjectDetails();
    }
  });

  document.body.appendChild(projectDetailsOverlay);
}

function closeProjectDetails() {
  const projectDetailsOverlay = document.querySelector(
    ".project-details-overlay"
  );
  if (projectDetailsOverlay) {
    projectDetailsOverlay.remove();
  }
}

function showProjectNotFinished(title, description, link) {
  const projectDetailsOverlay = document.createElement("div");
  projectDetailsOverlay.classList.add("project-details-overlay");

  const projectDetails = `
    <div class="project-details-container">
      <span class="close-btn" onclick="closeProjectDetails()">&times;</span>
      <h2>${title}</h2>
      <p>${description}</p>
      <br>
      <p style="color: red;"> Under development </p>
    </div>
  `;

  projectDetailsOverlay.innerHTML = projectDetails;

  projectDetailsOverlay.addEventListener("click", (event) => {
    if (event.target === projectDetailsOverlay) {
      closeProjectDetails();
    }
  });

  document.body.appendChild(projectDetailsOverlay);
}

document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll(".slide-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  slideElements.forEach((el) => observer.observe(el));
});
