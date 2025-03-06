const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();

let lastModif = new Date(document.lastModified);

document.querySelector("#lastModified").innerHTML = `Page was last modified on: ${lastModif}`;
