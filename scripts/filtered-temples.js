document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temples = [
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah",
      dedicated: "April 6, 1893",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-31890.jpg"
    },
    {
      name: "Laie Hawaii Temple",
      location: "Laie, Hawaii",
      dedicated: "November 27, 1919",
      area: 42320,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-29905.jpg"
    },
    {
      name: "Tucson Arizona Temple",
      location: "Tucson, Arizona",
      dedicated: "August 13, 2017",
      area: 38600,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-35871.jpg"
    },
    {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "March 10, 2019",
      area: 41010,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-31950.jpg"
    },
    {
      name: "Paris France Temple",
      location: "Le Chesnay, France",
      dedicated: "May 21, 2017",
      area: 44000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-28584.jpg"
    },
    {
      name: "Hong Kong China Temple",
      location: "Hong Kong, China",
      dedicated: "May 26, 1996",
      area: 21600,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-31262.jpg"
    }
  ];
  
  function displayTemples(templesArray) {
    const container = document.getElementById("temples-container");
    container.innerHTML = "";
  
    templesArray.forEach(temple => {
      const card = document.createElement("section");
  
      card.innerHTML = `
        <h3>${temple.name}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      `;
  
      container.appendChild(card);
    });
  }
  
  function filterTemples(criteria) {
    let filtered = [];
  
    switch (criteria) {
      case "old":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        break;
      case "new":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        break;
      case "large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }
  
    displayTemples(filtered);
  }
  
  document.getElementById("menu-home").addEventListener("click", () => filterTemples("all"));
  document.getElementById("menu-old").addEventListener("click", () => filterTemples("old"));
  document.getElementById("menu-new").addEventListener("click", () => filterTemples("new"));
  document.getElementById("menu-large").addEventListener("click", () => filterTemples("large"));
  document.getElementById("menu-small").addEventListener("click", () => filterTemples("small"));
  
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  
  window.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
  });