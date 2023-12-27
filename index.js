const btn = document.getElementById("btn");
const paragraph = document.getElementById("text");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  paragraph.innerText = "Привет, мир!";
});

const getedElementById = document.getElementById("first");
const getedElementsByClassName = document.getElementsByClassName("second");
const getedElementByQuerySelector = document.querySelector(".third");
const all = document.querySelectorAll("p");

getedElementById.style.padding = "5em";


