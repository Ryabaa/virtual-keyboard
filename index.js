import { handleButtonPress } from "./utils/handlers.js";
import { switchLanguage } from "./utils/keyboardLanguage.js";
import { cursorFunction } from "./utils/utilKeysFunctions.js";
import renderLayout from "./utils/renderLayout.js";

renderLayout();
switchLanguage();
cursorFunction(false);

document.addEventListener("keydown", (event) => handleButtonPress(event, "add"));
document.addEventListener("keyup", (event) => handleButtonPress(event, "remove"));
