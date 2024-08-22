import imgPic from "../img/09c7c25d340767a6d2f7.png";

//Функция для создания элемента с классом и текстом
function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

// Функция для создания блока с заголовками
function createMenuItem(name, price, description) {
  const item = createElement("div", "menu-item");
  const titles = createElement("div", "menu-titles");

  const leftH3 = createElement("h3", null, name);
  const rightH3 = createElement("h3", null, price);

  titles.append(leftH3, rightH3);
  item.append(titles, createElement("p", null, description));


  return item;
}

export function getMenu() {
  const menuSection = createElement("div", "menu-section");
  const left = createElement("div", "left");
  const right = createElement("div", "right");
  const img = createElement("img");
  img.src = imgPic;

  const menuItems = [
    {
      name: "Mocha",
      price: "$9",
      descriptionText:
        "Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.",
    },
    {
      name: "Latte",
      price: "$8",
      descriptionText:
        "Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.",
    },
    {
      name: "Espresso",
      price: "$7",
      descriptionText:
        "Perfect balance of espresso, milk and a cinnamon twist, just enough to wake the taste buds.",
    },
    {
      name: "Cappuccino",
      price: "$10",
      descriptionText:
        "Sophisticated take on a classic coffee experience, made with the finest 100% organic beans.",
    },
  ];

  menuItems.forEach((item) => {
    right.appendChild(
      createMenuItem(item.name, item.price, item.descriptionText)
    );
  });

  left.appendChild(img);
  menuSection.append(left, right);

  return menuSection;
}
