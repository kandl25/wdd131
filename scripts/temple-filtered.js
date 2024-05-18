/* Footer */
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

/* Temple Info */
const temples = [
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May 25",
        area: 35868,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/1280x800/boise-idaho-temple-exterior-2012-1029111-wallpaper.jpg"
    },
    {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho, United States",
        dedicated: "2017, November 19",
        area: 67331,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/meridian-idaho/1200x675/meridian-idaho-1962625.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah, United States",
        dedicated: "2012, September 23",
        area: 36000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/1280x800/brigham-city-temple-lds-1027480-wallpaper.jpg"
    },
    {
        templeName: "Houston Texas",
        location: "Houston, Texas, United States",
        dedicated: "2000, August 26",
        area: 33970,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/1280x800/houston-temple02.jpg"
    },
    {
        templeName: "Las Vegas Nevada",
        location: "Las Vegas, Nevada, United States",
        dedicated: "1989, December 6",
        area: 80350,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/1280x800/las-vegas-temple-lds-758757-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June 27",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/1280x800/nauvoo-illinois-mormon-temple-925501-wallpaper.jpg"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November 17",
        area: 95000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/1280x800/06-Oakland-Temple-Exterior-2236259.jpg"
    },
    {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, Puerto Rico",
        dedicated: "2023, January 15",
        area: 6988,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/1280x800/san_juan_puerto_rico_temple_exterior.jpeg"
    },
    {
        templeName: "Portland Oregon",
        location: "Portland, Oregon, United States",
        dedicated: "1989, August 19",
        area: 80500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/1280x800/portland-temple-lds-1079112-wallpaper.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "Orland, Florida, United States",
        dedicated: "1994, October 9",
        area: 69000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/1280x800/orlando-temple-lds-776400-wallpaper.jpg"
    }
]

/* loop */
function createAndAppendTemple(temple) {
    //temple div
    const templeDiv = document.createElement('div');
    templeDiv.className = "temple";

    //temple heading
    const heading = document.createElement('h2');
    heading.textContent = temple.templeName;

    //location div
    const div1 = document.createElement('div');
    div1.className = "temple-details";
    const pLabel1 = document.createElement('p');
    pLabel1.textContent = "Location:"
    pLabel1.className = "label";
    const pValue1 = document.createElement('p');
    pValue1.textContent = temple.location;
    div1.appendChild(pLabel1);
    div1.appendChild(pValue1);

    //dedicated div
    const div2 = document.createElement('div');
    div2.className = "temple-details";
    const pLabel2 = document.createElement('p');
    pLabel2.textContent = "Dedicated:";
    pLabel2.className = "label";
    const pValue2 = document.createElement('p');
    pValue2.textContent = temple.dedicated;
    div2.appendChild(pLabel2);
    div2.appendChild(pValue2);

    //size div
    const div3 = document.createElement('div');
    div3.className = "temple-details";
    const pLabel3 = document.createElement('p');
    pLabel3.textContent = "Size:";
    pLabel3.className = "label";
    const pValue3 = document.createElement('p');
    pValue3.textContent = `${temple.area} sq ft`;
    div3.appendChild(pLabel3);
    div3.appendChild(pValue3);

    //img
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.width = "400";
    img.height = "250";
    img.loading = "lazy";

    templeDiv.appendChild(heading);
    templeDiv.appendChild(div1);
    templeDiv.appendChild(div2);
    templeDiv.appendChild(div3);
    templeDiv.appendChild(img);

    document.querySelector('.temple-display').appendChild(templeDiv);
}

function displayTemples(displaySelection) {

    console.log(`displaying temples: ${displaySelection}`)

    document.querySelector('.temple-display').innerHTML = "";

    for (let i = 0; i < temples.length; i++) {
        switch (displaySelection) {
            case 'old':
                if (parseInt(temples[i].dedicated.substring(0, 4)) < 1900) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'new':
                if (parseInt(temples[i].dedicated.substring(0, 4)) > 2000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'large':
                if (temples[i].area > 90000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            case 'small':
                if (temples[i].area < 10000) {
                    createAndAppendTemple(temples[i]);
                }
                break;
            default:
                createAndAppendTemple(temples[i]);
                break;
        }
    }
}
displayTemples("home");