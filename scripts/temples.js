const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;

year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;

/* Hamburger */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})