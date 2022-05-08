export let body = document.querySelector("body");
export let getCurrentLanguageIndicator = () => document.querySelector(".currentLanguageIndicator");
export let getTextarea = () => document.querySelector(".textarea");
export let getContainer = () => document.querySelector(".container");
export let getButton = (code) => document.querySelector(`[data-code='${code}']`);
