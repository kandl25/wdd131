/* footer */
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")
const today = new Date();
const lastMod = document.lastModified;
year.innerHTML = `${today.getFullYear()}`;
lastmodified.innerHTML = `Last Modification: ${lastMod}`;

// product array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
const productNames = products.map((product) => product.name);
const selectMenu = document.querySelector("#product-name");
const reviewsDisplay = document.querySelector(".review-number")
let numReviews = GetReviews()

if (document.title === "Review Page") {
  addEventListener('DOMContentLoaded', function() {
    numReviews++
    DisplayReviews(numReviews);
    SetReviews();
})
}

function GetReviews() {
  return JSON.parse(this.localStorage.getItem("numReviews"))
}

function DisplayReviews(reviews) {
  reviewsDisplay.innerHTML = reviews;
}

function SetReviews() {
  this.localStorage.setItem("numReviews", JSON.stringify(numReviews))
}

function mapNames(array) {
    array.forEach((name) => {
        const nameOption = selectMenu.innerHTML += `<option value="${name}">${name}</option>`
    })
}
mapNames(productNames);
