import aboutPic from "../img/522025668583f9e08512.png";

function createElement(tag, className = '', textContent = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
  
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  
    return element;
  }
  
  export function getAbout() {
    const aboutSection = createElement("div", "about-section");
    const aboutTitle = createElement("h3", "about-title", "Our Story");
    const aboutText = createElement("div", "about-text");
    
    const aboutPone = createElement("p", "", 
      "What started as shared hobby small talk, the team at COCO quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in. Over the years, we’ve developed, mass produced and sold our own blends to share with the world, and that’s how COCO came to be."
    );
  
    const aboutPtho = createElement("p", "", 
      "With more than 200 shops across US as of 2023, we’re constantly working hard and innovating to bring the next chapter of COCO to all coffee lovers. In fact, we’re excited to share a few large developments as early as this year!"
    );
  
    const aboutPthree = createElement("p", "", 
      "Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique - that’s COCO."
    );
  
    const aboutImg = createElement("img", "about-pic", "", { src: aboutPic });
  
    aboutText.append(aboutPone, aboutPtho, aboutPthree);
    aboutSection.append(aboutTitle, aboutText, aboutImg);
  
    return aboutSection;
  }