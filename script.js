function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  if (id === "about") {
    const aboutSection = document.getElementById("about");
    if (aboutSection && !aboutSection.querySelector(".video-box")) {
      const videoBox = document.createElement("div");
      videoBox.className = "video-box";
      videoBox.style.marginTop = "24px";
      videoBox.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=Okb1TjsZlm0&list=PLaTP_B8K0vdiUP8f3h6Y2930CJS4e_e4H&index=3"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      `;
      aboutSection.appendChild(videoBox);
      
    }
  }

};
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all required fields: Name, Email, and Message.");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
