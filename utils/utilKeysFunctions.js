import { getButton, getTextarea } from "./domElements.js";
import { switchLanguage } from "./keyboardLanguage.js";

export let cursorIndex = 0;
export let caps = false;
export let shift = false;

export const cursorUp = () => cursorFunction("up");
export const cursorLeft = () => cursorFunction("left");
export const cursorDown = () => cursorFunction("down");
export const cursorRight = () => cursorFunction("right");

export const cursorFunction = (direction) => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    if (!direction) {
        let findIndex = textareaArr.findIndex((el) => el === "|");
        if (findIndex !== -1) {
            textareaArr.splice(cursorIndex, 1);
            cursorIndex++;
            textareaArr.splice(cursorIndex, 0, "|");
        } else {
            textareaArr.push("|");
        }
    } else {
        switch (direction) {
            case "left":
                if (cursorIndex !== 0) {
                    textareaArr.splice(cursorIndex, 1);
                    textareaArr.splice(cursorIndex - 1, 0, "|");
                    cursorIndex--;
                }
                break;
            case "right":
                if (cursorIndex !== textareaArr.length - 1) {
                    textareaArr.splice(cursorIndex, 1);
                    textareaArr.splice(cursorIndex + 1, 0, "|");
                    cursorIndex++;
                }
                break;
            case "down":
                break;
            case "up":
                break;

            default:
                break;
        }
    }

    textarea.textContent = textareaArr.join("");
};

export const deleteFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    if (cursorIndex !== textareaArr.length - 1) {
        textareaArr.splice(cursorIndex + 1, 1);
        textarea.textContent = textareaArr.join("");
    }
};

export const backspaceFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    if (cursorIndex !== 0) {
        textareaArr.splice(cursorIndex - 1, 1);
        cursorIndex--;
        textarea.textContent = textareaArr.join("");
    }
};

export const spaceFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    textareaArr.splice(cursorIndex, 0, " ");
    cursorIndex++;
    textarea.textContent = textareaArr.join("");
};

export const tabFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    textareaArr.splice(cursorIndex, 0, "    ");
    cursorIndex += 4;
    textarea.textContent = textareaArr.join("");
};

export const enterFunction = () => {
    let textarea = getTextarea();
    let textareaArr = textarea.textContent.split("");
    textareaArr.splice(cursorIndex, 0, "\n");
    cursorIndex++;
    textarea.textContent = textareaArr.join("");
};

export const capslockFunction = () => {
    let capsLock = getButton("CapsLock");
    if (caps) {
        capsLock.classList.remove("button--pressed");
        caps = false;
    } else {
        capsLock.classList.add("button--pressed");
        caps = true;
    }
};

export const shiftFunction = () => {
    let shiftLeft = getButton("ShiftLeft");
    let shiftRight = getButton("ShiftRight");
    if (shift) {
        shift = false;
        shiftLeft.classList.remove("button--pressed");
        shiftRight.classList.remove("button--pressed");
    } else {
        shiftLeft.classList.add("button--pressed");
        shiftRight.classList.add("button--pressed");
        shift = true;
    }
};

export const altFunction = () => {
    if (shift) {
        let shiftLeft = getButton("ShiftLeft");
        let shiftRight = getButton("ShiftRight");
        shiftLeft.classList.remove("button--pressed");
        shiftRight.classList.remove("button--pressed");
        shift = false;
        switchLanguage();
    }
};
