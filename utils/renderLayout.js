import { body } from "./domElements.js";

export default function renderLayout() {
    let textarea = document.createElement("textarea");
    let container = document.createElement("div");
    let languageIcon = document.createElement("p");

    textarea.className = "textarea";
    container.className = "container";
    languageIcon.className = "languageIcon";

    body.appendChild(languageIcon);
    body.appendChild(textarea);
    body.appendChild(container);
}
