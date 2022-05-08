import { getContainer } from "./domElements.js";
import { handleButtonClick } from "./handlers.js";

export default function renderKeys(keys, languageEN) {
    let container = getContainer();
    container.innerHTML = "";
    keys.forEach((key) => {
        let button = document.createElement("button");
        button.addEventListener("click", (event) => handleButtonClick(event, key, languageEN));
        button.dataset.code = key.code;
        button.classList.add("button");
        if (key.icon) {
            let icon = document.createElement("img");
            icon.src = `./icons/${key.code}.svg`;
            button.appendChild(icon);
        } else {
            button.innerText = languageEN ? key.display.en : key.display.ru;
        }
        if (key.util) {
            button.classList.add("button-util");
            button.classList.add(`button-${key.code.toLowerCase()}`);
        }
        container.appendChild(button);

        let additional = document.createElement("p");
        additional.innerText = languageEN ? key.display.additional.en : key.display.additional.ru;
        additional.classList.add("additional");
        button.appendChild(additional);
    });
}
