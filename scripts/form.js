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

  function loadProducts(products) {
    
    let select = document.querySelector('#product-name');
    select.innerHTML = "";

    let opt = document.createElement("option");
    opt.text = "Choose a Product...";
    opt.value = "";
    opt.disabled = true;
    opt.selected = true;

    select.appendChild(opt);

    for (let i = 0; i < products.length; i++) {
        opt = document.createElement("option");
        opt.text = products[i].name;
        opt.value = products[i].id;
        select.appendChild(opt);
    }
}

loadProducts(products);
