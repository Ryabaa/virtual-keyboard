import { body } from "./domElements.js";

export default function renderLayout() {
    let textarea = document.createElement("textarea");
    let container = document.createElement("div");
    let languageIcon = document.createElement("p");

    textarea.className = "textarea";
    textarea.readOnly = "readonly";
    container.className = "container";
    languageIcon.className = "languageIcon";

    body.appendChild(textarea);
    body.appendChild(container);
    body.appendChild(languageIcon);
}
