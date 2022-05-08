import { getContainer } from "./domElements.js";
import { handleButtonClick } from "./handlers.js";

export default function renderKeys(keys, languageEN) {
    let container = getContainer();
    container.innerHTML = "";
    keys.forEach((key) => {
        let button = document.createElement("button");
        button.addEventListener("click", (event) => handleButtonClick(event, key, languageEN));
        button.innerText = languageEN ? key.display.en : key.display.ru;
        button.dataset.code = key.code;
        button.classList.add("button");
        container.appendChild(button);
    });
}
