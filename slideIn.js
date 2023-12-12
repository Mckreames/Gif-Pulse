// Element Slide In

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slide");
    }
  });
});

const hideElements = document.querySelectorAll(".hide");
hideElements.forEach((el) => observer.observe(el));

const slowHideElements = document.querySelectorAll(".slow-hide");
slowHideElements.forEach((el) => observer.observe(el));

const fadeElements = document.querySelectorAll(".fade");
fadeElements.forEach((el) => observer.observe(el));
