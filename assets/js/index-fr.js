let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
const navbarButton = document.querySelector(".dropbtn");

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
    let newLink1 = document.createElement("a");
    newLink1.href = "index.html";
    newLink1.textContent = "Français";
    navbar.appendChild(newLink1);

    let newLink2 = document.createElement("a");
    newLink2.href = "index-en.html";
    newLink2.textContent = "English";
    navbar.appendChild(newLink2);

    let newLink3 = document.createElement("a");
    newLink3.href = "index-es.html";
    newLink3.textContent = "Español";
    navbar.appendChild(newLink3);

    if (navbarButton) {
      navbarButton.remove();
    }
  } else {
    const clonedNavbar = initialNavbar.cloneNode(true);
    const clonedNavbarButton = clonedNavbar.querySelector(".dropbtn");

    if (clonedNavbarButton) {
      clonedNavbarButton.remove();
    }

    navbar.replaceWith(clonedNavbar);
    navbar = document.querySelector(".navbar");
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

// ...existing code...

function showMessage() {
  const messageElement = document.getElementById("message");
  messageElement.style.display = "block";
  messageElement.textContent = "En cours de développement";

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
      <p style="color: red;"> En cours de développement </p>
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
