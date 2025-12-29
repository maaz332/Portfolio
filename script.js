const text = "I'm From Pakistan";
let index = 0;
const speed = 120;

const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    // Text complete hone ke baad cursor hide
    cursor.style.display = "none";
  }
}

typeText();







// function showTab(tabId) {
//   const contents = document.querySelectorAll(".tab-content");
//   const buttons = document.querySelectorAll(".tab-btn");

//   contents.forEach(content => {
//     content.classList.remove("active");
//   });

//   buttons.forEach(btn => {
//     btn.classList.remove("active");
//   });

//   document.getElementById(tabId).classList.add("active");
//   event.target.classList.add("active");
// }





const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active class
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active class
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");

  });
});




// // AOS init
// AOS.init({
//   duration: 900,
//   once: true,
// });

// // Click Action
// function serviceClick(serviceName) {
//   alert("You clicked on " + serviceName);
  
//   // Example redirect (optional)
//   // window.location.href = serviceName.toLowerCase().replace(" ", "-") + ".html";
// }


// function openProject(projectName) {
//   alert("Opening " + projectName);

//   // Example redirect:
//   // window.location.href = "project.html";
// }

// function seeMore() {
//   alert("Loading more projects...");
// }




AOS.init({
  duration: 900,
  once: true
});

/* Modal */
function openModal(title, link) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalLink").href = link;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

/* Filter */
function filterProjects(category) {
  const cards = document.querySelectorAll(".work-card");
  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    card.style.display =
      category === "all" || card.classList.contains(category)
        ? "block"
        : "none";
  });
}









(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // from EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed to send message!");
    }
  );
});










const codeBg = document.getElementById("codeBg");

const codeLines = [
  "const developer = 'Front End';",
  "function buildUI() {",
  "  return 'Clean Design';",
  "}",
  "let skills = ['HTML','CSS','JS'];",
  "if (skills.includes('JS')) {",
  "  console.log('Hire Me');",
  "}",
  "<div class='portfolio'></div>",
  "background: #000;",
  "color: #00ffaa;"
];

function generateCode() {
  let text = "";
  for (let i = 0; i < 80; i++) {
    text += codeLines[Math.floor(Math.random() * codeLines.length)] + "\n";
  }
  codeBg.textContent = text;
}

setInterval(generateCode, 1500);
generateCode();








