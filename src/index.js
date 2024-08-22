import "../style.css";
import logoImg from "../img/e69180770fb4c4cc5006.png";
import MainLogo from "../img/816375f45ad6dffd6221.png";
import CupLogo from "../img/2317c03d6a70085f81d3.png";

import { getAbout } from "./about";
import { getMenu } from "./menu";
import { getContact } from "./contact";

const content = document.querySelector("#content");

const header = document.createElement("div");
const logo = document.createElement("div");
const img = document.createElement("img");

const nav = document.createElement("div");
const about = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");

const pageobj = {
  about: getAbout,
  menu: getMenu,
  contact: getContact,
};

// const linksBtnArray = [about, menu, contact];

const linksBtnArray = [
  { btn: about, page: "about" },
  { btn: menu, page: "menu" },
  { btn: contact, page: "contact" },
];

function renderPage(page) {
  if (pageobj[page]) {

    content.innerHTML = "";
    content.append(header);
    const pageContent = pageobj[page]();
    if (pageContent) {
      console.log(3);

      content.append(pageContent);
    }
  }
}

linksBtnArray.forEach(({ btn, page }) => {
  btn.addEventListener("click", () => {
    renderPage(page);
  });
});

img.addEventListener("click", () => {
  location.reload(); // Перезагружает текущую страницу
});

header.classList.add("header");
header.append(logo);
header.append(img, nav);

content.append(header);

img.src = logoImg;
img.classList.add("logoImg");
img.append(logo);

nav.classList.add("header-nav");

about.textContent = "ABOUT";
menu.textContent = "MENU";
contact.textContent = "CONTACT";
nav.append(about, menu, contact);

//MAIN

const main = document.createElement("div");
const maintext = document.createElement("div");
const mainTextImg = document.createElement("img");
const mainTextBtn = document.createElement("mainTextBtn");
const mainImg = document.createElement("div");
const mainCupImg = document.createElement("img");

main.classList.add("main");
content.append(main);

maintext.classList.add("maintext");

mainTextImg.classList.add("mainTextImg");
mainTextImg.src = MainLogo;

mainTextBtn.classList.add("mainTextBtn");
mainTextBtn.textContent = "Order Online";

maintext.append(mainTextImg, mainTextBtn);

mainCupImg.src = CupLogo;
mainCupImg.classList.add("mainCupImg");

mainImg.classList.add("mainImg");
mainImg.append(mainCupImg);

main.append(maintext, mainImg);

//about
