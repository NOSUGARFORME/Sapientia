const btn = document.getElementById("btn");
const paragraph = document.getElementById("text");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  paragraph.innerText = "Привет, мир!";
});


const getedElementById = document.getElementById("first");
const getedElementsByClassName = document.getElementsByClassName("second");
const getedElementByQuerySelector = document.querySelector("p.third");
const all = document.querySelectorAll("p");

getedElementById.style.padding = "5em";

for (let i = 0; i < getedElementsByClassName.length; i++) {
  getedElementsByClassName[i].style.color = "red";
}

getedElementByQuerySelector.style.border = "1px solid black";


for (let i = 0; i < all.length; i++) {
  all[i].classList.add("wrapper");
}

const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  parent.classList.add("red")
});

const image = document.getElementById("image");
image.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  image.setAttribute("src", "./assets/image.jpg");
  image.setAttribute("alt", "image");
  image.setAttribute("width", "80px");
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.elements;
  const message = {};

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].nodeName === "INPUT") {
      message[inputs[i].name] = inputs[i].value;
    }
  }

  alert(JSON.stringify(message));
})
const word = "at";
const regex = new RegExp(`\\b${word}\\b`, 'gi');
const wrapper = document.getElementById("wrapper");

wrapper.childNodes.forEach(element => {
  if (element.innerText) {
    element.innerText = element.innerText.replace(regex, "from");
  }
});


