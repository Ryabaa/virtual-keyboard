import { handleButtonPress, handleChangeLanguage, handleResetLanguage } from "./utils/handlers.js";
import { switchLanguage } from "./utils/keyboardLanguage.js";
import renderLayout from "./utils/renderLayout.js";

renderLayout();
switchLanguage();

document.addEventListener("keydown", handleChangeLanguage);
document.addEventListener("keyup", handleResetLanguage);

document.addEventListener("keydown", (event) => handleButtonPress(event, "add"));
document.addEventListener("keyup", (event) => handleButtonPress(event, "remove"));
