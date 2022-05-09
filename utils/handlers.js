import keys from "./keysList.js";
import { getButton, getTextarea } from "./domElements.js";
import { languageEN, switchLanguage } from "./keyboardLanguage.js";
import { cursorFunction, cursorIndex, caps, shift } from "./utilKeysFunctions.js";

export const handleButtonClick = (event, key, languageEN) => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    if (!key.util) {
        cursorFunction(false);
        let display = languageEN ? key.display.en : key.display.ru;
        if (!shift && !caps) {
            display = display.toLowerCase();
        }
        textareaArr.splice(cursorIndex - 1, 0, display);
        textarea.textContent = textareaArr.join("");
    }
    if (key.function) {
        key.function();
    }
};

export const handleButtonPress = (event, action) => {
    let button = getButton(event.code);
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    let keyIndex = keys.findIndex((element) => element.code === event.code);

    switch (action) {
        case "add":
            button ? button.classList.add("button--active") : null;
            if (keyIndex !== -1) {
                let key = keys[keyIndex];
                if (!key.util) {
                    cursorFunction(false);
                    let display = languageEN ? key.display.en : key.display.ru;
                    if (!shift && !caps) {
                        display = display.toLowerCase();
                    }
                    textareaArr.splice(cursorIndex - 1, 0, display);
                    textarea.textContent = textareaArr.join("");
                }
                if (key.function) {
                    key.function();
                }
            }
            break;
        case "remove":
            button ? button.classList.remove("button--active") : null;
            break;

        default:
            break;
    }
};

export const handleChangeLanguage = (event) => {
    if (!shift) {
        if (event.code === "AltLeft") switchLanguage();
    }
};
