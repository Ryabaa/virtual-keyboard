import keys from "./keysList.js";
import renderKeys from "./renderKeys.js";

export let languageEN = true;

const updateLanguageIcon = (languageEN) => {
    let languageIcon = document.querySelector(".languageIcon");
    languageIcon.textContent = languageEN ? "ENG" : "RU";
};

export const switchLanguage = () => {
    languageEN = !languageEN;
    updateLanguageIcon(languageEN);
    renderKeys(keys, languageEN);
};
