import { getButton, getTextarea } from "./domElements.js";
import { switchLanguage } from "./keyboardLanguage.js";

let shift = false;
let alt = false;

export const handleButtonClick = (event, key, languageEN) => {
    let textarea = getTextarea();
    textarea.textContent += languageEN ? key.display.en : key.display.ru;
};

export const handleChangeLanguage = (event) => {
    switch (event.code) {
        case "ShiftLeft":
            alt ? switchLanguage() : (shift = true);
            break;
        case "AltLeft":
            shift ? switchLanguage() : (alt = true);
            break;

        default:
            break;
    }
};

export const handleResetLanguage = (event) => {
    switch (event.code) {
        case "ShiftLeft":
            shift = false;
            break;
        case "AltLeft":
            alt = false;
            break;

        default:
            break;
    }
};

export const handleButtonPress = (event, action) => {
    let button = getButton(event.code);
    switch (action) {
        case "add":
            button ? button.classList.add("button--active") : null;
            break;
        case "remove":
            button ? button.classList.remove("button--active") : null;
            break;

        default:
            break;
    }
};
