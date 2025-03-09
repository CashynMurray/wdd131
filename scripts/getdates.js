document.getElementById("currentyear").textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString("en-GB") + " " + lastModified.toLocaleTimeString("en-GB");

document.getElementById("modification-date").textContent = formattedDate;
