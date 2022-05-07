import { getTextarea } from "./domElements.js";

export let handleButtonClick = (event, key) => {
    let textarea = getTextarea();
    textarea.textContent += key.display.en;
};
