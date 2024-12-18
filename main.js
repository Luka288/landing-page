const dotContainer = document.querySelector(".animatedDots");
const speedLines = document.querySelector(".speedLines");
const navigation = document.getElementById("navigation");
const sections = document.querySelectorAll(".scrollSection");
const scrollContainer = document.querySelector(".scrollContainer");
const text = document.querySelector(".scrollText");
const scrollIcon = document.querySelector(".scrollIcon");
const burgerBartogg = document.querySelector(".toggleBar");
const navItems = document.querySelector(".nav-items");
const countNumbers = document.querySelectorAll(".statNumber");

let activeDots = 0;
let maxDots = 15;
let isScrolling = false;
let currIndex = 0;

init();

function init() {
  setInterval(speedingLines, 50);
  scrollReveals();
  // typeWriter();
  count();
}

function flowingDots() {
  if (activeDots >= maxDots) {
    return;
  }
  const dot = document.createElement("div");
  dot.classList.add("flowingDot");

  activeDots++;

  const width = 5;
  const size = 50;

  dot.style.width = `${width}px`;
  dot.style.height = `${size}px`;

  const x = Math.random() * (window.innerWidth - size);
  const y = -size;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  dot.style.transform = `translateY(${window.innerHeight + size}px)`;

  dotContainer.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.transform = `translateY(${window.innerHeight + size}px)`;
  });

  setTimeout(() => {
    dot.remove();
    activeDots--;
  }, 700);
}

function speedingLines() {
  if (activeDots === maxDots) {
    return;
  }

  const speedLine = document.createElement("div");
  speedLine.classList.add("line");

  const length = Math.random() * 100 + 50;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 1 + 1;

  speedLine.style.width = `${length}px`;
  speedLine.style.top = `${y}px`;
  speedLine.style.animationDuration = `${duration}s`;

  speedLines.appendChild(speedLine);
  activeDots++;

  setTimeout(() => {
    speedLine.remove();
    activeDots--;
  }, duration * 1000);
}

function scrollReveals() {
  ScrollReveal().reveal(".mainText", {
    delay: 300,
    distance: "130px",
    reset: true,
  });

  ScrollReveal().reveal(".supportText", {
    delay: 500,
    distance: "30px",
  });

  ScrollReveal().reveal(".scrollContainer", {
    delay: 800,
    distance: "50px",
    reset: true,
  });
}

function typeWriter() {
  new Typewriter("#typeWrite", {
    strings: ["What We Provide", "What We Provide"],
    autoStart: true,
    loop: true,
    deleteSpeed: 30,
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    navigation.style.backgroundColor = "#1a1a1a";
    navigation.style.transition = "all 0.3s";
  } else {
    navigation.style.backgroundColor = "transparent";
    navigation.style.transition = "all 0.3s";
  }
});

scrollContainer.addEventListener("click", function () {
  scrollContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

setTimeout(() => {
  text.style.animation = "none";
  void text.offsetWidth;
  text.style.animation = "textBounce 2.5s ease-in-out infinite";

  scrollIcon.style.animation = "none";
  void scrollIcon.offsetWidth;
  scrollIcon.style.animation = "iconWave 2.5s ease-in-out infinite";
}, 4000);

burgerBartogg.addEventListener("click", function () {
  navItems.classList.toggle("active");
  if (burgerBartogg.classList.contains("fa-bars")) {
    burgerBartogg.classList.replace("fa-bars", "fa-x");
  } else {
    burgerBartogg.classList.replace("fa-x", "fa-bars");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 425 && burgerBartogg.classList.contains("fa-x")) {
    burgerBartogg.classList.replace("fa-x", "fa-bars");
    navItems.classList.remove("active");
  }
});

function count() {
  let interval = 5000;

  countNumbers.forEach((el) => {
    let start = 0;
    let end = parseInt(el.getAttribute("count-to"));
    let durr = Math.floor(interval / end);

    let startCounting = setInterval(() => {
      start++;
      el.textContent = start;

      if (start === end) {
        clearInterval(startCounting);
      }
    }, durr);
  });
}
