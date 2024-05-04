const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;

year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;

/* Hamburger */

/*const menu = document.querySelector('.menu')
const navigationBtn = document.getElementById('navigation');

navigationBtn.addEventListener('click', () => {
	menu.classList.toggle('show');
	navigationBtn.classList.toggle('show');
}); */
navigationBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });