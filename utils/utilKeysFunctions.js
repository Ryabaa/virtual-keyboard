import { getTextarea } from "./domElements.js";

let cursorIndex = 0;

export const delFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    textareaArr.pop();
    textarea.textContent = textareaArr.join("");
};

export const cursorUp = () => cursorFunction("up");
export const cursorLeft = () => cursorFunction("left");
export const cursorDown = () => cursorFunction("down");
export const cursorRight = () => cursorFunction("right");

export const cursorFunction = (direction) => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    let findIndex = textareaArr.findIndex((el) => el === "|");
    if (findIndex !== -1) {
        textareaArr.splice(cursorIndex, 0, "|");
    }

    if (direction) {
        switch (direction) {
            case "up":
                break;
            case "left":
                textareaArr.splice(cursorIndex, 1);
                textareaArr.splice(cursorIndex - 1, "|");
                break;
            case "down":
                break;
            case "right":
                textareaArr.splice(cursorIndex, 1);
                textareaArr.splice(cursorIndex + 1, "|");
                break;

            default:
                break;
        }
    }

    textarea.textContent = textareaArr.join("");
};
