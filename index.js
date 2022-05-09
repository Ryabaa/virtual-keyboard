import { handleButtonPress, handleChangeLanguage, handleResetLanguage } from "./utils/handlers.js";
import { switchLanguage } from "./utils/keyboardLanguage.js";
import renderLayout from "./utils/renderLayout.js";
import { cursorFunction } from "./utils/utilKeysFunctions.js";

renderLayout();
switchLanguage();
cursorFunction(false);

document.addEventListener("keydown", handleChangeLanguage);
document.addEventListener("keyup", handleResetLanguage);

document.addEventListener("keydown", (event) => handleButtonPress(event, "add"));
document.addEventListener("keyup", (event) => handleButtonPress(event, "remove"));
