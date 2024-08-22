function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

function createContactsText(name, adres, fon) {
  const item = createElement("div", "item-addres");
  const topH3 = createElement("h3", null, name);
  const topP = createElement("p", null, adres);
  const bottomP = createElement("p", null, fon);

  item.append(topH3, topP, bottomP);

  return item;
}

export function getContact() {
  const contactSection = createElement("div", "contact-section");
  const contactText = createElement("div", "contact-text");
  const contactForm = createElement("div", "contact-form");

  const upH3 = createElement("h3", null, "Lets chat");
  const form = createElement("div", "form");
  const btn = createElement("button", "button", "отправить");

  const topP = createElement("p", null, "name");
  const midleP = createElement("p", null, "email");
  const bottomP = createElement("p", null, "comments");

  const inputOne = createElement("input");
  const inputTho = createElement("input");
  const inputThree = createElement("textarea");

  inputOne.placeholder = "John Smith"
  inputTho.placeholder = "john@email.com"
  inputThree.placeholder = "Type here..."

  btn.type = "submit"

  const contactItem = [
    {
      name: "headquarters",
      adres: "113 Michigan Avenue",
      fon: "Chicago, IL 60661",
    },
    {
      name: "support",
      adres: "help@coco.com",
      fon: "+1 777 222 1234",
    },
  ];

  contactItem.forEach((item) => {
    contactText.appendChild(
      createContactsText(item.name, item.adres, item.fon)
    );
  });

  form.append(topP, inputOne, bottomP, inputTho, midleP, inputThree);
  contactForm.append(upH3, form, btn);
  contactSection.append(contactText, contactForm);

  return contactSection;
}
