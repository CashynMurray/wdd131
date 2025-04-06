document.addEventListener("DOMContentLoaded", function () {

    const currentDate = new Date();

    const formattedDateTime = currentDate.toLocaleString(); 

    const copyright = document.getElementById('copyright');
    copyright.textContent = `© Cashyn Murray. All rights reserved.`; 

    const dateTimeElement = document.getElementById('currentDateTime');
    dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
});