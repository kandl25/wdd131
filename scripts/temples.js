const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;

year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;

/* Hamburger */

const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});