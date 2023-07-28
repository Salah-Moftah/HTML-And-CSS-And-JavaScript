let skillsSction = document.querySelector(".our-skills");
let dataSkills = document.querySelectorAll(".progress span");

addEventListener("scroll", function () {
  if (window.scrollY >= skillsSction.offsetTop - 230) {
    dataSkills.forEach((span) => {
      span.style.width = `${span.dataset.skills}%`;
    });
  }
});

let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false;

addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 230) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let up = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let countDownDate = new Date("dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDeiff = countDownDate - dateNow;

  let days = Math.floor(dateDeiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDeiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((dateDeiff % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.floor((dateDeiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDeiff < 0) {
    clearInterval(counter);
  }
}, 1000);
