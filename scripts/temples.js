document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            menuToggle.innerHTML = "&#9776;"; 
        } else {
            menu.style.display = "block";
            menuToggle.innerHTML = "&#10006;"; 
        }
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
