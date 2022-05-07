import keys from "./utils/keysList.js";
import renderKeys from "./utils/renderKeys.js";
import renderLayout from "./utils/renderLayout.js";

let languageEN = true;

let switchLanguage = () => {
    languageEN = !languageEN;
};

renderLayout();
renderKeys(keys, languageEN);

function updateLanguageIcon(languageEN) {
    let languageIcon = document.querySelector(".languageIcon");
    languageIcon.textContent = languageEN ? "ENG" : "RU";
}
updateLanguageIcon(languageEN);

document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "Space":
            switchLanguage();
            renderKeys(keys, languageEN);
            updateLanguageIcon(languageEN);
            break;
        default:
            break;
    }
});

document.addEventListener("keydown", (event) => {
    let button = document.querySelector(`[data-code='${event.code}']`);
    button ? button.classList.add("button--active") : null;
});

document.addEventListener("keyup", (event) => {
    let button = document.querySelector(`[data-code='${event.code}']`);
    button ? button.classList.remove("button--active") : null;
});
