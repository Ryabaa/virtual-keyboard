import {
    backspaceFunction,
    capslockFunction,
    cursorDown,
    cursorLeft,
    cursorRight,
    cursorUp,
    deleteFunction,
    enterFunction,
    shiftFunction,
    spaceFunction,
    tabFunction,
} from "./utilKeysFunctions.js";

const keys = [
    {
        display: { ru: "Ё", en: "`", additional: { ru: "`", en: "~" } },
        code: "Backquote",
        util: false,
    },
    {
        display: { ru: "1", en: "1", additional: { ru: "!", en: "!" } },
        code: "Digit1",
        util: false,
    },
    {
        display: { ru: "2", en: "2", additional: { ru: "@", en: "@" } },
        code: "Digit2",
        util: false,
    },
    {
        display: { ru: "3", en: "3", additional: { ru: "#", en: "#" } },
        code: "Digit3",
        util: false,
    },
    {
        display: { ru: "4", en: "4", additional: { ru: "$", en: "$" } },
        code: "Digit4",
        util: false,
    },
    {
        display: { ru: "5", en: "5", additional: { ru: "%", en: "%" } },
        code: "Digit5",
        util: false,
    },
    {
        display: { ru: "6", en: "6", additional: { ru: ":", en: ":" } },
        code: "Digit6",
        util: false,
    },
    {
        display: { ru: "7", en: "7", additional: { ru: "?", en: "?" } },
        code: "Digit7",
        util: false,
    },
    {
        display: { ru: "8", en: "8", additional: { ru: "*", en: "*" } },
        code: "Digit8",
        util: false,
    },
    {
        display: { ru: "9", en: "9", additional: { ru: "(", en: "(" } },
        code: "Digit9",
        util: false,
    },
    {
        display: { ru: "0", en: "0", additional: { ru: ")", en: ")" } },
        code: "Digit0",
        util: false,
    },
    {
        display: { ru: "_", en: "_", additional: { ru: "-", en: "-" } },
        code: "numpadSubtract",
        util: false,
    },
    {
        display: { ru: "=", en: "=", additional: { ru: "+", en: "+" } },
        code: "Equal",
        util: false,
    },
    {
        display: { ru: "Backspace", en: "Backspace", additional: { ru: "", en: "" } },
        code: "Backspace",
        function: backspaceFunction,
        util: true,
    },
    {
        display: { ru: "Tab", en: "Tab", additional: { ru: "", en: "" } },
        code: "Tab",
        function: tabFunction,
        util: true,
    },
    {
        display: { ru: "Й", en: "Q", additional: { ru: "", en: "" } },
        code: "KeyQ",
        util: false,
    },
    {
        display: { ru: "Ц", en: "W", additional: { ru: "", en: "" } },
        code: "KeyW",
        util: false,
    },
    {
        display: { ru: "У", en: "E", additional: { ru: "", en: "" } },
        code: "KeyE",
        util: false,
    },
    {
        display: { ru: "К", en: "R", additional: { ru: "", en: "" } },
        code: "KeyR",
        util: false,
    },
    {
        display: { ru: "Е", en: "T", additional: { ru: "", en: "" } },
        code: "KeyT",
        util: false,
    },
    {
        display: { ru: "Н", en: "Y", additional: { ru: "", en: "" } },
        code: "KeyY",
        util: false,
    },
    {
        display: { ru: "Г", en: "U", additional: { ru: "", en: "" } },
        code: "KeyU",
        util: false,
    },
    {
        display: { ru: "Ш", en: "I", additional: { ru: "", en: "" } },
        code: "KeyI",
        util: false,
    },
    {
        display: { ru: "Щ", en: "O", additional: { ru: "", en: "" } },
        code: "KeyO",
        util: false,
    },
    {
        display: { ru: "З", en: "P", additional: { ru: "", en: "" } },
        code: "KeyP",
        util: false,
    },
    {
        display: { ru: "Х", en: "[", additional: { ru: "[", en: "" } },
        code: "BracketLeft",
        util: false,
    },
    {
        display: { ru: "Ъ", en: "]", additional: { ru: "]", en: "" } },
        code: "BracketRight",
        util: false,
    },
    {
        display: { ru: "\\", en: "\\", additional: { ru: "/", en: "/" } },
        code: "Backslash",
        util: false,
    },
    {
        display: { ru: "DEL", en: "DEL", additional: { ru: "", en: "" } },
        code: "Delete",
        function: deleteFunction,
        util: true,
    },
    {
        display: { ru: "Caps Lock", en: "Caps Lock", additional: { ru: "", en: "" } },
        code: "CapsLock",
        function: capslockFunction,
        util: true,
    },
    {
        display: { ru: "Ф", en: "A", additional: { ru: "", en: "" } },
        code: "KeyA",
        util: false,
    },
    {
        display: { ru: "Ы", en: "S", additional: { ru: "", en: "" } },
        code: "KeyS",
        util: false,
    },
    {
        display: { ru: "В", en: "D", additional: { ru: "", en: "" } },
        code: "KeyD",
        util: false,
    },
    {
        display: { ru: "А", en: "F", additional: { ru: "", en: "" } },
        code: "KeyF",
        util: false,
    },
    {
        display: { ru: "П", en: "G", additional: { ru: "", en: "" } },
        code: "KeyG",
        util: false,
    },
    {
        display: { ru: "Р", en: "H", additional: { ru: "", en: "" } },
        code: "KeyH",
        util: false,
    },
    {
        display: { ru: "О", en: "J", additional: { ru: "", en: "" } },
        code: "KeyJ",
        util: false,
    },
    {
        display: { ru: "Л", en: "K", additional: { ru: "", en: "" } },
        code: "KeyK",
        util: false,
    },
    {
        display: { ru: "Д", en: "L", additional: { ru: "", en: "" } },
        code: "KeyL",
        util: false,
    },
    {
        display: { ru: "Ж", en: ";", additional: { ru: ";", en: "" } },
        code: "Semicolon",
        util: false,
    },
    {
        display: { ru: "Э", en: "'", additional: { ru: "'", en: "" } },
        code: "Quote",
        util: false,
    },
    {
        display: { ru: "Enter", en: "Enter", additional: { ru: "", en: "" } },
        code: "Enter",
        function: enterFunction,
        util: true,
    },
    {
        display: { ru: "Shift", en: "Shift", additional: { ru: "", en: "" } },
        code: "ShiftLeft",
        function: shiftFunction,
        util: true,
    },
    {
        display: { ru: "Я", en: "Z", additional: { ru: "", en: "" } },
        code: "KeyZ",
        util: false,
    },
    {
        display: { ru: "Ч", en: "X", additional: { ru: "", en: "" } },
        code: "KeyX",
        util: false,
    },
    {
        display: { ru: "С", en: "C", additional: { ru: "", en: "" } },
        code: "KeyC",
        util: false,
    },
    {
        display: { ru: "М", en: "V", additional: { ru: "", en: "" } },
        code: "KeyV",
        util: false,
    },
    {
        display: { ru: "И", en: "B", additional: { ru: "", en: "" } },
        code: "KeyB",
        util: false,
    },
    {
        display: { ru: "Т", en: "N", additional: { ru: "", en: "" } },
        code: "KeyN",
        util: false,
    },
    {
        display: { ru: "Ь", en: "M", additional: { ru: "", en: "" } },
        code: "KeyM",
        util: false,
    },
    {
        display: { ru: "Б", en: ",", additional: { ru: ",", en: "" } },
        code: "NumpadDecimal",
        util: false,
    },
    {
        display: { ru: "Ю", en: ".", additional: { ru: ".", en: "" } },
        code: "Period",
        util: false,
    },
    {
        display: { ru: "/", en: "/", additional: { ru: ".", en: "" } },
        code: "Slash",
        util: false,
    },
    {
        display: { ru: "U", en: "U", additional: { ru: "", en: "" } },
        code: "ArrowUp",
        function: cursorUp,
        icon: true,
        util: true,
    },
    {
        display: { ru: "Shift", en: "Shift", additional: { ru: "", en: "" } },
        code: "ShiftRight",
        function: shiftFunction,
        util: true,
    },
    {
        display: { ru: "Ctrl", en: "Ctrl", additional: { ru: "", en: "" } },
        code: "ControlLeft",
        util: true,
    },
    {
        display: { ru: "Win", en: "Win", additional: { ru: "", en: "" } },
        code: "MetaLeft",
        util: true,
    },
    {
        display: { ru: "Alt", en: "Alt", additional: { ru: "", en: "" } },
        code: "AltLeft",
        util: true,
    },
    {
        display: { ru: "", en: "", additional: { ru: "", en: "" } },
        code: "Space",
        function: spaceFunction,
        util: true,
    },
    {
        display: { ru: "Alt", en: "Alt", additional: { ru: "", en: "" } },
        code: "AltRight",
        util: true,
    },
    {
        display: { ru: "Ctrl", en: "Ctrl", additional: { ru: "", en: "" } },
        code: "ControlRight",
        util: true,
    },
    {
        display: { ru: "L", en: "L", additional: { ru: "", en: "" } },
        code: "ArrowLeft",
        function: cursorLeft,
        icon: true,
        util: true,
    },
    {
        display: { ru: "D", en: "D", additional: { ru: "", en: "" } },
        code: "ArrowDown",
        function: cursorDown,
        icon: true,
        util: true,
    },
    {
        display: { ru: "R", en: "R", additional: { ru: "", en: "" } },
        code: "ArrowRight",
        function: cursorRight,
        icon: true,
        util: true,
    },
];

export default keys;
