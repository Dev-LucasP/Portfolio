let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

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
};

function showMessage() {
  const messageElement = document.getElementById("message");
  messageElement.style.display = "block"; // Affiche le message
  messageElement.textContent = "En cours de développement"; // Définit le texte du message

  // Masque le message après 10 secondes (10 000 ms)
  setTimeout(() => {
    messageElement.style.display = "none"; // Cache le message
  }, 5000);
}
