import { getTextarea } from "./domElements.js";

export const delFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    textareaArr.pop();
    textarea.textContent = textareaArr.join("");
};
