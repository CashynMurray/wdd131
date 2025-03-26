document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temples = [
    {
      name: "Teton River Temple",
      location: "Rexburg, Idaho",
      dedicated: "Not yet dedicated",
      area: 100000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/teton-river-idaho-temple/teton-river-idaho-temple-45310.jpg"
    },
    {
      name: "Gilbert Temple",
      location: "Gilbert, Arizona",
      dedicated: "March 2, 2014",
      area: 85326,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
    },
    {
      name: "Tucson Temple",
      location: "Tucson, Arizona",
      dedicated: "August 13, 2017",
      area: 38700,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-8384-main.jpg"
    },
    {
      name: "Mount Timpanogos Temple",
      location: "American Fork, Utah",
      dedicated: "October 13, 1996",
      area: 107240,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg"
    },
    {
      name: "The Gila Valley Temple",
      location: "Thatcher, Arizona",
      dedicated: "May 23, 2010",
      area: 18700,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/the-gila-valley-arizona-temple/the-gila-valley-arizona-temple-12777-main.jpg"
    },
    {
      name: "Mesa Temple",
      location: "Mesa, Arizona",
      dedicated: "October 23, 1927",
      area: 113916,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
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