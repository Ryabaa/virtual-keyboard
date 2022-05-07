import { getContainer } from "./domElements.js";
import { handleButtonClick } from "./handlers.js";

export default function renderKeys(keys, languageEN) {
    let container = getContainer();
    container.innerHTML = "";
    keys.forEach((key) => {
        let element = document.createElement("button");
        element.addEventListener("click", (event) => handleButtonClick(event, key));
        element.innerText = languageEN ? key.display.en : key.display.ru;
        element.dataset.code = key.code;
        element.classList.add("button");
        container.appendChild(element);
    });
}
