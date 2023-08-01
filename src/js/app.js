import Swiper from "swiper";

const swiper = new Swiper('.popular__items', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.popular__nextButton',
        prevEl: '.popular__prevButton'
    }
});

const prevButton = document.querySelector('.popular__prevButton');
const nextButton = document.querySelector('.popular__nextButton');

prevButton.addEventListener('click', () => {
  if (!prevButton.hasAttribute('disabled')) {
    swiper.slidePrev();
  }
});

nextButton.addEventListener('click', () => {
  swiper.slideNext();
});

const likeButtons = document.querySelectorAll('.item__likeButton');

document.addEventListener('click', function(event) {
    const isLikeButton = event.target.closest('.item__likeButton');

    if (isLikeButton) {
        isLikeButton.classList.toggle('active');
    }
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add("active");
  });
});
