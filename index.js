function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon i");
    var body = document.body;
  
    if (menu.style.display === "block") {
      menu.style.display = "none";
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
      body.classList.remove("blur");
    } else {
      menu.style.display = "block";
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
      body.classList.add("blur");
    }
  }
  
  function toggleWhatsNew() {
var whatsNewSection = document.getElementById("whatsnew");
if (whatsNewSection.style.display === "block") {
  whatsNewSection.style.display = "none";
} else {
  whatsNewSection.style.display = "block";
}
}

  function showSection(sectionId) {
      var sections = document.querySelectorAll("main section");
      sections.forEach(function (section) {
          section.classList.remove("active");
      });
      var activeSection = document.getElementById(sectionId);
      activeSection.classList.add("active");

      var menu = document.getElementById("menu");
      if (window.innerWidth <= 768) {
          menu.style.display = "none";
      }
  }
  
  
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }
  
  function moveSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  
  // Initialize the carousel by showing the first slide
  showSlide(currentSlide);


  document.addEventListener("DOMContentLoaded", function() {
      showSection('home');
  });

  // Hide menu on window resize
  window.addEventListener("resize", function() {
      var menu = document.getElementById("menu");
      if (window.innerWidth > 768) {
          menu.style.display = "block";
      } else {
          menu.style.display = "none";
      }
  });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAdg7_ZfWQZoEoSJvIu1gikWOgXQ6Gd2LQ",
authDomain: "the-programming-hub.firebaseapp.com",
projectId: "the-programming-hub",
storageBucket: "the-programming-hub.appspot.com",
messagingSenderId: "282124759396",
appId: "1:282124759396:web:0399a1c68ad583c4d6ca71",
measurementId: "G-48HZKPYDR3"
};
